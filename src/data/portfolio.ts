import type {
  AboutContent,
  ExperienceContent,
  HeroContent,
  NavItem,
  ContactContent,
  ProjectsContent,
  ServicesContent,
  SkillsContent,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const heroContent: HeroContent = {
  availability: "Open to new opportunities",
  titleLineOne: "Building Modern",
  titleLineTwo: "Web Experiences",
  description:
    "Frontend Developer specializing in Angular, React, Next.js, TypeScript, and modern web technologies.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Hire Me", href: "#contact" },
  stack: [
    { label: "Angular" },
    { label: "React" },
    { label: "Next.js" },
    { label: "TypeScript" },
    { label: "Tailwind CSS" },
    { label: "Node.js" },
  ],
};

export const aboutContent: AboutContent = {
  sectionLabel: "About Me",
  title: "Crafting digital products that people love",
  paragraphs: [
    "I transform designs and ideas into fast, scalable, and user-friendly web applications that drive business results. With 4+ years of experience, I've delivered SaaS platforms, admin dashboards, finance tools, and custom web solutions for clients across multiple industries.",
    "My work spans fintech dashboards, ecommerce platforms, and B2B SaaS products. I care deeply about code quality, accessibility, and the craft of building software that people genuinely enjoy using.",
  ],
  profile: {
    name: "Hitesh Jogiya",
    role: "Senior Frontend Developer",
    image: {
      src: "/assets/my_profile_photo-removebg-preview.png",
      alt: "Hitesh Jogiya - Frontend Developer",
      width: 600,
      height: 680,
    },
  },
  stats: [
    {
      value: "4+",
      label: "Years Experience",
      detail: "Production applications",
    },
    {
      value: "5+",
      label: "Projects Delivered",
      detail: "Startups to enterprise",
    },
    {
      value: "SaaS",
      label: "Enterprise Apps",
      detail: "5K+ daily active users",
    },
    {
      value: "Ecommerce",
      label: "Web Platforms",
      detail: "Full-stack Next.js and supabase applications",
    },
  ],
};

