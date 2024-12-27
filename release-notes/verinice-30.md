<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 30

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 30 **in Kürze** voraussichtlich zur Verfügung!

::: details Warum sehe ich nicht alle Neuerungen?

Neue Funktionen und insbesondere ganze Domänen durchlaufen verschiedene Release-Phasen:

**Prototyp:** Diese Funktionen befinden sich in Entwicklung und sind nur intern verfügbar.

**Private Beta:** Diese Funktionen stehen einer geschlossenen Gruppe von Testenden zur Verfügung.

**Public Beta:** Diese Funktionen stehen allen Anwenderinnen und Anwendern für Tests zur Verfügung.

**Produktiv:** Diese Funktionen stehen allen Anwenderinnen und Anwendern zur produktiven Nutzung zur Verfügung, sofern die jeweilige Domäne im gewählten Plan enthalten ist!
:::

## Allgemeine Funktionen

**Status: Produktiv**

### Verbessertes Onboarding

Bei der Bereitstellung eines verinice Clients nach Erwerb einer Subskription werden standardmäßig keine Units mehr angelegt (bisher wurden eine leere **Unit 1** und eine Unit mit **Beispieldaten** erzeugt), damit Anwenderinnen und Anwender Ihre Organisation mit oder ohne Profile und den gewünschten Domänen erstellen können.
Bei der ersten Anmeldung erläutert die Seite **Erste Schritte** welche **Profile** und welche **Domänen** in einer Unit angewendet werden können.

![Erste Schritte](/assets/roadmap/erste-schritte.de.png)

Im **Unit erstellen** Assistenten werden die Schritte analog erläutert.

### Detailverbesserungen und Fehlerbehebungen

- Das Beschreibungsfeld von Units kann wieder mehrzeilig befüllt werden.
- Suchfunktion in Tutorial aufgenommen.
- Reports werden nur noch für die aktive Domäne angezeigt.

## Domäne Datenschutz

**Status: Produktiv**

Keine Neuerungen.

## Domäne IT-Grundschutz

**Status: Private Beta**

### Risikomitigierende Maßnahmen

Die Abbildung mitigierender Maßnahmen bei der Risikoreduktion wurde umfassend verbessert, es wird unterschieden zwischen *Compliance-Maßnahmen* und *Mitigierenden Maßnahmen*:

- **Compliance-Maßnahmen** werden im Tab **Bausteine** angezeigt ud bearbeitet.
- **Mitigierende Maßnahmen** werden im Tab **Risiken** angezeigt und bearbeitet.

Die Bedienung wurde vereinheitlicht:

- Mausklick auf die Objekte öffnet den Baustein oder das Risiko zur Bearbeitung.
- Über das Icon **Implementierung bearbeiten** kann die Umsetzung der Anforderungen bzw. der mitigierenden Maßnahmen (wenn vorhanden) bearbeitet werden.

Aus dem Risikodialog heraus:

- kann direkt zu den mitigierenden Maßnahmen navigiert werden.
- kann zu dem *Container* für die mitigierenden Maßnahmen navigiert werden.

Die mitigierenden Maßnahmen werden im Report **A.5 Risikoanalyse** ausgegeben.

### Anpassbare Risikodefinition

In der ersten Iteration sind die Namen, Kriterien und Farben der Risikodefinition (Auswirkung, Eintrittswahrscheinlichkeit und Risikokategorien) und der Schutzbedarfsdefinition an die Organisation anpassbar:

![Anpassbare Risikodefinition](/assets/roadmap/risikodefinition.de.png)

### Schadenshöhe

Um im IT-Grundschutz zwischen dem **Schutzbedarf** für Vertraulichkeit, Integrität und Verfügbarkeit und der **Schadenshöhe** in der Risikoanaylse differenzieren zu können, lässt sich der Schutzbedarf ohne Definition einer Risikomatrix abbilden:

![Anpassbare Risikodefinition](/assets/roadmap/risikodefinition_ohne_matrix.de.png)

### Sortierung in Katalog

Im Katalog **IT-Grundschutz-Kompendium** werden alle Objekte (Bausteine, Anforderungen, Gefährdungen) standardmäßig anhand der Abkürzung nach der im Kompendium vorgegebenen Reihenfolge sortiert.

### Reiter "Bausteine"

Der Reiter Bausteine wird nur noch in Zielobjekten (Scope, Prozess, Asset) angezeigt.

## Domäne NIS2

**Status: Private Beta**

Letzte Optimierungen am Prototypen zur Vorbereitung der Public Beta (zur it-sa).

## Domäne ISO

**Status: Prototyp**

Fertigstellung des ersten Prototypen der Domäne **ISO** mit allen Objekttypen, Subtypen und Formularen zur Vorbereitung der Private Beta Phase.

## Domäne TISAX

**Status: Private Beta**

Abbildung des **TISAX / VDA ISA Information Security Assessment** in verinice zur Vorbereitung der Public Beta (zur it-sa):

- **Katalog** mit allen ISA Controls.
- **Profile** für Information Security Assessments für die Kriterienkataloge **Informationssicherheit und Prototypenschutz** ohne/mit **Datenschutz**.
- **Report** Information Security Assessment 6 - kompakt:

![Anpassbare Risikodefinition](/assets/roadmap/vda-isa_report.de.png)
