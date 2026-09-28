<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Risikobetrachtung

Die Risikobetrachtung ist im Grundschutz++ das Instrument, um zu ermitteln, welchen Risiken die Institution ausgesetzt ist, und diese strukturiert und systematisch zu behandeln. Die Anforderungen dazu finden Sie in der Praktik **Risikomanagement (RISK)**.

::: info Stand der Methodik
Die Risikobetrachtung wird im Grundschutz++ noch ausgearbeitet. Die Pilotierungsfassung legt Mindestkriterien fest, die jede Risikomethodik erfüllen muss. Sie können die Risikomethodik des Grundschutz++ oder eine selbst gewählte Methodik verwenden, die diese Kriterien erfüllt.
:::

## Wann ist eine Risikobetrachtung erforderlich?

Eine Risikobetrachtung ist insbesondere erforderlich:

- für Geschäftsprozesse mit **hohem Schutzbedarf** und die zugehörigen Assets
- wenn Anforderungen des Anforderungspakets **nicht erfüllt** werden
- bei einer **Absenkung des Sicherheitsniveaus** einer Anforderung von erhöht auf normal-SdT
- für **ergänzende Anforderungen**, die auf ein Schadensszenario einzahlen
- für **schwer zuordenbare Assets**, für die keine passende Zielobjektkategorie existiert

Die Ergebnisse der Risikobetrachtung werden als zusätzliche Anforderungen in das Anforderungspaket übernommen und im Umsetzungsplan weiterverwendet.

## Mindestkriterien

Unabhängig von der gewählten Methodik trägt die Institutionsleitung die Gesamtverantwortung und gibt Verfahren, Rollendefinitionen und Risikokriterien frei.

**Initiierung des Risikomanagements**

- einheitliches Verfahren für Risikoidentifikation, -bewertung und -behandlung
- Kriterien für Risikoidentifikation, Risikobewertung und Risikoakzeptanz
- vergleichbare, nachvollziehbare Ergebnisse bei wiederholter Durchführung
- festgelegte Rollen, insbesondere Risikoeigentümer
- Freigabe durch die Institutionsleitung und nachvollziehbare Dokumentation der Verfahren

**Risikoidentifikation und -bewertung**

- Risiken für Vertraulichkeit, Integrität und Verfügbarkeit im Geltungsbereich identifizieren
- jedem Risiko einen Risikoeigentümer zuweisen
- Folgen und Eintrittswahrscheinlichkeit einschätzen und daraus das Risikoniveau bestimmen
- Risikoniveau mit den Akzeptanzkriterien vergleichen und Risiken priorisieren
- Ergebnisse dokumentieren

**Risikobehandlung**

- Behandlungsoptionen festlegen (Verringern, Vermeiden, Übertragen, Akzeptieren)
- erforderliche Sicherheitsmaßnahmen ermitteln, Umsetzungsplanung erstellen und durch die Risikoeigentümer autorisieren lassen
- Maßnahmen umsetzen, Restrisiken bewerten und durch die Risikoeigentümer akzeptieren lassen
- Ergebnisse und Entscheidungen dokumentieren

**Regelmäßige Überprüfung**

Die Risikobetrachtung ist mindestens jährlich sowie bei wesentlichen Änderungen zu überprüfen: Sind neue Risiken entstanden? Treffen die Bewertungen noch zu? Wurden die Maßnahmen umgesetzt? Können die Restrisiken weiterhin akzeptiert werden?

## Definitionen

Die organisationsweite und für alle Objekte gültige Risikomatrix wird unter [Risikodefinitionen](../manual/risk-definition.md) definiert. Navigieren Sie dazu im Menü zu **Risikodefinitionen** und anschließend **GSRD**. Hier können Sie mit einem **Klick auf das Stift-Symbol** die Kategorien bearbeiten und an Ihre Risikokriterien anpassen:

- **Eintrittswahrscheinlichkeit:** Selten, Mittel, Häufig, Sehr häufig
- **Schadenshöhe:** Vernachlässigbar, Begrenzt, Beträchtlich, Existenzbedrohend
- **Risikokategorien:** Gering, Mittel, Hoch, Sehr hoch

<!-- SCREENSHOT: ![Risikomatrix](../assets/domain-gs-pp/verinice-gspp-risk-matrix.png) – Risikomatrix der Risikodefinition GSRD -->

Die angepassten Definitionen und die Akzeptanzkriterien sind von der Institutionsleitung freizugeben.

## Elementare Gefährdungen

