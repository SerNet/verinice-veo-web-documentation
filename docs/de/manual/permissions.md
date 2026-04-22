# Berechtigungen

Ob ich als Benutzer:in in verinice für eine Aktion berechtigt bin, kann von den folgenden Faktoren abhängen:

* **Bin ich Haupt- oder Nebennutzer:in?**
  Hauptnutzer:innen dürfen in ihrem [Client](../object-model/objects.md#client) alles, während Nebennutzer:innen für Aktionen spezielle Rechte benötigen, welche nur von Hauptnutzer:innen vergeben werden können.
* **Habe ich die Rolle "Schreibzugriff"?**
  Als Nebennutzer:in darf ich ohne diese Rolle keinerlei Änderungen machen ([Objekte](../object-model/objects.md) erstellen, bearbeiten oder löschen).
* **Ist der [Unit](../object-model/objects.md#unit)-Zugriff in meinem Client eingeschränkt oder frei?**
  Hauptnutzer:innen können [steuern](accounts.md#lese-und-schreibberechtigungen-auf-units), ob Nebennutzer:innen nur auf bestimmte Units zugreifen können ("eingeschränkt") oder ob alle Nutzer:innen auf alle Units zugreifen können ("frei").
* **Zu welchen Zugriffsgruppen gehöre ich?**
  Als Nebennutzer:in in einem Client mit eingeschränktem Unit-Zugriff bestimmen meine Zugriffsgruppen, welche Units ich sehen ("lesen") und in welchen Units ich Änderungen machen ("schreiben") darf.

Im Folgenden wird für einzelne Aktionen in der Anwendung beschrieben, welche Berechtigungen jeweils dafür erforderlich sind.

## Benutzer verwalten

Nur Hauptnutzer:innen können auf die [Benutzerverwaltung](./accounts.md) zugreifen und dort Nebennutzer:innen abfragen, anlegen, bearbeiten und löschen.
Sie können dort auch den Unit-Zugriff einschränken bzw. freistellen, Zugriffsgruppen verwalten und den Nebennutzer:innen Rollen und Zugriffsgruppen zuweisen.

Nebennutzer:innen hingegen haben keinerlei Zugriff auf die Konten anderer Nutzer:innen.

| Nutzer:in      | Aktion erlaubt? |
|----------------|-----------------|
| Nebennutzer:in | **Nein**        |
| Hauptnutzer:in | **Ja**          |

## Eine Unit lesen

Eine Unit lesen zu können bedeutet, sie in der [Unitverwaltung](unit-management.md) aufgelistet zu sehen und innerhalb dieser Unit das Dashboard, Objekte, Risiken
usw. betrachten zu können.
Units, die ich nicht lesen darf, bleiben vor mir verborgen.

Hauptnutzer:innen dürfen immer alle Units in ihrem Client lesen.
Nebennutzer:innen hingegen dürfen eine Unit nur lesen, wenn sie entweder Mitglied einer Zugriffsgruppe sind, die ihnen Lesezugriff auf diese Unit gewährt, oder wenn der Unit-Zugriff in ihrem Client generell frei ist.

| Unit-Zugriff  | Nutzer:in      | Zugriffsgruppen           | Aktion erlaubt? |
|---------------|----------------|---------------------------|-----------------|
| eingeschränkt | Nebennutzer:in | keine                     | **Nein**        |
| eingeschränkt | Nebennutzer:in | Lesegruppe für diese Unit | **Ja**          |
| eingeschränkt | Hauptnutzer:in | n.a.                      | **Ja**          |
| frei          | Nebennutzer:in | keine                     | **Ja**          |
| frei          | Nebennutzer:in | Lesegruppe für diese Unit | **Ja**          |
| frei          | Hauptnutzer:in | n.a.                      | **Ja**          |

## Eine Unit erstellen, bearbeiten oder löschen

In der [Unitverwaltung](unit-management.md) lassen sich Units erstellen, bearbeiten und löschen.
Als "Bearbeiten einer Unit" zählen nur das Umbenennen einer Unit, das Ändern ihrer Beschreibung, das Zuweisen zusätzlicher Domänen zur Unit sowie das Updaten der Unit auf eine neue Domänenversion.
Diese Aktionen sind abzugrenzen vom [Schreiben in einer Unit](#in-einer-unit-schreiben), das weiter unten thematisiert wird.

Das Erstellen, Bearbeiten und Löschen von Units ist Hauptnutzer:innen immer erlaubt.
Nebennutzer:innen hingegen dürfen dies nur, wenn sie die Rolle "Schreibzugriff" haben und der Unit-Zugriff in ihrem Client frei ist.

| Unit-Zugriff  | Nutzer:in      | Rollen         | Aktion erlaubt? |
|---------------|----------------|----------------|-----------------|
| eingeschränkt | Nebennutzer:in | keine          | **Nein**        |
| eingeschränkt | Nebennutzer:in | Schreibzugriff | **Nein**        |
| eingeschränkt | Hauptnutzer:in | n.a.           | **Ja**          |
| frei          | Nebennutzer:in | keine          | **Nein**        |
| frei          | Nebennutzer:in | Schreibzugriff | **Ja**          |
| frei          | Hauptnutzer:in | n.a.           | **Ja**          |

## In einer Unit schreiben

In einer Unit schreiben zu können bedeutet, dass ich innerhalb der Unit Objekte und Risiken erstellen, bearbeiten und löschen kann.
Dies ist abzugrenzen vom [Bearbeiten der Unit selbst](#eine-unit-erstellen-bearbeiten-oder-löschen), das weiter oben beschrieben wird.

Hauptnutzer:innen dürfen immer in allen Units ihres Clients schreiben.
Nebennutzer:innen hingegen dürfen nur in einer Unit schreiben, wenn sie die Rolle "Schreibzugriff" haben und wenn sie entweder Mitglied einer Zugriffsgruppe sind, die ihnen Schreibzugriff auf diese Unit gewährt, oder wenn der Unit-Zugriff in ihrem Client generell frei ist.

| Unit-Zugriff  | Nutzer:in      | Rollen         | Zugriffsgruppen              | Aktion erlaubt? |
|---------------|----------------|----------------|------------------------------|-----------------|
| eingeschränkt | Nebennutzer:in | keine          | keine                        | **Nein**        |
| eingeschränkt | Nebennutzer:in | keine          | Schreibgruppe für diese Unit | **Nein**        |
| eingeschränkt | Nebennutzer:in | Schreibzugriff | keine                        | **Nein**        |
| eingeschränkt | Nebennutzer:in | Schreibzugriff | Schreibgruppe für diese Unit | **Ja**          |
| eingeschränkt | Hauptnutzer:in | n.a.           | n.a.                         | **Ja**          |
| frei          | Nebennutzer:in | keine          | keine                        | **Nein**        |
| frei          | Nebennutzer:in | keine          | Schreibgruppe für diese Unit | **Nein**        |
| frei          | Nebennutzer:in | Schreibzugriff | keine                        | **Ja**          |
| frei          | Nebennutzer:in | Schreibzugriff | Schreibgruppe für diese Unit | **Ja**          |
| frei          | Hauptnutzer:in | n.a.           | n.a.                         | **Ja**          |
