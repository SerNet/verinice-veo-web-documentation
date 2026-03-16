<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

Stand 16.03.2026 - Änderungen vorbehalten!

Die in der Roadmap ausgewiesenen Funktionen befinden sich in unterschiedlichen Status:

- <Badge type="info">Test</Badge> Veröffentlichung bevorstehend (vorbehaltlich erfolgreicher Testphase).
- <Badge type="danger">Entwicklung</Badge> Veröffentlichung absehbar (abhängig von der Komplexität).
- <Badge type="warning">Planung</Badge> Veröffentlichung geplant.
- <Badge type="tip">Idee</Badge> Veröffentlichung unbestimmt.

## Q1 2026

### OnPrem-Betrieb <Badge type="info">Test</Badge>
<!-- &294 -->
Beta-Projekte und Rollout des OnPrem-Betriebs in zwei Installationsvarianten:
- Helm-Chart für native Kubernetes-Cluster.
- Virtuelle Appliance mit Talos Linux für Kubernetes.

### Migration IT-Grundschutz und Datenschutz <Badge type="info">Test</Badge>
<!-- &305 -->
Migration von IT-Grundschutz und Datenschutz aus verinice zu verinice.veo.

### Konfliktfreie Domain-Updates <Badge type="danger">Entwicklung</Badge>
<!-- &59, &302, &299, &233 -->
Um beim Update von Domänen eventuelle Konflikte (Breaking Changes) manuell lösen zu können, müssen diese identifiziert und dargestellt werden.

### Control-Umsetzung <Badge type="danger">Entwicklung</Badge>
<!-- &261 -->
Die Dokumentation der Umsetzung von Controls wird erweitert um:
- die Verknüpfung der verantwortlichen Personen.
- die Verknüpfung von Nachweisdokumenten.

![Umsetzungsdokumentation erweitern](/assets/roadmap/verinice-49-ri-dialog.de.png)

### Anwendbarkeit von Controls (SoA) <Badge type="danger">Entwicklung</Badge>
<!-- &208 -->
Um die Anwendbarkeit von Controls (SoA) in allen Domänen spezifisch abbilden zu können, wird der zugehörige Dialog als konfigurierbares Formular implementiert.

### Erweiterung der Suchfunktion <Badge type="info">Test</Badge>
<!-- &290 -->
Die zweite Iteration der Suchfunktion integriert die Kriterien des Filterdialogs:

![Suchfunktion](/assets/roadmap/verinice-49-search.de.gif)

### Deutsche ISO 27005 <Badge type="danger">Entwicklung</Badge>
<!-- &300 -->
In der Domäne ISO 27001 (DE) muss die inzwischen verfügbare deutschsprachige Version der ISO 27005 berücksichtigt werden.

### Domäne ISO 27001 (INT) <Badge type="danger">Entwicklung</Badge>
<!-- &248 -->
Erstellung der internationalen Version der ISO-Domäne.

### Domäne NIS2 (DE) und NIS2UmsuCG <Badge type="danger">Entwicklung</Badge>
<!-- &110, &303 -->
Erweiterung der Domäne NIS2 (DE) um die Anforderungen aus dem deutschen Umsetzungsgesetz (NIS2UmsuCG).

### IT-Grundschutz-Profil UAS <Badge type="danger">Entwicklung</Badge>
<!-- &307-->
Bereitstellung des IT-Grundschutz-Profils UAS in vernice.

### Service für Hintergrundtasks <Badge type="danger">Entwicklung</Badge>
<!-- &103 -->
Um langlaufende Vorgänge wie das Anwenden von Profilen im Hintergrund ausführen zu können, werden diese in einen Service ausgelagert.

### Umstellung auf VueQuery Version 5 <Badge type="danger">Entwicklung</Badge>
<!-- 309 -->
Funktionale Verbesserung durch Upgrade auf VueQuery Version 5.

## Q2 2026

### C5-Hosting für verinice.cloud <Badge type="danger">Entwicklung</Badge>
<!--&246-->
Hosting von verinice.cloud unter den Auflagen des C5-Katalogs (Kriterienkatalog C5 – Cloud Computing Compliance Criteria Catalogue - Typ-2-Testat).

### Domäne Business Continuity Management <Badge type="danger">Entwicklung</Badge>
<!-- &306, &285, &258, &255-->
 (BSI-Standard 200-4 und ISO 22301)
- WHP, WAP und GFP in verinice
- Automatische Berechnung der MTPD und RTO
- Reports über die Ergebnisse der Notfallplanung

### Migration ISO, BCM, TISAX / VDA ISA <Badge type="danger">Entwicklung</Badge>
<!-- &216 aufteilen -->
Migration von Daten aus verinice zu verinice.veo in folgenden Iterationen:
- Domänen ISO 27001 und Datenschutz
- Domäne BCM
- Domäne TISAX / VDA ISA

### Domäne NIS2 (INT) <Badge type="danger">Entwicklung</Badge>
<!-- &249 -->
Internationale Version der Domäne NIS2.

### Domäne GDPR (INT) <Badge type="danger">Entwicklung</Badge>
<!-- &250 -->
Internationale Version der Domäne Datenschutz/DS-GVO.

### ISO-Katalog mit Controltexten <Badge type="warning">Planung</Badge>
<!-- &293 -->
Bereitstellung des Risikokataloges für die Domäne ISO 27001 mit den lizenzrechtlich verschlüsselten Controltexten.

### Erweiterung des CSV-Imports <Badge type="warning">Planung</Badge>
<!-- &313, &217 -->
Nächste Iteration des CSV-Imports für Freitextfelder.

### Erweiterung des Graph-View <Badge type="warning">Planung</Badge>
<!-- &311 -->
Erweiterung der Navigations- und Anzeigeoptionen für den Graph-View.

### Import von Units <Badge type="warning">Planung</Badge>
<!-- &304 -->
Import von Units, die auf dem gleichen Domain-Template basieren.

### Vererbung von Controls <Badge type="warning">Planung</Badge>
<!-- &67 -->
Control-/Bausteinmodellierung - Vererbung der Umsetzung auf Teile.

### User Light <Badge type="warning">Planung</Badge>
<!-- neu -->
Benutzer mit beschränkten Berechtigungen zur Erledigung spezifischer Aufgaben in verinice.

## 2. Halbjahr 2026

### Domäne Grundschutz++ <Badge type="warning">Planung</Badge>
<!-- &262 -->
Nächste Version des neuen Grundschutz++ unter Verwendung der Grundschutz++-Methodik und der Methodik zum Risikomanagement (vorbehaltlich der Verfügbarkeit).

### Scope-Berechtigungen <Badge type="warning">Planung</Badge>
<!-- &178 -->
Erweiterung des Rechte- und Rollenkonzepts auf Scopes (z.B. Informationsverbünde).

### Workflows <Badge type="warning">Planung</Badge>
<!-- neu -->
Abbildung von Workflows in verinice.

### Dashboard <Badge type="warning">Planung</Badge>
<!-- neu -->
Visualisierung von aggregierten Daten in verinice.

### Domäne TISAX / VDA ISA <Badge type="warning">Planung</Badge>
<!-- &153, &151, &190  -->
Abbildung der Domäne TISAX / VDA ISA mit Umsetzungsstatus als Reifegradmodell.

### Organisationsweite Controls <Badge type="warning">Planung</Badge>
<!-- &66 -->
Control-/Bausteinmodellierung - Organisationsweite Umsetzung von Controls.
