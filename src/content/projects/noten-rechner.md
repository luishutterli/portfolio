---
name: "Noten Rechner"
description: "Ein online Notenbuch für Schüler mit Abo-Modell. Hauptsächlich für meine Mittschüler und mich."
image: "/images/noten-rechner/noten-rechner-cover.png"
tags: ["React", "Stripe", "Firebase Firestore", "Firebase Auth", "JavaScript", "Tailwind CSS", "Recharts"]
state: "Fertig"
github: "https://github.com/luishutterli/noten"
links:
  - title: "Live Demo"
    url: "https://noten-rechner.ch/"
featured: true
startDate: 2024-06-22
endDate: 2024-10-26
---

# Noten Rechner
Da wir unsere Noten selbst verwalten müssen, um einen Überblick zu haben, habe ich in den ersten Semestern jeweils eine Excel-Tabelle erstellt. Diese Tabelle hat zwar sehr gut funktioniert und ich habe sie auch immer angepasst und meinen Mittschülern zur Verfügung gestellt, aber ich wollte doch etwas, das komfortabler ist und schöner aussieht. So ist mir die Idee für eine Web-App gekommen.

Das Projekt war für mich der erste Berührungspunkt mit der Firebase Firestore NoSQL-Datenbank und Stripe als Zahlungsanbieter. Ich habe mich für Firebase entschieden, da ich die Firebase Platform bereits verwendete und sie sehr kostengünstig ist. Durch das Github-Education-Programm habe ich auch einen Rabatt auf Zahlungsgebühren bei Stripe erhalten.

## Abo Modell
Meine Mittschüler müssen für die Nutzung der Applikation bezahlen, da ich einige Kosten decken muss. Ich habe jedoch versucht, die Kosten sehr gering zu halten.
Hier ist eine Übersicht über die zwei Preis Optionen:
1. **Jährliches Abo**: 10 Fr. pro Jahr
2. **Monatliches Abo**: 1.25 Fr. pro Monat (15 Fr. pro Jahr)

Zudem habe ich jedem Nutzer 5 Tage als Testphase gegeben und denen, die sich direkt am Anfang angemeldet haben, ein Abo für nur 1 Fr. pro Monat für die ersten 4 Monate.

Diese Abonemente werden über Stripe erstellt und verwaltet. Für die Einbindung in meine Applikation verwende ich hier die Stripe-Erweiterung für Firebase von Invertase.

## Berechnungen & Durchschnitt
Das Schema der Daten ist sehr ausgeklügelt und erlaubt es, sehr komplexe Durchschnitte zu berechnen, ohne die Applikation anzupassen.
Das Schema ist grundsätzlich ein Baum von Gruppen und Fächern, wobei jedes Fach und jede Gruppe so konfiguriert werden kann, wie es gebraucht wird.
Um dann die Durchschnitte zu ermitteln wird dieser Baum rekursiv durchlaufen, um die Durchschnitte von unten nach oben zu berechnen.

Diese Logik wurde so gewählt, da die Berechnung unseres Zeugnisses solche komplexen Muster aufzeigt *(z.B. Durchschnitt aller gerundeten Informatik-Noten zählt gerundet doppelt für die Promotionsnote)*

Natürlich könnte man solche Berechnungen auch ganz einfach in der Applikation hart-codieren, jedoch wollte ich es aber so, dass ich für ein neues Semester nur die Konfiguration in der Datenbank hinzufügen muss und die Applikation kann direkt damit umgehen, egal wie komplex sie aufgebaut ist.

Hier sind einige der möglichen Konfigurationen:
- Gewicht der Gruppe oder des Faches
- Untergruppen oder Fächer der Gruppe oder des Semesters
- Ob die Noten der Untergruppen oder Fächer als gerundet oder ungerundet für die Berechnung gesammelt werden
- Wie die Struktur der Noten angezeigt und benannt wird

*(Hier eine etwas genauere Beschreibung der Attribute: https://github.com/luishutterli/noten/blob/master/docs/Subjects%20Groups%20Halfterms.md)*

## Authentifizierung
Für die Authentifizierung verwende ich Firebase Auth. Der Nutzer kann sich entweder mit seinem Google-Account anmelden oder ein Konto mit E-Mail und Passwort erstellen.

Für z.B. das Registrieren mit E-Mail und Passwort werden auch Verifizierungs-Mails verschickt, das passiert über einen Zoho-Mail Account und der Adresse noreply@fe.noten-rechner.ch

## Weitere Features:
- Echtzeit Synchronisation der Daten (durch Firestore WebSockets)
- Benutzer können eigene Semester (Gruppen + Fächer) erstellen oder von mir fertige Semester auswählen
- Benutzer können berechnen, welche Note sie in einer Prüfung brauchen, um eine bestimmte Note zu erreichen

... und und und

## Bilder
<table>
  <tr>
    <td>Hauptseite</td>
    <td>Zeugnis</td>
  </tr>
  <tr>
    <td><img src="/images/noten-rechner/main.png" alt="Hauptseite"><!-- res: 1034x1058 --></td>
    <td><img src="/images/noten-rechner/report-card.png" alt="Zeugnis"><!-- res: 614x940 --></td>
  </tr>
</table>

<table>
  <tr>
    <td>Abo Management für den Nutzer</td>
    <td>Stripe Admin Dashboard</td>
  </tr>
  <tr>
    <td><img src="/images/noten-rechner/billing-menu-client.png" alt="Abo Management für den Nutzer"><!-- res: 1033x1057 --></td>
    <td><img src="/images/noten-rechner/stripe-admin-dashboard.png" alt="Stripe Admin Dashboard"><!-- res: 1031x1057 --></td>
  </tr>
</table>

