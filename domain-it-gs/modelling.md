<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Baustein-Modellierung

Wenn die Strukturanalyse durchgeführt und der Schutzbedarf festgestellt wurde, kommt es im nächsten Schritt zur Baustein-Modellierung.

verinice stellt zwei Möglichkeiten zur Verfügung, um die Modellierung von Bausteinen nach der Vorgehensweise des IT-Grundschutz durchzuführen. Neben der Modellierung einzelner Bausteine durch das Anwenden von Katalogelementen, kann das gesamte IT-Grundschutz-Kompendium als Informationsverbund mit modellierten Beispielobjekten als Profil angewendet werden.

## Modellierung aus Katalog

Die Modellierung aus dem Katalog besteht aus zwei Teilschritten, dem Anwenden von Katalogelementen und der Modellierung von Bausteinen selbst.

### Bausteine aus Katalog anwenden

Bevor Sie die Bausteine in Ihrem Informationsverbund modellieren könnnen, sollten diese erst aus dem [Katalog](/manual/catalogs.md), den Sie über das Menü aufrufen, angewendet werden.
Navigieren Sie hier zu **Bausteine** und selektieren alle (oder nur die von Ihnen benötigten) Bausteine und klicken Sie anschließend auf **Anwenden**.

![Bausteine aus Katalog anwenden](/assets/domain-it-gs/verinice-32-apply-modules.de.png)

Nachdem die Bausteine in Ihrer Unit vorhanden sind, können Sie diese den Zielobjekten zuordnen. Dabei können Sie auf zwei verschiedene Arten vorgehen:

### Baustein-Modellierung

#### Aus Sicht des Zielobjektes

Weisen sie einem Zielobjekt die gewünschten Bausteine zu:

- Öffnen Sie ein Zielobjekt, bei dem die Baustein-Modellierung vorgenommen werden soll.
- Wählen Sie im Objektumfeld den Tab **Bausteine** und klicken Sie auf **+** und anschließend auf **Bausteine modellieren**.

![Bausteine modellieren](/assets/domain-it-gs/verinice-32-modell-modules-1.de.png)

- Es öffnet sich ein Dialog mit allen von Ihnen im Vorfeld aus dem Katalog angewendeten Bausteinen. In diesem Dialog wählen Sie die Bausteine aus, die Sie modellieren wollen. Über die Suche können Sie gezielt nach Bausteinen (Name und/oder Abkürzung) suchen. Auch eine auf- oder absteigende Sortierung ist in diesem Dialog möglich.

![Auswahl der Bausteine](/assets/domain-it-gs/verinice-32-select-modules.de.png)

- Nachdem Sie den Dialog gespeichert haben, werden Ihnen im Zielobjekt unter **Bausteine** die modellierten Bausteine angezeigt.

![Modellierte Bausteine](/assets/domain-it-gs/verinice-32-modelled-modules.de.png)

#### Aus Sicht des Bausteins

Weisen sie einem Baustein die gewünschten Zielobjekt zu:

- Öffnen Sie einen Baustein, dem ein oder mehrere Zielobjekte zugeordnet werden sollen.
- Wählen Sie im Objektumfeld den Tab **Zielobjekte**, klicken Sie auf **+** und wählen Sie anschließend den erforderlichen Zielobjekttyp (Scope, Prozess oder Asset).

![Zielobjekte zuordnen](/assets/domain-it-gs/verinice-37-assign-target-object.de.png)

- Es öffnet sich ein Dialog mit allen Zielobjekten des zuvor ausgewählten Typs. In diesem Dialog wählen Sie die Zielobjekte aus, die mit dem Baustein modelliert werden sollen. Über die Suche können Sie gezielt nach Zielobjekten (Name und/oder Abkürzung) suchen. Auch eine auf- oder absteigende Sortierung ist in diesem Dialog möglich. 

![Auswahl der Zielobjekte](/assets/domain-it-gs/verinice-37-select-target-objects.de.png)

- Nachdem Sie den Dialog gespeichert haben, werden Ihnen im Baustein unter **Zielobjekte** die Zielobjekte, bei denen dieser Baustein modelliert ist, angezeigt.

![Modellierte Zielobjekte](/assets/domain-it-gs/verinice-37-modelled-target-objects.de.png)

### Bearbeiten der Bausteine

Um einen Baustein zu bearbeiten, klicken Sie auf den entsprechenden **Baustein**, es öffnet sich ein Dialog, in dem Sie die verantwortliche Person und eine Beschreibung hinterlegen können.

![Bausteine bearbeiten](/assets/domain-it-gs/verinice-32-edit-modules.de.png)

### Benutzerdefinierte Bausteine

Natürlich ist es auch möglich benutzerdefinierte Bausteine und Anforderungen in verinice anzulegen. Navigieren Sie dazu im Menü zu **Maßnahmen > Bausteine/Anforderungen** und erstellen Sie einfach über **+** die gewünschten Objekte. Anschließend können Sie die erstellten Objekte über das Objektumfeld als **Teile** zu einem Baustein zusammenfügen. 

![Benutzerdefinierter Baustein](/assets/domain-it-gs/verinice-32-user-defined-module.de.png)

## Modellierung aus Profil

Die Modellierung aus einem Profil vereinfacht die Modellierung eines gesamten Informationsverbundes erheblich. Es werden alle Bausteine des IT-Grundschutz-Kompendiums inklusive modellierter Muster-Zielobjekte in die aktive Unit kopiert. Sie können die Muster-Zielobjekte inklusive der modellierten Bausteine modifizieren, kopieren oder löschen, um Ihre Institution abzubilden.

Sie können das Profil aus der Unitverwaltung heraus beim Erstellen einer neuen Unit anwenden oder auf eine bereits bestehende Unit anwenden.

::: warning Das Anwenden eines Profiles fügt einer bestehenden Unit eine Vielzahl zusätzlicher Objekte hinzu! Wir empfehlen die Anwendung in einer neuen Unit zu prüfen.
