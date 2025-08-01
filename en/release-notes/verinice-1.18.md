<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 1.18

## New features

The following new features are available to all users with the release of verinice 1.18!

### Data protection domain

The GDPR domain has been further improved:

* Minor improvements in object and form **Data protection incident**.
* New report template **Data  protection incident notification form**.
* New report templates **Data subject request** and **Overview of data subject requests**.
* The **Sample data** contains exemplary data subject requests.
* The **DSFA selection** is correctly restricted to the **DSFA** subtype.
* English version **Record of processing activities (processor) according to Art. 30 II 
GDPR** of the report template **Order processing according to Art. 30 II GDPR**.

### Multi-user

verinice.DSMS can now be purchased and used for multiple users. The individual users can be granted write and/or read authorization in verinice.

### Multi-Unit

For better structuring of large organizations, additional units can be purchased and used in addition to the two standard units (Unit 1 and Demo).

### Unit handling at first login

The handling of units has been optimized for new users:

* When a new client is created, the two units **Unit 1** and **Demo** are initially created.
* The **First steps** page is called up by default after the first login.

**Sample data** can be loaded into the **Demo** unit via the **Profile** link for testing or as a starting point for setting up your own organization in **Unit 1**.

### Detailed improvements and bug fixes

* The error when calling the **User administration** has been fixed. Staging and prod now use an identical KeyCloak version.
* The **Select All** function (checkbox) in tables has been deactivated for the time being for reasons of inconsistency.
* The **Icon for composite objects** is displayed correctly again.
* Tables are sorted by **Name ascending** by default.
* In preparation for the **Domain-specific display of reports**, only reports whose target object types are defined in the active domain are displayed.
* The navigation no longer covers the online documentation.
* The navigation to Scopes, Parts, In Scopes, Part of and Links opens the respective object correctly.
* Various security-related updates.
* Fixed “Missing keys” error in the **Exit** dialog.
* The automatic frontend tests have been supplemented by the test **Check DSFA requirement**.

## Preview

The verinice.TEAM is working on further functions that will be released in the future.
The following content is currently **NOT** productively available to all users.

### IT-Grundschutz domain

The IT-Grundschutz domain for mapping an ISMS in accordance with the BSI 200 series standards:

* Contains all required objects and forms in **German** and **English** language.
* Supports the **protection requirement assignment** in all relevant objects.
* Provides a **risk definition** for subsequent risk analysis.
* Provides the **IT-Grundschutz Compendium Edition 2023** including all modules, requirements and elementary threats of the BSI as **Catalog for application** (modeling).
* Supports the **modeling of building blocks** (ControlImplementation).
* Supports the **implementation/processing of building block requirements** (RequirementImplementation).
* Provides the **IT-Grundschutz profile Basisabsicherung Kommunalverwaltung** for later use as a profile as a unit.

### Domain NIS2

To demonstrate compliance with the requirements of NIS2, we create the new **NIS2** domain:

* All required objects and basic forms exist.
* The use cases **Affectedness analysis** and **Reporting obligations** are supported.
