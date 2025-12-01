<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# verinice 47

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von verinice 47 zur Verfügung.

## Allgemeine Funktionen

### verinice on Premise

**Status: Private Beta**

verinice.onprem wird aktuell im Rahmen verschiedener Beta-Projekte installiert und getestet.

In Kürze werden zwei Installationsvarianten zur Verfügung stehen:

- Helm-Chart für native Kubernetes-Cluster.
- Virtuelle Appliance mit Talos Linux für Kubernetes.

Im On-Premises Betrieb sind:

- Alle Login-Seiten, zugehörige Links und Graphiken der jeweiligen Betriebsumgebung angepasst.
- Administrative Aufgaben können per eigenständigen Command Line Interface (CLI) versehen werden.
- Lizenzierte Inhalte (Bundles/Domänen, Units, User) per Lizenz-String hinterlegt.

### Lese-/Schreibberechtigungen auf Units

**Status: Produktiv**

Mit dieser Iteration des Berechtigungsmanagements können Lese- und Schreibberechtigungen für User und Units über **Zugriffsgruppen** zugewiesen werden:

![Zugriffsgruppen](/assets/release-notes/verinice-47-access-groups.de.png)

In den Zugriffsgruppen können Lese- und Schreibberechtigungen für jede einzelne Unit festgelegt werden:

![Units in Zugriffsgruppen](/assets/release-notes/verinice-47-access-groups-units.de.png)

Die erstellten Zugriffsgruppen können einzelnen Nutzerinnen und Nutzern zugeordnet werden:

![Zugriffsgruppen für User](/assets/release-notes/verinice-47-access-groups-user.de.png)

### Detailverbesserungen und Fehlerbehebungen

**Status: Produktiv**

- In Formularen erlaubt die E-Mail-Validierung Top Level Domains (TLD) mit mehr als drei Zeichen.
- Die Dokumentation ist unabhängig von den eingeführten Berechtigungen frei zugänglich.
- Die Schaltflächen im Dialog Unit Erstellen werden korrekt und leserlich angezeigt.
- Korrekturen in den Risikodefinitionen (Rechtschreibfehler und Farbauswahl korrigiert).
- Systembanner (interne Meldungen) werden sofort angezeigt, wenn kein spezifisches Anzeigedatum angegeben ist.
- Update auf OpenAPI 3.1 zur Verbesserung der Stabilität der REST API.
- Upgrade NUXT to Version 4.

## DS-GVO

**Status: Produktiv**

### Detailverbesserungen und Fehlerbehebungen

- Die obsolete Verarbeitungstätigkeit im Katalog der Domäne DS-GVO wurde gelöscht.
