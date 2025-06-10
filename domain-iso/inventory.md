<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Inventarverzeichnis

Das **Inventarverzeichnis** ist ein zentrales Element zur strukturierten Erfassung aller relevanten Assets, Geschäftsprozesse und weiteren Unternehmenskomponenten. Es dient dazu, eine transparente Übersicht über alle betrieblichen Strukturen und Abhängigkeiten zu schaffen und bildet damit die Grundlage für eine fundierte Risikoanalyse und Maßnahmenplanung.

## Strukturierung der Organisation

Zur genauen Abbildung der Unternehmensstruktur stehen im Inventarverzeichnis neben Geschäftsprozessen und Assets auch folgende Objekttypen zur Verfügung:

- **Organisationen**  
- **ISMS-Anwendungsbereich**  
- **Scopes**  
- **Externe Dienstleister**  

Diese Subtypen ermöglichen eine detaillierte Modellierung der internen und externen Rahmenbedingungen.

## Arbeiten mit Scopes

**Scopes** sind zentrale Strukturierungselemente innerhalb des ISMS-Anwendungsbereichs. Sie lassen sich hierarchisch organisieren und können andere Scope-Objekte enthalten oder selbst Bestandteil eines anderen Scopes sein:

![Scopes ISO/IEC 27000-Domäne](/assets/domain-iso/scopes.png)


### Scope-Beziehungen verwalten

Öffnen Sie ein beliebiges **Scope-Objekt**.
Im Tabreiter **Scopes** fügen Sie z.B. untergeordnete Scopes hinzu:

![Untergeordnete Scopes](/assets/domain-iso/scopes_parts.png)

Im Tabreiter **In Scope** definieren Sie, zu welchem übergeordneten Scope das aktuelle Objekt gehört:

![Übergeordnete Scopes](/assets/domain-iso/superordinate_scopes.png)


### Bestandteile eines Scope-Objekts

Im Tabreiter **Teile** innerhalb eines Scope-Objekts können weitere Bestandteile hinzugefügt werden. Dies ist insbesondere z.B. für ein ISMS-Anwendungsbereich wichtig, um den ISMS-Anwendungsbereich zu dokumentieren oder die Abgrenzung des ISMS-Anwendungsbereichs z.B. für eine Zertifzierung zu definieren.

Zu den Bestandteilen zählen insbesondere **Geschäftsprozesse** und **Assets**, die innerhalb dieses Geltungsbereichs betrachtet werden sollen:

![Bestandteile eines ISMS-Anwendungsbereichs](/assets/domain-iso/components_of_ISMS_application.png)


## Geschäftsprozesse anlegen und verwalten

Um einen neuen **Geschäftsprozess** anzulegen, gehen Sie wie folgt vor:

1. Navigieren Sie über das **linke Menü** oder über das Dashboard zu **„Geschäftsprozesse“**.
2. In der Objektübersicht klicken Sie unten rechts auf den **Plus-Button (+)**, um ein neues Objekt zu erstellen.
3. Im Formular für den Geschäftsprozess können Sie die notwendigen Informationen hinterlegen und im unteren Abschnitt Verknüpfungen zu **erforderlichen Assets** hinzufügen. Die selben Verknünüpfungen sehen Sie auch in den **Objektdetails** unter dem Tabreiter **Verknüpfungen**:

![Verknüpfungen](/assets/domain-iso/links_between_process_and_asset.png)


::: info Über die Plus-Schlatfläche legen Sie Objekte kontextsensitiv immer mit dem Objekt- und Subtyp an, der gerade aktiv ist!
:::

**Speichern** Sie den Prozess wenn Sie alle Daten wie gewünscht erfasst haben, beachten Sie dabei, dass die Felder **Name** und **Status** (in allen Objekten) zwingend erforderlich sind! Ihr Prozoess wird anschließend in der Objektübersicht aufgelistet.

### Zusätzliche Bestandteile für Geschäftsprozesse

Über den Tabreiter **Teile** können Sie zusätzliche **Geschäftsprozesse** hinzufügen, um Abhängigkeiten oder weitere Geschäftsprozesse als Teilprozesse zu dokumentieren.

## Assets anlegen und strukturieren

Das Vorgehen zur Erstellung eines neuen **Assets** entspricht dem der Geschäftsprozesse:

1. Navigieren Sie über das Menü zum Bereich **„Assets“**.
2. Klicken Sie in der Übersicht auf den **Plus-Button (+)**.
3. Im Formular für ein Asset können Sie die notwenidgen Informationen eingeben und im unteren Bereich Verknüpfungen zu weiteren **erforderlichen Assets** gesetzt werden.

### Zusätzliche Bestandteile für Assets

Wie bei den Geschäftsprozessen lassen sich auch bei Assets über den Tabreiter **Teile** weitere **Assets** hinzufügen. Damit können zusätzliche strukturelle oder funktionale Zusammenhänge dokumentiert werden.

## Reporting

Um sich ein Report im PDF-Format zur weiteren Verarbeitung für das Inventarverzeichnis über alle **Assets**, die als Bestandteile einem **ISMS-Geltungsbereich** angehören, erstellen zu lassen, müssen Sie im linken Menü auf **Reports** und **Inventarverzeichnis klicken:

![Report Inventarverzeichnis](/assets/domain-iso/inventory_of_assets.png)

Wählen Sie anschließend ein Scope-Obket aus den unter **ISMS-Geltungsbereich** angelegten Objekten aus und klicken auf den Button **Report generieren**, um den das Inventarverzeichnis sich erstellen zu lassen.

Im Report werden alle **Assets** ausgegeben, die als **Teile** einem Objekt aus **ISMS-Geltungsbereich** zugeordnet wurden.
Auf den ersten Seiten des Reports erhalten Sie eine Übersicht über alles Assets mt den eingegeben Werten für Vertraulichkeit, Verfügbarkeit und Integrität. Auf den darauffolgenden Seiten wird für jedes Assets alle dokumentierten Informationen auf den jeweiligen Formualren ausgegeben.

