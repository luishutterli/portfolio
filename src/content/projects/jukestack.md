---
name: "JukeStack"
description: "Eine moderne NFT-Jukebox als Fullstack Webanwendung."
image: "/images/jukestack/jukestack-cover.png"
tags: ["React", "TypeScript", "Java (vert.x)", "MySQL", "Docker", "Google Cloud Platform", "Cloudflare", "Tailwind CSS"]
state: "Fertig"
github: "https://github.com/luishutterli/jukestack"
links:
  - title: "Live Demo (Backend-Server sind nicht mehr aktiv)"
    url: "https://jukestack.ch/"
featured: true
startDate: 2024-12-05
endDate: 2025-01-24
---

# JukeStack - NFT Jukebox
JukeStack ist eine moderne NFT-Jukebox, die es Nutzern ermöglicht, Musik zu streamen. Das NFT im Namen kommt daher, da ein Song nur von einem einzigen Nutzer gleichzeitig ausgeliehen und abgespielt werden kann.

Das Projekt wurde im IDat Modul M106 als Abschlussprojekt realisiert. Die Vorgabe war es, eine NFT-Jukebox Fullstack Webanwendung mit React im Frontend und Express im Backend zu programmieren. Grundsätzlich wurde das Projekt in einem Zweierteam realisiert, **jedoch wurde ich alleine eingeteilt.**


**Auch die Vorgaben zu dem Techstack durfte ich ignorieren** und entschied mich so, das Frontend zwar in React zu entwickeln, aber dafür mit TypeScript. Für das Backend habe ich mich für Java entschieden und bin so auf das vert.x Framework gestossen.

## Technische Details
### Sicherheit
Alle Teile des Projekts sind *(nach meinem Wissen😉)* abgesichert.
Sei es korrektes Hashen von Passwörtern, Session-IDs und E-Mail Verifizierungs Tokens oder das komplette Absichern aller API Endpunkte mit einer **selbst entwickelten** Session Authentifizierung.

Ich finde Cybersecurity sehr spannend und entwickle daher immer sichere Applikationen, die oft auch tatsächlich **so in der Produktion eingesetzt werden können.**

### E-Mail
Beim Registrieren wird auch die E-Mail-Adresse verifiziert. Das passiert über einen E-Mail Link. Die E-Mails werden vom Backend über SMTP, mit der Mail-Adresse noreply@jukestack.ch, und zoho-Mail versendet.

### Das Backend
Wie bereits erwähnt, ist das Backend mit Java und vert.x realisiert. Jedoch handelt es sich bei dem Backend um eine komplett containerisierte Anwendung, die in einem Docker-Container läuft. *(Aufgrund der eher überschaubaren Grösse, habe ich mich dagegen entschieden, den Container in Microservices aufzuteilen)*

Der Docker Container läuft in der Google Cloud über Cloud Run und ist somit hochverfügbar und horizontal skalierbar.

### Deployment
Für das Builden und Deployen aller Teile dieses Projekts, gibt es Scripts.
Das Backend wird automatisch in das Google Container Registry gepusht und von dort aus mit Google Cloud Run deployed.

Das Frontend wird mit der firebase CLI direkt auf Google Firebase gehostet. In Cloudflare wird das DNS für die Domain [jukestack.ch](https://jukestack.ch) konfiguriert und per Firebase-Config werden die Anfrage an das Backend auf `/api` direkt in den Cloud Run Service geleitet.

### Weitere Features
Die Applikation ist voller Features für den Nutzer aber auch für den Admin.

Hier sind einige der Features:
- **Mobiles und Responsives Design**
- **Sicheres und Schnelles Backend**
- **Sicheres Speichern der Songs (mit Presigned URLs, damit nur ein Nutzer ihn anhören kann)**
- **Caching von Resourcen (mit speziellen Regeln für z.B. die Cover-Bilder)**
- **Optimierte SQL Queries**
- **Integration in den OS-Media Player**
- **Schlanke und Intuitives UI**

... und und und

## Bilder
<table>
  <tr>
    <td>Verifizierungs E-Mail</td>
    <td>Media Player OS Integration</td>
  </tr>
  <tr>
    <td><img src="/images/jukestack/verification-mail.png" alt="Verifizierungs E-Mail" width="204"></td>
    <td><img src="/images/jukestack/os-integration-windows.png" alt="Media Player OS Integration"></td>
  </tr>
</table>


ich empfehle auch, die Screenshots in der [Dokumentation](https://github.com/luishutterli/jukestack/blob/main/docs/jukeStackDoc_Luis.pdf) ab Punkt 7.2 anzuschauen. *(Achtung: In der Dokumentation ist auch der Name "Pascal Förber" angegeben, jedoch ist dieser imaginär und hat die Beispiel Analyse erstellt)*

