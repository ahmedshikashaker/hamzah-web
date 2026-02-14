import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  fullName: string;
  email: string;
  company: string;
  serviceType: string;
  message: string;
  lang?: string;
  productName?: string | null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT ?? "587";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTACT_FORM_TO ?? user;

  const port = Number.parseInt(portRaw, 10);
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

  if (!host || !user || !pass || !from || !to || Number.isNaN(port)) {
    return null;
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    from,
    to,
  };
}

export async function POST(req: Request) {
  try {
    const raw = (await req.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      fullName: sanitizeText(raw.fullName, 120),
      email: sanitizeText(raw.email, 180),
      company: sanitizeText(raw.company, 180),
      serviceType: sanitizeText(raw.serviceType, 120),
      message: sanitizeText(raw.message, 4000),
      lang: sanitizeText(raw.lang, 10),
      productName: sanitizeText(raw.productName ?? "", 200) || null,
    };

    if (
      !payload.fullName ||
      !payload.email ||
      !payload.company ||
      !payload.serviceType ||
      !payload.message
    ) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(payload.email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const smtp = getSmtpConfig();
    if (!smtp) {
      console.error("Contact form SMTP is not configured.");
      return NextResponse.json({ error: "Contact service not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    const submittedAt = new Date().toISOString();
    const subject = payload.productName
      ? `[Hamzah LLC] Product Demo Request - ${payload.productName}`
      : "[Hamzah LLC] New Contact Message";

    const text = [
      "New contact submission",
      "",
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company}`,
      `Service Type: ${payload.serviceType}`,
      payload.productName ? `Product: ${payload.productName}` : "",
      payload.lang ? `Language: ${payload.lang}` : "",
      `Submitted At: ${submittedAt}`,
      "",
      "Message:",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New contact submission</h2>
        <table style="border-collapse: collapse;">
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(payload.fullName)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Company</strong></td><td>${escapeHtml(payload.company)}</td></tr>
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Service Type</strong></td><td>${escapeHtml(payload.serviceType)}</td></tr>
          ${
            payload.productName
              ? `<tr><td style="padding: 4px 12px 4px 0;"><strong>Product</strong></td><td>${escapeHtml(payload.productName)}</td></tr>`
              : ""
          }
          ${
            payload.lang
              ? `<tr><td style="padding: 4px 12px 4px 0;"><strong>Language</strong></td><td>${escapeHtml(payload.lang)}</td></tr>`
              : ""
          }
          <tr><td style="padding: 4px 12px 4px 0;"><strong>Submitted At</strong></td><td>${escapeHtml(submittedAt)}</td></tr>
        </table>
        <p style="margin: 16px 0 6px;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      subject,
      replyTo: payload.email,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

