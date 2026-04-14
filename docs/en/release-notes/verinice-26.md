<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# verinice 26

The following new features are available to users with the release of verinice 26:

## General functions
**Status: Productive**

### Improved unit management

- By switching unit management from tables to lists (cards), the content of units is displayed more transparently - it is possible to see at a glance which domains are assigned to the unit.
- New units are created in a wizard that simplifies the assignment of domains and the application of profiles.
- The editing of units is more intuitive, especially with regard to the assignment of domains and the application of profiles.

### Adaptation of the version scheme
- With **verinice 26** the versioning scheme is adapted from **1.21** to **26**! 

### Detailed improvements and bug fixes

- Tutorials and documentation have been updated.
- In the object view, the header has been removed and redundant information has been transferred to the breadcrumb.
- Risk mitigating measures can be deleted.
- The icon for risk treatment is displayed again in the Risks tab in the object view.
- Incorrect time information in reports has been fixed by taking the time zone into account.
- Multi-domain-capable history - when restoring objects, only the information that can be edited in the respective domain is restored.
- To improve performance, profiles are managed individually in domains and the processing of large amounts of data has been simplified.
- Proof of concept for OnPrem operation via appliance with OpenShift successfully completed.

## Domain data protection
**Status: Productive**
- No changes.
## Domain IT-Grundschutz
**Status: Private Beta**

- Family and layer subtypes added for better display and navigation of the building blocks.
- Sorting of the control subtypes adapted to the IT-Grundschutz compendium (family, layer, module, requirement, partial requirement, measure).
- Subtype partial requirement added for trial work with partial requirements.
- Mapping of the procedure for protection (basic, standard, core) in the information network.
- Building block modeling by profile - creation of a profile for modeling the entire IT-Grundschutz compendium according to the standard or core protection approach.
- Implementation of automatic protection requirement inheritance.
- Create hazard overview - reloading the elementary hazards when a risk analysis is to be carried out.
- First version of the IT-Grundschutz reference documents A.1 to A.6.
- Profile basic protection local government version 3 created.

## Domain NIS2
**Status: Prototype**
- Risk analysis in the NIS2 domain supplemented.
- Risk definition supplemented by authenticity as an additional protection objective.
- Development of the requirement and measure subtypes.
- Mapping of the organization- and process-specific requirements of NIS-2.
- Mapping of the documentation aspects in NIS-2.

## Domain ISO
**Status: Prototype**
- First version of the object schema for the ISO domain created.

## Domain TISAX
**Status: Prototype**
- First version of the object schema for the TISAX domain created.
