<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Realisierung

In der Realisierung (Prozessschritt 3) überführen Sie die Anforderungen des Anforderungspakets in die Praxis. Sie ermitteln den Umsetzungsstatus jeder Anforderung, bewerten fehlende Umsetzungen und erstellen einen priorisierten **Umsetzungsplan** mit Maßnahmen, Zuständigkeiten und Fristen. Die zugehörigen Anforderungen finden Sie in der Praktik **Umsetzung (UMS)**.

## Umsetzung anzeigen

Um Anforderungen zu bearbeiten, klicken Sie im Objektumfeld des Informationsverbunds bzw. des Zielobjektes bei der jeweiligen Zielobjektkategorie auf **Umsetzung anzeigen**. Sie gelangen zur Übersicht aller Anforderungen der ausgewählten Kategorie.

<!-- SCREENSHOT: ![Umsetzung anzeigen](../assets/domain-gs-pp/verinice-gspp-view-implementation.png) – Objektumfeld eines Zielobjekts mit „Umsetzung anzeigen“ bei einer Zielobjektkategorie -->

<!-- SCREENSHOT: ![Anforderungsliste](../assets/domain-gs-pp/verinice-gspp-ri-list.png) – Übersicht der Anforderungen einer Kategorie mit Umsetzungsstatus -->


Durch Klick auf eine Anforderung öffnet sich der Umsetzungsdialog, in dem Sie folgende Informationen einsehen bzw. einpflegen können:

1. Informationen zum Zielobjekt (informativ/schreibgeschützt)
2. Anforderungsbeschreibung aus dem Grundschutz++-Katalog, z.B. Anforderungstext, Modalverb, Sicherheitsniveau und Hinweis (informativ/schreibgeschützt)
3. Informationen zur Umsetzung, die Sie in drei Abschnitten dokumentieren:

<!-- SCREENSHOT: ![Umsetzungsdialog](../assets/domain-gs-pp/verinice-gspp-ri-dialog.png) – Umsetzungsdialog mit Zielobjekt, Anforderungsbeschreibung und den Abschnitten Umsetzung, Dokumentation, Revision -->

**Umsetzung**

- Umsetzungsstatus (siehe unten)
- Verantwortliche Person
- Umsetzung bis (Datum)
- Kosten für die Umsetzung

**Dokumentation**

- Umgesetzt am
- Umgesetzt durch
- Umsetzungsbeschreibung – hier dokumentieren Sie auch die festgelegten Parameter und die Begründung bei „nicht anwendbar“
- Link zu einem Dokument oder einer Aufzeichnung – z.B. zu dem im Feld **Dokumentation** der Anforderung empfohlenen Nachweis

**Revision**

- Letzte Revision am
- Letzte Revision durch
- Nächste Revision am
- Nächste Revision durch

Nachdem Sie die Daten eingetragen haben, schließen Sie den Dialog mit **Speichern**.

## Umsetzungsstatus

Für jede Anforderung des Anforderungspakets muss der aktuelle Umsetzungsstatus vollständig überprüft werden. Grundschutz++ kennt nach der Pilotierungsfassung drei Status:

| Status nach Grundschutz++ | Status in verinice | Folge |
|---|---|---|
| **erfüllt** | ja | – |
| **nicht erfüllt** | nein | [Risikobetrachtung](./risk-analysis) erforderlich |
| **nicht anwendbar** | nicht anwendbar | Begründung dokumentieren |

Eine Anforderung ist **nicht anwendbar**, wenn sie funktional nicht erfüllt werden kann oder die zugrunde liegende Komponente im Informationsverbund nicht existiert.

<!-- SCREENSHOT: ![Umsetzungsstatus](../assets/domain-gs-pp/verinice-gspp-ri-status.png) – Auswahl des Umsetzungsstatus (ja, nein, teilweise, nicht anwendbar) mit Begründung in der Umsetzungsbeschreibung -->

::: warning Status „teilweise“
Die Risikodefinition der Domäne bietet zusätzlich den Status **teilweise**. Grundschutz++ sieht keine teilweise Erfüllung vor: Eine teilweise umgesetzte Anforderung ist **nicht erfüllt** und wie „nein“ zu behandeln, also in die Risikobetrachtung und den Umsetzungsplan aufzunehmen. Sie können „teilweise“ als Zwischenstand während der Umsetzung verwenden.
:::

