# verinice 26

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 26 zur Verfügung!

::: details Warum sehe ich nicht alle Neuerungen?

Neue Funktionen und insbesondere ganze Domänen durchlaufen verschiedene Release-Phasen:

**Prototyp:** Diese Funktionen befinden sich in Entwicklung und sind nur intern verfügbar.

**Private Beta:** Diese Funktionen stehen einer geschlossenen Gruppe von Testenden zur Verfügung.

**Public Beta:** Diese Funktionen stehen allen Anwenderinnen und Anwendern für Tests zur Verfügung.

**Produktiv:** Diese Funktionen stehen allen Anwenderinnen und Anwendern zur produktiven Nutzung zur Verfügung, sofern die jeweilige Domäne im gewählten Plan enthalten ist!
:::

## Allgemeine Funktionen
**Status: Produktiv**

### Verbesserte Unitverwaltung

- Durch die Umstellung der Unitverwaltung von Tabellen auf Listen (Karten) wird der Inhalt von Units transparenter dargestellt - es ist auf einen Blick erkennbar, welche Domänen der Unit zugeordnet sind.
- Das Anlegen neuer Units erfolgt in einem Assistenten, der die Zuordnung von Domänen und das Anwenden von Profilen vereinfacht.
- Die Bearbeitung von Units ist intuitiver, insbesondere hinsichtlich der Zuordnung von Domänen und dem Anwenden von Profilen.

### Anpassung des Versionschema

- Mit **verinice 26** wird das Versionierungsschema von **1.21** auf **26** angepasst! 

### Detailverbesserungen und Fehlerbehebungen

- Tutorials und Dokumentation wurden auf den aktuellen Stand gebracht.
- In der Objektansicht wurde der Header entfernt und redundante Informationen in die Breadcrumb übernommen.
- Risikomitigierende Maßnahmen können gelöscht werden.
- Das Icon für die Risikobehandlung wird im Reiter Risiken in der Objektansicht wieder angezeigt.
- Fehlerhafte Zeitangaben in Reports wurden durch Berücksichtigung der Zeitzone behoben.
- Multi-Domain-fähige History - beim Wiederherstellen von Objekten werden nur die Informationen wiederhergestelllt, die in der jeweiligen Domäne bearbeitet werden können.
- Zur Verbesserung der Performance werden Profile einzeln in Domänen verwaltet, die Verarbeitung großer Datenmengen wurde vereinfacht.
- Proof of Concept für den OnPrem-Betrieb per Appliance mit OpenShift erfolgreich abgeschlossen.

## Domäne Datenschutz
**Status: Produktiv**

- Keine Änderungen.

## Domäne IT-Grundschutz
**Status: Private Beta**

- Subtypen Familie und Schicht zur besseren Darstellung und Navigation der Bausteine ergänzt.
- Sortierung der Control-Subtypen an das IT-Grundschutz-Kompendium angepasst (Familie, Schicht, Baustein, Anforderung, Teilanforderung, Maßnahme).
- Subtyp Teilanforderung zur versuchsweisen Arbeit mit Teilanforderungen ergänzt.
- Abbildung der Vorgehensweise der Absicherung (Basis, Standard, Kern) im Informationsverbund.
- Bausteinmodellierung durch Profil - Erstellung eines Profils zur Modellierung des gesamten IT-Grundschutz-Kompendiums nach der Vorgehensweise Standard- oder Kernabsicherung.
- Implementierung der automatischen Schutzbedarfsvererbung.
- Gefährdungsübersicht erstellen - Nachladen der elementaren Gefährdungen, wenn eine Risikoanalyse durchzuführen ist.
- Erste Version der IT-Grundschutz Referenzdokumente A.1 bis A.6.
- Profil Basisabsicherung Kommunalverwaltung Version 3 erstellt.

## Domäne NIS2
**Status: Prototyp**

- Risikoanalyse in der Domäne NIS2 ergänzt.
- Risikodefinition um Authentizität als weiteres Schutzziel ergänzt.
- Entwicklung der Subtypen Anforderung und Maßnahme.
- Abbildung der organisations- und prozessspezifischen Anforderungen der NIS-2.
- Abbildung der Dokumentationsaspekte in der NIS-2.

## Domäne ISO
**Status: Prototyp**

- Erste Version des Objektschema für die Domäne ISO erstellt.

## Domäne TISAX
**Status: Prototyp**

- Erste Version des Objektschema für die Domäne TISAX erstellt.
