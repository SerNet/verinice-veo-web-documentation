<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

Stand: 15. Juli 2026 - Änderungen vorbehalten!

## Q3 2026

### VNA-Import

VNA-Import von verinice.PRO zu verinice.onprem oder verinice.cloud für IT-Grundschutz, Datenschutz, ISO und BCM inklusive der IT-Grundschutz-Profile, B3S Khs., Mindeststandards des BSI, Kriterienkatalog C5.
- Bereitstellung des VNA-Importers zur Migration von Daten in die Domänen IT-Grundschutz und Datenschutz. <Badge type="info">Test</Badge>
- Bereitstellung des VNA-Importers zur Migration von Daten in die Domänen ISO und Datenschutz. <Badge type="danger">Entwicklung</Badge>
<!-- epics/364 -->
- Bereitstellung des VNA-Importers zur Migration von Daten in die BCM-Domänen. <Badge type="warning">Planung</Badge>
<!-- epics/365 -->

### Ausbau des Berechtigungsmanagements <Badge type="warning">Planung</Badge>
<!-- epics/178 -->

Das Berechtigungsmanagement unterstützt Kreuzreferenzen über Units, um den Zugriff auf Units analog zu den Informationsverbünden in verinice.PRO abzubilden. In weiteren Ausbaustufen werden die Berechtigungen (Rechte und Rollen) auf z.B. Scopeobjekte erweitert.

### Workflow <Badge type="warning">Planung</Badge>
<!-- epics/374 -->
Erstellung von Aufgaben für beliebige Objekte, z.B. als zwischen Usern delegierbare und rück-delegierbare Fragebogen-Objekte.

### Reportformate <Badge type="warning">Planung</Badge>

Bereitstellung zusätzlicher Ausgabeformate für Reports (CSV, XLSX/ODS und DOCX/ODT, HTML):
- Ausgabe von Reports in den Formaten **DOCX** und **ODT** für die redaktionelle Bearbeitung, bevor diese finalisiert werden.<!-- epics/373 -->
- Erstellung weiterer Reportvorlagen in tabellarischer Form in den Formaten **CSV/XLSX/ODS** für die quantitative Weiterverarbeitung, Filterung und Sortierung von Daten.<!-- epics/372 -->
- Ausgabe aller Report-Templates im **HTML**-Format für die interne Bereitstellung (z.B. im Intranet) oder zur schnellen browserbasierten Ansicht ohne Zusatzsoftware.<!-- epics/371 -->

### Auditmanagement <Badge type="warning">Planung</Badge>

Abbildung von internen und externen Audits in verinice mit Delegation von Aufgaben und Überwachung im Rahmen des Workflows. Die Planung und Durchführung von internen und externen Audits wird über ein neues Scopeobjekt abgebildet.

## Q4 2026

### Unit-Export in Unit-Verwaltung <Badge type="danger">Entwicklung</Badge>

Units können direkt aus der Unit-Verwaltung heraus exportiert werden.

### Business-Continuity-Management Beispieldaten <Badge type="danger">Entwicklung</Badge>
<!-- epics/253 -->

Beispiel-Units und -Profile für die BCM-Domänen, z.B. das BCM-Profil für Hochschulen.

### Dashboard <Badge type="warning">Planung</Badge>
<!-- epics/315 -->

Ausgebaute Dashboardfunktionen um Daten visuell darzustellen.

Der Ausbau des Dashboard ist in mehreren Iterationen geplant:
- Grafische Darstellung der Umsetzungsstatus von Controls und der Risiken.
- Kalendarische Darstellung von Aufgaben und Fälligkeiten.
- Darstellung von Kennzahlen in Kacheln.
- Option zum Export der dargestellten Daten.

### Domäne Grundschutz++ <Badge type="warning">Planung</Badge>
<!-- epics/262 -->

Bereitstellung einer ersten funktionalen Domäne Grundschutz++ (DE) mit den Neuerungen in Methodik und Risikomanagement.
