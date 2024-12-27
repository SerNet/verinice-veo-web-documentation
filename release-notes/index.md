<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 32

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 32 **in Kürze** voraussichtlich zur Verfügung!

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

- Auf der **Anmeldeseite** wird deutlicher unterschieden zwischen Anmeldung in der verinice.cloud und Kauf einer Subskription.
- Links in Deutsch umbenannt in **Verknüpfung**, um die Wiedererkennung für verinice-Anwendende zu verbessern.
- Fehler beim Speichern von risikomitigierenden Maßnahmen behoben.
- Fehler beim Bearbeiten (Speichern) der Umsetzung behoben.
- In **Profilen** kann jetzt die Umsetzung (RI - RequirementImplementation) von **Controlobjekten** angewendet werden.
- Aktualisierung des Keycloak-Themes auf V.3.
- Beschreibung verschiedener Dialoge informativer gestaltet.
- Verhalten des eingeklappten Menüs verbessert.
- Fehler beim Zurücksetzen der Suche bzw. der Suchkriterien behoben.
- Fehler bei der Darstellung der Seite erste Schritte behoben, die Seite wird bei hochauflösenden Bildschirmen nicht mehr abgeschnitten.
- Weiterer Ausbau der Testabdeckung.
- Verbesserung der Migration bei Updates mit Änderungen an Domänen.

## Domäne Datenschutz

**Status: Produktiv**

- Anzeige des Beschreibungstextes der Anforderung im Dialog **Umsetzung bearbeiten**.
- Eine neue angelegte **Datenschutz-Folgenabschätzung** wird automatisch als **Teil** der Verarbeitungstätigkeit angelegt, aus der Sie erstellt wird.
- Im Report **Datenschutz-Risikoanalyse** wird die Beschreibung unter dem Risikoverantwortlichen ausgegeben und nicht mehr abgeschnitten.

## Domäne IT-Grundschutz

**Status: Produktiv**

- Aktualisierung und Verbesserung der Dokumentation der Domäne IT-Grundschutz (Modellierung, IT-Grundschutz-Check, Risikoanalyse).
- Bei der Erstellung der **Gefährdungsübersicht** werden die erzeugten Risiken ohne manuellen Browser-Reload angezeigt.
- Fehlende Modellierung einzelner Anforderungen (CI - ControlImplementations) beim Anwenden des Profils **Standard- oder Kernabsicherung nach IT-Grundschutz-Kompendium Edition 2023** inklusive Ursache behoben.
- Fehlende Anzeige der potentiellen Werte für Eintrittswahrscheinlichkeit und Auswirkung/Schadenshöhe im Risikodialog korrigiert.

## Domäne NIS2

**Status: Produktiv**

### Release der Domäne NIS2

::: warning Veröffentlichung der Domäne **NIS2** zur Abbildung der Richtlinie (EU) 2022/2555 des Europäischen Parlaments und des Rates über Maßnahmen für ein hohes gemeinsames Cybersicherheitsniveau in der Union.
:::

Die Domäne steht für verinice im [Subskriptionsportal](https://account.verinice.com/) zur Verfügung, für Details siehe auch die Beschreibung zur [Domäne NIS2](https://verinice.com/loesungen/domaene/nis2-richtlinie) und die [Dokumentation](https://veo-docs.verinice.com/).

## Domäne ISO

**Status: Prototyp**

- Abbildung von Szenarien, Bedrohungen und Schwachstellen.
- Erstellung des Risikokataloges (Konvertierung aus verinice und Anpassung an verinice.veo).

## Domäne TISAX

**Status: Private Beta**

- Überarbeitung der Profile für Self-Assessments.
