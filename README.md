# Web Technologies Advanced: User-API

Dieses Projekt beinhaltet eine mögliche Lösung zum Auftrag "User-API-Vorlage" des Faches Web Technologies Advanced an der hf-ict.



## Features

- RESTful API zum Erstellen, Bearbeiten und Löschen von Nutzern
- Anbindung an MongoDB zur persistenten Speicherung von Nutzern
- Ordnerstruktur vorbereitet, um einfach ausgebaut werden zu können
## Requirements

Folgende Voraussetzungen müssen auf dem ausführenden Rechner installiert sein, damit die Applikation läuft:

- Node 19+
- MongoDB

## Deployment

Um dieses zu starten, müssen zuerst die Voraussetzungen installiert sein. Danach kann das Projekt mit den folgenden Befehlen auf der Commandozeile vorbereitet werden:

```bash
  npm install
```

Danach kann der Server mit folgendem Befehl gestartet werden:

```bash
  npm run dev
```

Der Server läuft anschließend unter `http://localhost:3000`, über einen Webbrowser kann eine grafische Ansicht aufgerufen werden.


## Documentation

Diese Applikation bietet zwei Arten von Routes: Web-Routes, die im Webbrowser geöffnet werden können und API-Routes, die JSON erwarten/senden. Zweitere sind für die Verwendung als API vorgesehen; eine Validierung gibt es aktuell nicht.

### Web-Routes

Die folgenden Web-Routes stehen zur Verfügung:

| Methode | Pfad  | Beschreibung |
| ------------- | ------------- | ------------- |
| GET | `/`  | Startseite  |
| GET | `/read`  | Einen Benutzer ansehen  |
| GET | `/create`  | Einen Benutzer erstellen  |

### API-Routes

Die folgenden Web-Routes stehen zur Verfügung:

| Methode | Pfad  | Beschreibung |
| ------------- | ------------- | ------------- |
| GET | `/api/user`  | Nutzer auflisten  |
| GET | `/api/user/:id`  | Einen Benutzer ansehen  |
| POST | `/api/user`  | Einen Benutzer erstellen  |
| PUT | `/api/user/:id`  | Einen Benutzer ersetzten  |
| PATCH | `/api/user/:id`  | Einen Benutzer bearbeiten  |
| DELETE | `/api/user/:id`  | Einen Benutzer löschen  |

## Lizenz

[Don't be a dick license](https://dbad-license.org/)