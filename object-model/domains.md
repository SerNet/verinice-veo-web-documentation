<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Domänen

Die verschiedenen Fachbereiche, die mit dem Managementsystem verinice bearbeitet werden können, werden *Domänen* genannt. Im Moment ist geplant, dass 3 Domänen in verinice enthalten sein werden:

* Datenschutz
* IT-Grundschutz
* ISO 27000

![domains](/assets/object-model/domains.png)

Diese 3 Domänen können einzeln benutzt oder kombiniert werden. Anwenderinnen und Anwender können zuerst mit der Domäne Datenschutz beginnen und dort zum Beispiel ein Verzeichnis der Verarbeitungstätigkeiten erstellen.
Später ist es möglich, dieselben Objekte, die dafür erstellt wurden, auch in der Domäne IT-Grundschutz zu verwenden. Domäne können aber auch kopiert und erweitert werden. Es können eigene Domänen erzeugt werden, die ggf. aus den vorhandenen abgeleitet werden.

Eine Domäne besteht aus einer Menge von Aspekten, Links, Formularen, Profilen sowie einem Katalog und einer Risikodefinition:

![domaene](/assets/object-model/domain-bestandteile-kompakt.png)

* Ein Fachobjekt enthält mehrere Gruppen von Eigenschaften (Properties). Diese Gruppen werden im Objektmodell von verinice **Aspekte** genannt. Ein Aspekt ist einer oder mehrerer Domänen zugeordnet.
* **Links** sind Verknüpfungen eines Objekts zu einem anderen Objekt. Genau wie Aspekte können Links Eigenschaften enthalten, die diese Verknüpfung beschreiben.
* Mit einem **Formular** können genau die Daten erfasst werden, die für einen bestimmten Anwendungsfall (Use Case) aus einer Domäne benötigt werden.
* Ein **Katalog** ist eine Sammlung von Fachobjekten mit Aspekten aus der Domäne, die auf ein ISMS-Modell angewendet werden können.
* Ein **Profil** ist eine Sammlung von Fachobjekten, die für einen bestimmten Anwendungsfall modelliert wurden. 
* Eine **Risikodefinition** ist die Konfiguration der Risikoanalyse in einer Domäne.

#### Aspekt

Ein Aspekt enthält mehrere Eigenschaften eines Fachobjekts. Jeder Aspekt ist einer oder mehrerer Domänen zugeordnet. Zusammengenommen bilden alle Aspekte die verschiedenen Blickwinkel auf ein Fachobjekt ab.

Ein Prozess kann zum Beispiel in der Domäne Datenschutz ein Verfahren für ein Verzeichnis der Verarbeitungstätigkeiten sein. Daher enthält der Prozess Aspekte mit Eigenschaften aus der Domäne Datenschutz für das Verzeichnis der Verarbeitungstätigkeiten. Gleichzeitig kann derselbe Prozess aber auch Teil einer Risikoanalyse in der Domäne ISO 27000 sein und enthält aus diesem Grund einen Aspekt aus der Domäne ISO 27000 mit den Eigenschaften *Confidentiality*, *Integrity* und *Availability*.

![aspekte](/assets/object-model/aspekte.png)

#### Link

Links sind erweiterte Aspekte. Zusätzlich zu Eigenschaften enthalten Links eine Verknüpfung zu einem anderen Objekt. Ein Link ist eine Verknüpfung zu einem anderen Objekt mit Eigenschaften, die zu der Verknüpfung gehören. Genau wie ein Aspekt gehört ein Link zu einer Domäne. So kann zum Beispiel ein Link *Verantwortlich* in einem Control definiert werden. Dieser Link enthält die Verknüpfung zu einer Person und die Eigenschaft *von* und *bis*.

![links](/assets/object-model/links.png)

#### Objektschema