Die Domäne stellt die 47 elementaren Gefährdungen G 0.1 bis G 0.47 als **Szenarien** bereit. Jede Anforderung des Katalogs nennt im Feld **BSI G0-Gefährdungen** die Gefährdungen, denen sie entgegenwirkt. Über dieses Feld erkennen Sie, welche Gefährdungen bei einer nicht erfüllten Anforderung verstärkt wirken.

Wenden Sie die benötigten elementaren Gefährdungen aus dem [Katalog](../manual/catalogs.md) an (**Elementare Gefährdungen** selektieren und **Anwenden**).

::: warning Keine automatische Gefährdungsübersicht
Anders als in der Domäne IT-Grundschutz sind die elementaren Gefährdungen im aktuellen Katalog nicht mit den Anforderungen verknüpft. Die für ein Zielobjekt relevanten Gefährdungen wählen Sie deshalb selbst aus – z.B. anhand der Gefährdungen, die in den Anforderungen seiner Zielobjektkategorien genannt sind, und ergänzt um weitere Gefährdungen aus Ihrer Analyse.
:::

## Risiken anlegen

Legen Sie für das betroffene Zielobjekt (bzw. den Geschäftsprozess) ein Risiko je relevanter Gefährdung an: Wählen Sie im Objektumfeld des Objekts den Tab **Risiken**, klicken Sie auf **+** und wählen Sie die elementaren Gefährdungen aus. Für jede ausgewählte Gefährdung wird ein Risikoobjekt angelegt.

<!-- SCREENSHOT: ![Risiken anlegen](../assets/domain-gs-pp/verinice-gspp-create-risks.png) – Tab Risiken eines Zielobjekts mit Auswahldialog der elementaren Gefährdungen -->

<!-- SCREENSHOT: ![Risiken](../assets/domain-gs-pp/verinice-gspp-risks.png) – Liste der angelegten Risiken im Objektumfeld -->


Weisen Sie jedem Risiko einen **Risikoeigentümer** zu.

## Risikobewertung

Klicken Sie auf das jeweilige Risiko; es öffnet sich ein Dialog. Bewerten Sie folgende Parameter:

- **Eintrittswahrscheinlichkeit** (und gegebenenfalls eine Erklärung)
- **Auswirkung hinsichtlich der Schadenshöhe** (und gegebenenfalls eine Erklärung)

Aus diesen beiden Werten wird, nachdem Sie Ihre Eingaben gespeichert haben, automatisch das **Bruttorisiko** anhand der Risikomatrix berechnet.

<!-- SCREENSHOT: ![Risikobewertung](../assets/domain-gs-pp/verinice-gspp-risk-assessment.png) – Risikodialog mit Eintrittswahrscheinlichkeit, Schadenshöhe und berechnetem Bruttorisiko -->

## Risikobehandlung

Je nach Höhe des Risikos kann bzw. muss eine Risikobehandlung vorgenommen und gegebenenfalls eine Erklärung dokumentiert werden. Sie können mehrere **Behandlungsoptionen** auswählen:

- Risikoakzeptanz
- Risikovermeidung
- Risikoreduktion
- Risikotransfer

<!-- SCREENSHOT: ![Risikobehandlung](../assets/domain-gs-pp/verinice-gspp-risk-treatment.png) – Abschnitt Risikobehandlung mit Behandlungsoptionen -->

### Risikoreduktion

Bei gewählter Behandlungsoption **Risikoreduktion** reduzieren Sie das Risiko durch ergänzende Sicherheitsmaßnahmen. Sie haben zwei Möglichkeiten, mitigierende Maßnahmen zu hinterlegen:

1. Um eine **neue Maßnahme** zu erstellen, klicken Sie **Mitigierende Maßnahmen hinzufügen** und anschließend **Mitigierende Maßnahme erstellen**. Nachdem Sie Ihre Daten zur Maßnahme gespeichert haben, wird die neue Maßnahme im Risikodialog im Bereich **Maßnahmen zur Risikoreduktion** angezeigt.

1. Um bereits **vorhandene Maßnahmen** zu verknüpfen, klicken Sie **Mitigierende Maßnahmen hinzufügen** und anschließend **Mitigierende Maßnahme verknüpfen**. Wählen Sie im Dialog die benötigten Maßnahmen aus und schließen Sie ihn mit **Speichern**.

<!-- SCREENSHOT: ![Maßnahmen zur Risikoreduktion](../assets/domain-gs-pp/verinice-gspp-risk-reduction.png) – Bereich Maßnahmen zur Risikoreduktion mit verknüpften mitigierenden Maßnahmen und Nettorisiko -->

