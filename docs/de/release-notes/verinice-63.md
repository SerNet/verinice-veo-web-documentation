<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 63

Veröffentlichung: 27. November 2026

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von **verinice 63** zur Verfügung.

## Überarbeitete Bedienoberfläche
<!-- epics/410 -->

Die Bedienoberfläche wurde auf eine neue Version des zugrunde liegenden UI-Frameworks aktualisiert. Dabei wurden Darstellung und Barrierefreiheit an mehreren Stellen verbessert.

- Bessere Farbkontraste für Hinweise und Links nach WCAG, auch im Dark Mode.
- Layout des Dashboards korrigiert.
- Profilbeschreibungen beim Erstellen einer Unit sind auch bei schmalem Browserfenster vollständig lesbar.
- Darstellung der Seite Erste Schritte korrigiert.
- Links zu Anforderungen auf der Umsetzungsseite werden wieder als Links dargestellt.
- Der Button "Anwenden" im Katalog ist bei langen Objektlisten sichtbar.

## Detailverbesserungen und Bugfixes
<!-- epics/279 -->

- Der Report "Statement of Applicability (SoA)"" in den ISO-Domänen kann wieder erzeugt werden.
- Vereinheitlichung des Objekttyps Incidents (Vorfälle) über alle Domänen.
- Die Buttons "Speichern" und "Abbrechen" im Dialog Umsetzung bearbeiten zeigen nun den richtigen Aktiv-Zustand.
- Überflüssigen Text im Abschnitt Dokumente der vollständigen Objektansicht entfernt.
- Bei der Suche nach Status lässt sich die Auswahl auch per Tastatur mit Enter abschließen.
- Verständlichere Meldung bei Objekten, die vor der Migration auf eine neue Domänenversion angepasst werden müssen.
- Fehler beim Erstellen von Units hinter bestimmten Proxies und Loadbalancern behoben.
- Formulare werden bei der Erzeugung neuer Clients wieder angelegt.
