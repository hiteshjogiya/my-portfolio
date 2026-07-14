export type NavItem = {
  label: string;
  href: string;
};

export type HeroTag = {
  label: string;
};

export type HeroContent = {
  availability: string;
  titleLineOne: string;
  titleLineTwo: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stack: HeroTag[];
};

export type AboutStat = {
  value: string;
  label: string;
  detail: string;
};

export type AboutContent = {
  sectionLabel: string;
  title: string;
  paragraphs: string[];
  profile: {
    name: string;
    role: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  stats: AboutStat[];
};

export type SkillItem = {
  name: string;
  percent: string;
  widthClass: string;
};

export type SkillCategory = {
  title: string;
  icon: "code" | "layers" | "workflow" | "palette" | "server" | "database" | "wrench" | "sparkles";
  accent: "blue" | "violet" | "cyan" | "amber" | "emerald" | "red";
  items: SkillItem[];
};

export type SkillsContent = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  categories: SkillCategory[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  accent: "blue" | "violet";
  expandedByDefault: boolean;
};

export type ExperienceContent = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ExperienceItem[];
};

export type ProjectItem = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tech: string[];
  liveUrl: string;
  codeUrl: string;
};

export type ProjectsContent = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
};

export type ServiceItem = {
  title: string;
  description: string;
  icon:
    | "braces"
    | "component"
    | "rocket"
    | "chart"
    | "figma"
    | "gauge";
  accent: "blue" | "violet" | "cyan" | "amber" | "emerald" | "red";
};

export type ServicesContent = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "linkedin" | "github";
};

export type ContactFormField = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
};

export type FooterLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "resume";
};

export type ContactContent = {
  sectionLabel: string;
  title: string;
  subtitle: string;
  methods: ContactMethod[];
  formFields: ContactFormField[];
  submitLabel: string;
  footer: {
    brandText: string;
    copyright: string;
    links: FooterLink[];
    backToTopLabel: string;
  };
};
