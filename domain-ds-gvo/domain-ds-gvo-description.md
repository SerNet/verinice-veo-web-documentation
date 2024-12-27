<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Aufbau der Domäne DS-GVO

## Objekt- und Subtypen

### Scopeobjekte

- **Verantwortliche, Art. 4 Nr. 7 DS-GVO:** Zur Dokumentation der Verantwortlichen Stelle.
- **Auftragsverarbeiter:** Zur Dokumentation der Auftragsverarbeiter nach Art. 4 Nr. 8, 28 DS-GVO.
- **Auftraggeber:** Zur Dokumentation von Auftraggebern, für die eine Auftragsverarbeitung durchgeführt wird.
- **Gemeinsame Verantwortliche:** Erfassen Sie gemeinasam Veranwortliche.
- **Scopes (allgemein):** Zur Abbildung sonstiger Betrachtungsgegenstände, wie z.B. Projekte.

### Prozessobjekte

- **Verarbeitungstätigkeiten:** Dokumentation der Verarbeitungstätigkeiten zum Aufbau des Verzeichnisses der Verarbeitungstätigkeiten..
- **Datenübertragungen:** Erfassung der konkreten Datenübertragungen.
- **Datenschutz-Folgeabschätzungen:** Durchgeführte Datenschutz-Folgenabschätzungen.

### Assetobjekte

- **Datenarten:** In Verarbeitungstätigkeiten, Datenübertragungen oder Anwendungen verarbeitete Informationen.
- **Anwendungen:** Anwendungen, in den (personenbezogene) Daten verabeitet werden.
- **IT-Systeme:** Systeme, auf oder mit denen (personenbezogene) Daten verabeitet werden..

### Personenobjekte

- **Datenschutzbeauftragte:** Zur Dokumentation der Bestellung von mit dem Datenschutz betrauten Personen.
- **Personen:** Personen(gruppen) oder Rollen.

### Incidentobjekte

- **Datenschutzvorfälle:** Zur Dokumentation von Incidents/Vorfällen.

### Dokumentenobjekte

- **Verträge:** Zur Speicherung von Veträgen.
- **Dokumente (allgemein):** Zur allgemeinen Dokumentation.
- **Betroffenenanfragen:** Zur Dokumentation von Anfragen Betroffener.

### Controlobjekte

- **TOMs:** Generische Technisch-Organisatorische Maßnahmen.

### Szenarien

- **Gefährdungen:** Datenschutzgefährdungen zur Verwendung in der Risikoanalyse.

## Katalog

Der Katalog der Domäne DS-GVO stellt grundlegende Technisch-Organisatorische Maßnahmen und Datenschutzgefährdungen zur Verfügung.

## Profile

Das Profil **Beispieldaten** erstellt eine Beispielorganisation mit allen wichtigen Elemente für die Abbildung der DS-GVO in verinice. In Ihrer aktiven Unit werden Verarbeitungstätigkeiten, Auftragsverarbeiter, Auftraggeber, Datenschutz-Folgenabschätzungen, Datenschutzvorfälle, Betroffenenanfragen, TOMs sowie weitere Beispielobjekte angelegt, um verinice mit alle Datenschutzrelevanten Funktionen kennenzulernen.

## Decisions

Im Objekt Verarbeitungstätigkeit wird die [Erfordernis einer Datenschutz-Folgenabschätzung](./data-processing#datenschutz-folgenabschätzung-dsfa-erforderlich) durch eine Decision unterstützt.

## Reports

Die Domäne DS-GVO stellt die folgenden Reports bereit:

- **Verzeichnis der Verarbeitungstätigkeiten:** Eine detaillierte Übersicht über die in einem Scope durchgeführten Verarbeitungstätigkeiten.
- **Datenschutz-Risikoanalyse:** Über die bestehenden Risiken für die Verarbeitungstätigkeiten in einer verantwortlichen Stelle.
- **Datenschutz-Folgenabschätzung:** Eine Auflistung der Informationen zu durchgeführten Datenschutz-Folgenabschätzungen.
- **Auftragsverarbeitungen gemäß Art. 30 II DS-GVO:** Dokumentation über die Auftraggeber und für sie durchgeführte Verarbeitungstätigkeiten (Auftragsverarbeitung).
- **Betroffenenanfrage:** Eine detaillierte Darstellung einer dokumentierten Betroffenenanfrage.
- **Übersicht Betroffenenanfragen:** Eine Übersicht über die dokumentierten Betroffenenanfragen einer Verantwortlichen.
- **Meldeformular Datenschutzvorfall:** Eine detaillierte Übersicht über die dokumentierten Datenschutzvorfälle einer Verantwortlichen.

## Risikodefinition

Die Standard-Risikodefinition **Datenschutz-Risikoanalyse** (DSRA) enthält die Schutzziele Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit.
