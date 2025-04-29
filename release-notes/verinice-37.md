<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 37

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 37 zur Verfügung:

## Allgemeine Funktionen

**Status: Produktiv**

### Detailverbesserungen

- Ein Bestätigungsdialog informiert über angewendete Katalogelementen, es kann direkt zu den jeweiligen Katalogelementen navigiert werden:

![Angewendete Katalogelemente](/assets/release-notes/verinice-37-catalog.de.png)

### Fehlerbehebungen

- Die Änderung von Werten in Zahlenfeldern beim Scrollen mit dem Mausrad unter Windows wurde behoben.
- Scope-Objekte lassen sich jetzt auch dann speichern, wenn Sie einen Custom Link zu einem ihrer Teile besitzen.
- Beheben eines fehlerhaften Layout Overlays in der Unit-Verwaltung.
- Beim Aktualisieren eines Kataloges werden obsolete Objekte korrekt gelöscht.
- Kataloge werden korrekt aktualisiert, wenn Katalogelemente in Profilen referenziert sind.

### Produktpflege

- Nuxt/content Update auf Version 3.

### REST-API

- Die Endpunkte zum Erstellen und Ausführen von Suchen **/elementType/searches** wurden als veraltet (deprecated) markiert und werden in einem folgenden Release entfernt.

## Domäne IT-Grundschutz

**Status: Produktiv**

- Das Formular für **Informationssicherheitsvorfälle** wurde analog zur Domäne ISO erweitert, um alle erforderlichen Informationen dokumentieren zu können
- Im Report **A.3 Modellierung** werden jetzt auch die nicht verwendeten Bausteine ausgegeben.
