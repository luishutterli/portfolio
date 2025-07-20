---
name: "Hautkult Buchhaltungssystem"
description: "Kundenauftrag für ein massgeschneidertes Buchhaltungssystem"
# image: ""
tags: ["Java", "JavaFX", "MySQL", "Wallee POS"]
state: "Fertig"
links:
  - title: "Hautkult Homepage"
    url: "https://hautkult.ch/"
startDate: 2024-01-02
endDate: 2025-04-29
---

# Hautkult Buchhaltungssystem
Ich wurde beauftragt, ein Buchhaltungs- und Rechnungssystem für Hautkult zu entwickeln.
Hautkult ist ein kleines Kosmetikstudio in Kreuzlingen.

Das Projekt umfasst die Analyse der Anforderungen bis hin zur Realisierung und Betreuung der Software.

## Funktionen
Das Programm umfasst praktisch alle Funktionen, die für das Betreiben des Kosmetikstudios benötigt werden.
Dazu gehören unter anderem:
- **Kundenverwaltung mit einem Kundenstamm**
- **Verwaltung von vorgefertigten Dienstleistungen (Behandlungen), Produkten und Gutscheinen**
- **Verwaltung von einzigartigen Behandlungen, Produkten und Gutscheinen**
- **Erstellung und Verwaltung von Rechnungen**
- **Export von Rechnungen (PDF, Drucker ...)**
- **Erstellung und Verwaltung von Betriebsausgaben**
- **Statistische Übersicht (Einnahmen, Ausgaben, beliebte Produkte/Behandlungen, bevorzugte Zahlungsmethoden ...)**
- **Export der Jahresrechnung (ausgefülltes Excel-File)**
- **Zahlungsabwicklung über ein Wallee Kartenterminal**

... und und und

## Technologien
Die Desktop-Applikation wurde in Java mit JavaFX realisiert und ist gleichzeitig das Backend, das man mit speziellen Argumenten starten kann.
Für das Backend wird der schlanke Spark11 HTTP-Server verwendet.

Das Frontend und das Backend greifen beide auf eine MySQL-Datenbank zu und kommunizieren untereinander nur für spezielle Aufgaben, wie z.B. das Starten einer Terminal-Zahlung.

Die Applikation integriert viele Bibliotheken für die unterschiedlichen Funktionen. Hier ein paar interessante:
- **Apache POI für den Excel-Export**
- **Apache PDFBox für den PDF-Export und Druck**
- **Wallee SDK für die Einbindung in das Wallee System**

## Unterhalt
Die Applikation und das ganze System werden von mir betreut und gewartet.
Es geht hier hauptsächlich um einen Linux-Server, auf dem die MySQL-Datenbank und der Server laufen.

Zusätzlich läuft auf dem Server auch ein PHPMyAdmin-Interface, um die Datenbank zu verwalten, jedoch läuft dieses passwortgeschützt auf einem Apache-Webserver.