Durch die Aspekte und Links sind die Daten, die Fachobjekt in verinice enthält, flexibel. Die Struktur der Daten kann verändert werden. Damit jederzeit klar ist, welche Daten ein Objekt enthält, werden die Daten durch ein Schema beschrieben. Das Schema ist in der Sprache [JSON Schema](https://json-schema.org/) geschrieben. Das Schema stellt sicher, welche Daten ein Fachobjekt beim Lesen und Schreiben enthalten darf. Daten, die nicht im Schema definiert sind, können nicht geschrieben werden und es werden keine Daten ausgegeben, die nicht im Schema definiert sind.

#### Formular

Eine Domäne enthält beliebig viele Formulare. Mit diesen Formularen lassen sich speziell die Aspekte und Links in den Objekten bearbeiten, die in der Domäne enthalten sind und unterstützen die Anwender dabei, die in der Domäne erforderlichen Arbeitsabläufe umzusetzen. Die Formulare sind nur für die Anwender sichtbar, die mit der Domäne arbeiten. Die Anwender können in der Domäne neue Formulare definieren oder vorhandene abändern und anpassen. Der Abschnitt [Formulare](forms) beschreibt die Formulare in verinice.

#### Katalog

Jede Domäne enthält einen Katalog mit einer Sammlung von Fachobjekten, die auf ein ISMS-Modell angewendet werden können. Ein Katalogeintrag besteht aus einem Fachobjekt und zusätzlich aus einer Menge von Regeln, die bestimmen, welche Aktionen ausgeführt werden, wenn der Katalogeintrag auf das Modell angewendet wird.

Die Domäne Datenschutz enthält Katalogeinträge für Technische und organisatorische Maßnahmen (TOMs, Fachobjekt: [Control](objects#control)) und Gefährdungen (Fachobjekt: [Szenario](objects#szenario)). Diese Einträge enthalten nur eine einfache Regel, wenn sie auf eine Unit im Modell angewendet werden: Die TOM oder Gefährdung wird in die Unit kopiert. Andere Kataloge können komplizierte Regeln für das Anwenden enthalten, wie zum Beispiel das IT-Grundschutz-Kompendium in der Domäne IT-Grundschutz.

#### Profil

Ein Profil ist eine Sammlung von Fachobjekten, die für einen bestimmten Anwendungsfall modelliert wurden. Viele der Fachobjekte in den Profilen kommen aus dem Katalog in der Domäne. In den Profilen werden die Einträge aus dem Katalog mehrfach in unterschiedlichen Szenarien angewendet. Profile enthalten dadurch fertige ISMS-Modelle, die als Vorlage verwendet werden können. Sie enthalten Hinweise und Beispiele für den praktischen Einsatz von verinice.

#### Risikodefinition

Eine Risikodefinition ist die Konfiguration der Risikoanalyse in einer Domäne. In der Risikodefinition können die Parameter für die Berechnung des Risikos individuell angepasst werden.


### Domain-Templates

![domain-templates](/assets/object-model/domain-templates.png)

Die Domänen werden als **Domain-Templates** in einem Repository für die Benutzung angeboten. Die Domain-Templates sind versioniert. Je nach Bedarf kann ein Kunde ein oder mehrere Domain-Templates auswählen. Wenn ein Kunde ein Domain-Template in einer bestimmten Version auswählt, dann wird aus dem Domain-Template eine Kopie für den Kunden erstellt. Diese exklusive Kopie des Kunden, ist die Domain, mit der der Kunde arbeitet. Die Domain des Kunden kann individuell für seine Bedürfnisse angepasst werden.

![domain-templates-clients](/assets/object-model/domain-templates-clients.png)

Das Diagramm zeigt das Repository von verinice mit den Domain-Templates. Das Domain-Template "IT-Gundschutz" und "DS-GVO" liegt jeweils in 2 unterschiedlichen Versionen vor. 

- **Kunde A** benutzt das Domain-Template "IT-Grundschutz V1.1". Der Kunde hat seine Domain angepasst und ein eigenes Profil erstellt, dass als spezielle Vorlage für Abteilungen im Unternehmen benutzt wird.

- **Kunde B** benutzt das Domain-Template "IT-Grundschutz V1.0" und "DS-GVO V1.5". Der Kunde hat in der Domain "IT-Grundschutz" Aspekte und Links der Objekte für seine Zwecke angepasst.

- **Kunde D** benutzt das Domain-Template "ISO-27000" und hat bisher keine Änderungen an der Domain gemacht.

