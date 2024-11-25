# verinice 31

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit Release von verinice 31 zur Verfügung!

::: details Warum sehe ich nicht alle Neuerungen?

Neue Funktionen und insbesondere ganze Domänen durchlaufen verschiedene Release-Phasen:

**Prototyp:** Diese Funktionen befinden sich in Entwicklung und sind nur intern verfügbar.

**Private Beta:** Diese Funktionen stehen einer geschlossenen Gruppe von Testenden zur Verfügung.

**Public Beta:** Diese Funktionen stehen allen Anwenderinnen und Anwendern für Tests zur Verfügung.

**Produktiv:** Diese Funktionen stehen allen Anwenderinnen und Anwendern zur produktiven Nutzung zur Verfügung, sofern die jeweilige Domäne im gewählten Plan enthalten ist!
:::

## Allgemeine Funktionen

**Status: Produktiv**

### Status-Meldungen

Anwenderinnen und Anwender werden zukünftig in verinice mittels Meldungen (Warning-Banner) über anstehende Wartungsaufgaben und Updates informiert, um begonnene Aufgaben abschließen bzw. anstehende Aufgaben planen zu können.

### Shop-Anbindung

Die Kommunikation zwischen dem verinice.Shop und Keycloak wurde optimiert:
- Die an verinice übertragene Produktkonfiguration umfasst jetzt neben Units und Usern auch die verfügbaren Domänen und Profile des jeweiligen Client.
- Die Absicherung der Kommunikation wurde verbessert.

### Qualitätsverbesserungen

Zur Steigerung der allgemeinen Qualität wurde die Testabdeckung durch eine Vielzahl weiterer automatisierter Tests erheblich verbessert.

### Detailverbesserungen und Fehlerbehebungen

- **Beschreibung** für alle verfügbaren Domänen ergänzt.
- Die Anzeige der Tab-Reiter **Bausteine** bzw. **Zielobjekte** wird aus der Domäne gelesen und erfolgt nicht mehr anhand des Namens.
- Entfernen der problematischen Option **All** in der Paginierung von Tabellen/Listen.
- Fehlerhafte Anzeige bei der **Paginierung in Katalogen** behoben.
- **Keycloak** auf Version 26.0.4 aktualisiert.
- Benutze Pakete und Bibliotheken auf aktuellste Versionen gepatcht.
- Diverse kleinere Fehlerbehebungen.

## Domäne Datenschutz

**Status: Produktiv**

### Schemaoptimierung

Um die Kompatibilität mit neuen Funktionen und neuen Domänen zu gewährleisten, wurden Objektschema und Formschema optimiert. Die Änderungen werden in einer automatischen Datenmigration mit Release/Deployment von verinice 31 automatisch migriert. Bestandskunden werden wo erforderlich perönlich über anstehende Änderungen informiert.

### Schutzbedarf

Der **Schutzbedarf** (Potentielle Auswirkung) kann jetzt auch in den Scope-, Prozess- und Assetobjekten der Domäne DS-GVO dokumentiert werden für die Schutzziele Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit:

![Schutzbedarf](/assets/release-notes/verinice-31_potential_impact.de.png)

## Domäne IT-Grundschutz

**Status: Produktiv**

### Vorgehensweise der Absicherung

Die **Vorgehensweise der Absicherung** von Anforderungen wird jetzt wo erforderlich angezeigt, um die Arbeit nach IT-Grundschutz besser zu unterstützen:

![Vorgehensweise der Absicherung](/assets/release-notes/verinice-31_proceeding.de.png)

### Risikomitigierende Maßnahmen

Für risikomitigierenden Maßnahmen in der Domäne IT-Grundschutz wird jetzt der Mechanismus der **Zuordnung** und **Umsetzung** (Control Implementation und Requirement Implementation) genutzt, der auch bei der *Compliance* verwendet wird

![Risikomitigierende Maßnahmen](/assets/release-notes/verinice-31_CI-RI_risikomitigation.de.png)

#### IT-Grundschutz-Profil Basisabsicherung Kommunalverwaltung V.4

Neben dem Profil Standard- oder Kernabsicherung nach IT-Grundschutz-Kompendium Edition 2023 steht als erstes IT-Grundschutz-Profil nun die **Basis-Absicherung Kommunalverwaltung Version 4.0** zur Verfügung:

![Basis-Absicherung Kommunalverwaltung Version 4.0](/assets/release-notes/verinice-31_profile.de.png)
