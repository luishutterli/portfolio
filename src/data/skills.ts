
export interface Technology {
  name: string;
  usedIn: string[];
}

export interface SkillGroup {
  title: string;
  technologies: Technology[];
  other: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Sprachen",
    technologies: [
      { name: "Java", usedIn: ["jukestack"] },
      {
        name: "TypeScript",
        usedIn: ["starbridge", "swisscounts", "jukestack", "portfolio"],
      },
      { name: "JavaScript", usedIn: ["noten-rechner", "easy-rsa"] },
      { name: "C++ (ESP-IDF)", usedIn: ["starbridge"] },
    ],
    other: ["Python", "C#", "Rust", "PHP", "Dart"],
  },
  {
    title: "Backend & Daten",
    technologies: [
      { name: "Node.js (Express, Hono)", usedIn: ["starbridge", "swisscounts"] },
      { name: "Cloudflare Workers & Durable Objects", usedIn: ["starbridge"] },
      { name: "MySQL", usedIn: ["jukestack"] },
      { name: "Firebase", usedIn: ["noten-rechner"] },
      { name: "Stripe", usedIn: ["noten-rechner"] },
    ],
    other: ["PostgreSQL", "MongoDB", "REST APIs", "Wallee"],
  },
  {
    title: "Frontend & Apps",
    technologies: [
      {
        name: "React",
        usedIn: ["swisscounts", "noten-rechner", "jukestack", "easy-rsa"],
      },
      { name: "React Native (Expo)", usedIn: ["starbridge"] },
      { name: "Astro", usedIn: ["portfolio"] },
      { name: "Tailwind CSS", usedIn: ["starbridge", "swisscounts", "noten-rechner"] },
    ],
    other: ["HTML / CSS", "Flutter", "Unity", "Figma"],
  },
  {
    title: "Infrastruktur & Hardware",
    technologies: [
      { name: "Docker", usedIn: ["starbridge", "swisscounts", "jukestack"] },
      { name: "Google Cloud, Cloudflare", usedIn: ["jukestack"] },
      { name: "PCB-Design, CAN/OBD-II", usedIn: ["starbridge"] },
    ],
    other: [
      "Linux",
      "Git",
      "Maven",
      "Postman",
      "DigitalOcean",
      "Jupyter",
      "Arduino",
      "CUDA",
      "TensorFlow",
      "OpenCV",
    ],
  },
];