export const skillsContent: SkillsContent = {
  sectionLabel: "Technical Expertise",
  title: "Skills & Technologies",
  subtitle:
    "A comprehensive toolkit for building modern, performant web applications at scale",
  categories: [
    {
      title: "Frontend",
      icon: "code",
      accent: "blue",
      items: [
        { name: "HTML5 / CSS3", percent: "95%", widthClass: "w-[95%]" },
        { name: "JavaScript (ES2022+)", percent: "92%", widthClass: "w-[92%]" },
        { name: "TypeScript", percent: "90%", widthClass: "w-[90%]" },
        { name: "Web APIs", percent: "85%", widthClass: "w-[85%]" },
      ],
    },
    {
      title: "Frameworks",
      icon: "layers",
      accent: "violet",
      items: [
        { name: "Angular 17+", percent: "93%", widthClass: "w-[93%]" },
        { name: "React 18", percent: "90%", widthClass: "w-[90%]" },
        { name: "Next.js 14", percent: "86%", widthClass: "w-[86%]" },
        { name: "Vue 3", percent: "70%", widthClass: "w-[70%]" },
      ],
    },
    {
      title: "State Management",
      icon: "workflow",
      accent: "cyan",
      items: [
        { name: "NgRx / Signals", percent: "90%", widthClass: "w-[90%]" },
        { name: "Redux Toolkit", percent: "87%", widthClass: "w-[87%]" },
        { name: "Zustand", percent: "84%", widthClass: "w-[84%]" },
        { name: "React Query", percent: "88%", widthClass: "w-[88%]" },
      ],
    },
    {
      title: "Styling",
      icon: "palette",
      accent: "amber",
      items: [
        { name: "Tailwind CSS", percent: "96%", widthClass: "w-[96%]" },
        { name: "SCSS / Sass", percent: "91%", widthClass: "w-[91%]" },
        { name: "Styled Components", percent: "84%", widthClass: "w-[84%]" },
        { name: "Framer Motion", percent: "80%", widthClass: "w-[80%]" },
      ],
    },
    {
      title: "Backend",
      icon: "server",
      accent: "emerald",
      items: [
        { name: "Node.js / Express", percent: "80%", widthClass: "w-[80%]" },
        { name: "REST API Design", percent: "88%", widthClass: "w-[88%]" },
        { name: "GraphQL", percent: "72%", widthClass: "w-[72%]" },
        { name: "tRPC", percent: "68%", widthClass: "w-[68%]" },
      ],
    },
    {
      title: "Database",
      icon: "database",
      accent: "red",
      items: [
        { name: "PostgreSQL", percent: "76%", widthClass: "w-[76%]" },
        { name: "MongoDB", percent: "78%", widthClass: "w-[78%]" },
        { name: "Firebase / Firestore", percent: "84%", widthClass: "w-[84%]" },
        { name: "Supabase", percent: "80%", widthClass: "w-[80%]" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "wrench",
      accent: "violet",
      items: [
        { name: "Git / GitHub", percent: "94%", widthClass: "w-[94%]" },
        { name: "Docker", percent: "72%", widthClass: "w-[72%]" },
        { name: "Figma", percent: "86%", widthClass: "w-[86%]" },
        { name: "Vite / Webpack", percent: "87%", widthClass: "w-[87%]" },
      ],
    },
    {
      title: "AI Tooling",
      icon: "sparkles",
      accent: "cyan",
      items: [
        { name: "GitHub Copilot", percent: "92%", widthClass: "w-[92%]" },
        { name: "Claude AI", percent: "90%", widthClass: "w-[90%]" },
        { name: "Cursor IDE", percent: "88%", widthClass: "w-[88%]" },
        { name: "ChatGPT / GPT-4", percent: "87%", widthClass: "w-[87%]" },
      ],
    },
  ],
};

export const experienceContent: ExperienceContent = {
  sectionLabel: "Career Journey",
  title: "Work Experience",
  subtitle: "Building impactful products at forward-thinking companies",
  items: [
    {
      company: "Radixweb",
      role: "Associate Software Engineer",
      duration: "Jan 2022 - Aug 2024",
      location: "Ahmedabad, India",
      summary:
        "Developed frontend modules for a Clinical Trial Management System using Angular and TypeScript.",
      achievements: [
        "Worked on Finance, Role Management, Study, Task, Visit, and Subject modules",
        "Built reusable UI components, dynamic forms, and responsive layouts",
        "Integrated REST APIs and collaborated with backend teams to deliver business features",
        "Improved application performance, maintainability, and code quality through component-based architecture",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "REST APIs",
        "Node.js",
        "MySQL",
        "Git",
        "CSS",
        "Syncfusion",
        "Express",
      ],
      accent: "blue",
      expandedByDefault: true,
    },
    {
      company: "Xenett",
      role: "Angular Developer",
      duration: "Dec 2024 - Jan 2026",
      location: "Ahmedabad, India",
      summary:
        "Xenett is accounting software. I worked on it as an Angular Developer where I developed and maintained enterprise-level frontend features using Angular 18 and TypeScript. I implemented scalable state management using Angular Signals, Signal Store, and NgRx. I also worked extensively with AG Grid for handling large datasets and complex UI requirements.",
      achievements: [
        "Developed core modules including Settings, Common Filters, Company Listing, and Company Dashboard",
        "Implemented Custom Fields, Reports, Financial Review, and Findings in Profit & Loss",
        "Handled data tables with 10,000+ records using AG Grid with performant rendering",
        "Delivered AI integration for findings in accounts workflows",
        "Built custom data table components for domain-specific accounting use cases",
        "Managed project management and settings functionality, resolved client portal issues and bug fixes, and led AG Grid updates across the project",
      ],
      technologies: [
        "Angular",
        "Signals",
        "Signal Store",
        "NgRx",
        "Redux",
        "AG Grid",
        "TypeScript",
        "Nx Workspace",
        "Component Store",
        "CSS",
        "HTML",
        "Figma",
        "Git",
      ],
      accent: "violet",
      expandedByDefault: true,
    },
  ],
};

export const projectsContent: ProjectsContent = {
  sectionLabel: "Featured Work",
  title: "Selected Projects",
  subtitle: "A curated selection that showcases range, depth, and attention to craft",
  items: [
    {
      title: "Next.js Ecommerce Boilerplate",
      description:
        "Production-ready eCommerce boilerplate built with Next.js 15, React, Tailwind CSS, and Supabase, including auth, catalog, search, filters, cart, wishlist, checkout, customer dashboard, and admin panel.",
      image: {
        src: "/assets/ecommerce.png",
        alt: "Next.js Ecommerce Boilerplate",
        width: 800,
        height: 500,
      },
      tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "CSS"],
      liveUrl: "https://ecommerce-boilerplate-chi.vercel.app/",
      codeUrl: "https://github.com/hiteshjogiya/ecommerce-boilerplate",
    },
    {
      title: "Xenett Finance Dashboard",
      description:
        "Xenett is Accounting Software. i work on it as Angular Developer where I Developed and maintained enterprise-level frontend features using Angular 18 and TypeScript.",
      image: {
        src: "/assets/xenett-01.png",
        alt: "Xenett Finance (SAAS App)",
        width: 800,
        height: 500,
      },
      tech: ["Angular", "TypeScript", "ngRx", "signal", "signal store", "AG Grid", "CSS"],
      liveUrl: "https://www.xenett.com/",
      codeUrl: "#",
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "Developed a modern food recipe sharing platform using the latest version of Next.js, enabling users to discover, share, and manage recipes through a responsive and intuitive interface.",
      image: {
        src: "/assets/meal-02.png",
        alt: "Recipe Sharing Platform",
        width: 800,
        height: 500,
      },
      tech: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://meal-app-iota-hazel.vercel.app/",
      codeUrl: "https://github.com/hiteshjogiya/meal-app",
    },
    {
      title: "Place Picker",
      description:
        "Developed a Place Picker application using React that allows users to browse, select, and manage their favorite places through an intuitive and responsive interface.",
      image: {
        src: "/assets/picker-01.png",
        alt: "Place Picker",
        width: 800,
        height: 500,
      },
      tech: ["React", "TypeScript", "HTML", "CSS"],
      liveUrl: "https://place-picker-red.vercel.app/",
      codeUrl: "https://github.com/hiteshjogiya/place-picker",
    },
    {
      title: "Multiplayer Tic Tac Toe",
      description:
        "Developed an interactive Tic-Tac-Toe game using React, focusing on component-based architecture, state management, and responsive UI design.",
      image: {
        src: "/assets/tic-01.png",
        alt: "Multiplayer Tic Tac Toe",
        width: 800,
        height: 500,
      },
      tech: ["React", "TypeScript", "HTML", "CSS"],
      liveUrl: "https://tick-tak-toe-six.vercel.app/",
      codeUrl: "https://github.com/hiteshjogiya/tick-tak-toe",
    },
  ],
};

export const servicesContent: ServicesContent = {
  sectionLabel: "What I Offer",
  title: "Services & Capabilities",
  subtitle: "End-to-end frontend expertise for startups, scale-ups, and enterprise teams",
  items: [
    {
      title: "Angular Development",
      description:
        "Enterprise Angular apps with NgRx, lazy loading, standalone components, and Angular Signals for reactive state.",
      icon: "braces",
      accent: "blue",
    },
    {
      title: "React Development",
      description:
        "Modern React apps with hooks, Suspense, concurrent mode, and seamless third-party API integrations.",
      icon: "component",
      accent: "violet",
    },
    {
      title: "Next.js Development",
      description:
        "Full-stack Next.js with SSR, ISR, App Router, and edge functions for blazing-fast global delivery.",
      icon: "rocket",
      accent: "cyan",
    },
    {
      title: "Dashboard Development",
      description:
        "Complex data visualization dashboards with real-time charts, filters, drill-downs, and export tools.",
      icon: "chart",
      accent: "amber",
    },
    {
      title: "Figma to Code",
      description:
        "Pixel-perfect Figma-to-React conversion - accessible, responsive, and production-ready components.",
      icon: "figma",
      accent: "emerald",
    },
    {
      title: "Performance Optimization",
      description:
        "Lighthouse audits, bundle analysis, code splitting, image optimization, and sub-second load times.",
      icon: "gauge",
      accent: "red",
    },
  ],
};

export const contactContent: ContactContent = {
  sectionLabel: "Get In Touch",
  title: "Let's build something amazing",
  subtitle:
    "Whether you have a project in mind, want to bring me onto your team, or just want to say hello - my inbox is always open.",
  methods: [
    {
      label: "Email",
      value: "hiteshjogiya2017@gmail.com",
      href: "mailto:hiteshjogiya2017@gmail.com",
      icon: "mail",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hitesh-jogiya-6a4a4719b/",
      href: "https://www.linkedin.com/in/hitesh-jogiya-6a4a4719b/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/hiteshjogiya",
      href: "https://github.com/hiteshjogiya",
      icon: "github",
    },
  ],
  formFields: [
    {
      label: "Your Name",
      placeholder: "Sarah Mitchell",
      type: "text",
    },
    {
      label: "Email Address",
      placeholder: "sarah@company.com",
      type: "email",
    },
    {
      label: "Message",
      placeholder: "Tell me about your project, timeline, and budget...",
      type: "textarea",
    },
  ],
  submitLabel: "Send Message",
  footer: {
    brandText: "HS",
    copyright: "© 2024 Hitesh Jogiya. All rights reserved.",
    links: [
      { label: "GitHub", href: "#", icon: "github" },
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "Email", href: "mailto:hiteshjogiya2017@gmail.com", icon: "email" },
      {
        label: "Resume",
        href: "/Hitesh_Jogiya_Frontend_Developer_Resume.pdf",
        icon: "resume",
      },
    ],
    backToTopLabel: "Back to top",
  },
};
