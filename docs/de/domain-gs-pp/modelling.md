<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Anforderungspaket erstellen

Wenn der Informationsverbund abgegrenzt, die Assets erfasst und den Zielobjektkategorien zugeordnet sind, stellen Sie das **Anforderungspaket** zusammen. Es enthält alle Anforderungen, die für den Informationsverbund mit seinen Geschäftsprozessen und Assets relevant sind, und ist Ausgangspunkt für die [Realisierung](./implementation).

## Bestandteile des Anforderungspakets

Das Anforderungspaket setzt sich aus drei Arten von Anforderungen zusammen:

| | Art | Kennzeichnung im Katalog | Modelliert auf |
|---|---|---|---|
| (1) | **Verbundweite Anforderungen** der Methodik-Praktiken | `[Methodik]`, Kategorie „Verbundweite Anforderungen“ | Informationsverbund |
| (1) | Anforderungen **ohne Zielobjektkategorie** aus organisatorischen und technischen Praktiken | `[Prozess:<Kürzel>]`, Führungsprozess-Kategorien | Informationsverbund (bzw. Führungsprozess) |
| (2) | Anforderungen **mit Zielobjektkategorie** | `[<Zielobjektkategorie>]` | Zielobjekte der Kategorie |
| (3) | **Ergänzende Anforderungen** – eigene Anforderungen, z.B. aus Compliance-Management oder Risikobetrachtung | – | je nach Bezug |

Die Anforderungen (1) sind nach der Pilotierungsfassung **verpflichtend** aufzunehmen. Die Anforderungen (2) ergeben sich aus der Zuordnung der Assets zu den Zielobjektkategorien. Die ergänzenden Anforderungen (3) nehmen Sie bei Bedarf auf.

## Katalogelemente anwenden

Bevor Sie Anforderungen in Ihrem Informationsverbund modellieren können, wenden Sie diese aus dem [Katalog](../manual/catalogs.md) an, den Sie über das Menü aufrufen. Navigieren Sie hier zu den **Anforderungen** und **Zielobjektkategorien**, selektieren Sie die benötigten Elemente und klicken Sie anschließend auf **Anwenden**.

<!-- SCREENSHOT: ![Katalogelemente anwenden](../assets/domain-gs-pp/verinice-gspp-apply-catalog.png) – Katalog mit selektierten Anforderungen und Zielobjektkategorien und Schaltfläche Anwenden -->


::: tip Kategorien zusammen mit ihren Anforderungen anwenden
Die Zuordnung der Anforderungen zu einer Zielobjektkategorie ist über deren **Teile** abgebildet. Diese Teile werden beim Anwenden **nicht automatisch** mit übernommen. Wenden Sie deshalb die benötigten Zielobjektkategorien immer zusammen mit ihren Anforderungen und ihren übergeordneten Kategorien an – am einfachsten, indem Sie alle Anforderungen und alle Zielobjektkategorien des Katalogs in einem Schritt anwenden. Um gezielt die Anforderungen einer Kategorie auszuwählen, filtern Sie nach dem Titel-Suffix, z.B. `[Webbrowser]` oder `[Methodik]`.
:::

## Verbundweite Anforderungen

Die Anforderungen der Methodik-Praktiken Governance und Compliance, Strukturmodellierung, Umsetzung, Monitoring-Evaluation, Verbesserung und Risikomanagement definieren die Governance-, Steuerungs-, Kontroll- und Verbesserungsprozesse des ISMS. Sie werden ohne weitere Auswahl einmalig für den gesamten Informationsverbund modelliert. Ein individuelles Vorgehen ist nicht vorgesehen.

Modellieren Sie dazu die Zielobjektkategorie **Verbundweite Anforderungen** (99 Anforderungen) auf Ihren **Informationsverbund**:

- Öffnen Sie den Informationsverbund.
- Wählen Sie im Objektumfeld den Tab **Bausteine** bzw. **Anforderungen**, klicken Sie auf **+** und anschließend auf **modellieren**.
- Wählen Sie im Dialog die Kategorie **Verbundweite Anforderungen** aus und speichern Sie.

