<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Roadmap

Die in der Roadmap ausgewiesenen Funktionen befinden sich in unterschiedlichen Status:

- <Badge type="info">Test</Badge> Veröffentlichung bevorstehend (vorbehaltlich erfolgreicher Testphase).
- <Badge type="danger">Entwicklung</Badge> Veröffentlichung absehbar (abhängig von der Komplexität).
- <Badge type="warning">Planung</Badge> Veröffentlichung geplant.
- <Badge type="tip">Idee</Badge> Veröffentlichung unbestimmt.

## Q1 2026

<!-- verinice 49 Anfang ??? -->

### Visuelle Darstellung von Verknüpfungen <Badge type="info">Test</Badge>
<!--&225-->
Die erste Iteration der visuellen Darstellung der Verknüpfungen ermöglicht die Navigation zu direkten *Nachbarn* :

![Graph Navigation](/assets/roadmap/verinice-49-graph-1.de.gif)

![Graph Zoom](/assets/roadmap/verinice-49-graph-2.de.gif)

### Erweiterung der Suchfunktion <Badge type="info">Test</Badge>
<!--&290-->
Die zweite Iteration der **Suchfunktion** integriert die Kriterien des Filterdialogs:

![Suchfunktion](/assets/roadmap/verinice-49-search.de.gif)

<!-- verinice 49 Ende ???-->

### OnPrem-Betrieb <Badge type="info">Test</Badge>
<!--&294-->
Beta-Projekte und Rollout des OnPrem-Betriebs in zwei Installationsvarianten:
- Helm-Chart für native Kubernetes-Cluster.
- Virtuelle Appliance mit Talos Linux für Kubernetes.

### Migration verinice zu verinice.veo. <Badge type="info">Test</Badge>
<!---->
Migration von Daten aus verinice zu verinice.veo in folgenden Iterationen:

- Domänen IT-Grundschutz und Datenschutz
- Domänen ISO 27001 und Datenschutz
- Domäne BCM
- Domäne TISAX / VDA ISA

### Bessere Abbildung von Scopes und Teilen <Badge type="danger">Entwicklung</Badge>
<!--&298-->
Um die Orientierung zu verbessern werden in der Objektansicht:
- die Reiter **Scopes** und **Teile** zusammengefasst.
- die Reiter **In Scope** und **Teil von** zusammengefasst.
- ein kombinierter Dialog für Auswahl und Erzeugung von Objekten eingeführt. 

### Konfliktfreie Domain-Updates <Badge type="danger">Entwicklung</Badge>
<!-- &59, &257, &302-->
Um beim Update von Domänen eventuelle Konflikte (Breaking Changes) manuell lösen zu können, müssen diese identifiziert und behoben werden.


### Umsetzungsdokumentation erweitern <Badge type="danger">Entwicklung</Badge>
<!--&261-->
Die Dokumentation der Umsetzung von Controls wird erweitert um:

- die Verknüpfung der verantwortlichen Personen.
- die Verknüpfung von Nachweisdokumenten.

![Umsetzungsdokumentation erweitern](/assets/roadmap/verinice-49-ri-dialog.de.png)

### Service für Hintergrundtasks <Badge type="danger">Entwicklung</Badge>
<!--&103-->
Um langlaufende Vorgänge wie das Anwenden von Profilen im Hintergrund ausführen zu können, werden diese in einen Service ausgelagert.

### Anwendbarkeit von Controls (SoA) <Badge type="danger">Entwicklung</Badge>
<!--&208-->
Um die **Anwendbarkeit von Controls (SoA)** in allen Domänen spezifisch abbilden zu können, wird der zugehörige Dialog als konfigurierbares Formular implementiert.

### Domäne NIS2 (DE) an Umsetzungsgesetz anpassen<Badge type="danger">Entwicklung</Badge>
<!--110-->
Organisationrelevante Aspekte nach dem deutschen Umsetzungsgesetz (NIS2UmsuCG) werden berücksichtigt.

### Deutsche ISO 27005 berücksichtigen <Badge type="danger">Entwicklung</Badge>
<!--&300-->
In der Domäne ISO 27001 (DE) muss die inzwischen verfügbare **deutschsprachige Version der ISO 27005** berücksichtigt werden. Die aktuell englischsprachigen Bedrohungen und Schwachstellen müssen übersetzt werden.

### Weitere Domänen <Badge type="danger">Entwicklung</Badge>

Erstellung neuer Domänen:

- Domäne Business Continuity Management (BSI-Standard 200-4 und ISO 22301)
- Domäne Grundschutz++
- Domäne TISAX / VDA ISA

Erstellung der internationalen Versionen folgender Domänen:

- Domäne ISO 27001 (INT) <!--&248-->
- Neue Domäne NIS2 (INT) <!--&249-->
- Neue Domäne GDPR (INT) <!--&250-->

## Q2 2026

### ISO-Katalog mit Controltexten <Badge type="warning">Planung</Badge>
<!--&293-->
Bereitstellung des Risikokataloges für die Domäne ISO 27001 mit den lizenzrechtlich verschlüsselten Controltexten.

## 2. Halbjahr 2026

### Berechtigungsmanagement <Badge type="warning">Planung</Badge>
<!--&178-->
Erweiterung des Rechte- und Rollenkonzepts auf Scopes (z.B. Informationsverbünde). <!-- &178 -->
