<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 33

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 33 zur Verfügung!

::: danger Falls nach Release von verinice in der produktiven Umgebung Fehler erkannt werden, dokumentieren wir diese bis zur Behebung im verinice.Forum unter [Known Issues](https://forum.verinice.com/c/veo/known-issues/87)!
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

### Abbildung der Verknüpfungen

In der Objektansicht werden eingehende und ausgehende Verknüpfungen mit Angabe des Verknüpfungstyps in einer Ansicht dargestellt:

![Verknüpfungen](/assets/release-notes/verinice-33_Links.de.png)

### Detailverbesserungen

- Der Warnhinweis zur Neuberechnung der Risikowerte im Risikodialog wird nur noch nach Änderungen angezeigt.
- Lizenzbestimmungen für die Dokumentation komplettiert und aktualisiert.
- Domänenspezifische Inhalte können bei der Erstellung von Domänen per Config-Datei definiert werden.

### Fehlerbehebungen

- Darstellung des Subtypen in den Breadcrumbs korrigiert, wenn in der Objektübersicht der generische Subtyp **Alle** ausgewählt ist.
- Falsches Icon für die Domänenauswahl bei eingeklapptem Menü korrigiert.
- Enter/Eingabe im **Unit erstellen** Assistenten führt auf die nächste Seite.
- Auswahl eines Links im Formular öffnet jetzt korrekt das Ziel in einem neuen Browser-Tab.

![Custom Link öffnen](/assets/release-notes/verinice-33_Custom_Link.png)

- Darstellungsfehler in Breadcrumb behoben.
- Bereitstellung der Risikowerte und Übersetzungen im Formschema-Editor verbessert.

### Produktpflege

- Update des Vue Frameworks auf auf Nuxt 3.15.1.
- Upgrade des Nuxt i18n Moduls auf Version 9 und Migration der Übersetzungen.
- Ausweitung der Testabdeckung durch weitere automatisierte Tests.

## Domäne Datenschutz

**Status: Produktiv**

- Der Umgang mit Gefährdungen in der DS-GVO wurde verbessert:
    - Gefährdungen werden nur noch einmal in der Unit angewendet.
    - In der DS-GVO Beispielorganisation wurden einige doppelte Gefährdungen gelöscht.
- Die Maßnahmenbeschreibung für den Subtyp TOM wird in einem Markdown-Feld dargestellt. Die bisherige Beschreibung bleibt aus Konsistenzgründen unberührt.
- Reale Domains/URLs aus Beispieldaten entfernt.

## Domäne IT-Grundschutz

**Status: Produktiv**

- Die Vorgehensweise der Absicherung wird jetzt auch bei der Umsetzung risikomitigierender Maßnahmen angezeigt:

![Vorgehensweise der Absicherung](/assets/release-notes/verinice-33_Vorgehensweise_der_Absicherung.de.png)

- Konsistente Benennung des Umsetzungsstatus **Entbehrlich** (statt nicht anwendbar).

## Domäne NIS2

**Status: Produktiv**

- Control- und Maßnahmenbeschreibung werden für die Subtypen Mindestmaßnahmen und Organisationsspezifische Maßnahmen in einem Markdown-Feld dargestellt.

## Domäne ISO

**Status: Prototyp**

- Abbildung von Szenarien, Bedrohungen und Schwachstellen.
- Erstellung des Risikokataloges (Konvertierung aus verinice und Anpassung an verinice.veo).

## Domäne TISAX

**Status: Private Beta**

- Umstrukturierung der VDA ISA Controls und Subtypen.

## Domäne BCM

**Status: Prototyp**

- Beschreibung der Quellunits für Domäne, Katalog und Profil erstellt.
- BCM-Anforderungskatalog importiert.
