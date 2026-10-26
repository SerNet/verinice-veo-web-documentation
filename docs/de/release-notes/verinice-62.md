<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 62

Veröffentlichung: 6. November 2026 (voraussichtlich)

Die folgenden Neuerungen stehen Anwenderinnen und Anwendern mit dem Release von **verinice 62** zur Verfügung.

## Aufgaben für Umsetzungen
<!-- epics/374 -->

Die neue Seite [Aufgaben](../manual/task-workflow.md) zeigt offene Umsetzungen als Aufgaben an. So sehen Verantwortliche auf einen Blick, was zu tun ist, und Leitungsrollen, wer woran arbeitet.

- Neue Seite *Aufgaben* mit einer Übersicht der offenen Umsetzungen.
- Personenobjekten können Benutzerkonten zugeordnet werden.
- Aufgaben lassen sich nach zuständigen Personen filtern, auch nach Aufgaben ohne Zuständigkeit.
- Umsetzungen können direkt aus der Aufgabenseite heraus bearbeitet werden.

## Verbesserte Suche
<!-- epics/361 -->

Die Suche wurde in vielen Details überarbeitet und lässt sich nun schneller und intuitiver bedienen.

- Suchkriterien mit nur einem möglichen Wert, wie *Hat Bestandteile* oder *Nicht Teil eines anderen Objekts*, lösen die Suche sofort aus und filtern konsistent.
- Mit Enter wird die Eingabe neuer Kriterien beendet und die Suche ausgelöst.
- Die Auswahlliste beginnt an der Position des Cursors und zeigt die Scrollbar dauerhaft an.
- Ein leeres Suchfeld zeigt den Platzhaltertext *Suche*; der Button zum Entfernen erscheint nur bei einer bestehenden Suche.
- Suche und Seitennavigation reagieren aufeinander.
- Überarbeitete Darstellung der Suchkriterien; Kriterien, die nicht in die Suchleiste passen, werden erkennbar ausgeblendet.

## Domäne NIS2 (DE) nach NIS2-Umsetzungsgesetz
<!-- epics/110 -->

Die Domäne NIS2 (DE) bildet nun das in Deutschland in Kraft getretene NIS-2-Umsetzungsgesetz (NIS2UmsuCG) ab. Mit der neuen Version der Domäne entfallen einzelne, nicht mehr benötigte Felder.

- Anforderungen des NIS2UmsuCG in die Domäne eingearbeitet.
- Neuer Katalog mit den Anforderungen des NIS2UmsuCG.
- Objekttypen Scope und Organisation erweitert, unter anderem um die NIS-2-Kontaktperson und die Institutions-ID.
- Objekttyp Sicherheitsvorfall an das NIS2UmsuCG angepasst; das Feld *Authentizität* wurde entfernt.
- Neues Profil *Domainwirtschaft*.
- Reports *Meldeformular Sicherheitsvorfall* und *Registrierungsinformationen für zuständige Behörde* an das NIS2UmsuCG angepasst.
- Neue [Dokumentation](../domain-nis2/domain-nis2.md) zur Arbeit mit der Domäne NIS2 (DE).

## Domäne NIS2 (INT) an NIS2 (DE) angeglichen
<!-- epics/303 -->

Die Inhalte der Domäne NIS2 (INT) wurden so weit wie möglich an die Domäne NIS2 (DE) angeglichen.

- Objekttyp Sicherheitsvorfall optimiert und an NIS2 (DE) angeglichen, unter anderem um Angaben zu wiederkehrenden Vorfällen und Vorfällen mit Auslandsbezug; das Feld *Frühwarnung* heißt nun *Frühe Erstmeldung*.
- Report *Meldeformular Sicherheitsvorfall* an die geänderten Inhalte angepasst und um die geplanten Gegenmaßnahmen erweitert.

## Domäne IT-Grundschutz++ (DE) – Alpha
<!-- epics/262 -->

Die Domäne IT-Grundschutz++ (DE) steht als Alpha-Version zum Kennenlernen zur Verfügung. Sie ist noch nicht für den produktiven Einsatz vorgesehen.

- Alpha-Version der Domäne IT-Grundschutz++ (DE) in der Sandbox verfügbar.
- Erste [Dokumentation](../domain-gs-pp/index.md) zur Vorgehensweise beim Aufbau eines ISMS nach IT-Grundschutz++, zum Migrationspfad und zu noch fehlenden Funktionen.

## Detailverbesserungen und Bugfixes
<!-- epics/278 -->

- Fehler beim Import von Units mit Risiken behoben.
- Bei den Kosten einer Umsetzung sind nur noch ganze Zahlen zulässig; Nachkommastellen und nicht numerische Werte werden mit einer Meldung abgewiesen.
- Beim Abbrechen im Umsetzungsdialog wird vor dem Verlust ungespeicherter Änderungen gewarnt.
- Der Bestätigungsdialog nach dem Anwenden von Katalogobjekten wird nun über *Schließen* statt *Abbrechen* verlassen.
- Speicherbedarf beim Export der Daten-Historie deutlich reduziert.
- Tutorials sind nun auch im Dark Mode gut lesbar.
