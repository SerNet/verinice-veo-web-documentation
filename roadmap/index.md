<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Roadmap

Die in der Roadmap ausgewiesenen Funktionen befinden sich in unterschiedlichen Status:

- <Badge type="info">Test</Badge> Veröffentlichung bevorstehend (vorbehaltlich erfolgreicher Testphase).
- <Badge type="danger">Entwicklung</Badge> Veröffentlichung absehbar (abhängig von der Komplexität).
- <Badge type="warning">Diskussion</Badge> Veröffentlichung geplant (Verschiebungen möglich).
- <Badge type="tip">Planung</Badge> Veröffentlichung unbestimmt (Verschiebungen wahrscheinlich).

## Q1 2026

<!-- verinice 49 Anfang -->

### Änderung der Risikodefinition verbessern<Badge type="info">Test</Badge>
<!--301-->
Das **Löschen** *mittlerer Stufen* von Auswirkung, Eintrittswahrscheinlichkeit oder Risikowerten in einer Risikodefinition führt zu Verschiebungen von Risikowerten in bereits bestehenden Risiken und erfordert manuelle Nacharbeiten. Um das unbeabsichtigte Löschen zu vermeiden, kann nur noch die jeweils höchste Stufe gelöscht werden. Die Umbenennung aller Stufen ist nach wie vor möglich.

![Löschen von Stufen in der Risikodefinition](/assets/roadmap/verinice-49-risikodefinition.de.png)

::: danger Jede Anpassung einer Risikodefinition bedingt Änderungen an bereits bestehenden Risiken. Es ist empfohlen, die Risikodefinition **vor**  der Risikobewertung auf die jeweilige Organisation anzupassen!
:::

Darüber hinaus wurden folgende Fehler behoben: 
- Das Frontend berücksichtigt, dass eine Risikodefinition mindesten ein Kriterium (Schutzziel) enthalten muss.
- Eine Risikodefinition kann jetzt gespeichert werden, wenn eine Risikostufe gelöscht wird, sofern diese in keiner Matrix mehr verwendet wird.

### Reports als Karten <Badge type="info">Test</Badge>
<!--&240-->
Reports werden in separaten Karten je Sprachvariante dargestellt, um die Auswahl zu vereinfachen:
![Reports als Karten](/assets/roadmap/verinice-49-report-cards.de.png)

### Detailverbesserungen und Fehlerbehebungen <Badge type="info">Test</Badge>
<!--&264, &186-->
- Die Dokumentation für das Berechtigungsmanagement wurde aktualisiert. 
- Der Report **A.3 Modellierung** in der Domäne IT-Grundschutz (DE) liest die neue Property ```complianceControlSubTypes``` aus.
- Die veraltete Property ```complianceControlSubType``` wurde entfernt (zuvor abgelöst von ```complianceControlSubTypes```).
- Behebung des 404-Fehler (Objekt nicht gefunden) unter **Meine zuletzt bearbeiteten Objekte**, wenn das Objekt in einer anderen Domäne erzeugt wurde.
- Der Inhalt des IT-Grundschutz-Kompendiums und anderer Controls im Umsetzungsdialog ist jetzt auch im Dunkel-Modus (Darkmode) lesbar.
- Anzeige fehlender Übersetzungen bei Profilen im **Unit erstellen** Wizard.
- An den Report-Service werden Standardbenutzer und Standardpasswort des angemeldeten Benutzers übergeben.
- Upgrade auf VueQuery Version 5.
- Update auf Cypress 15
- Update vue-tsc auf v3.1.8

<!-- verinice 49 Ende ???-->

### Visuelle Darstellung von Verknüpfungen <Badge type="info">Test</Badge>
<!--&225-->
Die erste Iteration der visuellen Darstellung der Verknüpfungen ermöglicht die Navigation zu direkten *Nachbarn* :

![Graph Navigation](/assets/roadmap/verinice-49-graph-1.de.gif)

![Graph Zoom](/assets/roadmap/verinice-49-graph-2.de.gif)

### Erweiterung der Suchfunktion <Badge type="info">Test</Badge>
<!--&290-->
Die zweite Iteration der **Suchfunktion** integriert die Kriterien des Filterdialogs:

![Suchfunktion](/assets/roadmap/verinice-49-search.de.gif)

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

### ISO-Katalog mit Controltexten <Badge type="tip">Planung</Badge>
<!--&293-->
Bereitstellung des Risikokataloges für die Domäne ISO 27001 mit den lizenzrechtlich verschlüsselten Controltexten.

## 2. Halbjahr 2026

### Berechtigungsmanagement <Badge type="tip">Planung</Badge>
<!--&178-->
Erweiterung des Rechte- und Rollenkonzepts auf Scopes (z.B. Informationsverbünde). <!-- &178 -->
