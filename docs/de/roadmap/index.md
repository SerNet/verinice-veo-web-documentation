<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

::: info Stand: 16. Oktober 2026
Änderungen vorbehalten! Diese Roadmap wird in dreiwöchigen Rhythmus aktualisiert und ist mit entsprechender Unschärfe versehen.
:::

## Q4 2026

## VNA-Import <Badge type="danger">Entwicklung</Badge>

Der Import von VNA-Dateien wird komplettiert um den Import in die Domänen:

- **Datenschutz** (aus der Perspektive ISO)
<!-- epics/364 -->
- **Business Continuity (BCM)** (aus den Perspektiven IT-Grundschutz und ISO)
<!-- epics/365 -->

Die ausführliche Beschreibung des Funktionsumfang finden Sie in der Dokumentation zum [VNA-Importer](../new-in-verinice/vna-importer.md).

### IT-Grundschutz-Profile <Badge type="danger">Entwicklung</Badge>
<!-- epics/380 -->

Bereitstellung der auf dem IT-Grundschutz-Kompendium in der **Edition 2023-1** basierenden **IT-Grundschutz-Profile**:

- IT-GS Profil für die Verkehrssteuerungs- und Leitsysteme der Bundesautobahn
- IT-GS-Profil Profil für oberste Bundesbehoerden
- IT-GS-Profil Profil für den Betrieb von UAS
- IT-GS-Profil Profil für Bundesgerichte
- IT-GS-Profil Profil für Ressort-Forschungseinrichtungen
- IT-GS-Profil zur Absicherung von 5G-Campusnetzen
- IT-GS-Profil für Leitstellen V 2.0 Edition 2023 
- IT-GS-Profil für die Nutzung der E-Akte Bund
- IT-GS-Profil für Hochschulen

::: warning Das IT-GS-Profil Basis-Absicherung Kommunalverwaltung Version 4 steht bereits zur Anwendung in verinice zur Verfügung.
:::

::: info Auf einer älteren Edition des IT-Grundschutz-Kompendiums basierende IT-Grundschutz-Profile können ggf. auf Anfrage bereitgestellt werden.
:::

### B3S Medizinische Versorgung <Badge type="danger">Entwicklung</Badge>
<!-- epics/379 -->

Bereitstellung des **Branchenspezifischen Sicherheitsstandard (B3S) für die medizinische Versorgung** in Version 1.3.1 als Profil für verinice.

### Workflow <Badge type="danger">Entwicklung</Badge>
<!-- epics/374 -->

In der ersten Iteration werden Aufgaben aus der **Umsetzung** von Controlobjekten und deren **Revision** als Workflow abgebildet. Eine neue Seite **Aufgaben** stellt alle **umzusetzenden** bzw. **zu prüfenden** Controls filterbar nach Verantwortlichkeit dar. Grundlage der neuen Funktionalität **Workflow** ist die neu einzuführende **Zuordnung von Benutzern zu Personenobjekten**.

### Reportformate <Badge type="warning">Planung</Badge>

Bereitstellung zusätzlicher Ausgabeformate für Reports (CSV, XLSX/ODS und DOCX/ODT, HTML):
- Ausgabe von Reports in den Formaten **DOCX** und **ODT** für die redaktionelle Bearbeitung, bevor diese finalisiert werden.<!-- epics/373 -->
- Erstellung weiterer Reportvorlagen in tabellarischer Form in den Formaten **CSV/XLSX/ODS** für die quantitative Weiterverarbeitung, Filterung und Sortierung von Daten.<!-- epics/372 -->
- Ausgabe aller Report-Templates im **HTML**-Format für die interne Bereitstellung (z.B. im Intranet) oder zur schnellen browserbasierten Ansicht ohne Zusatzsoftware.<!-- epics/371 -->

### Berechtigungsmanagement - Scopes <Badge type="warning">Planung</Badge>
<!-- epics/178 -->

Benutzergruppen können Lese- und Schreibberechtigungen auf Scope-Objekte vergeben werden, sodass auf Inhalte in anderen Scopes nicht zugegriffen werden kann. Diese Funktion ermöglicht feingliedrige Zugriffsberechtigungen auf z.B. Informationsverbünde, Geltungsbereiche oder Externe Dienstleister.

### Domäne Grundschutz++ <Badge type="warning">Planung</Badge>
<!-- epics/262 -->

Bereitstellung einer ersten funktionalen Domäne Grundschutz++ (DE) mit den Neuerungen in Methodik und Risikomanagement.

### Dashboard <Badge type="warning">Planung</Badge>
<!-- epics/315 -->

Ausgebaute Dashboardfunktionen um Daten visuell darzustellen.

Der Ausbau des Dashboard ist in mehreren Iterationen geplant:
- Grafische Darstellung der Umsetzungsstatus von Controls und der Risiken.
- Kalendarische Darstellung von Aufgaben und Fälligkeiten.
- Darstellung von Kennzahlen in Kacheln.
- Option zum Export der dargestellten Daten.

### Auditmanagement <Badge type="warning">Planung</Badge>
<!-- epics/375 -->

Abbildung von internen und externen Audits in verinice mit Delegation von Aufgaben und Überwachung im Rahmen des Workflows. Die Planung und Durchführung von internen und externen Audits wird über ein neues Scopeobjekt abgebildet.

## Q1 2027

### Berechtigungsmanagement - Objekte <Badge type="warning">Planung</Badge>
<!-- epics/395 -->

Benutzergruppen können Lese- und Schreibberechtigungen auf beliebige Objekte vergeben werden, sodass auf andere Objekte und deren Inhalt nicht zugegriffen werden kann. Diese Funktion ermöglicht feingliedrige Zugriffsberechtigungen für einzelne Objekte und Objektgruppen wie z.B. Geschäftsprozesse, Anwendungen oder IT-Systeme.
