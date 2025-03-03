<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 34

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 34 zur Verfügung!

::: danger Falls nach Release von verinice in der produktiven Umgebung Fehler erkannt werden, dokumentieren wir diese bis zur Behebung im verinice-Forum unter [Known Issues](https://forum.verinice.com/c/veo/known-issues/87)!
:::

::: details Warum sehe ich nicht alle Neuerungen?

Neue Funktionen und insbesondere ganze Domänen durchlaufen verschiedene Release-Phasen:

**Prototyp:** Diese Funktionen befinden sich in Entwicklung und sind nur intern verfügbar.

**Private Beta:** Diese Funktionen stehen einer geschlossenen Gruppe von Testenden zur Verfügung.

**Public Beta:** Diese Funktionen stehen allen Anwenderinnen und Anwendern für Tests zur Verfügung.

**Produktiv:** Diese Funktionen stehen allen Anwenderinnen und Anwendern zur produktiven Nutzung zur Verfügung, sofern die jeweilige Domäne im gewählten Plan enthalten ist!
:::

## Allgemeine Funktionen

**Status: Produktiv**

### Mehrfachauswahl - Löschen

In der ersten Iteration der **Mehrfachauswahl** wird das **Löschen** mehrerer Objekte unterstützt.

![Mehrfachauswahl - Löschen](/assets/release-notes/verinice-34-bulk-delete.de.gif)

### Feature-Toggle

**Status: Private Beta:**

Durch Feature-Toggle können Anwenderinnen und Anwendern neue Funktionen in ausgewählten Umgebungen (z.B. Sandbox für Beta-Tests) bereitgestellt werden, um möglichst früh im Entwicklungsprozess Feedback entgegennehmen zu können. Als erstes Feature wird die Umschaltung zwischen Listen- und Kartenansicht ermöglicht.

![Feature-Toggle - Karten](/assets/release-notes/verinice-34-feature-toggle-cards.de.gif)

### Detailverbesserungen

- Domänenspezifische Inhalte können per Konfigurationsdateien angepasst werden (nur für Rolle **Content Creator**).

### Fehlerbehebungen


### Produktpflege

- Verbesserung der Internationalisierung (SFC - separation of concerns).


## Domäne Datenschutz

**Status: Produktiv**

- Erweiterung und Verbesserung der Dokumentation.

## Domäne IT-Grundschutz

**Status: Produktiv**



## Domäne NIS2

**Status: Produktiv**

In der Domäne NIS2 ist die **Durchführungsverordnung** (EU) 2024/2690 (Implementing Act) verfügbar:
- Die NIS Durchführungsverordnung wurde in den **Katalog der Domäne NIS2** integriert.
- Das **NIS2-Profil Domainwirtschaft** wurde unter Berücksichtigung der Durchführungsverordnung erweitert.

![NIS2 Durchführungsverordnung](/assets/release-notes/verinice-34-nis2-implementing-acts.de.png)

## Domäne ISO

**Status: Prototyp**

- Erstellung des Risikokataloges (Konvertierung aus verinice und Anpassung an verinice.veo).
- Unterstützung der automatisierten Schutzbedarfsvererbung.

## Domäne TISAX

**Status: Private Beta**

- Überarbeitung des Kataloges TISAX / VDA ISA.

## Domäne BCM

**Status: Prototyp**

- BCM GAP-Analyse/Self-Assessment-Funktion - Als Anwender möchte ich eine GAP-Analyse bzw. ein Self-Assessment im Rahmen des Business Continuity Managements (BCM) durchführen
- Bereitstellung des BCM Anforderungskataloges des BSI
