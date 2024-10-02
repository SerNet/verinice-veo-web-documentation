# Roadmap

::: details Geplante Meilensteine
- **Public** Beta Domäne **IT-Grundschutz**: Ende Oktober 2024
- **Private** Beta Domäne **NIS-2**: Oktober 2024
- **Private** Beta Domäne **TISAX**: Oktober 2024
- **Private** Beta Domäne **ISO**: Q4 2024

**Stand: 2. Oktober 2024**
:::

Das verinice.Team arbeitet aktuell an den folgenden Features und Funktionen:

## Allgemeine Funktionen

### Statusinformation

Um Anwenderinnen und Anwender über Wartungsarbeiten und Aktualisierungen zu informieren, werden in verinice Systemnachrichten mit entsprechendem Inhalt erstellt.

Eine Statusseite informiert falls erforderlich über weitere Details.

### Hintergrundprozesse

Um ein kontinuierliches Arbeiten in verinice zu gewährleisten, werden Prozesse, die trotz Performanceoptimierung länger als wenige Sekunden laufen, im Hintergrund ausgeführt und Anwendende über Fortschritt und Erfolg informiert.

### Karten statt Tabellen

Um die Vielzahl an Detailinformationen zu einzelnen Objekten aussagekräftiger darzustellen, werden die aktuell genutzten Tabellenansichten sukzessive durch **Karten** ersetzt:

![Beispiel-Karte Unit](/assets/roadmap/karte-unit.de.png)

### Mehrfachauswahl

Mit Umstellung auf *Karten* wird die **Mehrfachauswahl (Multi-Select)** von Objekten unterstützt, um Aktionen auf mehrere Objekte zugleich anzuwenden.

### Business Intelligence

Um die Auswertung von Daten mit *Business Intelligence Lösungen* zu ermöglichen, werden die Daten mittels **verinice2BI Connector** aufbereitet und lokal zur Verfügung gestellt:

Beispielanbindung [Metabase (Open Source)](https://www.metabase.com/):

![verinice2BI Connector](/assets/roadmap/verinice2BI.de.png)

### Anpassbare Risikodefinition

Die Risikodefinition wird in mehreren Iterationen für Anwenderinnen und Anwender anpassbar:

- Erweiterung der Risikomatrix

    (Auswirkung, Eintrittswahrscheinlichkeit, Risikokategorien)

- Konfiguration/Erweiterung der Schutzziele
- Mehrere Risikodefinitionen je Domäne

### Dokumentation

Die Dokumentation wird inhaltlich aktualisiert und internationalisiert (EN).

## Domäne IT-Grundschutz

### Strukturanalyse

Die **eingehenden Links** von anderen Objekten müssen sinnvoll dargestellt werden.

### Risikoanalyse

Darstellung und Bearbeitung der risikomitigierenden Maßnahmen wird intuitiver gestaltet, der Umsetzungsstatus kann gesetzt werden.

## Domäne DS-GVO

### Schemabereinigung

Bereinigung des Objektschema und ggfs. Migration von bestehenden Kundendaten zur vollen Unterstützung des Multi-Domain-Betriebs.

### Schutzbedarf

Abbildung der Schutzbedarfsdefinition, -zuordnung und -vererbung.

### Reports

Internationalsisierung der Datenschutz-Reports (EN).

## Domäne NIS-2

### Schutzbedarfsvererbung

Der Schutzbedarf kann entsprechend der Verknüpfungen auf notwendige Prozesse und Assets vererbt werden.

## Domäne ISO

Erstellung eines ersten Prototypen (Objekte, Subtypen und Formular).

## Domäne TISAX

Erstellung eines ersten Prototypen (Objekte, Subtypen und Formular).
