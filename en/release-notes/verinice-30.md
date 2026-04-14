<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 30

The following new features are available to users with the release of verinice 30:

## General functions
**Status: Productive**

### Improved onboarding

When deploying a verinice client after purchasing a subscription, units are no longer created by default (previously an empty **Unit 1** and a unit with **Sample data** were created) so that users can create their organization with or without profiles and the desired domains.
When you first log in, the **First steps** page explains which **profiles** and which **domains** can be used in a unit.
![First steps]( /assets/en/roadmap/erste-schritte.de.png)
The steps are explained analogously in the **Create Unit** wizard.

### Detail improvements and bug fixes

- The description field of units can be filled with multiple lines again.
- Search function added to tutorial.
- Reports are now only displayed for the active domain.

## Domain data protection
**Status: Productive**
No new features.

## Domain IT-Grundschutz
**Status: Private Beta**

### Risk mitigating measures

The mapping of mitigating measures in risk reduction has been comprehensively improved; a distinction is made between *compliance measures* and *mitigating measures*:
- **Compliance measures** are displayed and edited in the **Modules** tab.
-  Mitigating measures** are displayed and edited in the **Risks** tab.
Operation has been standardized:
- Mouse click on the objects to open the module or risk for editing.
- The **Edit implementation** icon can be used to edit the implementation of the requirements or mitigating measures (if available).
From the risk dialog:
- you can navigate directly to the mitigating measures.
- you can navigate to the *container* for the mitigating measures.
The mitigating measures are output in the **A.5 Risk analysis** report.

### Customizable risk definition

In the first iteration, the names, criteria and colors of the risk definition (impact, probability of occurrence and risk categories) and the protection requirement definition can be adapted to the organization:
![Customizable risk definition]( /assets/en/roadmap/risikodefinition.de.png)

### Amount of damage
In order to be able to differentiate in IT-Grundschutz between the **protection requirement** for confidentiality, integrity and availability and the **level of damage** in the risk analysis, the protection requirement can be mapped without defining a risk matrix:
![Customizable risk definition]( /assets/en/roadmap/risikodefinition_ohne_matrix.de.png)

### Sorting in catalog
In the **IT-Grundschutz Compendium** catalog, all objects (building blocks, requirements, hazards) are sorted by default using the abbreviation according to the order specified in the compendium.
### “Building blocks” tab
The “Components” tab is now only displayed in target objects (scope, process, asset).
## Domain NIS2
**Status: Private Beta**
Last optimizations on the prototype in preparation for the public beta (for it-sa).
## Domain ISO
**Status: Prototype**
Completion of the first prototype of the **ISO** domain with all object types, subtypes and forms in preparation for the private beta phase.
## Domain TISAX
**Status: Private Beta**
Mapping of the **TISAX / VDA ISA Information Security Assessment** in verinice in preparation for the public beta (for it-sa):
- **Catalog** with all ISA Controls.
- **Profiles** for Information Security Assessments for the criteria catalogs **Information Security and Prototype Protection** without/with **Data Protection**.
- **Report** Information Security Assessment 6 - compact:
![Customizable risk definition]( /assets/en/roadmap/vda-isa_report.de.png)
