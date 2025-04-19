<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 28

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 28 zur Verfügung:

## Allgemeine Funktionen

**Status: Produktiv**

### Statusseite

![Statusseite](/assets/roadmap/statusseite.de.png)

Über die neue [Statusseite](https://status.sernet.net/) der SerNet GmbH (optional erreichbar über [Status](https://verinice.com/)) können Anwenderinnen und Anwender von verinice ersehen:

- ob und warum der Zugriff auf verinice im Falle von Downtime nicht möglich ist bzw. war.
- wann geplante [Wartungsarbeiten](https://verinice.com/produkte/veo/verinicecloud) in verinice anstehen.

::: info Wird in Kürze durch **Benachrichtigungen** über anstehende Wartungsarbeiten bzw. Updates mit oder ohne Downtime in verinice selbst erweitert!
:::

### Performanceverbesserung

Das **Löschen von sehr großen Units** wurde soweit beschleunigt, dass nicht mehr mit Timeouts zu rechnen ist. In einigen wenigen Fällen kam es bisher zu Timeouts. (Die Units waren allerdings nach 1-2 Minuten gelöscht und wurden nach Browser-Reload dann nicht mehr angezeigt).

### Detailverbesserungen und Fehlerbehebungen

![Profilbeschreibung](/assets/roadmap/profile.de.png)

- Verbesserung der Profilbeschreibung bei der Anwendung von Profilen auf neue oder bestehende Units.
- Optimierung der Breadcrumbs.
- Stabilitätsverbesserung und Ausweitung der automatischen End-2-End Tests.
- Diverse kleinere Performance- und Stabilitätsverbesserungen der REST API.

## Domäne Datenschutz

**Status: Produktiv**

Keine Neuerungen.

## Domäne IT-Grundschutz

**Status: Private Beta**

### Verbesserung der Modellierung

Die in der Objektübersicht mit verinice 27 eingeführte Suche steht jetzt auch bei der Modellierung von Bausteinen und in Katalogen zur Verfügung:

- Bei der **Modellierung von Bausteinen** kann nach Abkürzung, Name und Anzeigename gesucht werden.
- Im Katalog **IT-Grundschutz-Kompendium** kann nach Abkürzung und Name gesucht werden.

![Suche](/assets/roadmap/suche.de.gif)

### Erweiterung der Schutzbedarfsvererbung

Der Schutzbedarf kann jetzt von den Prozessobjekten **Geschäftsprozesse** und **Fachverfahren** auf **erforderliche Räume** vererbt werden.

### Modellierung in beide Richtungen darstellen

Die bisherige Darstellung, welche Bausteine an welchem Zielobjekt modelliert sind, wurde ergänzt um die *Rückrichtung*. Unter **Baustein > Zielobjekte** wird neu dargestellt, an welchen Zielobjekte der jeweilige Baustein modelliert ist.

## Domäne NIS2

**Status: Prototyp**

Keine Neuerungen.

## Domäne ISO

**Status: Prototyp**

Keine Neuerungen.

## Domäne TISAX

**Status: Prototyp**

Keine Neuerungen.
