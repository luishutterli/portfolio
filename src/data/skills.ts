export const skillsData = {
  database: {
    title: "Datenbanken",
    icon: "M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4",
    technologies: [
      { name: "MySQL", level: 95, color: "from-orange-500 to-orange-600" },
      { name: "Firebase", level: 90, color: "from-yellow-500 to-orange-500" },
      { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" }
    ]
  },
  backend: {
    title: "Backend",
    icon: "M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z",
    technologies: [
      { name: "Java", level: 100, color: "from-red-600 to-orange-600" },
      { name: "REST APIs", level: 95, color: "from-indigo-500 to-purple-500" },
      { name: "Node.js (Express.js / Hono ...)", level: 90, color: "from-green-500 to-green-600" }
    ]
  },
  frontend: {
    title: "Frontend",
    icon: "M3 3h18v4H3V3zm0 6h18v8H3V9zm2 2h6v4H5v-4zm8 0h6v2h-6v-2zm0 3h4v1h-4v-1z",
    technologies: [
      { name: "React", level: 95, color: "from-blue-500 to-blue-600" },
      { name: "HTML/CSS/JS", level: 95, color: "from-orange-500 to-red-500" },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" }
    ]
  },
  tools: {
    title: "Tools & Platformen",
    icon: "M12 15l-4-4h3V7h2v4h3l-4 4zm-8 4h16v2H4v-2z",
    technologies: [
      { name: "Linux", level: 95, color: "from-yellow-500 to-orange-500" },
      { name: "Docker", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "Git", level: 90, color: "from-orange-600 to-red-600" }
    ]
  }
};

export const additionalTechnologies = [
  { name: "Cloudflare", tooltip: "Hauptsächlich als DNS und DDOS-Schutz, aber auch als Hoster und Caching-Layer, verwendet in praktisch allen Projekten" },
  { name: "TailwindCSS", tooltip: "Oft in Kombination mit React als Styling-Lösung" },
  { name: "Firebase", tooltip: "Hoster und Datenbank (aber auch Authentifikation und anderes)" },
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
  { name: "PHP", tooltip: "" }
];
