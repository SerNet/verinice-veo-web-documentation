<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Informationsverbund und Assets

Mit der Anforderungsanalyse (Prozessschritt 2) grenzen Sie den Informationsverbund ab, erfassen seine Assets und ordnen diese den Zielobjektkategorien zu. Die Anforderungen dazu finden Sie in der Praktik **Strukturmodellierung (STM)**.

## Informationsverbund

Der Anwendungsbereich legt den formalen Rahmen des ISMS fest, der Informationsverbund ist seine inhaltlich-technische Abbildung. Ein Anwendungsbereich kann einen oder mehrere Informationsverbünde enthalten. Für jeden Informationsverbund entsteht ein eigenes Anforderungspaket.

Navigieren Sie zum Objekttyp **Scope** und dem Subtyp **Informationsverbünde** und erstellen Sie analog zur Institution Ihren ersten **Informationsverbund**. Geben Sie im Formular alle Daten (z.B. Abkürzung, Name, Beschreibung) ein und speichern Sie abschließend.

<!-- SCREENSHOT: ![Informationsverbund erstellen](../assets/domain-gs-pp/verinice-gspp-information-domain-create.png) – Formular „Informationsverbund erstellen“ -->


Beantworten und dokumentieren Sie in der Beschreibung oder in einem verknüpften **Dokument**:

- **Organisatorische und personelle Abgrenzung:** Welche Institutionsbereiche, Rollen und Personen gehören zum Informationsverbund?
- **Technische Abgrenzung:** Welche Anwendungen, Systeme und Netze sind Bestandteil? Wo verlaufen die technischen Grenzen, wie sind Schnittstellen zu externen Systemen gestaltet?
- **Infrastrukturelle Abgrenzung:** Welche Standorte, Gebäude und Räume gehören dazu?
- **Outsourcing-Abgrenzung:** Was wird selbst betrieben, was ist ausgelagert? Welche Cloud-Dienste werden genutzt?

Dokumentieren Sie zusätzlich die Schnittstellen zu externen Prozessen und Systemen sowie zu anderen Informationsverbünden.

::: tip Assets nachnutzen
Bereits erfasste Assets dürfen und sollen in weiteren Geschäftsprozessen und in anderen Informationsverbünden des Anwendungsbereichs wiederverwendet werden. Legen Sie ein Asset daher nur einmal an und verknüpfen Sie es mehrfach.
:::

## Assets erfassen

Erfassen Sie die Assets, die zur Ausführung der Geschäftsprozesse benötigt werden. Die Reihenfolge orientiert sich an der Priorisierung aus der [Schutzbedarfsfeststellung](./protection-needs). Im ersten Durchlauf genügt es, die Assets des wichtigsten Geschäftsprozesses zu erfassen. Relevante Assets sind insbesondere:

- Informationen
- Systeme und Anwendungen
- Netz- und Kommunikationskomponenten
- infrastrukturelle und physische Assets (Standorte, Gebäude, Räume)
- personelle und organisatorische Assets (Nutzergruppen, Dienstleistungen, Einkäufe)

Alle Assets erfassen Sie als **Zielobjekte**: Navigieren Sie zum Objekttyp **Assets** und dem Subtyp **Zielobjekte** und legen Sie über die Plus-Schaltfläche neue Objekte an. Hinterlegen Sie für jedes Asset:

- eindeutige **Abkürzung** und **Name**
- **Beschreibung** mit Zweck und Einsatz im Geschäftsprozess
- **Verantwortliche Person** (Asset-Owner)
- ggf. **Anzahl**, **Plattform** und **Betriebsstadium** (Planung, Test, Roll out, Betrieb, Reserve, Reparatur)
- die zugeordnete(n) Zielobjektkategorie(n) (siehe [Zielobjektkategorien](./target-object-categories))

<!-- SCREENSHOT: ![Zielobjekt erfassen](../assets/domain-gs-pp/verinice-gspp-target-object-form.png) – Formular eines Zielobjekts mit Abkürzung, Name, Beschreibung, verantwortlicher Person, Anzahl und Betriebsstadium -->

Assets mit ähnlichen Eigenschaften und gleichem Einsatzzweck dürfen gruppiert werden, z.B. alle gleichartig konfigurierten Clients als ein Zielobjekt mit entsprechender **Anzahl**. Auf vorhandene Asset-Register und CMDB-Daten können Sie zurückgreifen.

::: tip Beispiel-Zielobjekte aus dem Profil
Das Profil **Grundschutz++-Profil V2** enthält zu jeder Zielobjektkategorie ein gleichnamiges Beispiel-Zielobjekt, das bereits mit seiner Kategorie modelliert ist. Sie können diese als Vorlage kopieren und an Ihre Institution anpassen (siehe [Anforderungspaket aus Profil](./modelling#anforderungspaket-aus-profil) und [Profile in der Domäne Grundschutz++](./gs-pp-profiles)).
:::

## Abhängigkeiten zwischen Assets

Verknüpfungen zwischen Objekten bilden die Abhängigkeiten im Informationsverbund ab und sind Grundlage der Schutzbedarfsvererbung. Relevant sind insbesondere:

- am Geschäftsprozess: **Erforderliches Zielobjekt**, **Erforderlicher Geschäftsprozess**, **Erforderliches Fachverfahren**
- am Zielobjekt: **Erforderliches Zielobjekt**

Um eine Verknüpfung zu erstellen, fügen Sie im Formular eines Objektes das erforderliche andere Objekt hinzu. Scrollen Sie dazu im Formular weiter nach unten, wo die erforderlichen Objekte aufgelistet werden, und suchen Sie das benötigte Objekt aus. Ist das Objekt noch nicht vorhanden, können Sie es direkt aus dem Formular heraus über **+ "gewünschtes Objekt" erstellen** anlegen. Im Objektumfeld werden unter **Links** alle ein- und ausgehenden Verknüpfungen aufgelistet.

<!-- SCREENSHOT: ![Verknüpfungen](../assets/domain-gs-pp/verinice-gspp-relations.png) – Objektumfeld eines Geschäftsprozesses mit den Links auf erforderliche Zielobjekte -->


Der notwendige Umfang der Dokumentation hängt nach der Pilotierungsfassung vom Schutzbedarf des Geschäftsprozesses ab:

| Schutzbedarf des Geschäftsprozesses | Zu dokumentierende Abhängigkeiten |
|---|---|
| **hoch** | Die wesentlichen Abhängigkeiten zwischen Geschäftsprozess, Informationen und den unterstützenden Assets müssen nachvollziehbar dokumentiert sein. |
| **normal** | Die Zuordnung der Assets zum Geschäftsprozess ist nicht erforderlich. Mindestens die Abhängigkeiten zwischen **Anwendungen** und **IT-Systemen** (physisch und virtuell) sind zu dokumentieren. |

Die Abhängigkeiten dürfen auch in vorhandenen Quellen wie CMDB, Netzplan oder Service Map vorliegen. Netzpläne können Sie als **Dokumente** mit dem Subtyp **Netzpläne** hinterlegen.

<!-- SCREENSHOT: ![Dashboard - Informationsverbund](../assets/domain-gs-pp/verinice-gspp-dashboard.png) – Dashboard mit erfassten Geschäftsprozessen und Zielobjekten -->


Im nächsten Schritt ordnen Sie die Assets den [Zielobjektkategorien](./target-object-categories) zu.
