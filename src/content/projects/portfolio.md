---
name: "Portfolio Website"
description: "Meine moderne Portfolio-Website gebaut mit Astro. Zeigt meine Projekte und Fähigkeiten."
image: "/images/portfolio/portfolio-cover.png"
tags: ["Astro", "TypeScript", "Tailwind CSS", "Content Collections", "Markdown", "SEO"]
state: "In Arbeit"
github: "https://github.com/luishutterli/portfolio"
links:
  - title: "Live Demo"
    url: "https://luishutterli.ch"
featured: true
startDate: 2025-07-14
---

# Portfolio Website
Dieses Projekt ist meine persönliche Portfolio-Webseite, um meine Projekte und Fähigkeiten zu präsentieren.

## Technische Details
Die Webseite verwendet Astro als statischen Site-Generator, dadurch, das so alle Seiten bereits fertige HTML-Dateien sind, kann die Seite exrem schnell geladen werden und muss nicht, wie Beispielsweise bei React, erst gerendert werden. Auch ist das ein Vorteil für SEO, da die Seite direkt von Suchmaschinen indexiert werden kann.

Durch das schnelle on-edge hosting und chaching von Cloudflare und Cloudflare Pages wird die Seite exrem schnell, überall auf der Welt, bereitgestellt.

Diese Kombination aus statischer Generierung und on-edge Hosting sorgt für diese extrem gute Performance, wie sie hier zu sehen ist:
![Page Speed Insights Score](/images/portfolio/pagespeed-insights-score.png)
*(Google PageSpeed Insights: [Report](https://pagespeed.web.dev/analysis/https-luishutterli-ch/1n9n80f15a?form_factor=mobile))*

### Content Collections
Die Projekte sind einfache Markdown-Dateien, die durch die Astro Content Collections wärend der Buid-Zeit zu statischen HTML-Seiten gerendert werden.

Aktuell liegen diese Projekte einfach in einem Ordner und werden mit dem `glob`-Loader geladen, jedoch könnte man hier auch andere Loader verwenden, um die Projekte von anderen Orten zu laden, wie z.B. von einem CMS oder aus Notion. *(Hier als Beispiel, [diese Seite in Markdown-Form](https://github.com/luishutterli/portfolio/blob/master/src/content/projects/portfolio.md))*

### View Transitions & Client-Side Routing
Die Seite verwendet View Transitions durch die Astro `<ClientRouter />` Komponente.

View Transitions ermöglichen einerseits eine komplette Client-Side Navigation, um den Wechsel zwischen den Seiten ohne ein Neuladen der Seite zu ermöglichen *(die andere Seite wird im Hintergrund vor-geladen und einfach eingewechselt)*, aber auch eine Animation beim Wechseln der Seiten.

Solche Animationen finden sich zum Beispiel hier zwischen den Projektseiten, wo die Projekt-Bilder und Titel in die nächste Seite animiert werden.

**Um von diesen Funktionen gebrauch zu machen, braucht man eine aktuelle Version eines nicht Firefox-basierten Browsers.** *(mehr Details: [MDN Web Docs - View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API#browser_compatibility))*
