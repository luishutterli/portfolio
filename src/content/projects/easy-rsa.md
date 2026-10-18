---
name: "Easy-RSA"
description: "Interaktive Lernplattform für den RSA-Algorithmus mit Quizzen, interaktiven Visualisierungen und noch viel mehr"
image: "../../assets/projects/easy-rsa/easy-rsa-cover.png"
tags: ["React", "Markdown", "JavaScript", "Tailwind CSS"]
state: "Fertig"
github: "https://github.com/luishutterli/iweb-rsa"
featured: true
startDate: 2024-10-29
endDate: 2025-01-20
---

# easy-rsa - Lernplattform für den RSA-Algorithmus
easy-rsa ist eine Lernplattform, die zeigt, wie der RSA-Algorithmus funktioniert und wie man ihn grundlegend in JavaScript implementieren kann. *(ganz ohne externe Bibliotheken)*


## Entstehung
Das Projekt entstand im Rahmen des IWeb M294 Moduls. Das Projekt kam zustande, als mich mein Lehrer von allen Prüfungen in diesem Fach ausgenommen hat und es mir erlaubt hat, ein eigenes Projekt zu realisieren.

### Idee
Die Idee entstand aus der Vorgabe, eine Lernplattform zu schaffen, die ein Thema der Informatik behandelt. Ich entschied mich für den RSA-Algorithmus, da ich einige Jahre zuvor bereits eine Kryptowährung in Java entwickelt hatte und ich dort den RSA-Algorithmus selbst implementiert hatte.

## Technische Details & Aufbau
Die Webseite besteht aus einer Sammlung an Kapiteln. Diese Kapitel sind in Markdown geschrieben und werden **während der Laufzeit** zu HTML gerendert und angezeigt.
In vielen dieser Kapitel sind interaktive Elemente eingebaut. Diese Elemente sind React-Komponenten, die während des Renderns in das Kapitel injiziert werden und es so dem Leser erlauben, interaktiv zu lernen, durch Übungen oder sogar komplexe Visualisierungen, wie zum Beispiel den ganzen Ablauf von der Schlüsselerstellung bis zur Ver- und Entschlüsselung.

## Prüfung
Als Abschluss aller Kapitel kann man eine kleine Prüfung machen, die das Wissen über den RSA-Algorithmus testet. *(Es gibt 4 Teile mit jeweils 2 zufälligen Fragen)*