::: info Abhängige Anforderungen
Nach dem Leitfaden gilt eine Anforderung nur dann als erfüllt, wenn sie selbst und alle Anforderungen erfüllt sind, von denen sie abhängt. Die Abhängigkeiten finden Sie im Objektumfeld der Anforderung unter **Links** (Abhängigkeit). Prüfen Sie auch die zugehörigen Unteranforderungen – Sie finden sie über die Abkürzung, z.B. `BER.4.1.1` und `BER.4.1.2` zu `BER.4.1` (siehe [Beziehungen zwischen Anforderungen](./catalog#beziehungen-zwischen-anforderungen)).
:::

Die Überprüfung sollte nach einem strukturierten Verfahren erfolgen, z.B. durch Interviews, Dokumentenprüfungen, automatisierte Konfigurationsprüfungen oder technische Scans.

## Bewertung fehlender Umsetzungen

Für nicht erfüllte Anforderungen führen Sie eine [Risikobetrachtung](./risk-analysis) durch. Die dabei ermittelten Restrisiken sind die Grundlage für die Priorisierung der Maßnahmen.

::: warning SOLLTE-Anforderungen
Wird eine SOLLTE-Anforderung nicht erfüllt, soll dies im Rahmen einer Risikobetrachtung, mindestens aber ausführlich begründet werden.
:::

## Umsetzungsplanung und Priorisierung

Legen Sie für jede offene Anforderung konkrete **Maßnahmen** fest und priorisieren Sie diese, z.B.:

- nach den schwerwiegendsten Risiken aus der Risikobetrachtung
- nach dem Aufwand – das Feld **Stufe** der Anforderung gibt den Aufwand von 0 (zwingend, nicht bewertet) über 1 (Quick Win) bis 5 (aufwändig, komplex) an
- nach Synergien zwischen Maßnahmen, die mehrere Anforderungen gleichzeitig adressieren
- nach strategischer Bedeutung und Quick Wins mit hoher Wirksamkeit
- nach dem **Sicherheitsniveau** – Anforderungen mit Sicherheitsniveau „Erhöht“ beeinflussen die Reihenfolge der Umsetzung

::: tip Elternknoten zuerst
Grundschutz++ empfiehlt, die Anforderungen der **Elternknoten** zuerst zu erfüllen – also die Anforderungen der übergeordneten Zielobjektkategorien (z.B. „Anwendungen“ vor „Webbrowser“) sowie übergeordnete Anforderungen vor ihren Unteranforderungen. An einem Zielobjekt erkennen Sie die Anforderungen übergeordneter Kategorien am Titel-Suffix (z.B. `[Anwendungen]` an einem mit „Webbrowser“ modellierten Zielobjekt) und Unteranforderungen an ihrer Abkürzung (z.B. `BER.4.1.1` zu `BER.4.1`).
:::

Maßnahmen können Sie in verinice unter **Maßnahmen > Maßnahmen** anlegen und mit den Anforderungen bzw. Risiken verknüpfen. Das Verfahren zur Umsetzungsplanung sollte zur Größe und zu den Gegebenheiten Ihrer Institution passen.

<!-- SCREENSHOT: ![Maßnahme anlegen](../assets/domain-gs-pp/verinice-gspp-safeguard.png) – Formular einer Maßnahme mit Verknüpfung zur Anforderung -->


## Zuständigkeiten und Umsetzungsfristen

Der Umsetzungsplan legt für jede Maßnahme Zuständigkeiten und realistische Fristen fest. Tragen Sie diese im Umsetzungsdialog unter **Verantwortliche Person** und **Umsetzung bis** ein. Achten Sie dabei auf:

- klare Zuständigkeiten, abgestimmt mit den betroffenen Bereichen
- erforderliche Ressourcen und Kompetenzen der zuständigen Personen
- realistische Fristen, die Umfang, Ressourcen und Abhängigkeiten berücksichtigen

Bei komplexen Maßnahmen kann es sinnvoll sein, eine fachliche und eine operative Zuständigkeit festzulegen und Teilaufgaben mit eigenen Fristen zu bilden. Das Vorgehen ist von der Institutionsleitung freizugeben, da sie die erforderlichen Ressourcen bereitstellt.

## Freigabe und Ausnahmen

Ausnahmegenehmigungen – z.B. bei Zielkonflikten zwischen Verpflichtungen – müssen von einer verantwortlichen Rolle autorisiert und mit einer nachvollziehbaren Begründung dokumentiert werden. Nutzen Sie dazu die Umsetzungsbeschreibung und verlinken Sie die Genehmigung als Dokument.

## Fortschrittsverfolgung

Halten Sie den Fortschritt des Umsetzungsplans kontinuierlich nach, um Abweichungen frühzeitig zu erkennen:

- aktuellen Umsetzungsstand und Abweichungen dokumentieren
- Hindernisse und Verzögerungen frühzeitig identifizieren, Eskalationspfade nutzen
- regelmäßig an Verantwortliche und Management berichten, z.B. im Managementbericht
- den Umsetzungsplan als lebendes Dokument fortschreiben

::: warning Interessenskonflikt vermeiden
Die für die Umsetzung zuständige Person und die für die Fortschrittsverfolgung zuständige Person sollten nicht identisch sein.
:::

Nachdem alle Anforderungen bearbeitet worden sind, ist das Anforderungspaket mit seinem dokumentierten Umsetzungsstand die Grundlage für die [Überwachung](./monitoring-improvement).
