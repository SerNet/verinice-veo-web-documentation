<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 36

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 36 zur Verfügung:

## Allgemeine Funktionen

**Status: Produktiv**

### Detailverbesserungen

- Der Objekttyp **Maßnahmen** wurde in den allgemeingültigen und verständlicheren Begriff **Controls** umbenannt.
- In einer Domäne kann konfiguriert werden, welchen **Scope-**, **Prozess-** oder **Asset-** Subtypen **Compliancerelevante** oder **Risikomitigierende** Controls zugewiesen werden können.

### Fehlerbehebungen

- Bei der Schutzbedarfsvererbung wird korrekt die **effektive Auswirkung** anstelle der **potentiellen Auswirkung** vererbt.
- Korrektur des verfrüht angezeigten Bestätigungsdialogs bei Neuanlage eines Objekts.
- Fehler beim Speichern von Übersetzungen (singular/plural) im Formschema-Editor behoben.
- Typescript-Fehler im Frontend behoben.

### Produktpflege

- Verbesserung des Deployment-Prozesses nach Änderungen an Domänen.

### REST-API

- Entfernen des **/type** -Endpunkts.

## Domäne DS-GVO

**Status: Produktiv**

- Der Reiter **Risiko** wird für die Subtypen **Datenart**, **IT-System** und **Anwendung** des Objekttyps **Asset** nicht mehr angezeigt.

## Domäne ISO

**Status: Prototyp**

- Erstellung des ISO-27001 Control-Katalogs.
