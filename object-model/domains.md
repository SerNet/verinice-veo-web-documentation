<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Domänen

Die verschiedenen Fachbereiche, die mit dem Managementsystem verinice bearbeitet werden können, werden *Domänen* genannt. Im Moment ist geplant, dass fünf Domänen in verinice enthalten sein werden:

* DS-GVO
* IT-Grundschutz
* NIS2
* TISAX
* ISO&nbsp;27000

![domains](/assets/object-model/domains.png)

Diese Domänen können einzeln benutzt oder kombiniert werden. Anwenderinnen und Anwender können zum Beispiel zuerst mit der Domäne DS-GVO beginnen und dort ein Verzeichnis der Verarbeitungstätigkeiten erstellen.
Später ist es möglich, dieselben Objekte, die dafür erstellt wurden, auch in der Domäne IT-Grundschutz zu verwenden. Domänen können aber auch kopiert und erweitert werden. Es können eigene Domänen erzeugt werden, die ggf. aus den vorhandenen abgeleitet werden.

## Domäneninhalte

Eine Domäne definiert Subtypen, Aspekte, Verknüpfungen, Formulare, einen Katalog, Profile und ggf. Risikodefinitionen:

![domaene](/assets/object-model/domain-bestandteile-kompakt.png)

* Ein [Fachobjekt](objects#fachobjekte) hat je Domäne einen bestimmten [Subtypen](#subtypen). 
* Ein Fachobjekt enthält mehrere [Aspekte](#aspekte). Ein Aspekt ist eine Gruppe von domänenspezifischen Attributen.
* [Verknüpfungen](#verknupfungen) sind Beziehungen zwischen zwei Objekten.
* Mit einem [Formular](#formulare) können genau die Daten erfasst werden, die für einen bestimmten Anwendungsfall (Use Case) aus einer Domäne benötigt werden.
* Ein [Katalog](#katalog) ist eine Sammlung vorgefertigter Fachobjekte, die auf ein ISMS-Modell angewendet werden können.
* [Profile](#profile) sind Sammlungen vorgefertigter Fachobjekte, die für einen bestimmten Anwendungsfall modelliert wurden. 
* [Risikodefinition](#risikodefinitionen) sind Konfigurationen der Risikoanalyse.

### Subtypen

Die konkreten Arten von Fachobjekten in einer Domäne werden über die Subtypen abgebildet. Eine Domäne definiert für jeden der acht [Objekttypen](objects#fachobjekte) eine Menge von Subtypen. Es ist auch möglich, dass eine Domäne für einen Objekttypen gar keine Subtypen definiert, wenn dieser Objekttyp für die Domäne irrelevant ist.

Einem konkreten Fachobjekt muss ein Subtyp aus einer Domäne zugeordnet werden, damit es überhaupt in der Domäne benutzt werden kann. Der Subtyp eines Fachobjektes steuert unter anderem, mit welchen [Formularen](#formulare) es bearbeitet wird und mit welchen anderen Fachobjekten es verknüpft werden darf (s. [Links](#links)).

::: info Beispiel
Ein [Prozess](objects#prozess) soll in der DS-GVO erstellt werden. Es muss dazu einer der dort definierten Subtypen *Verarbeitungstätigkeit*, *Datenübertragung* und *Datenschutz-Folgeabschätzung* ausgewählt werden. Der Prozess wird als *Verarbeitungstätigkeit* erstellt. Danach wird er zusätzlich assoziiert mit der ISO&nbsp;27000, wobei der Subtyp *Geschäftsprozess* ausgewählt wird. Der Prozess ist nun im Kontext der DS-GVO eine Verarbeitungstätigkeit und nach ISO&nbsp;27000 ein Geschäftsprozess.
:::

### Aspekte

Ein Fachobjekt kann neben den Grundeigenschaften wie Name, Beschreibung oder Abkürzung auch domänenspezifische Aspekte haben. Ein Aspekt enthält mehrere Attribute eines Fachobjekts, die grundsätzlich nur in einer Domäne gelten. Es gibt jedoch auch geteilte Aspekte, die in mehreren Domänen gültig sind.

Eine Domäne definiert ihre verfügbaren Aspekte mitsamt Attributen, dabei hat jedes Attribut einen Namen und einen Datentypen. Ist ein Aspekt identisch in mehreren Domänen definiert, so gilt der Aspekt als geteilt. Für ein Fachobjekt erscheinen die Attribute eines geteilten Aspektes in allen entsprechenden Domänen und die Werte sind dort auch überall gleich.

::: info Beispiel
Ein Prozess aus der DS-GVO enthält einen Aspekt mit den datenschutzrelevanten Attributen *Art der übermittelten Daten*, *Betroffene* und *Rechtsgrundlage*. Gleichzeitig kann derselbe Prozess aber ein Geschäftsprozess in der Domäne ISO&nbsp;27000 sein und aus diesem Grund einen Aspekt aus der Domäne ISO&nbsp;27000 mit den Attributen *Confidentiality*, *Integrity* und *Availability* enthalten.

![aspekte](/assets/object-model/aspekte.png)
:::

### Verknüpfungen

Eine Verknüpfung stellt eine domänenspezifische Beziehung zu einem anderen Fachobjekt her. Eine Verknüpfung enthält neben dem verknüpften Objekt auch Attribute, die zu der Verknüpfung gehören.

In der Domäne wird für jede Verknüpfung neben des Verknüpfungsnamens und einer Reihe von Attributen auch der zulässige [Subtyp](#subtypen) für das Verknüpfungsziel definiert.

::: info Beispiel
In einer fiktiven Domäne sollen Controls Personen zugeordnet werden, die in einem bestimmten Zeitraum für das Control verantwortlich sind. Dazu ist in der Domäne eine Verknüpfung *Verantwortlich* definiert, welche Controls mit Personen verbindet und die Attribute *von* und *bis* enthält, mit denen der Zeitraum erfasst werden kann. Ein konkretes Control kann mehrere *Verantwortlich*-Verknüpfungen zu verschiedenen Personen haben, wobei jede Verknüpfung eigene Werte für die Attribute *von* und *bis* hat. 

![links](/assets/object-model/links.png)
:::

### Formulare

Eine Domäne enthält beliebig viele Formulare. Mit diesen Formularen lassen sich speziell die Aspekte und Verknüpfungen in den Objekten bearbeiten, die in der Domäne enthalten sind und unterstützen die Anwender dabei, die in der Domäne erforderlichen Arbeitsabläufe umzusetzen. Die Formulare sind nur für die Anwender sichtbar, die mit der Domäne arbeiten. Die Anwender können in der Domäne neue Formulare definieren oder vorhandene abändern und anpassen. Der Artikel [Formulare](forms) beschreibt die Formulare in verinice.

### Katalog

Jede Domäne enthält einen Katalog mit einer Sammlung von Fachobjekten, die auf ein ISMS-Modell angewendet werden können. Ein Katalogeintrag besteht aus einem Fachobjekt und zusätzlich aus einer Menge von Regeln, die bestimmen, welche Aktionen ausgeführt werden, wenn der Katalogeintrag auf das Modell angewendet wird.

::: info Beispiel
Die Domäne Datenschutz enthält Katalogeinträge für Technische und organisatorische Maßnahmen (TOMs, Fachobjekt: [Control](objects#control)) und Gefährdungen (Fachobjekt: [Szenario](objects#szenario)). Diese Einträge enthalten nur eine einfache Regel, wenn sie auf eine Unit im Modell angewendet werden: Die TOM oder Gefährdung wird in die Unit kopiert. Andere Kataloge können komplizierte Regeln für das Anwenden enthalten, wie zum Beispiel das IT-Grundschutz-Kompendium in der Domäne IT-Grundschutz.
:::

### Profile

Ein Profil ist eine Sammlung von Fachobjekten, die für einen bestimmten Anwendungsfall modelliert wurden. Viele der Fachobjekte in den Profilen kommen aus dem Katalog in der Domäne. In den Profilen werden die Einträge aus dem Katalog mehrfach in unterschiedlichen Szenarien angewendet. Profile enthalten dadurch fertige ISMS-Modelle, die als Vorlage verwendet werden können. Sie enthalten Hinweise und Beispiele für den praktischen Einsatz von verinice.

### Risikodefinitionen

Eine Risikodefinition ist die Konfiguration der Risikoanalyse in einer Domäne. In der Risikodefinition können die Parameter für die Berechnung des Risikos individuell angepasst werden.

Es ist möglich, dass in einer Domäne mehrere Risikodefinitionen hinterlegt sind, sodass je nach [Scope](objects#scope) mit einer unterschiedlichen Risikodefinition gearbeitet werden kann. Es ist ebenfalls möglich, dass eine Domäne gar keine Risikodefinitionen enthält, wenn das Erfassen von [Risiken](objects#risiko) in der Domäne nicht vorgesehen ist.


### Inspection

Eine **Inspection** ist eine Überprüfung oder Validierung eines Fachobjekts. Sie dient dazu, sicherzustellen, dass bestimmte Bedingungen oder Kriterien erfüllt sind. Inspections sind mit einer Schweregradstufe und einer Beschreibung verbunden. Sie werden gespeichert und verwaltet, um eine konsistente Bewertung der Fachobjekte zu gewährleisten.  

Eine Inspection wird Anwendenden angezeigt, um bei einzelnen Fachobjekten Korrekturen oder Anmerkungen anzubieten. Sie kann zudem **Suggestions** enthalten (*"Quick-Fixes"*), um die festgestellte Abweichung direkt zu beheben.  

Eine **Inspection** kann auf Decisions zurückgreifen, um zu ihrer Einschätzung zu kommen. So kann beispielsweise eine Decision bestimmen, ob eine DSFA erforderlich ist, und die Inspection nutzt dieses Ergebnis, um dem Nutzer eine entsprechende Empfehlung oder Korrekturmöglichkeit bereitzustellen.

:::info Beispiel
Im Datenschutz könnte eine Inspection feststellen, dass eine Datenschutzfolgeabschätzung (DSFA) verpflichtend ist, aber noch nicht durchgeführt wurde. Die Inspection kann dann direkt die Aktion anbieten, die DSFA hinzuzufügen.  
:::

### Decision

Eine **Decision** bewertet ein Fachobjekt anhand einer Liste von **Rules** (s.u.), um einen booleschen Ergebniswert zu bestimmen. Die erste zutreffende Rule entscheidet über das Ergebnis (First-Hit-Policy). Decisions dienen dazu, eine systematische und nachvollziehbare Bewertung auf Basis mehrerer Rules vorzunehmen.  

Eine Decision zeigt dem Nutzer das endgültige Ergebnis der Bewertung an.  

:::info Beispiel
Eine Decision könnte bestimmen, ob für ein Fachobjekt eine Datenschutzfolgeabschätzung (DSFA) erforderlich ist. Dabei wird genau angezeigt, welche **Rule** für diese Entscheidung verantwortlich war und wie sie ausgewertet wurde. Dies ermöglicht eine transparente Nachvollziehbarkeit der Entscheidungsfindung.
:::

#### Rule

Eine **Rule** ist eine konfigurierbare Bedingung, die auf ein Fachobjekt angewendet wird, um zu bestimmen, ob es bestimmte Kriterien erfüllt. Rules sind Bestandteil einer Decision und liefern einen Ausgangswert, der zum Ergebnis der Decision wird, wenn die Rule zutrifft. Die Bewertung erfolgt anhand vordefinierter Bedingungen.  

:::: info Beispiele
- "Hohes Risiko beim Fachobjekt vorhanden"
- "Verfahrenstätigkeit befindet sich auf Positivliste"
::::

### Unterschied: Decision vs. Inspection vs. Rule

- **Rule**: Stellt eine einzelne Bedingung dar, die auf Fachobjekte angewendet wird. Rules sind Bestandteil einer Decision und bestimmen das Ergebnis basierend auf ihren Bedingungen.  
- **Decision**: Kombiniert mehrere Rules, um ein Fachobjekt zu bewerten und ein finales Ergebnis zu bestimmen. Dabei wird dem Nutzer transparent angezeigt, welche Rule für die Entscheidung ausschlaggebend war.  
- **Inspection**: Bietet dem Nutzer Hinweise oder Korrekturvorschläge und kann eine **Suggestion** enthalten, um eine direkte Anpassung vorzunehmen. Greift dafür auf Decisions zurück.

Diese Konzepte arbeiten zusammen, um ein leistungsfähiges Rahmenwerk für die Bewertung und Durchsetzung von Bedingungen auf Fachobjekte innerhalb des jeweiligen Fachgebiets bereitzustellen.

::: info Beispiel
![Decision-Inspection-Rule](/assets/object-model/inspections-decisions.png)

1. Die *Decision* weist darauf hin, dass die DSFA erforderlich ist, weil die *Rule* "Hohes Risiko vorhanden" zutrifft.
2. Die *Inspection* stellt fest, dass lt. Decision (s.o.) eine DSFA erforderlich ist, aber noch nicht durchgeführt wurde. Sie bietet eine *Suggestion* an, um die DSFA hinzuzufügen.
3. Die *Suggestion* kann der Benutzer durch einen Klick auslösen, um die DSFA direkt hinzuzufügen.
:::

### Domänen-Templates

![domain-templates](/assets/object-model/domain-templates.png)

Die Domänen werden als **Domänen-Templates** in einem Repository für die Benutzung angeboten. Die Domänen-Templates sind versioniert. Je nach Bedarf kann ein Kunde ein oder mehrere Templates auswählen. Wenn ein Kunde ein Template in einer bestimmten Version auswählt, dann wird aus dem Template eine Kopie für den Kunden erstellt. Diese exklusive Kopie des Kunden ist die Domäne, mit der der Kunde arbeitet. Die Domäne des Kunden kann individuell an seine Bedürfnisse angepasst werden.

::: info Beispiel
![domain-templates-clients](/assets/object-model/domain-templates-clients.png)

Das Diagramm zeigt das Repository von verinice mit den Domänen-Templates. Das Template "IT-Grundschutz" und "DS-GVO" liegt jeweils in 2 unterschiedlichen Versionen vor. 

- **Kunde A** benutzt das Template "IT-Grundschutz V1.1". Der Kunde hat seine Domäne angepasst und ein eigenes Profil erstellt, dass als spezielle Vorlage für Abteilungen im Unternehmen benutzt wird.

- **Kunde B** benutzt die Templates "IT-Grundschutz V1.0" und "DS-GVO V1.5". Der Kunde hat in der Domäne "IT-Grundschutz" Aspekte und Verknüpfungen der Objekte für seine Zwecke angepasst.

- **Kunde C** benutzt unmodifiziert das Template "DS-GVO V1.0". Das Update auf die neuere Template-Version hat er noch nicht durchgeführt.

- **Kunde D** benutzt das Template "ISO&nbsp;27000" und hat bisher keine Änderungen an der Domäne gemacht.
:::
