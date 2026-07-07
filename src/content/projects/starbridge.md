---
name: Starbridge | OBD-II Adapter
description: "Ein OBD-II Adapter für Mercedes-Benz Fahrzeuge, der Telemetrie-Daten in Echtzeit an eine Mobile App überträgt. Entwickelt um der 3G-Netzabschaltung entgegenzuwirken."
image: "/images/starbridge/starbridge-cover.png"
tags: ["Expo (React-Native)", "CAN/OBD-II", "TypeScript", "C++ (ESP-IDF)", "PCB-Design", "Cloudflare Workers", "Cloudflare Durable Objects", "Docker", "Hono", "Tailwind CSS"]
state: "Fertig"
github: "https://github.com/luishutterli/starbridge"
featured: true
startDate: 2025-10-22
endDate: 2026-02-20
---

# Starbridge | OBD-II Adapter
Starbridge ist meine Semesterarbeit an der IMS Kantonsschule Frauenfeld, die ich wärend des 3. Jahres meiner Ausbildung realisert habe.

Dabei handelt es sich um einen selbst entwickelten OBD-II Adapter für Mercedes-Benz Fahrzeuge, der Telemetrie-Daten über den CAN-Bus abfragt und diese in Echtzeit an eine eigene Mobile App überträgt.

Die Idee hinter diesem Projekt kam, als die Swisscom angekündigt hat, dass sie das 3G-Netz in der Schweiz per Anfang 2026 abschaltet und viele Mercedes-Benz Fahrzeuge, die für ihre Telematik-App auf 3G angewiesen sind, nicht mehr funktionieren werden. Da man als Kunde von einem betroffenen Fahrzeug nicht auf 4G oder 5G upgraden kann und [Mercedes mitgeteilt hat, dass man Zugriff auf die Telematik-App verliert](https://www.mercedes-benz.ch/de/passengercars/services/mobile-network-deactivation.html), habe ich mich entschieden, eine eigene Lösung zu entwickeln, die die Telemetrie-Daten des Fahrzeugs abfragt und diese in Echtzeit an eine Mobile App überträgt.

## Funktionen
- **Abfrage von Telemetrie-Daten über den CAN-Bus mit dem OBD-II Protokoll**
- **Echtzeit-Übertragung der Daten mittels 4G LTE**
- **Mobile App zur Anzeige der Daten** *(Multiplattform mit React-Native)*
- **Echtzeit-Visualisierung der Daten**
- **Verwaltung von verschiedenen Fahrzeugen**
- **Übersicht über die letzte Fahrt mit informativen Visualisierungen** *bspw. Verbrauch über die Fahrt, Geschwindigkeit über die Fahrt*
- **Modernes und ansprechendes Design**
- **Fahzeug-Erkennung via VIN-Nummer** *VIN = Fahrgestellnummer*
- **Profilverwaltung mit Benutzerkonten** *+ Möglichkeit des Teilen von Fahrzeugen*

*...usw*

## Architektur
### Komponenten
![Grundlegende Architetktur](/images/starbridge/architecture.png)

### Cloud- & Backend-Architektur
![Cloud-Architektur](/images/starbridge/production-env.png)

### Echtzeit-Übertragung
Die Echtzeit-Übertragung der Telemetrie-Daten erfolgen über einen SSE (Server-Sent Events) Stream, der von einem Cloudflare Durable Object verwaltet wird. Dieses Durable Object ist für die Verwaltung der einzelnen Fahrzeug-Streams zuständig und ordnet die einkommenden Daten den entsprechend abfragenden Streams der Mobile-App zu. Die Mobile App kann sich dann mit dem Durable Object verbinden und die Daten in Echtzeit empfangen.

Intern wird ein Store verwendet, der so automatisch die angezeigten Komponenten der Mobile App aktualisiert und die Daten in Echtzeit visualisiert. Der Store ist so konzipiert, dass es für die Komponenten und Verbraucher der Daten völlig transparent ist, ob die Daten gerade Live von einem Fahrzeug kommen, oder ob es sich einfach um den zuletzt bekannten Stand handelt. Das system kann automatisch zwischen den beiden Quellen wechseln und sorgt auch dafür, dass bei einem Verbindungsabbruch schnellstmöglich wieder eine Verbindung aufgebaut wird, um die Daten in Echtzeit zu empfangen.


## PCB-Design / Adapter
Beim Adapter handelt es sich um ein selbst entwickeltes 4-Layer PCB, das auf einem ESP32-Mikrocontroller basiert und über einen CAN-Transceiver und ein LTE-Modem verfügt. Das PCB wurde mit KiCAD entwickelt und später von JLCPCB gefertigt. Die Firmware wurde in C++ mit dem ESP-IDF Framework entwickelt und ist für die Abfrage der Telemetrie-Daten über den CAN-Bus zuständig. Die Daten werden mithilfe von UART an das LTE-Modem gesendet, das die Daten dann über das Mobilfunknetz an das Backend überträgt.

Die Schaltpläne und das PCB-Design findet man [hier](https://github.com/luishutterli/starbridge/blob/main/docs/notes/m03-m04/M04-Schematics.pdf) bzw. das PCB-Design [hier](https://github.com/luishutterli/starbridge/blob/main/docs/notes/m03-m04/M04-PCB-Design.pdf). *Das KiCAD Projekt findet sich [hier](https://github.com/luishutterli/starbridge/tree/main/hardware/adapter)*

### Authentifizierung
Die Authentifizierung des Adapters erfolgt über eine Challenge, die bei jeder Anfrage angehängt ist. Für das validieren der Challenge muss der Adapter mit seinem eigenen Private-Key die Challenge signieren. (Das Backend hat den entsprechenden Public-Key von jedem Adapter)

Im Verlauf der Verwendung wird die Challenge immer wieder erneuert, dies geschieht automatisch in einem Interval von ca. 5 Minuten. Sollte die Challenge nicht mehr gültig sein, wird der Adapter automatisch vom Backend abgemeldet und erhält direkt eine neue Challenge.

## Weitere Informationen / Präsentation
Die Präsentation meiner Semesterarbeit kann [hier](https://docs.google.com/presentation/d/1Jvf8IJK0qznnXLLEZo6yvi4rBf5GVt6w/edit?usp=sharing&ouid=110690799637058503183&rtpof=true&sd=true) heruntergeladen werden.


Oder hier als PDF:
<iframe
    src="/files/starbridge/presentation-sa-starbridge-luis-hutterli.pdf"
    width="100%"
    height="800"
    style="border: none;"
></iframe>
