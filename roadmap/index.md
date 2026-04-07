<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Roadmap

Stand 2026-04-07 - Änderungen vorbehalten!

Die in der Roadmap ausgewiesenen Funktionen befinden sich in unterschiedlichen Status:

- <Badge type="info">Test</Badge> Veröffentlichung bevorstehend (vorbehaltlich erfolgreicher Testphase).
- <Badge type="danger">Entwicklung</Badge> Veröffentlichung absehbar (abhängig von der Komplexität).
- <Badge type="warning">Planung</Badge> Veröffentlichung geplant.
- <Badge type="tip">Idee</Badge> Veröffentlichung unbestimmt.

## Q2 2026

### VNA-Importer IT-Grundschutz und Datenschutz <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/305 -->

Bereitstellung des VNA-Importers zur Migration von Daten in die Domänen IT-Grundschutz und Datenschutz.

### Suche ersetzt Filter <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/290 -->

Die Erweiterung der Suchfunktion ersetzt die bisherige Filterfunktion.

### Anwendbarkeit (SoA) besser dokumentieren <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/208 -->

Die Anwendbarkeit (SoA) soll im Scopeobjekt in der Control-Implementation (CI) für die einzelnen Controls besser dokumentiert werden können.

### Unterstützung von Registry Mirroring für den OnPrem-Betrieb <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/326 -->

Bei Kunden mit einer Air-Gapped Umgebung haben Kubernetes-Umgebungen keinen Zugriff auf das Internet und verwenden geklonte Images aus einer Unternehmenseigenen Registry (statt einer öffentlich erreichbaren). Es soll eine eigene Registry unkompliziert in der values-Datei gesetzt werden können.

### Ersteinrichtung OnPrem automatisieren <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/317 -->

Manuelle Schritte in der Ersteinrichtung sollen reduziert werden, sodass idealerweise alles über die values.yaml und ähnliche Mechanismen gesteuert werden kann.

### Helm Chart OpenShift-fähig machen <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/316 -->

OpenShift hat viele Eigenheiten, wodurch das Anwenden von Helm Charts in OpenShift-Kubernetes-Umgebungen zusätzliche Schritte erfordert. Das verinice-Chart soll funktionsfähig in OpenShift-Umgebungen werden.

### Formulare für die Notfallplanung optimieren (WHP, WAP, GFP) <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/306 -->

In der Domäne BCM wird die Erstellung von Wiederherstellungsplänen, Wiederanlaufplänen und Geschäftsfortführungsplänen durch verbesserte Erfassung der erforderlichen Informationen vereinfacht.

### NIS2 (INT) an die NIS2 (DE) angleichen <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/303 -->

Die NIS2 (DE) Domäne ist die Domäne, die das nationale deutsche NIS2UmsuCG abbildet. Sie ist entstanden aus der NIS2 (INT), die bereits seit Ende 2024 angeboten wird. Anpassungen an das NIS2UmsuCG müssen in der Domäne NIS2 (INT) soweit relevant nachgezogen werden.

### Domänen bereinigen (Content-Deployment) <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/302 -->

Zur Bereinigung der Domänen sind die verschiedene Content-Deployments durchzuführen.

### Deutsche ISO 27005 in Domäne ISO 27001 (DE) berücksichtigen <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/300 -->

In der Domäne **ISO 27001 (DE)** muss die deutschsprachige Version der ISO 27005 berücksichtigt werden.

### Umsetzung domänenübergreifend erweitern <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/261 -->

Die Dokumentation der Umsetzung von Anforderungen soll domänenübergreifend erweitert werden.

### Neue Domäne GDPR (INT) <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/250 -->

Erstellung der englischsprachigen Domäne **GDPR (INT)** für die international gültige Ausprägung der DS-GVO.

Ausweitung auf internationale Datenschutz-Anwenderinnen und -Anwender.

### Neue Domäne NIS2 (INT) <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/249 -->

Erstellung der englischsprachigen Domäne **NIS2 (INT)** für die international gültige Ausprägung der NIS2.

Ausweitung auf internationale NIS2-Anwenderinnen und -Anwender.

### Neue Domäne ISO 27001 (INT) <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/248 -->

Erstellung der englischsprachigen Domäne **ISO 27001 (INT)** für die international gültigen ISO-EN-Normen.

### OS/FS Dokument domänenübergreifend vereinheitlichen <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/233 -->

Der allgemeingültige Subtyp **Dokument** soll domänenübergreifend vereinheitlicht werden, um das domänenübergreifende Arbeiten für alle Anwenderinnen und Anwender zu vereinfachen.

### Konfliktfreie Domain-Updates <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/59 -->

Neuerungen an Domänen können die Migration von bereits existierenden Daten erfordern. Eventuell auftretende Konflikte sollen erkannt und angezeigt werden, damit diese von Anwenderinnen und Anwendern aufgelöst werden können.

### Umzug zu SysEleven (C5) <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/246 -->

Umzug des Hostings zu SysEleven zur Sicherung einer performanteren und besseren Betriebsumgebung (C5) für verinice.cloud.

### Domäne NIS2 (DE) an Umsetzungsgesetz anpassen <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/110 -->

Berücksichtigung der organisationrelevanten Aspekte nach dem deutschen Umsetzungsgesetz (NIS2UmsuCG) in der Domäne NIS2 (DE).

## Q3 2026

### Visuelles Dashboard <Badge type="warning">Planung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/315 -->

Das Dashboard soll Daten visuell/grafisch darstellen.

### Graph-View erweitern <Badge type="warning">Planung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/311 -->

Erweiterung der visuelle Darstellung von Verknüpfungen (Graph-View).

## Q4 2026

### Informationen besser strukturieren <Badge type="warning">Planung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/329 -->

Für alle Objekte und Subtypen sollen primär (und sekundär) wichtige Informationen sowohl textlich als auch bildlich wiedererkennbar präsentiert werden. Die Informationen sollen in Tabellen (v-data-table) und Karten (v-card) möglichst konsistent dargestellt werden, soweit die unterschiedlichen Darstellungformen dies ermöglichen.

### Verbesserungen OnPrem-Betrieb <Badge type="danger">Entwicklung</Badge>

<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/318 -->

Weitere Verbesserungen für den OnPrem-Betrieb Helm-Chart und Talos-VM.