<!-- SCREENSHOT: ![Verbundweite Anforderungen modellieren](../assets/domain-gs-pp/verinice-gspp-model-information-domain.png) – Modellierungsdialog am Informationsverbund mit ausgewählter Kategorie Verbundweite Anforderungen -->

## Anforderungen ohne Zielobjektkategorie

Anforderungen organisatorischer und technischer Praktiken, denen keine Zielobjektkategorie zugewiesen ist, gelten wie die Methodik-Anforderungen einmalig im Informationsverbund. Der Katalog bündelt sie je Praktik in einer Kategorie mit der Abkürzung `Prozess` – den **Führungsprozessen** (z.B. „Berechtigungsmanagement“ mit allen `[Prozess:BER]`-Anforderungen, siehe [Anforderungskatalog](./catalog#zielobjektkategorien-und-sammelkategorien)).

Modellieren Sie alle zwölf Führungsprozess-Kategorien auf Ihren Informationsverbund – genauso wie die verbundweiten Anforderungen.

<!-- SCREENSHOT: ![Modellierter Informationsverbund](../assets/domain-gs-pp/verinice-gspp-information-domain-modelled.png) – Objektumfeld des Informationsverbunds mit Verbundweite Anforderungen und den zwölf Führungsprozessen -->


::: tip Führungsprozesse mit Prozessverantwortlichen
In größeren Institutionen kann es sinnvoll sein, jeden Führungsprozess als eigenen **Geschäftsprozess** (Prozess-Art: unterstützender Prozess) anzulegen, die federführend zuständige Rolle als **Verantwortliche Person** (Prozess-Owner) zu hinterlegen und die Führungsprozess-Kategorie auf diesem Prozess zu modellieren. So ist die Zuständigkeit für jede Anforderung unmittelbar erkennbar.
:::

::: info Stand vor der Pilotierung
Nach dem Leitfaden (März 2026) wurde für jede Anforderung ohne Zielobjektkategorie entschieden, ob sie für den betrachteten Geschäftsprozess relevant ist; nicht relevante Anforderungen wurden mit Begründung gestrichen. Nach der Pilotierungsfassung sind diese Anforderungen verpflichtend aufzunehmen. Ist eine Anforderung im Informationsverbund funktional nicht erfüllbar, setzen Sie in der Realisierung den Status **nicht anwendbar** und dokumentieren die Begründung.
:::

## Zielobjektkategorien modellieren

Nun werden die Anforderungen mit Zielobjektbezug auf die Assets modelliert. Dabei können Sie auf zwei verschiedene Arten vorgehen:

### Aus Sicht des Zielobjektes

Weisen Sie einem Zielobjekt die zugeordneten Zielobjektkategorien zu:

- Öffnen Sie ein Zielobjekt.
- Wählen Sie im Objektumfeld den Tab **Bausteine** bzw. **Anforderungen**, klicken Sie auf **+** und anschließend auf **modellieren**.
- Es öffnet sich ein Dialog mit allen in Ihrer Unit vorhandenen Kategorien und Anforderungen. Über die Suche können Sie gezielt nach Name und/oder Abkürzung suchen, z.B. nach `Zielobjektkategorie`, um nur die Kategorien des Katalogs anzuzeigen.
- Wählen Sie die direkt zugeordnete Kategorie **und alle übergeordneten Kategorien bis zur Wurzel** aus (siehe [Vererbung](./target-object-categories#vererbung)) und speichern Sie den Dialog.

<!-- SCREENSHOT: ![Zielobjektkategorien auswählen](../assets/domain-gs-pp/verinice-gspp-select-categories.png) – Modellierungsdialog am Zielobjekt mit Suche „Zielobjektkategorie“ und ausgewählten Kategorien Webanwendungen, Webserver, Anwendungen -->

### Aus Sicht der Zielobjektkategorie

Weisen Sie einer Zielobjektkategorie die passenden Zielobjekte zu:

- Öffnen Sie die Zielobjektkategorie, der ein oder mehrere Zielobjekte zugeordnet werden sollen.
- Wählen Sie im Objektumfeld den Tab **Zielobjekte**, klicken Sie auf **+** und wählen Sie den Zielobjekttyp **Asset**.
- Wählen Sie im Dialog die Zielobjekte aus, die mit der Kategorie modelliert werden sollen, und speichern Sie.
- Wiederholen Sie den Vorgang für die übergeordneten Kategorien.

<!-- SCREENSHOT: ![Zielobjekte zuordnen](../assets/domain-gs-pp/verinice-gspp-assign-target-objects.png) – Tab Zielobjekte einer Zielobjektkategorie mit Auswahl der Zielobjekte -->

Nachdem Sie den Dialog gespeichert haben, werden die modellierten Kategorien und Anforderungen im Zielobjekt angezeigt.

<!-- SCREENSHOT: ![Modellierte Zielobjektkategorien](../assets/domain-gs-pp/verinice-gspp-modelled-categories.png) – Objektumfeld eines Zielobjekts mit den modellierten Kategorien -->


### Anforderungen mit zwei Zielobjektkategorien

Einigen Anforderungen sind zwei Zielobjektkategorien zugeordnet (z.B. `[Nutzende] [Endgeräte]`). Nach dem Leitfaden wird eine solche Anforderung auf die **zuerst genannte** Kategorie modelliert, wenn das betreffende Asset von einem Asset der zweitgenannten Kategorie abhängt.

Da die Anforderung in verinice Teil beider Kategorien ist, erscheint sie an den Assets beider Kategorien. Bearbeiten Sie sie beim Asset der erstgenannten Kategorie; beim Asset der zweitgenannten Kategorie können Sie im Rahmen der Konsolidierung den Status **nicht anwendbar** mit Verweis auf das Asset setzen, an dem die Anforderung umgesetzt wird.

## Konsolidierung und Redundanzprüfung

Wirken Anforderungen über mehrere Kategorien identisch auf ein Asset, werden sie nur einmal geführt – jedoch mit Bezug zu jedem betroffenen Asset. Unterschiedliche assetspezifische Umsetzungen einer Anforderung bleiben erhalten. In verinice ist eine Anforderung je Zielobjekt immer nur einmal modelliert, auch wenn sie über mehrere Kategorien zugeordnet wurde. Die Umsetzung dokumentieren Sie je Zielobjekt.

## Ergänzung von Anforderungen

Kann ein Asset mit den vorhandenen Anforderungen nicht hinreichend abgebildet werden, oder ergeben sich Verpflichtungen aus dem Compliance-Management oder der Analyse der interessierten Parteien, ergänzen Sie eigene Anforderungen:

1. Eigene Anforderung entwickeln, z.B. im Rahmen einer Risikobetrachtung. Begründen Sie nachvollziehbar, warum die Anforderungen des Katalogs nicht ausreichen.
2. Anforderung in die **Satzschablone** des Grundschutz++ bringen: *Praktik* – *Modalverb* – *Ergebnis* – *Handlungswort*, z.B. „Konfiguration MUSS … aktivieren.“
3. Anforderungspaket um die neue Anforderung erweitern.

Navigieren Sie dazu im Menü zu **Maßnahmen > Anforderungen** und erstellen Sie über **+** eine neue Anforderung. Befüllen Sie die Felder analog zu den Katalog-Anforderungen (Anforderung, Modalverb, Sicherheitsniveau, Praktik, Schutzziele). Anschließend modellieren Sie die Anforderung auf das betroffene Zielobjekt oder fügen sie über das Objektumfeld als **Teil** einer eigenen Kategorie hinzu.

<!-- SCREENSHOT: ![Eigene Anforderung](../assets/domain-gs-pp/verinice-gspp-user-defined-requirement.png) – Formular einer eigenen Anforderung nach der Satzschablone -->


::: warning Ergänzende Anforderungen und Risiko
Auch neu hinzugefügte Anforderungen müssen auf ein Risiko einzahlen. Zahlt die Anforderung auf ein Schadensszenario ein, ist eine Risikoanalyse durchzuführen. Steht sie in Abhängigkeit zu einer Anforderung des BSI, ist diese Abhängigkeit in der Risikobetrachtung zu betrachten. Zahlt sie auf kein Schadensszenario ein, ist dies kurz darzulegen.
:::

## Sicherheitsniveau

Das Sicherheitsniveau ist für jede Anforderung im Katalog festgelegt: **Normal-SdT** (Stand der Technik) oder **Erhöht**. Durch die Anforderungsanalyse für Geschäftsprozesse mit normalem Schutzbedarf entsteht ein Anforderungspaket mit dem vorgegebenen Sicherheitsniveau.

Sie können die initiale Einstellung überprüfen und bei Bedarf – auch für einzelne Assets – ändern:

- Eine **Erhöhung** von normal-SdT auf erhöht wirkt sich lediglich auf die Reihenfolge der Umsetzung aus.
- Eine **Absenkung** von erhöht auf normal-SdT ist mit einer [Risikobetrachtung](./risk-analysis) zu begründen.

## Gestaltungsentscheidungen

Bevor Sie mit der Umsetzung beginnen, treffen Sie die zentralen Gestaltungsentscheidungen.

**Parameter** sind variabel gestaltbare Stellen innerhalb einer Anforderung, z.B. „regelmäßig“ oder die Angabe eines Standards. Im Feld **Anforderung** sind sie als Platzhalter gekennzeichnet, z.B. `{{ insert: param, gc.1.1-prm1 }}`. Legen Sie die Werte nach der Erstellung des Anforderungspakets fest und dokumentieren Sie sie – z.B. in der Umsetzungsbeschreibung der Anforderung. Fordern unterschiedliche Vorgaben unterschiedliche Werte, wählen Sie die sicherste Einstellung oder betrachten Sie die Anforderung je Asset separat.

**Führende Zuständigkeiten:** Jede Praktik enthält im Thema „Grundlagen“ eine Anforderung zur Zuweisung der Aufgaben (z.B. `BER.1.1.2` „Zuweisung der Aufgaben“). Mit diesen Parametern legen Sie fest, welche Rolle die führende Zuständigkeit für die Praktik erhält. Hinterlegen Sie die Rolle als **Verantwortliche Person** bei der Umsetzung der Anforderungen.

## Anforderungspaket aus Profil

Das Profil **Grundschutz++-Kompendium V.1.0.0** (Alpha-Version einer Blaupause) enthält Anforderungen des Katalogs und Beispiel-Zielobjekte für die Zielobjektkategorien. Sie können die Beispiel-Zielobjekte inklusive der modellierten Anforderungen modifizieren, kopieren oder löschen, um Ihre Institution abzubilden.

Sie können das Profil aus der Unitverwaltung heraus beim Erstellen einer neuen Unit anwenden oder auf eine bereits bestehende Unit anwenden.

<!-- SCREENSHOT: ![Profil anwenden](../assets/domain-gs-pp/verinice-gspp-apply-profile.png) – Unitverwaltung mit Auswahl des Profils Grundschutz++-Kompendium V.1.0.0 -->

::: warning Das Anwenden eines Profiles fügt einer bestehenden Unit eine Vielzahl zusätzlicher Objekte hinzu! Wir empfehlen die Anwendung in einer neuen Unit zu prüfen.
:::

## Ergebnis

Das Anforderungspaket besteht nun aus den verbundweiten Anforderungen und den Anforderungen der Führungsprozesse am Informationsverbund (1), den Anforderungen aus den Zielobjektkategorien an den Zielobjekten (2) und Ihren ergänzenden Anforderungen (3). Im nächsten Schritt ermitteln Sie den [Umsetzungsstatus](./implementation).
