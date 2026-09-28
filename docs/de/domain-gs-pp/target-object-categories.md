<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Zielobjektkategorien

Zielobjektkategorien sind standardisierte Klassen für die im Grundschutz++ beschriebenen Anforderungen. Durch die Zuordnung Ihrer Assets zu Zielobjektkategorien (Zielobjektmapping) werden die Assets in die Systematik des Grundschutz++ überführt: Jeder Kategorie sind im Katalog Anforderungen zugeordnet, die damit für das Asset gelten.

## Hierarchie der Zielobjektkategorien

Die 39 Zielobjektkategorien des Katalogs sind unter sieben Wurzelkategorien hierarchisch geordnet. Anforderungen werden einmalig für die passende Kategorie definiert und gelten für alle untergeordneten Kategorien. In Klammern steht die Anzahl der Anforderungen, die der Kategorie direkt zugeordnet sind.

- **Anwendungen** (81)
  - Dateiserver (3)
  - DNS-Server (5)
  - Faxe (3)
  - Interpersonelle Kommunikation (10)
    - E-Mail (14)
  - Office-Anwendungen (2)
  - TK-Anwendungen (9)
    - VK-Anwendungen (5)
  - Verzeichnisdienste (3)
  - Virtualisierungslösungen (4)
  - Webbrowser (14)
  - Webserver (6)
    - Webanwendungen (4)
- **Einkäufe** (39)
  - Dienstleistungen (31)
    - Outsourcing (29)
      - Cloud-Dienste (9)
  - IT-Produkte (14)
- **Informationen** (5)
  - Daten (31)
- **IT-Systeme** (93)
  - Endgeräte (15)
  - Hostsysteme (9)
- **Netze** (34)
  - Externe Netzanschlüsse (16)
  - Interne Netzsegmente (3)
    - WLANs (4)
- **Nutzende** (81)
  - Mitarbeitende (11)
    - Administrierende (9)
    - Führungskräfte (2)
      - Institutionsleitung (1)
- **Standorte** (59)
  - Gebäude (2)
  - Räume (6)
    - Datenträgerarchiv (2)
    - Räume für technische Infrastruktur (3)
      - Serverräume (4)

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

Anforderungen wirken nicht nur auf die direkt zugeordnete Kategorie („Blatt-Kategorie“), sondern auch auf deren übergeordnete Kategorien. Daher wird die Liste der Kategorien je Asset um alle Elternknoten bis zur Wurzel erweitert. Die Vererbung ist deterministisch, da die Hierarchie fest vorgegeben ist.

**Beispiel:** Ein Asset „Bürgerportal“ ist der Kategorie **Webanwendungen** zugeordnet. Über die Hierarchie gelten zusätzlich die Anforderungen von **Webserver** und **Anwendungen**. Das Asset erhält damit 4 + 6 + 81 = 91 Anforderungen aus den Zielobjektkategorien.

| Direkt zugeordnet | Zusätzlich über Vererbung |
|---|---|
| Webanwendungen | Webserver, Anwendungen |
| E-Mail | Interpersonelle Kommunikation, Anwendungen |
| WLANs | Interne Netzsegmente, Netze |
| Cloud-Dienste | Outsourcing, Dienstleistungen, Einkäufe |
| Serverräume | Räume für technische Infrastruktur, Räume, Standorte |
| Institutionsleitung | Führungskräfte, Mitarbeitende, Nutzende |

In verinice ist jede Zielobjektkategorie mit ihrer übergeordneten Kategorie über **Teile** verbunden. Im Objektumfeld einer Kategorie sehen Sie unter **Teile** die übergeordnete Kategorie sowie die zugeordneten Anforderungen.

<!-- SCREENSHOT: ![Teile einer Zielobjektkategorie](../assets/domain-gs-pp/verinice-gspp-category-parts.png) – Objektumfeld der Kategorie Webanwendungen mit übergeordneter Kategorie Webserver und den zugeordneten Anforderungen unter Teile -->


::: tip Zielobjektkategorie bei Anforderungen
Welchen Kategorien eine Anforderung zugeordnet ist, sehen Sie im Feld **Zielobjektkategorie** der Anforderung und am Suffix im Titel, z.B. `[Webbrowser]`. Anforderungen mit zwei Kategorien tragen zwei Suffixe, z.B. `[Nutzende] [Endgeräte]`.
:::
