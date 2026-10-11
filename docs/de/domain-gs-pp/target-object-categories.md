<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Zielobjektkategorien

Zielobjektkategorien sind standardisierte Klassen für die im Grundschutz++ beschriebenen Anforderungen. Durch die Zuordnung Ihrer Assets zu Zielobjektkategorien (Zielobjektmapping) werden die Assets in die Systematik des Grundschutz++ überführt: Jeder Kategorie sind im Katalog Anforderungen zugeordnet, die damit für das Asset gelten.

## Hierarchie der Zielobjektkategorien

Die 39 Zielobjektkategorien des Katalogs sind unter sieben Wurzelkategorien hierarchisch geordnet. Anforderungen werden einmalig für die passende Kategorie definiert und gelten für alle untergeordneten Kategorien. In Klammern stehen zwei Zahlen:

- **direkt:** Anzahl der Anforderungen, die der Kategorie selbst zugeordnet sind (erkennbar am Titel-Suffix, z.B. `[Webanwendungen]`)
- **gesamt:** Anzahl der Anforderungen, die die Kategorie im Katalog enthält – die direkt zugeordneten und die aller übergeordneten Kategorien bis zur Wurzel (siehe [Vererbung](#vererbung))

Bei Wurzelkategorien sind beide Zahlen gleich.

- **Anwendungen** (81 / 81)
  - Dateiserver (3 / 84)
  - DNS-Server (5 / 86)
  - Faxe (3 / 84)
  - Interpersonelle Kommunikation (10 / 91)
    - E-Mail (14 / 105)
  - Office-Anwendungen (2 / 83)
  - TK-Anwendungen (9 / 90)
    - VK-Anwendungen (5 / 95)
  - Verzeichnisdienste (3 / 84)
  - Virtualisierungslösungen (4 / 85)
  - Webbrowser (14 / 95)
  - Webserver (6 / 87)
    - Webanwendungen (4 / 91)
- **Einkäufe** (39 / 39)
  - Dienstleistungen (31 / 70)
    - Outsourcing (29 / 99)
      - Cloud-Dienste (9 / 108)
  - IT-Produkte (14 / 53)
- **Informationen** (5 / 5)
  - Daten (31 / 36)
- **IT-Systeme** (93 / 93)
  - Endgeräte (15 / 108)
  - Hostsysteme (9 / 102)
- **Netze** (34 / 34)
  - Externe Netzanschlüsse (16 / 50)
  - Interne Netzsegmente (3 / 37)
    - WLANs (4 / 41)
- **Nutzende** (81 / 81)
  - Mitarbeitende (11 / 92)
    - Administrierende (9 / 101)
    - Führungskräfte (2 / 94)
      - Institutionsleitung (1 / 95)
- **Standorte** (59 / 59)
  - Gebäude (2 / 61)
  - Räume (6 / 65)
    - Datenträgerarchiv (2 / 67)
    - Räume für technische Infrastruktur (3 / 68)
      - Serverräume (4 / 72)

<!-- GRAFIK: ![Hierarchie der Zielobjektkategorien](../assets/domain-gs-pp/gspp-target-object-category-tree.png) – optional: grafische Darstellung der Hierarchie (vgl. Abbildung 6 der Methodik) -->

Die Definition, Synonyme und die Einordnung als organisatorische oder technische Kategorie finden Sie im Formular jeder Zielobjektkategorie unter **Definition**, **Synonyme** und **Kategorie**. Navigieren Sie dazu im Menü zu **Maßnahmen > Zielobjektkategorien** oder öffnen Sie die Kategorie im [Katalog](../manual/catalogs.md).

<!-- SCREENSHOT: ![Formular einer Zielobjektkategorie](../assets/domain-gs-pp/verinice-gspp-category-form.png) – Zielobjektkategorie (z.B. Webanwendungen) mit Definition, Synonymen und Kategorie -->


::: info Bezeichnungen in der Pilotierungsfassung
Die Pilotierungsfassung nennt in ihrem Anhang 1 einige Kategorien abweichend, z.B. „Mobile Endgeräte“ statt „Endgeräte“ oder „Fax(-anwendungen)“ statt „Faxe“. Maßgeblich für die Arbeit in verinice sind die Bezeichnungen im Katalog.
:::

## Assets den Zielobjektkategorien zuordnen

Ordnen Sie jedes Asset einer oder mehreren Zielobjektkategorien zu. Grundlage sind die Definitionen der Kategorien. Dabei gelten folgende Grundsätze:

- Ein Asset kann **mehreren** Zielobjektkategorien zugeordnet werden, wenn es mehrere Funktionen erfüllt – z.B. ein Server, der als Hostsystem betrieben wird und auf dem ein Webserver und eine Webanwendung laufen, als eigenständige Zielobjekte oder als ein Zielobjekt mit mehreren Kategorien.
- Die Zuordnung erfolgt **funktionsorientiert**: Entscheidend ist, wie das Asset im Geschäftsprozess wirkt, nicht nur seine technischen Merkmale.
- Jedes Asset lässt sich mindestens einer Kategorie zuordnen. **Schwer zuordenbare** Assets werden in der [Risikobetrachtung](./risk-analysis) analysiert; ggf. ergänzen Sie [eigene Anforderungen](./modelling#erganzung-von-anforderungen).
- Bei manueller Zuordnung dokumentieren Sie die Entscheidung nachvollziehbar, z.B. mit einer kurzen Begründung in der **Beschreibung** des Zielobjekts.

In verinice dokumentieren Sie die Zuordnung, indem Sie die Zielobjektkategorie auf dem Zielobjekt **modellieren** (siehe [Anforderungspaket erstellen](./modelling#zielobjektkategorien-modellieren)).

## Vererbung

Für ein Asset gelten nicht nur die Anforderungen der direkt zugeordneten Kategorie („Blatt-Kategorie“), sondern auch die aller übergeordneten Kategorien bis zur Wurzel. Die Vererbung ist deterministisch, da die Hierarchie fest vorgegeben ist.

Im Katalog ist die Vererbung bereits aufgelöst: Jede Zielobjektkategorie enthält die Anforderungen aller ihrer übergeordneten Kategorien. Sie modellieren deshalb auf einem Asset **nur die direkt zugeordnete Kategorie** und erhalten damit alle geltenden Anforderungen.

**Beispiel:** Ein Asset „Bürgerportal“ ist der Kategorie **Webanwendungen** zugeordnet. Die Kategorie enthält ihre 4 eigenen Anforderungen sowie die 6 Anforderungen von **Webserver** und die 81 Anforderungen von **Anwendungen**. Wenn Sie nur „Webanwendungen“ auf dem Asset modellieren, erhält es damit 4 + 6 + 81 = 91 Anforderungen aus den Zielobjektkategorien.

| Direkt zugeordnet | Enthaltene übergeordnete Kategorien | Anforderungen gesamt |
|---|---|---|
| Webanwendungen | Webserver, Anwendungen | 91 |
| E-Mail | Interpersonelle Kommunikation, Anwendungen | 105 |
| WLANs | Interne Netzsegmente, Netze | 41 |
| Cloud-Dienste | Outsourcing, Dienstleistungen, Einkäufe | 108 |
| Serverräume | Räume für technische Infrastruktur, Räume, Standorte | 72 |
| Institutionsleitung | Führungskräfte, Mitarbeitende, Nutzende | 95 |

Im Objektumfeld einer Zielobjektkategorie sehen Sie unter **Teile** alle Anforderungen, die die Kategorie enthält – die eigenen und die der übergeordneten Kategorien. Die übergeordneten Kategorien selbst sind dort nicht aufgeführt; welcher Kategorie eine Anforderung ursprünglich zugeordnet ist, erkennen Sie am Titel-Suffix.

<!-- SCREENSHOT: ![Teile einer Zielobjektkategorie](../assets/domain-gs-pp/verinice-gspp-category-parts.png) – Objektumfeld der Kategorie Webanwendungen mit den 91 enthaltenen Anforderungen unter Teile (Suffixe [Webanwendungen], [Webserver] und [Anwendungen]) -->


::: tip Zielobjektkategorie bei Anforderungen
Welchen Kategorien eine Anforderung zugeordnet ist, sehen Sie im Feld **Zielobjektkategorie** der Anforderung und am Suffix im Titel, z.B. `[Webbrowser]`. Anforderungen mit zwei Kategorien tragen zwei Suffixe, z.B. `[Nutzende] [Endgeräte]`.
:::
