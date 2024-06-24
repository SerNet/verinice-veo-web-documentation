# Release Notes

## Vorhandene Einschränkungen und bekannte Bugs

Mit Start der Private Beta sind folgende Einschränkungen und Fehler bekannt, die bis zur Public Beta ausgeräumt werden:

### Timeouts bei lang laufenden Aktionen

Einige lang laufende Aktionen führen unter Umständen zu Fehlermeldungen nach Timeouts mit vermeintlichem Abbruch der Aktion, z.B. das Löschen von großen Units, das Erzeugen von umfangreichen Reports, das Anwenden großer Profile oder das Erstellen der Gefährdungsübersicht bei Zielobjekten mit mehr als ca. 10 modellierten Bausteinen.

In allen untersuchten Fällen wird die Aktion im Hintergrund vollständig ausgeführt, und das Ergebnis nach einiger Zeit und ggfs. neuem Laden des Browser korrekt angezeigt!

Lang laufende Aktionen werden zukünftig als Hintergrundtasks ausgeführt und Anwendende über den Status bzw. den Abschluss der Aktion informiert. Es kann ohne Unterbrechung an anderen Aufgaben in verinice weiter gearbeitet werden.

#### IT-Grundschutz

Folgende Einschränkungen der Funktionen für die Grundschutz-Vorgehensweise sind uns bekannt. Behebungen dafür sind bereits in Arbeit.

##### Strukturanalyse

- Verknüpfungen von Zielobjekten werden nur in ausgehender Richtung angezeigt - es ist nicht leicht möglich zu ermitteln, von welchen Zielobjekten das angezeigte Objekt abhängig ist.

##### Modellierung

- Beim Löschen von Bausteinen werden die zugehörigen Anforderungen nicht gelöscht.
- Suche und Auswahl von Bausteinen bei der Modellierung noch umständlich.
- Der Reiter "Massnahmen" soll im Grundschutz in "Bausteinzuordnungen" umbenannt werden.
- Zugeordnete Zielobjekte sind vom Baustein aus nicht ersichtlich.

##### Sicherheitscheck

- Sortierung der Bausteine erfolgt alphabetisch anstatt nach IT-Grundschutz-Kompendium (Schichten).
- Die verantwortliche Person bei Bausteinzuordnungen kann nicht dokumentiert werden.
- Von der Ansicht der Anforderungsliste kann man nicht zum Baustein zurück navigieren.
- Die Spalte für "Verantwortlicher" ist erst nach Maximieren des Bildschirmbereichs sichtbar.
- Bei der Umsetzung von Anforderungen fehlen das Feld Umsetzung bis; die Vorgehensweise der Absicherung und Anforderungstext werden noch nicht angezeigt.

##### Risikoanalyse

- Für risikomitigierende Maßnahmen kann nicht der Umsetzungsstatus dokumentiert werden.
- Darstellung und Bearbeitung der risikomitigierenden Maßnahmen bei der Risikobehandlung nicht intuitiv.
- Risikomatrix nicht anpassbar (Definitionen, Achsen, Schutzziele)

#### Sonstiges

- Dokumentation bisher nur deutschsprachig. Inhaltlich teilweise noch unvollständig.
