import { Locale } from "@/lib/i18n/config";

export const siteConfig = {
  name: "Hamzah LLC",
  tagline: "Hire Remote Tech Talent",
  description: "Hamzah LLC connects companies with top tech talent from around the world, making remote hiring simple and effective.",
  url: "https://www.hamzahllc.com",
  contact: {
    email: "info@hamzahllc.com",
    phone: "+1 307 5004 733",
    location: "Wyoming, USA",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/hamzah-software-house-solutions",
    behance: "https://www.behance.net/hamzasolutions",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
];

export const hero = {
  badge: "Trusted by 100+ Companies",
  headline: "Build Your Dream Team with",
  headlineAccent: "Elite Remote Talent",
  subheadline: "Access 1,000+ pre-vetted engineers from 80+ countries. Scale faster with talent that matches your time zone, tech stack, and culture.",
  stats: [
    { value: "1,000+", label: "Tech Specialists" },
    { value: "80+", label: "Countries" },
    { value: "24h", label: "First Match" },
    { value: "98%", label: "Success Rate" },
  ],
  primaryCta: {
    label: "Start Hiring",
    href: "#contact",
  },
  secondaryCta: {
    label: "How It Works",
    href: "#how-it-works",
  },
};

export const trustedClients = [
  {
    name: "Hive Studios",
    logoSrc: "/clients/hive-studios.png",
    logoWidth: 107,
    logoHeight: 40,
  },
  {
    name: "Eva Pharma",
    logoSrc: "/clients/eva-pharma.svg",
    logoWidth: 97,
    logoHeight: 54,
  },
  {
    name: "Basathalak",
    logoSrc: "/clients/basathalak.png",
    logoWidth: 128,
    logoHeight: 128,
  },
  {
    name: "TaaleemX",
    logoSrc: "/clients/taaleemx.svg",
    logoWidth: 88,
    logoHeight: 123,
  },
  {
    name: "Burgan Bank",
    logoSrc: "/clients/burgan-bank.webp",
    logoWidth: 460,
    logoHeight: 460,
  },
  {
    name: "Cardix",
    logoSrc: "/clients/cardix.png",
    logoWidth: 1280,
    logoHeight: 575,
  },
  {
    name: "Naqood Holding",
    logoSrc: "/clients/naqood-holding.png",
    logoWidth: 146,
    logoHeight: 43,
  },
  {
    name: "KashNow",
    logoSrc: "/clients/kashnow.svg",
    logoWidth: 75,
    logoHeight: 60,
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Share Your Requirements",
    description: "Tell us about your project, tech stack, team culture, and timeline. We listen carefully to understand exactly what you need.",
    icon: "clipboard",
  },
  {
    step: "02",
    title: "Get Matched in 24 Hours",
    description: "Our AI-powered matching system identifies candidates with the right skills, experience, and time zone alignment.",
    icon: "search",
  },
  {
    step: "03",
    title: "Interview Top Candidates",
    description: "Review detailed profiles and meet your shortlisted candidates. Take your time to find the perfect fit.",
    icon: "users",
  },
  {
    step: "04",
    title: "Scale Your Team",
    description: "Start working with your new team members immediately. We handle contracts, payments, and ongoing support.",
    icon: "rocket",
  },
];

export const whyHamzah = [
  {
    title: "Rigorous Vetting Process",
    description: "Every candidate completes technical assessments, code reviews, and soft-skills evaluation. Only top 3% make it through.",
    icon: "shield",
    stat: "3%",
    statLabel: "Acceptance Rate",
  },
  {
    title: "Time Zone Aligned",
    description: "Work with talent during your business hours. Real-time collaboration, not async frustration.",
    icon: "clock",
    stat: "4+",
    statLabel: "Hours Overlap",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, predictable costs with no hidden fees. Know exactly what you're paying from day one.",
    icon: "dollar",
    stat: "0%",
    statLabel: "Hidden Fees",
  },
  {
    title: "Flexible Engagement",
    description: "Scale up or down as needed. Month-to-month contracts with no long-term lock-ins required.",
    icon: "layers",
    stat: "30",
    statLabel: "Day Notice",
  },
  {
    title: "Dedicated Success Manager",
    description: "A dedicated account manager ensures smooth onboarding and handles any issues that arise.",
    icon: "star",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    title: "Global Talent Pool",
    description: "Access pre-vetted engineers from 80+ countries with diverse expertise and perspectives.",
    icon: "globe",
    stat: "80+",
    statLabel: "Countries",
  },
];

export const services = [
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    description: "Scale your team with pre-vetted remote engineers who integrate seamlessly with your existing workflow.",
    icon: "users",
    featured: true,
    tags: ["React", "Node.js", "Python", "AWS"],
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Full-cycle development from ideation to deployment. Mobile, web, and enterprise solutions.",
    icon: "code",
    featured: true,
    tags: ["Mobile", "Web", "APIs", "Cloud"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that delights customers and drives engagement. From research to pixel-perfect UI.",
    icon: "palette",
    featured: true,
    tags: ["Figma", "Research", "Prototyping", "Systems"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Scalable, secure cloud infrastructure. CI/CD pipelines, monitoring, and cost optimization.",
    icon: "cloud",
    featured: true,
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Leverage AI to streamline operations and unlock new possibilities for your business.",
    icon: "cpu",
    featured: false,
    tags: ["ML", "LLMs", "RPA", "Chatbots"],
  },
  {
    id: "branding",
    title: "Branding & Design",
    description: "Create a powerful brand identity that resonates with your audience and stands out.",
    icon: "star",
    featured: false,
    tags: ["Identity", "Strategy", "Guidelines"],
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure your software meets the highest standards.",
    icon: "check",
    featured: false,
    tags: ["Automation", "Manual", "Performance"],
  },
  {
    id: "consultancy",
    title: "Tech Consultancy",
    description: "Expert guidance and strategic advice to navigate complex technology decisions.",
    icon: "message",
    featured: false,
    tags: ["Architecture", "Strategy", "Migration"],
  },
];

export const products = [
  {
    id: "loyalty-cards",
    title: "Loyalty Cards",
    category: "Loyalty",
    description: "Advanced loyalty management platform with Apple Wallet integration. Build lasting customer relationships.",
    features: ["Loyalty Program Management", "Customer Tracking & Profiles", "Points & Rewards System", "Apple Wallet Integration"],
    color: "magenta",
  },
  {
    id: "hrms",
    title: "HRMS",
    category: "HR",
    description: "Comprehensive HR management system that streamlines operations and empowers your workforce.",
    features: ["Employee Management", "Recruitment & Onboarding", "Attendance & Time Tracking", "Payroll Integration"],
    color: "plum",
  },
  {
    id: "crm",
    title: "Hamzah CRM",
    category: "CRM",
    description: "Enterprise-grade CRM for businesses of all sizes. Streamline operations and boost sales productivity.",
    features: ["Lead & Opportunity Management", "Contact & Customer Management", "Activity Tracking", "Sales Automation"],
    color: "mauve",
  },
  {
    id: "lms",
    title: "LMS Platform",
    category: "Education",
    description: "Complete learning management solution for creating, delivering, and tracking educational programs.",
    features: ["Online Courses", "Recorded Content", "Quizzes & Assessments", "Progress Tracking"],
    color: "plum",
  },
];

export const testimonials = [
  {
    quote: "Hamzah LLC transformed our development process. We found skilled developers who integrated seamlessly with our team, despite being remote. The quality of talent is exceptional.",
    author: "Mohammed Al-Ahmad",
    role: "CTO",
    company: "KASHNOW",
    avatar: "MA",
  },
  {
    quote: "The talent we found exceeded our expectations. Their efficient matching process saved us months of recruitment effort. We've since hired 5 more engineers through them.",
    author: "Sarah Mohamed",
    role: "CEO",
    company: "Haven",
    avatar: "SM",
  },
];

export const careersBenefits = [
  {
    title: "Career Growth",
    description: "Clear growth paths with skill development, mentorship, and advancement opportunities.",
    icon: "trending",
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours that respect your personal life.",
    icon: "home",
  },
  {
    title: "Global Projects",
    description: "Work on exciting projects with innovative companies across industries.",
    icon: "globe",
  },
  {
    title: "Competitive Compensation",
    description: "Top-tier pay that reflects your skills and experience level.",
    icon: "dollar",
  },
];

export const serviceTypes = [
  "Product Demo",
  "Staff Augmentation",
  "Software Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "AI & Automation",
  "Other",
];

const arHowItWorks = [
  {
    title: "شارك احتياجاتك",
    description: "أخبرنا عن مشروعك والتقنيات المطلوبة وثقافة الفريق والجدول الزمني لنفهم احتياجك بدقة.",
  },
  {
    title: "احصل على ترشيحات خلال 24 ساعة",
    description: "نرشّح لك أفضل المطابقات وفق المهارات والخبرة وتوافق المنطقة الزمنية.",
  },
  {
    title: "قابل أفضل المرشحين",
    description: "راجع الملفات الشخصية التفصيلية وقابل المرشحين الأنسب لاختيار أفضل إضافة لفريقك.",
  },
  {
    title: "وسّع فريقك بثقة",
    description: "ابدأ العمل فوراً مع دعم مستمر في العقود والمدفوعات والمتابعة.",
  },
];

const arWhyHamzah = [
  {
    title: "آلية تقييم دقيقة",
    description: "كل مرشح يمر باختبارات تقنية ومراجعات عملية وتقييم للمهارات الشخصية.",
    statLabel: "معدل القبول",
  },
  {
    title: "توافق المنطقة الزمنية",
    description: "اعمل مع مواهب متاحة ضمن ساعات عملك لتعاون أسرع وأكثر فعالية.",
    statLabel: "ساعات تداخل",
  },
  {
    title: "تسعير واضح",
    description: "تكلفة شفافة بدون رسوم مخفية، مع وضوح كامل منذ اليوم الأول.",
    statLabel: "رسوم مخفية",
  },
  {
    title: "مرونة التعاقد",
    description: "وسع أو قلص فريقك حسب الحاجة بعقود مرنة وبدون التزامات طويلة.",
    statLabel: "يوم إشعار",
  },
  {
    title: "مدير نجاح مخصص",
    description: "مدير حساب مخصص يدعمك خلال الإعداد ويعالج أي تحديات تشغيلية.",
    statLabel: "دعم",
  },
  {
    title: "شبكة مواهب عالمية",
    description: "وصول لمهندسين موثوقين من أكثر من 80 دولة بخبرات متنوعة.",
    statLabel: "دولة",
  },
];

const arServicesById: Record<string, { title: string; description: string }> = {
  "staff-augmentation": {
    title: "تعزيز الفريق",
    description: "وسّع فريقك بمطورين عن بُعد تم التحقق منهم ويتكاملون بسرعة مع طريقة عملك.",
  },
  "software-development": {
    title: "تطوير البرمجيات",
    description: "تطوير متكامل من الفكرة حتى الإطلاق للتطبيقات والمواقع والحلول المؤسسية.",
  },
  "ui-ux-design": {
    title: "تصميم UI/UX",
    description: "تصميم يركز على المستخدم من البحث حتى واجهات دقيقة تعزز تجربة العملاء.",
  },
  "cloud-devops": {
    title: "السحابة وDevOps",
    description: "بنية سحابية آمنة وقابلة للتوسع مع أتمتة النشر والمراقبة وتحسين التكلفة.",
  },
  "ai-automation": {
    title: "الذكاء الاصطناعي والأتمتة",
    description: "حلول ذكية لتبسيط العمليات ورفع الإنتاجية وفتح فرص نمو جديدة.",
  },
  "branding": {
    title: "الهوية والعلامة التجارية",
    description: "بناء هوية قوية تميز علامتك التجارية وترسّخ حضورها في السوق.",
  },
  "qa": {
    title: "ضمان الجودة",
    description: "اختبارات شاملة لضمان جودة المنتج واستقراره قبل الوصول للمستخدم النهائي.",
  },
  "consultancy": {
    title: "الاستشارات التقنية",
    description: "استشارات عملية لاتخاذ قرارات تقنية صحيحة في البنية والتوسع والتحول.",
  },
};

const arProductsById: Record<string, { title: string; category: string; description: string; features: string[] }> = {
  "loyalty-cards": {
    title: "بطاقات الولاء",
    category: "الولاء",
    description: "منصة متقدمة لإدارة الولاء مع تكامل Apple Wallet لبناء علاقات مستدامة مع العملاء.",
    features: ["إدارة برامج الولاء", "تتبع العملاء والملفات الشخصية", "نقاط ومكافآت", "تكامل Apple Wallet"],
  },
  hrms: {
    title: "نظام الموارد البشرية",
    category: "الموارد البشرية",
    description: "نظام شامل لإدارة الموارد البشرية يبسّط العمليات ويرفع كفاءة فرق العمل.",
    features: ["إدارة الموظفين", "التوظيف وتهيئة الموظفين", "الحضور وتتبع الوقت", "تكامل الرواتب"],
  },
  crm: {
    title: "Hamzah CRM",
    category: "إدارة العملاء",
    description: "نظام CRM مؤسسي للشركات بمختلف أحجامها لتنظيم المبيعات وتحسين الإنتاجية.",
    features: ["إدارة العملاء المحتملين والفرص", "إدارة جهات الاتصال والعملاء", "تتبع الأنشطة", "أتمتة المبيعات"],
  },
  lms: {
    title: "منصة إدارة التعلم",
    category: "التعليم",
    description: "حل متكامل لإنشاء المحتوى التعليمي وتقديمه وقياس التقدم والمتابعة.",
    features: ["دورات عبر الإنترنت", "محتوى مسجل", "اختبارات وتقييمات", "تتبع التقدم"],
  },
};

const arTestimonials = [
  {
    quote: "غيّرت Hamzah LLC طريقة عمل فريق التطوير لدينا. وجدنا مطورين مميزين اندمجوا بسرعة رغم العمل عن بُعد.",
  },
  {
    quote: "المواهب التي حصلنا عليها فاقت التوقعات. آلية المطابقة وفرت علينا شهوراً من جهود التوظيف.",
  },
];

const arCareersBenefits = [
  {
    title: "نمو مهني",
    description: "مسارات نمو واضحة مع تطوير مهارات وإرشاد وفرص تقدم حقيقية.",
  },
  {
    title: "ثقافة عمل عن بُعد",
    description: "مرونة في العمل من أي مكان مع توازن أفضل بين الحياة والعمل.",
  },
  {
    title: "مشاريع عالمية",
    description: "فرصة للعمل على مشاريع مؤثرة مع شركات مبتكرة في قطاعات متنوعة.",
  },
  {
    title: "تعويضات تنافسية",
    description: "مكافآت عادلة تعكس خبرتك وقيمة تأثيرك في الفريق.",
  },
];

export function getLocalizedHowItWorks(lang: Locale) {
  if (lang !== "ar") return howItWorks;
  return howItWorks.map((item, index) => ({ ...item, ...arHowItWorks[index] }));
}

export function getLocalizedWhyHamzah(lang: Locale) {
  if (lang !== "ar") return whyHamzah;
  return whyHamzah.map((item, index) => ({ ...item, ...arWhyHamzah[index] }));
}

export function getLocalizedServices(lang: Locale) {
  if (lang !== "ar") return services;
  return services.map((item) => ({ ...item, ...arServicesById[item.id] }));
}

export function getLocalizedProducts(lang: Locale) {
  if (lang !== "ar") return products;
  return products.map((item) => ({ ...item, ...arProductsById[item.id] }));
}

export function getLocalizedTestimonials(lang: Locale) {
  if (lang !== "ar") return testimonials;
  return testimonials.map((item, index) => ({ ...item, ...arTestimonials[index] }));
}

export function getLocalizedCareersBenefits(lang: Locale) {
  if (lang !== "ar") return careersBenefits;
  return careersBenefits.map((item, index) => ({ ...item, ...arCareersBenefits[index] }));
}
