<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 39

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von verinice 39 zur Verfügung:

## Allgemeine Funktionen

### CSV-Import

Die erste Iteration des CSV-Imports ermöglicht den Import beliebiger Objekte in alle Domänen anhand von Abkürzung, Name und Beschreibung:

![CSV-Import](/assets/release-notes/verinice-39-csv-import.de.gif)

### Umsetzung domänenspezifischer Controls

Um je nach Domäne unterschiedliche Informationen aus **Controls** im Umsetzungs-Dialog anzuzeigen, können Formulare erstellt und eingebunden werden (Voraussetzung: Content Creator Rolle).

![RI Forms für Controls](/assets/release-notes/verinice-39-ri-form-control.de.png)

### Fehlerbehebungen

- Beim Unit-Import wird das Unit-Limit pro Client berücksichtigt.

### Produktpflege

- Ausweitung der Testabdeckung.
- Zuverlässigkeit verschiedener Tests verbessert.

### REST-API

- Die mit verinice 37 als *deprecated* angekündigten **Such-Endpunkte** ```/elementType/searches``` wurden entfernt.
- Die mit verinice 34 als *deprecated* angekündigten **Nicht-in-Domain-Endpunkte zum Schreiben von Elementen** (```POST /assets/en``` ```PUT /assets/{id}``` etc.) wurden entfernt.

## Domäne IT-Grundschutz

**Status: Produktiv**

### Reports

- In den Reports **A.4 Ergebnis des IT-Grundschutz-Checks** und **A.6 Realisierungsplan** wird der Umsetzungsstatus jetzt farbig codiert ausgegeben:

![Umsetzungsstatus farbig codiert](/assets/release-notes/verinice-39-it-gs-report.de.png)

- In den Reports **A.3, A.4 und A.6** wird jetzt korrekt die verantwortliche Person aus der Control-Implementation (Bausteinverantwortliche) statt aus dem Control selbst ausgegeben.
- Im Report **A.4 Ergebnis des IT-Grundschutz-Checks** wurde das Beschreibungsfeld aus dem Control entfernt.

### Dokumentation

Die Beschreibung der Vorgehensweise bei der Baustein-Modellierung wurde aktualisiert.

## Domäne ISO

**Status: Private Beta**

### Risikoprofil nach DIN ISO/IEC 27001

Das **Risikoprofil nach DIN ISO/IEC 27001** steht zur Anwendung in der Domäne ISO/IEC 27000 bereit. Diese erste Iteration enthält noch **KEINE** lizenzrechtlich geschützten Controltexte:

![Risikoprofil nach DIN ISO/IEC 27001](/assets/release-notes/verinice-39-iso-risiko-profil.de.png)

::: info Das Risikoprofil nach DIN ISO/IEC 27001 entspricht dem aus verinice bekannten Risikokatalog!
:::

### Reports

- Erste Versionen der Reports für das **Inventarverzeichnis (Inventory of Assets)** und die **Erklärung zur Anwendbarkeit (Statement of Applicability - SoA)**

![ISO-Reports](/assets/release-notes/verinice-39-soa-report.de.png)
