<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Schutzbedarf

Ziel der Schutzbedarfsfeststellung im Grundschutz++ ist es, für die Geschäftsprozesse im Anwendungsbereich zu entscheiden, welchen Schutzbedarf sie bezüglich **Vertraulichkeit**, **Integrität** und **Verfügbarkeit** besitzen. Der Schutzbedarf orientiert sich an den Schäden, die bei einer Beeinträchtigung des Geschäftsprozesses entstehen können. Er ist für jeden Geschäftsprozess zu ermitteln, zu dokumentieren und von der Institutionsleitung freizugeben.

## Schutzbedarfskategorien

Grundschutz++ gibt zwei Schutzbedarfskategorien vor:

- **Normal:** Die Schadensauswirkungen sind begrenzt und überschaubar.
- **Hoch:** Die Schadensauswirkungen können beträchtlich sein.

Die Institution darf eigene Schutzbedarfskategorien definieren, muss sie aber auf diese beiden Kategorien abbilden. Die Risikodefinition **GSRD** der Domäne stellt vier Kategorien je Schutzziel bereit. Wir empfehlen folgende Zuordnung:

| Kategorie in verinice (GSRD) | Schutzbedarf nach Grundschutz++ |
|---|---|
| Unkritisch | normal |
| Normal | normal |
| Hoch | hoch |
| Sehr hoch | hoch |

Dokumentieren Sie diese Zuordnung einmalig, z.B. in Ihrer Leitlinie oder Ihrem Regelwerk zum Risikomanagement.

## Schutzbedarfsdefinition

Die institutionsweiten und für alle Objekte gültigen Schutzbedarfskategorien werden in der [Risikodefinition](./domain-gs-pp-description#risikodefinition) definiert. Navigieren Sie dazu im Menü zu den **Risikodefinitionen** und anschließend **GSRD**. Hier können Sie mit einem **Klick auf den Stift** die Kategorien der Schutzziele bearbeiten, z.B. um die Beschreibungen an Ihre Institution und an die Schadensszenarien des Grundschutz++ anzupassen.

<!-- SCREENSHOT: ![Schutzbedarfsdefinitionen](../assets/domain-gs-pp/verinice-gspp-protection-need-definitions.png) – Bearbeiten der Schutzbedarfskategorien in der Risikodefinition GSRD -->


Als Hilfestellung für die Einstufung „hoch“ nennt die Pilotierungsfassung u.a. folgende Schadensszenarien:

- Verstoß gegen Gesetze, Vorschriften oder Verträge mit existenzbedrohender Konsequenz
- ein gesetzlicher Auftrag kann nicht mehr erfüllt werden
- Beeinträchtigung des informationellen Selbstbestimmungsrechts mit erheblichem Reputationsschaden
- Beeinträchtigung der persönlichen Unversehrtheit
- Beeinträchtigung der Aufgabenerfüllung mit existenzbedrohender Konsequenz
- nachhaltige Schädigung der Reputation
- finanzielle Auswirkungen existenzbedrohenden Ausmaßes

## Schutzbedarfsfeststellung

Öffnen Sie das Formular des jeweiligen Geschäftsprozesses (bzw. Fachverfahrens) und scrollen Sie bis zum Abschnitt **Wirkungsanalyse**. Wählen Sie in den Drop-Down-Menüs den Schutzbedarf für die Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit aus.

<!-- SCREENSHOT: ![Schutzbedarfsfeststellung](../assets/domain-gs-pp/verinice-gspp-protection-need.png) – Abschnitt Wirkungsanalyse im Formular eines Geschäftsprozesses -->


Berücksichtigen Sie dabei die im Geschäftsprozess verarbeiteten Informationen: Der Schutzbedarf der Informationen überträgt sich auf den Geschäftsprozess, in dem sie verarbeitet werden. Informationen können Sie als **Zielobjekte** erfassen und mit dem Geschäftsprozess verknüpfen (siehe [Informationsverbund und Assets](./structure-analysis)).

::: tip Reihenfolge festlegen
Grundschutz++ empfiehlt, bei der erstmaligen Einführung mit dem wichtigsten Geschäftsprozess aus der höchsten Schutzbedarfskategorie zu beginnen. Die Reihenfolge der Bearbeitung legt die Institutionsleitung fest.
:::

::: warning Hoher Schutzbedarf erfordert eine Risikobetrachtung
Für Geschäftsprozesse mit hohem Schutzbedarf ist – anders als bei normalem Schutzbedarf – eine [Risikobetrachtung](./risk-analysis) erforderlich. Außerdem ist die Dokumentation der Assets und ihrer Abhängigkeiten umfangreicher (siehe [Abhängigkeiten](./structure-analysis#abhangigkeiten-zwischen-assets)).
:::

## Schutzbedarfsvererbung

In verinice wird der Schutzbedarf ausgehend von Geschäftsprozessen und Fachverfahren getrennt nach Schutzziel automatisch auf verknüpfte Objekte abgeleitet. Grundlage sind die Verknüpfungen **Erforderlicher Geschäftsprozess**, **Erforderliches Fachverfahren** und **Erforderliches Zielobjekt**. Die Ableitung folgt dem Maximumprinzip über die gesamte Ableitungshierarchie.

Die Methodik Grundschutz++ verlangt die Schutzbedarfsfeststellung nur für die Geschäftsprozesse. Die abgeleiteten Werte an den Assets sind dennoch hilfreich: Sie zeigen, welche Assets zu einem Geschäftsprozess mit hohem Schutzbedarf gehören und daher in die Risikobetrachtung einzubeziehen sind.

Der abgeleitete Schutzbedarf kann in jedem Objekt manuell **überschrieben** werden, indem der Schutzbedarf über das Drop-Down-Feld **Nutzervorgabe** gesetzt wird. In diesem Fall ist durch Auswahl in dem Drop-Down-Feld zu dokumentieren, ob **Verteilungseffekt** oder **Kumulationseffekt** zugrunde gelegt wurden.

<!-- SCREENSHOT: ![Schutzbedarfsvererbung](../assets/domain-gs-pp/verinice-gspp-protection-need-inheritance.png) – abgeleiteter Schutzbedarf an einem Zielobjekt mit Feld Nutzervorgabe und Auswahl Verteilungs-/Kumulationseffekt -->
