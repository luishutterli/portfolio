export const skillsData = {
  database: {
    title: "Datenbanken",
    icon: "lucide:database",
    technologies: [
      { name: "MySQL", level: 95, color: "from-slate-400 to-slate-500" },
      { name: "Firebase", level: 90, color: "from-amber-300 to-orange-300" },
      { name: "MongoDB", level: 75, color: "from-emerald-400 to-emerald-500" },
    ],
  },
  backend: {
    title: "Backend",
    icon: "lucide:server",
    technologies: [
      { name: "Java", level: 100, color: "from-red-300 to-orange-300" },
      { name: "REST APIs", level: 95, color: "from-indigo-400 to-purple-400" },
      {
        name: "Node.js (Express.js / Hono ...)",
        level: 90,
        color: "from-green-300 to-green-400",
      },
    ],
  },
  frontend: {
    title: "Frontend",
    icon: "lucide:layout-template",
    technologies: [
      { name: "React", level: 95, color: "from-blue-400 to-blue-500" },
      { name: "HTML/CSS/JS", level: 95, color: "from-orange-300 to-red-300" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-600" },
    ],
  },
  tools: {
    title: "Tools & Platformen",
    icon: "lucide:wrench",
    technologies: [
      { name: "Linux", level: 95, color: "from-yellow-300 to-orange-300" },
      { name: "Docker", level: 90, color: "from-blue-400 to-blue-500" },
      { name: "Git", level: 90, color: "from-orange-300 to-red-300" },
    ],
  },
};

export const additionalTechnologies = [
  {
    name: "Cloudflare",
    tooltip:
      "Hauptsächlich als DNS und DDOS-Schutz, aber auch als Hoster und Caching-Layer, verwendet in praktisch allen Projekten",
  },
  { name: "TailwindCSS", tooltip: "Oft in Kombination mit React als Styling-Lösung" },
  {
    name: "Firebase",
    tooltip: "Hoster und Datenbank (aber auch Authentifikation und anderes)",
  },
  { name: "Figma", tooltip: "Für einfache Mockups" },
  { name: "Google Cloud", tooltip: "Als Hoster (bsp. Für Docker-Container)" },
  { name: "Digitalocean", tooltip: "VPS Hoster" },
  { name: "Stripe", tooltip: "Einbindung für Abonements" },
  { name: "Jupyter Notebook", tooltip: "Mit Python / Java" },
  { name: "Maven", tooltip: "Für alle Java Projekte" },
  { name: "Postman", tooltip: "Grundlegend um REST-APIs zu testen" },
  { name: "Python", tooltip: "Sprache für POCs oder einfache Scripts" },
  { name: "Astro", tooltip: "" },
  { name: "PostgreSQL", tooltip: "" },
  { name: "Wallee", tooltip: "Einbindung für ein Kunden" },
  { name: "Rust", tooltip: "" },
  { name: "Arduino", tooltip: "" },
  { name: "C++", tooltip: "" },
  { name: "Unity", tooltip: "" },
  { name: "C#", tooltip: "" },
  { name: "Flutter / Dart", tooltip: "" },
  { name: "NVIDIA CUDA", tooltip: "Grafikkarten Programmierung" },
  { name: "Tensorflow", tooltip: "" },
  { name: "OpenCV", tooltip: "" },
  { name: "PHP", tooltip: "" },
];
