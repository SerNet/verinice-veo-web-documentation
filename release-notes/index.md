<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 35

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 35 zur Verfügung!

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

### Kartenansicht

Die Kartenansicht unterstützt jetzt die Navigation, das Layout wurde optimiert.

::: danger Die Kartenansicht steht nur in ausgewählten Umgebungen wie z.B. der Sandbox per Feature-Toggle zur Verfügung!
:::

### Risikostufen anpassbar

Die Stufen der Risikomatrix können angepasst werden:

![Risikostufen](/assets/release-notes/verinice-35-risk-matrix.de.gif)

### Detailverbesserungen

- Domänenspezifische Inhalte können per Konfiguration angepasst werden.
- Bei Neuanlage eines Objekts aus der Objektübersicht **Alle** kann vorab jetzt der Subtyp ausgewählt werden.
- Korrekturen und Verbesserungen an Übersetzungen (Umbenennung des Objekttyps **Maßnahmen** in **Controls**; konsistente Nutzung von **Domäne** statt **Domain** in DE).
- Das Cookie-Banner wird nicht mehr von der Hauptnavigation überlagert.
- Das Popup mit Meldungen überlagert nicht mehr den **Plus**-Button für weitere Aktionen.

### Fehlerbehebungen

- Beheben eines Fehlers in der Pagination in der Objektübersicht, wenn die Sprache gewechselt wurde.

### Produktpflege

- Optimierung des Deployment-Prozesses.
- Verbesserungen der OpenAPI-Dokumentation.
- Workaround für das Keycloak Dark Theme entfernt.
- Testabdeckung ausgeweitet.

### REST API

::: danger Die alten **Nicht-in-Domäne-Endpunkte** zum Schreiben von Elementen werden in einem der kommenden Release entfernt. Es sollten stattdessen die domänenpezifischen Endpunkte verwendet werden!
:::

::: danger Der Endpunkt **"/types"** wurde als überholt/veraltet markiert und sollte nicht mehr benutzt werden. Die Informationen, die dieser Endpunkt zurück gibt, sind statisch und können bei Bedarf der OpenAPI-Dokumentation entnommen werden. Der Endpunkt wird in einem der kommenden Release  entfernt.
:::

## Domäne IT-Grundschutz

**Status: Produktiv**

Im Report **A.5 Risikoanalyse** werden jetzt auch die Risiken auch für den Informationsverbund ausgeben.

## Domäne ISO

**Status: Prototyp**

- Erstellung des Risikokataloges (Konvertierung aus verinice und Anpassung an verinice.veo).
- In allen Scopeobjekten kann nun eine Risikodefinition ausgewählt werden.

## Domäne IT-Grundschutz++

**Status: Prototyp**

Erstellung eines ersten Prototypen der Domäne IT-Grundschutz++ für die [verinice.XP 2025](https://verinicexp.org). 
