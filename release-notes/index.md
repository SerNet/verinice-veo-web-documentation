# Release Notes

## Vorhandene Einschränkungen und bekannte Bugs

Mit Start der Private Beta sind einige Einschränkungen und Fehler bekannt, die bis zur Veröffentlichung ausgeräumt werden.

::: info Danke! Ich möchte direkt zu den [Release Notes verinice 27](verinice-27)
:::

### Timeouts bei lang laufenden Aktionen

Einige lang laufende Aktionen führen unter Umständen zu Fehlermeldungen nach Timeouts mit vermeintlichem Abbruch der Aktion.
- In Einzelfällen läuft das Löschen großer Units in einen Timeout, nach kurzer Wartezeit und eventuellem Reload sind die Units nicht mehr vorhanden.
- Die Reports A.4 Ergebnis des IT-Grundschutz-Checks und A.6 Realisierungsplan können noch nicht erzeugt werden!

Lang laufende Aktionen werden zukünftig als Hintergrundtasks ausgeführt und Anwendende über den Status bzw. den Abschluss der Aktion informiert. Es kann ohne Unterbrechung an anderen Aufgaben in verinice weiter gearbeitet werden.

### IT-Grundschutz

Folgende Einschränkungen der Funktionen für die Grundschutz-Vorgehensweise sind uns bekannt. Behebungen dafür sind bereits in Arbeit.

#### Strukturanalyse

- Verknüpfungen von Zielobjekten werden nur in ausgehender Richtung angezeigt - es ist nicht leicht möglich zu ermitteln, von welchen Zielobjekten das angezeigte Objekt abhängig ist.

#### Modellierung

- Beim Löschen von Bausteinen werden die zugehörigen Anforderungen nicht gelöscht.
- Suche und Auswahl von Bausteinen bei der Modellierung noch umständlich.
- Zugeordnete Zielobjekte sind vom Baustein aus nicht ersichtlich.

#### Sicherheitscheck

- Sortierung der Bausteine erfolgt alphabetisch anstatt nach IT-Grundschutz-Kompendium (Schichten).
- Die verantwortliche Person bei Bausteinzuordnungen kann nicht dokumentiert werden.
- Die Spalte für "Verantwortlicher" ist erst nach Maximieren des Bildschirmbereichs sichtbar.

#### Risikoanalyse

- Für risikomitigierende Maßnahmen kann nicht der Umsetzungsstatus dokumentiert werden.
- Darstellung und Bearbeitung der risikomitigierenden Maßnahmen bei der Risikobehandlung nicht intuitiv.
- Risikomatrix nicht anpassbar (Definitionen, Achsen, Schutzziele)

### Sonstiges

- Dokumentation bisher nur deutschsprachig. Inhaltlich teilweise noch unvollständig.

::: info OK! Details finde ich auf der [Roadmap](../roadmap/)
:::
