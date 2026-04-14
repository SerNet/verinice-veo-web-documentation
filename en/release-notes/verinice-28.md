<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 28

The following new features are available to users with the release of verinice 28:

## General functions

**Status: Productive**

### Status page

![Status page]( /assets/en/roadmap/statusseite.de.png)
Via the new [Status page](https://status.sernet.net/) of SerNet GmbH (optionally accessible via [Status](https://verinice.com/)), users of verinice can see

- whether and why access to verinice is or was not possible in the event of downtime.
- when planned [maintenance work](https://verinice.com/produkte/veo/verinicecloud) is due in verinice.
::: info Will soon be extended by **notifications** about upcoming maintenance work or updates with or without downtime in verinice itself!
:::

### Performance improvement

The **deletion of very large units** has been accelerated to such an extent that timeouts are no longer to be expected. In a few cases there were timeouts so far. (However, the units were deleted after 1-2 minutes and were then no longer displayed after a browser reload).

### Detailed improvements and bug fixes

![Profile description]( /assets/en/roadmap/profile.de.png)

- Improvement of the profile description when applying profiles to new or existing units.
- Optimization of the breadcrumbs.
- Stability improvement and extension of the automatic end-2-end tests.
- Various minor performance and stability improvements to the REST API.

## Domain data protection
**Status: Productive**
No new features.

## Domain IT-Grundschutz
**Status: Private beta**

### Improvement of modeling

The search function introduced in the object overview with verinice 27 is now also available when modeling modules and in catalogs:

- When **modeling blocks**, you can search by abbreviation, name and display name.
- In the **IT-Grundschutz-Kompendium** catalog, you can search by abbreviation and name.
![Search]( /assets/en/roadmap/suche.de.gif)

### Extension of the protection requirement inheritance

The protection requirement can now be inherited from the process objects **business processes** and **specialist procedures** to **required rooms**.

### Display modeling in both directions

The previous display of which modules are modeled on which target object has been supplemented by the *backward direction*. Under **Block > Target objects**, the target objects on which the respective block is modeled are now displayed.

## Domain NIS2

**Status: Prototype**
No new features.

## Domain ISO

**Status: Prototype**
No new features.

## Domain TISAX

**Status: Prototype**
No new features.
