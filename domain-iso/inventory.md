<!-- © 2025 The Project Contributors - see AUTHORS.txt -->
# Inventarverzeichnis

Das **Inventarverzeichnis** ist ein zentrales Element zur strukturierten Erfassung aller relevanten Assets, Geschäftsprozesse und weiteren Unternehmenskomponenten. Es dient dazu, eine transparente Übersicht über alle betrieblichen Strukturen und Abhängigkeiten zu schaffen und bildet damit die Grundlage für eine fundierte Risikoanalyse und Maßnahmenplanung.

## Strukturierung der Organisation

Zur genauen Abbildung der Unternehmensstruktur stehen im Inventarverzeichnis neben Geschäftsprozessen und Assets auch folgende Objekttypen zur Verfügung:

- **Organisationen**  
- **ISMS-Anwendungsbereiche**  
- **Scopes**  
- **Externe Dienstleister**  

Diese Subtypen ermöglichen eine detaillierte Modellierung der internen und externen Rahmenbedingungen.

## Arbeiten mit Scopes

**Scopes** sind zentrale Strukturierungselemente innerhalb des ISMS-Anwendungsbereichs. Sie lassen sich hierarchisch organisieren und können andere Scope-Objekte enthalten oder selbst Bestandteil eines anderen Scopes sein:

![Scopes ISO/IEC 27000-Domäne](/assets/domain-iso/verinice-39-scopes.de.png)

### Scope-Beziehungen verwalten

Öffnen Sie ein beliebiges **Scope-Objekt**.
Im Tab-Reiter **Scopes** fügen Sie z.B. untergeordnete Scopes hinzu:

![Untergeordnete Scopes](/assets/domain-iso/verinice-39-scopes-parts.de.png)

Im Tab-Reiter **In Scope** definieren Sie, zu welchem übergeordneten Scope das aktuelle Objekt gehört:

![Übergeordnete Scopes](/assets/domain-iso/verinice-39-superordinate-scopes.de.png)

### Bestandteile eines Scope-Objekts

Im Tab-Reiter **Teile** innerhalb eines Scope-Objekts können zusätzliche Bestandteile hinzugefügt werden. Dies ist insbesondere relevant für die Dokumentation des ISMS-Anwendungsbereich - etwa zur genauen Beschreibung und Abgrenzung des Geltungsbereichs, wie sie im Rahmen einer ISO/IEC 27001-Zertifizierung erforderlich ist.

Zu den Bestandteilen zählen insbesondere **Geschäftsprozesse** und **Assets**, die innerhalb dieses Geltungsbereichs betrachtet werden sollen:

![Bestandteile eines ISMS-Anwendungsbereichs](/assets/domain-iso/verinice-39-components-of-ISMS-application.de.png)

## Geschäftsprozesse anlegen und verwalten

Um einen neuen **Geschäftsprozess** anzulegen, gehen Sie wie folgt vor:

1. Navigieren Sie über das **linke Menü** oder über das Dashboard zu **Geschäftsprozesse**.
2. In der Objektübersicht klicken Sie unten rechts auf den **Plus-Button (+)**, um ein neues Objekt zu erstellen.
3. Im Formular für den Geschäftsprozess können Sie die notwendigen Informationen hinterlegen und im unteren Abschnitt Verknüpfungen zu **erforderlichen Assets** herstellen. Die selben Verknüpfungen sehen Sie auch in den **Objektdetails** unter dem Tab-Reiter **Verknüpfungen**:

![Verknüpfungen](/assets/domain-iso/verinice-39-links-between-process-and-asset.de.png)

::: info Über den **Plus-Button** legen Sie Objekte kontextsensitiv immer mit dem Objekt- und Subtyp an, der gerade aktiv ist!
:::

**Speichern** Sie den Prozess wenn Sie alle Daten wie gewünscht erfasst haben. Beachten Sie dabei, dass die Felder **Name** und **Status** (in allen Objekten) zwingend erforderlich sind! Ihr Prozess wird anschließend in der Objektübersicht aufgelistet.

### Zusätzliche Bestandteile für Geschäftsprozesse

Über den Tab-Reiter **Teile** können Sie zusätzliche **Geschäftsprozesse** hinzufügen, um Abhängigkeiten oder weitere Geschäftsprozesse als Teilprozesse zu dokumentieren.

## Assets anlegen und strukturieren

Das Vorgehen zur Erstellung eines neuen **Assets** entspricht dem der Geschäftsprozesse:

1. Navigieren Sie über das Menü zum Bereich **Assets**.
2. Klicken Sie in der Übersicht auf den **Plus-Button (+)**.
3. Im Formular für ein Asset können Sie die notwendigen Informationen eingeben und im unteren Bereich Verknüpfungen zu weiteren **erforderlichen Assets** gesetzt werden.

### Zusätzliche Bestandteile für Assets

Wie bei den Geschäftsprozessen lassen sich auch bei Assets über den Tab-Reiter **Teile** weitere **Assets** hinzufügen. Damit können zusätzliche strukturelle oder funktionale Zusammenhänge dokumentiert werden.

## Report Inventarverzeichnis

Um das Inventarverzeichnis als Report im PDF-Format über alle **Assets** zu erstellen, die als Bestandteile einem **ISMS-Geltungsbereich** zugeordnet sind, wählen Sie im Menü **Reports** und anschließend **Inventarverzeichnis** aus:

![Report Inventarverzeichnis](/assets/domain-iso/verinice-39-inventory-of-assets.de.png)

Wählen Sie anschließend ein Scope-Objekt aus den unter **ISMS-Geltungsbereich** angelegten Objekten aus und klicken Sie auf den Button **Report generieren**, um das Inventarverzeichnis zu erstellen.

Im Report werden alle **Assets** ausgegeben, die als **Teile** einem Objekt vom Subtyp **ISMS-Geltungsbereich** zugeordnet wurden.

Im ersten Abschnitt des Reports erhalten Sie eine Übersicht über alle Assets mit den eingegebenen Werten für Vertraulichkeit, Verfügbarkeit und Integrität, sodass besonders schützenswerte Assets leicht erkennbar sind. Im zweiten Abschnitt werden für jedes Asset alle dokumentierten Informationen aus den jeweiligen Formularen detailliert dargestellt.
