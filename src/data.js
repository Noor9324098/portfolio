// All content on the site comes from the CV (Nooraddeen_Al-Haddad_CV.pdf)
// and from the READMEs of the linked repositories. Edit here, not in App.js.

const img = (name) => `${process.env.PUBLIC_URL}/images/project/${name}`;
const gh = (repo) => `https://github.com/Noor9324098/${repo}`;

export const profile = {
  name: "Nooraddeen Al-Haddad",
  study: "Computer Science Engineering BSc (final year), University of Pécs",
  location: "Pécs, Hungary",
  badge: "Stipendium Hungaricum scholar",
  photo: `${process.env.PUBLIC_URL}/images/personalphoto/personal.jpeg`,
  statement:
    "Final-year Computer Science Engineering student at the University of Pécs and Stipendium Hungaricum scholar. I build full-stack web applications and distributed back-end systems. I want to specialise in data-intensive, distributed and secure software systems.",
  cv: `${process.env.PUBLIC_URL}/Nooraddeen_Al-Haddad_CV.pdf`,
  email: "nooraddeenalhaddad2020@gmail.com",
  github: "https://github.com/Noor9324098",
  linkedin: "https://www.linkedin.com/in/nooraddeeen/",
};

export const experience = [
  {
    title: "Web Development Intern",
    org: "Lime Light Renhold AS",
    place: "Oslo, Norway",
    period: "September 2026 – November 2026",
    summary:
      "Mandatory 8-week (320-hour) professional internship, mentored by the company’s TechLead: four front-end tasks, each with its own brief, review and public GitHub repository.",
  },
];

export const education = [
  {
    title: "BSc Computer Science Engineering",
    org: "University of Pécs",
    place: "Pécs, Hungary",
    period: "September 2023 – February 2027 (expected)",
    points: [
      "Stipendium Hungaricum Scholarship, awarded by the Government of Hungary.",
      "Thesis: “PXL Travel – Intelligent Flight Booking Agency”.",
    ],
  },
];

// `flow` is the small "how it works" strip drawn on each project card.
export const projects = [
  {
    id: "pxl",
    title: "PXL Travel",
    subtitle: "Intelligent Flight Booking Agency",
    kind: "BSc Thesis",
    period: "December 2025 – present",
    category: "Full stack",
    summary:
      "A flight-booking platform that separates online booking from payment, so customers without a bank card can book online and pay through a local channel. Agency staff confirm or reject each request.",
    flow: ["Search live flights", "Book online", "Staff confirm or reject", "Pay locally"],
    highlights: [
      "Node.js / Express REST API with 17 endpoints",
      "JWT and bcrypt authentication with role-based access",
      "AI travel assistant (Llama 3.3 70B via Groq)",
      "Live flight data from Aviationstack",
    ],
    stack: ["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB"],
    images: [img("pxl-travel-1.png"), img("pxl-travel-2.png")],
    links: [{ label: "Source", url: gh("PXL_Travel") }],
  },
  {
    id: "orders",
    title: "Event-Driven Order Platform",
    subtitle: "Microservices with a saga",
    kind: "Personal Project",
    category: "Back end",
    summary:
      "Four microservices that communicate only through RabbitMQ. A saga releases reserved stock when a payment fails, with idempotent consumers and dead-letter queues.",
    flow: ["Order", "Inventory", "Payment", "Notification"],
    flowNote: "via RabbitMQ · stock released if payment fails",
    stack: ["Node.js", "Express", "RabbitMQ"],
    links: [{ label: "Source", url: gh("event-driven-order-platform") }],
  },
  {
    id: "pets",
    title: "Pet Portal",
    subtitle: "Interactive web application",
    kind: "Project",
    category: "Front end",
    summary:
      "A small digital simulation where users adopt animals and look after them by feeding, playing and treating them, with a shop, user accounts and saved activity logs.",
    flow: ["Adopt", "Feed · Play · Treat", "Shop", "Saved logs"],
    stack: ["Svelte", "TypeScript", "HTML", "CSS"],
    images: [img("pet-portal-1.png"), img("pet-portal-2.png"), img("pet-portal-3.png")],
    links: [
      { label: "Live demo", url: "https://noor9324098.github.io/Pet-portal/" },
      { label: "Source", url: gh("Pet-portal") },
    ],
  },
];

// Internship deliverables at Lime Light Renhold AS.
export const internshipWork = [
  {
    title: "Kanban Lite",
    summary:
      "Framework-free task board with localStorage persistence, live search and filters, drag and drop, dark mode and XSS-safe rendering.",
    stack: ["JavaScript", "HTML", "CSS"],
    links: [{ label: "Source", url: gh("Task4") }],
  },
  {
    title: "Parallax Scrolling Page",
    summary:
      "Multi-layer parallax page with an IntersectionObserver scroll reveal, published on GitHub Pages.",
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      { label: "Live", url: "https://noor9324098.github.io/Task2/" },
      { label: "Source", url: gh("Task2") },
    ],
  },
  {
    title: "Responsive Website",
    summary: "Responsive five-section website built with Bootstrap 5.",
    stack: ["Bootstrap 5", "HTML", "CSS"],
    links: [{ label: "Source", url: gh("Task3") }],
  },
  {
    title: "CSS 3D Flip Cards",
    summary: "Clickable 3D flip cards for a fictional product line, using only CSS and no JavaScript.",
    stack: ["CSS", "HTML"],
    links: [{ label: "Source", url: gh("LimeLight-task-1") }],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "C", "SQL", "HTML", "CSS"] },
  { group: "Front end", items: ["React", "Svelte", "Vite", "Tailwind CSS", "Bootstrap 5"] },
  {
    group: "Back end",
    items: ["Node.js", "Express", "Spring Boot", "REST APIs", "RabbitMQ", "JWT authentication"],
  },
  { group: "Data", items: ["MongoDB", "MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "GitHub Pages", "GitHub Actions", "Linux"] },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced (full degree taught in English)" },
  { name: "Hungarian", level: "Intermediate" },
];
