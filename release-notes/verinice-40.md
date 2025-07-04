<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 40

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von verinice 40 zur Verfügung:

## Allgemeine Funktionen

### Mehrfachauswahl Domänenzuordnung

In der Objektübersicht können jetzt über die Mehrfachauswahl mehrere Objekte gleichzeitig einer weiteren Domäne zugeordnet werden:

![Mehrfachauswahl für Domänenzuordnung](/assets/release-notes/verinice-40-domain-association.de.gif)

### Barrierefreiheit

Die gesamte Oberfläche wurde im Hinblick auf die Barrierefreiheit überarbeitet und erfüllt die Anforderungen nach WCAG 2.1 AA:

![Barrierefreiheit Lighthouse](/assets/release-notes/verinice-40-lighthouse.de.png)

![Barrierefreiheit AXE Developer Tools](/assets/release-notes/verinice-40-axe.de.png)

::: info
Zur Aufrechterhaltung der Barrierefreiheit werden aktuell automatisierte Accessibility-Tests in den Entwicklungsprozess integriert und das Akzeptanzkriterium **Barrierefreiheit erfüllt** verpflichtend in den Abnahmeprozess aufgenommen.
:::

### Detailverbesserungen

* Banner Messages (z.B. Ankündigungen von neuen Releases) werden nach Bestätigung durch Anwendende geschlossen und nicht erst automatisch nach 10 Minuten.

### Fehlerbehebungen

* In der bereits mit verinice 39 veröffentlichten Einbindung von Domänenspezifischen Control-Details im Umsetzungs-Dialog wurde ein Problem mit der Anzeige einzelner Informationen behoben.
* Behebung eines Fehlers bei der Anzeige der Begründung zur Auswirkung (Schutzbedarf bzw. Business Impact).
* Kleiner Fehlerbehebungen im Rahmen der Feature Flags.
* Behebung von Fehlern und Vereinheitlichung des Layouts bei Seitentiteln (H1-Header).

### Produktpflege

* Nuxt und zugehörige Pakete wurde auf neuere Versionen aktualisiert.

## Domäne ISO

**Status: Private Beta**

### Dokumentation

Erste Version der Benutzerdokumentation für die Domäne ISO.