Abschließend muss das **Nettorisiko** (und gegebenenfalls eine Erklärung) manuell gesetzt werden. **Speichern** und **Schließen** Sie den Risikodialog.

Übernehmen Sie Maßnahmen, die sich als dauerhafte Sicherheitsvorgaben ergeben, als [ergänzende Anforderungen](./modelling#erganzung-von-anforderungen) in das Anforderungspaket.

### Mitigierende Maßnahmen bearbeiten

Um Ihre mitigierenden Maßnahmen zu bearbeiten, klicken Sie **Umsetzung anzeigen** beim entsprechenden Risiko im Tab **Risiken** im Objektumfeld des Zielobjektes. Sie gelangen zur Übersicht aller mitigierenden Maßnahmen für das ausgewählte Risiko. Durch Klick auf eine Maßnahme öffnet sich der Umsetzungsdialog, den Sie wie bei den Anforderungen bearbeiten (siehe [Realisierung](./implementation#umsetzung-anzeigen)).

<!-- SCREENSHOT: ![Mitigierende Maßnahmen](../assets/domain-gs-pp/verinice-gspp-safeguards.png) – Übersicht der mitigierenden Maßnahmen eines Risikos -->

## Restrisiken

Die Restrisiken (Nettorisiken) sind durch die zuständigen Risikoeigentümer zu akzeptieren. Dokumentieren Sie die Akzeptanz nachvollziehbar, z.B. in der Erklärung zum Nettorisiko. Die Restrisiken fließen in die [Priorisierung der Umsetzung](./implementation#umsetzungsplanung-und-priorisierung) und in die [Managementbewertung](./monitoring-improvement#managementbewertung) ein.

## Elementare Gefährdungen im Überblick

| ID | Gefährdung | ID | Gefährdung |
|---|---|---|---|
| G 0.1 | Feuer | G 0.25 | Ausfall von Geräten oder Systemen |
| G 0.2 | Ungünstige klimatische Bedingungen | G 0.26 | Fehlfunktion von Geräten oder Systemen |
| G 0.3 | Wasser | G 0.27 | Ressourcenmangel |
| G 0.4 | Verschmutzung, Staub, Korrosion | G 0.28 | Software-Schwachstellen oder -Fehler |
| G 0.5 | Naturkatastrophen | G 0.29 | Verstoß gegen Gesetze oder Regelungen |
| G 0.6 | Katastrophen im Umfeld | G 0.30 | Unberechtigte Nutzung oder Administration von Geräten und Systemen |
| G 0.7 | Großereignisse im Umfeld | G 0.31 | Fehlerhafte Nutzung oder Administration von Geräten und Systemen |
| G 0.8 | Ausfall oder Störung der Stromversorgung | G 0.32 | Missbrauch von Berechtigungen |
| G 0.9 | Ausfall oder Störung von Kommunikationsnetzen | G 0.33 | Personalausfall |
| G 0.10 | Ausfall oder Störung von Versorgungsnetzen | G 0.34 | Anschlag |
| G 0.11 | Ausfall oder Störung von Dienstleistern | G 0.35 | Nötigung, Erpressung oder Korruption |
| G 0.12 | Elektromagnetische Störstrahlung | G 0.36 | Identitätsdiebstahl |
| G 0.13 | Abfangen kompromittierender Strahlung | G 0.37 | Abstreiten von Handlungen |
| G 0.14 | Ausspähen von Informationen (Spionage) | G 0.38 | Missbrauch personenbezogener Daten |
| G 0.15 | Abhören | G 0.39 | Schadprogramme |
| G 0.16 | Diebstahl von Geräten, Datenträgern oder Dokumenten | G 0.40 | Verhinderung von Diensten (Denial of Service) |
| G 0.17 | Verlust von Geräten, Datenträgern oder Dokumenten | G 0.41 | Sabotage |
| G 0.18 | Fehlplanung oder fehlende Anpassung | G 0.42 | Social Engineering |
| G 0.19 | Offenlegung schützenswerter Informationen | G 0.43 | Einspielen von Nachrichten |
| G 0.20 | Informationen oder Produkte aus unzuverlässiger Quelle | G 0.44 | Unbefugtes Eindringen in Räumlichkeiten |
| G 0.21 | Manipulation von Hard- oder Software | G 0.45 | Datenverlust |
| G 0.22 | Manipulation von Informationen | G 0.46 | Integritätsverlust schützenswerter Informationen |
| G 0.23 | Unbefugtes Eindringen in IT-Systeme | G 0.47 | Schädliche Seiteneffekte IT-gestützter Angriffe |
| G 0.24 | Zerstörung von Geräten oder Datenträgern | | |
