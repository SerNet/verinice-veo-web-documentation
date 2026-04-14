<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Glossar

In diesem Abschnitt werden einige grundlegende Begriffe in verinice erläutert und ggfs. auf tiefergehende Informationen verwiesen.

## Client

Der **Client** oder auch **Tenant** grenzt Anwendergruppen und Daten streng voneinander ab, z.B. unterschiedliche Unternehmen, die verinice in derselben (Cloud-)Installation nutzen. Die Daten, die zu einem Client gehören, sind von den Daten anderer Clients getrennt und können in keiner Weise miteinander vermischt oder verknüpft werden.

## Unit

Eine Unterteilung eines Clients in mehrere Untereinheiten, nutzbar um Tochtergesellschaften, Unternehmensstandorte, Abteilungen u.ä. als **Units** voneinander abzugrenzen.

## Account

Ein **Account** ist ein persönliches, nicht zu übertragendes Konto für die Nutzung von verinice. Es sind mindestens drei unterschiedliche Arten von Accounts zu unterscheiden:
- Im verinice.Shop können vom **Einkäufer** Subskriptionen, Units oder Named-User-Lizenzen gekauft und verwaltet werden. Beim Kauf eines Client ist immer ein Hauptnutzer inkludiert, der Einkäufer legt diesen im verinice.Shop fest.
- Der **Hauptnutzer** ist immer genau einem Client zugeordnet, er kann in der Fachanwendung verinice weitere Nutzer und Nutzergruppen anlegen und verwalten.
- Aktuell kann der Hauptnutzer steuern, ob **Nutzer**:
    - Lese- oder Schreibberechtigung in verinice haben.
    - sich grundsätzlich an ihrem VEO-Client anmelden können oder deaktiviert sind.

Ein Account kann niemals auf Daten zugreifen, die zu einem Client gehören, dem er nicht zugeordnet ist!

## Domäne

**Domänen** bilden Fachgebiete wie z.B. *DS-GVO* oder *IT-Grundschutz* ab. Mit dem Bezug einer Domäne erhält man alles, was für das Arbeiten im jeweiligen Fachgebiet erforderlich ist. Dies beinhaltet z.B. die Definition der Fachobjekte und ihrer Eigenschaften, die Eingabeformulare, Report-Vorlagen, Kataloge mit Maßnahmen, Gefährdungen et al. und Profilen.

Domänen sind die konsequente Weiterentwicklung der aus verinice bekannten **Perspektiven**!

## Objekt

verinice stellt elementare **Objekte** bzw. **Objekttypen** zur Verfügung, die durch grundlegende Eigenschaften definiert sind. Aktuell sind dies *Scopes, Prozesse, Assets, Maßnahmen, Gefährdungen, Vorfälle, Dokumente und Personen*. Objekte vom Typ **Scope** nehmen dabei eine besondere Rolle ein, sie dienen der Definition beliebiger *Betrachtungsgegenstände*.

## Subtyp

**Subtypen** ermöglichen die Betrachtung ein und des selben Objektes aus unterschiedlichen **Perspektiven**, z.B. kann ein Prozessobjekt als **Fachverfahren** in der Domäne *IT-Grundschutz* und gleichzeitig als **Verarbeitungstätigkeit** in der *Domäne* *DS-GVO* betrachtet und verwendet werden.

## Formular

Jeder Subtyp muss in (mindestens) einem eigenen **Formular** angezeigt und bearbeitet werden, um z.B. in einzelnen Domänen nur die jeweils "gültigen" Daten darzustellen. Aber auch in einer Domäne kann die Kombination von **Subtyp** und **Formular** dazu dienen, spezifische Daten eines Subtyps darzustellen. So unterscheiden sich z.B. die je Asset von Typ **Anwendung** oder **Kommunikationsverbindung** in der Domäne IT-Grundschutz zu erfassenden und anzuzeigenden Details.

## Katalog

**Kataloge** stellen in einer Domäne Objekte zur Verfügung, die in einem Fachgebiet und den zugrunde liegenden Standards vorgegeben sind, etwa das *IT-Grundschutz-Kompendium*, die *ISO 27001-Familie* oder der *VDA ISA Katalog für TISAX*.
Katalogobjekte können **angewendet** werden, d.h. inklusive eventueller Verknüpfungen zu anderen Katalogobjekten in die aktive Unit kopiert werden. Ein typischer Anwendungsfall ist z.B. die Modellierung von IT-Grundschutz Bausteinen.
 Die Systemweit zur Verfügung stehenden Kataloge können nicht verändert werden.

## Profil

**Profile** stellen unterschiedlichste Objektsammlungen zur Verfügung, auf die bereits Katalogelemente angewendet sein können. Was kompliziert klingt (und nebenbei bemerkt auch ist) wird am besten durch Beispiele verdeutlicht, zu nennen sind hier etwa das Profil *IT-Grundschutz-Kompendium Standard- und Kernabsicherung* oder die *Beispielorganisation für die DS-GVO*.
Das **Anwenden** von Profilen auf Units ist eine zeitsparende und effektive Möglichkeit, um Organisationen, Institutionen, Informationsverbünde oder sonstige Projekte aus bestehenden Vorlagen zu erstellen.
