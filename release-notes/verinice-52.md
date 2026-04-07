<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 52

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von **verinice 52** zur Verfügung.

## Handling von Markdownfeldern verbessern
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/321 -->

Die Benutzung von Markdownfeldern soll insbesondere bei Katalogelementen (Controls, Szenarien, etc.) verbessert werden, indem sie:
- auch nach dem Erstellen bearbeitet werden können.
- per CSV-Import befüllt werden können.

## Verbesserungen OnPrem-Betrieb vor Roll-out
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/294 -->

Verbesserungen für den OnPrem-Betrieb vor dem offiziellen Roll-out (Helm-Chart und Talos-VM).

## Detailverbesserungen und Bugfixes (Uncommon valor)
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/268 -->

Detailverbesserungen und Bugfixes im Sprint **Uncommon valor**.

### Bugfix: Objekte aus anderen Units einsehbar
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4606 -->

Objekte aus einer Unit können nicht mit falscher UUID eingesehen werden.
### Bugfix: Risikowerte gehen verloren

<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4604 -->

Im Risikodialog werden die potentiellen Auswirkungen nicht immer korrekt geladen.

### Übersetzung des Domänennamens in der Domänenauswahl verwenden
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4556 -->

In der Domänenauswahl wird anstelle des Domänennamens die Übersetzung angezeigt.

### Manueller Test Objektansicht
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4505 -->

Manueller Test der Objektansicht inklusiver aller Funktionalitäten.

### Manueller Test Objektübersicht
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4504 -->

Manueller Test der Objektübersicht inklusiver aller Funktionalitäten.

### Bugfix: Origination in RI muss required sein
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4433 -->

Im Endpunkt `RequirementImplementationDto` ist die Origination optional, was fachlich keinen Sinn ergibt, da das Control auf irgendeiner Ebene umgesetzt sein muss. Das Feld muss required sein.

### Kompakteres Menü
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/3827 -->

Das Menü wird kompakter gestaltet um unnötiges Scrollen zu vermeiden.

## Erstellung der Dokumentation standardisieren
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/251 -->

Die Erstellung und Aktualisierung der verinice-Dokumentation soll für Content-Creator dokumentiert werden. Dieser aktuell nur intern genutzte Teil der Domänenentwicklung muss für zukünftiger Whitelabel-Nutzung standardisiert werden.
