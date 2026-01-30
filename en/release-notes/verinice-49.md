<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 49

The following new features are available to users with the release of verinice 49.

## Visual representation of links
<!--&225-->
The first iteration of the visual representation of links enables navigation to direct *neighbors*:

![Graph Navigation](/assets/en/release-notes/verinice-49-graph-1.de.gif)

![Graph Zoom](/assets/en/release-notes/verinice-49-graph-2.de.gif)

## Improve change of risk definition
<!--301-->
**Deleting** *medium levels* of impact, probability of occurrence, or risk values in a risk definition leads to shifts in risk values in existing risks and requires manual rework. To avoid unintentional deletion, only the highest level can now be deleted. It is still possible to rename all levels.

![Deleting levels in the risk definition](/assets/en/release-notes/verinice-49-risikodefinition.de.png)

::: danger Any adjustment to a risk definition requires changes to existing risks. It is recommended to adapt the risk definition to the respective organization **before**  the risk assessment!
:::

In addition, the following bugs have been fixed:
- The frontend takes into account that a risk definition must contain at least one criterion (protection goal).
- A risk definition can now be saved when a risk level is deleted, provided that it is no longer used in any matrix.

## Reports as cards
<!--&240-->
Reports are displayed in separate cards for each language variant to simplify selection:

![Reports as cards](/assets/en/release-notes/verinice-49-report-cards.de.png)

## Detail improvements and bug fixes <Badge type="info">Test</Badge>
<!--&264, &186-->
- The documentation for authorization management has been updated.
- The report **A.3 Modeling** in the IT-Grundschutz (DE) domain reads the new property ```complianceControlSubTypes```.
- The obsolete property ```complianceControlSubType``` has been removed (previously replaced by ```complianceControlSubTypes```).
- Fixed the 404 error (object not found) under **My recently edited objects** if the object was created in another domain.
- The content of the IT-Grundschutz Compendium and other controls in the implementation dialog is now also readable in dark mode.
- Display of missing translations for profiles in the **Create Unit** wizard.
- The report service is passed the default user and default password of the logged-in user.
- Upgrade to VueQuery version 5.
- Update to Cypress 15
- Update vue-tsc to v3.1.8
