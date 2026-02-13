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
  { name: "Hive Studios", logo: "hive" },
  { name: "Eva Pharma", logo: "eva" },
  { name: "Basathalak", logo: "basathalak" },
  { name: "TaaleemX", logo: "taaleemx" },
  { name: "Burgan Bank", logo: "burgan" },
  { name: "Cardix", logo: "cardix" },
  { name: "Naqood Holding", logo: "naqood" },
  { name: "KashNow", logo: "kashnow" },
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
