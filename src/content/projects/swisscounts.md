---
name: "swisscounts.ch | Buchhaltung & (AuthKit)"
description: "Ein modernes, open-source Buchhaltungssystem für kleine Unternehmen"
image: "/images/swisscounts/swisscounts-cover.webp"
tags: ["React", "TypeScript", "Docker", "AuthKit", "Hono", "Tailwind CSS"]
state: "In Arbeit"
github: "https://github.com/luishutterli/swisscounts"
links:
  - title: "Webseite"
    url: "https://swisscounts.ch"
  - title: "AuthKit GitHub Repository (Hauptprojekt)"
    url: "https://github.com/luishutterli/auth-kit"
featured: true
startDate: 2025-04-01
---

# swisscounts.ch | Buchhaltung & (AuthKit)
Swisscounts entstand ursprünglich als ein Nachfolger für das massgeschneiderte [Hautkult Buchhaltungssystem](/projects/hautkult), das ich für einen Kunden entwickelt habe.

Der Fokus von swisscounts lag jedoch schon von Anfang an auf eine modulare und flexible Architektur, die dafür ausgelegt ist, von verschiedenen Kunden genutzt zu werden.
Einer der grössten Unterschiede ist, dass swisscounts eine Webanwendung ist und nicht mehr eine Desktop-Applikation.

## Funktionen
(Ein kleiner Überblick über implementierte oder für das MVP geplante Funktionen)

- **Benutzerverwaltung (eine Organisation mit mehreren Benutzern und Rollen)**
- **Kundenverwaltung als Kundenstamm**
- **Verwaltung von Gutscheinen (Rabatte oder Geschenkkarten)**
- **Verwaltung von Produkten/Dienstleistungen usw. (Modulares und Konfigurierbares "Inventar")**
- **Verwaltung von Rechnungen (Erstellen usw.)**
  - **PDF-Export & Druck (mögl. E-Mail-Versand)**
  - **Zahlungsstatus**
- **Verwaltung von Ausgaben (in verschiedenen Kategorien)**
- **Einfache Buchhaltung (Einnahmen/Ausgaben ...)**
  - **Als Dashboard und Download**
  - *mögl. Doppelte Buchhaltung (Buchungssätze)*

Es sind viele weitere Funktionen nach dem MVP geplant. Technisch gesehen werden einige dieser Funktionen als separate "Module" implementiert, ein Beispiel für ein solches Modul wäre die Anbindung an einen Zahlungsdienstleister, um Rechnungen direkt zu bezahlen.

## Grundlegende Architektur
Während der Analyse habe ich dieses einfache Diagramm erstellt, um die grundlegende Architektur zu skizzieren:
![Grundlegende Architektur](/images/swisscounts/basic-architecture.png)

Die einzelnen Teile der Applikation sollten in Containern als kleine Microservices laufen, die hinter einem "API Gateway" sitzen.

# Auth Kit
Eine zentrale Funktion und ein Wunsch meinerseits an die Applikation war eine einfache und sichere Authentifizierungslösung, **die mehrere Benutzer in einer Organisation abbilden kann.**
Kurzerhand habe ich mich dann entschieden, ein neues Projekt zu starten und **diese Authentifizierungslösung selbst zu entwickeln.**

Der Name **AuthKit** kommt von der Idee, dass ich diese Lösung später auch in anderen Projekten verwenden möchte und so meine ganz eigene Authentifizierungslösung als eine Art "Kit" habe.

## Details
Das Ganze wird in TypeScript mit dem Hono-Framework entwickelt und ist absichtlich so modular und konfigurierbar wie möglich entwickelt. Wobei zwar viele dieser Konfigurationen bereits bestehen, aber nur diejenigen Teile, die für das Swisscounts-Projekt benötigt werden, auch implementiert sind.

Nach Fertigstellung des MVP von AuthKit und Swisscounts will ich eine v2 von AuthKit entwickeln, die dann auch als eigenständiges Projekt genutzt werden kann.

## Datenbank
Zur komplexen Abbildung der Daten habe ich mich für eine SQL-Datenbank entschieden. Aktuell wird hier MySQL verwendet, aber in Zukunft wird es möglich sein, andere SQL-Datenbanken zu konfigurieren.

![AuthKit ERM v1](/images/swisscounts/auth-kit-erm-v1.png)
Das ist der erste Entwurf des ERMs für AuthKit, das in Swisscounts verwendet wird.

So können verschiedene Organisationen mit verschiedenen Benutzern abgebildet werden, wobei auch ein fortgeschrittenes Berechtigungskonzept so abgebildet werden kann.

Wie man erkennen kann, ist das ERM und AuthKit sehr zukunftsorientiert gestaltet, sodass ich es in Zukunft sehr leicht für meine anderen Projekte einsetzen kann.