<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 51

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von verinice 51 zur Verfügung.

## Bessere Abbildung von Scopes und Teilen <Badge type="info">Test</Badge>

Um die Orientierung zu verbessern werden in der Objektansicht:
- die Reiter Scopes und **Teile** zusammengefasst.
- die Reiter In Scope und **Teil von** zusammengefasst.

![Teile und Teil von](/assets/release-notes/verinice-50-parts.de.gif)

- ein kombinierter Dialog für Auswahl und Erzeugung von Objekten eingeführt. 

![Kombinierter Dialog für die Objektanlage](/assets/release-notes/verinice-50-create-parts.de.gif)

## Bedienung des eingeklappten Menüs verbessert <Badge type="info">Test</Badge>

Das Navigationsmenü bleibt im eingeklappten Zustand bedienbar.

![Eingeklapptes Menü](/assets/release-notes/verinice-50-menue.de.gif)

## Detailverbesserungen

In der Objektansicht bleibt die Darstellung der Spalten erhalten, wenn man nach dem Wechsel zu einer anderen Seite in die Objektansicht zurückkehrt.

Die Standardeinstellung für den Hell-/Dunkel-Modus wird jetzt aus den Systemeinstellungen ausgelesen.

Der Link **Weitere Domänen** in Auswahlfeld Domänen ruft jetzt die Seite für die Domänenauswahl der aktiven Unit auf.

## Fehlerbehebungen 

- Exportierte Units enthalten korrekte und vollständige Daten.
- Controltexte in Markdown-Feldern können gespeichert werden.
- In der Domäne ISO wird der Container für mitigierende Maßnahmen korrekt als Subtyp Control-Gruppe und nicht Sicherheitsmaßnahme angelegt.
- Beim Anlegen eines Accounts wird im Fehlerfall informiert, dass der Benutzername mindestens 3 Zeichen lang sein muss.
- Falsche Fehlermeldung beim Löschen von Clients korrigiert.
- Beheben fehlerhafter Domänen-Updates.
- Behebung eines Caching-Problems bei der Aktivierung von Feature-Flags.
- Bei Erzeugung einer Domäne aus einem Domänen-Template werden Übersetzungen korrekt übernommen.
- Upgrade auf Nuxt Version 4.3.0
- Upgrade auf Spring Boot Version 4
