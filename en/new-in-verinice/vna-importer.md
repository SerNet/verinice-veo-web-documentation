<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# The VNA Importer

The **VNA Importer** is available as a separate Java client for transferring data from **verinice.PRO** or **verinice.EPV** (single-user version) to the new verinice generation (**verinice.cloud** or **verinice.onprem**).

## Features

The VNA Importer is currently available for importing data from the **IT-Grundschutz** perspective, including **data protection**. The import of data from other perspectives (ISO 27001 including data protection, IT-Grundschutz including BCM, ISO 27001 including BCM) is under development and will be made available gradually.

All data is imported into the respective client in **verinice.cloud**; import into other environments, such as verinice.onprem, will be configurable shortly.

Multiple information networks can be imported into a single unit. The data is created anew in the target environment (copy) from a previously exported **VNA file**—the original data remains unchanged!

Specifically, the following data is transferred:

- All (target) objects:
- Links between (target) objects.
- Building blocks, requirements, elementary threats.  
- Protection requirement values for confidentiality, integrity, availability.
- Risk assessment.

## Preparatory Work in verinice

To make the best possible use of all improvements in the new verinice generation, the data in verinice must be checked before the VNA export and cleaned up if necessary:

### Check Modeling

In the new verinice generation, the implementation of requirements is no longer documented in the requirement itself, but in the link to the respective target object. A single instance of each building block and each requirement is retained and linked to multiple target objects. This deduplication of building blocks significantly reduces the effort required when working in verinice, but also necessitates careful preparation of the source data.

Only building blocks from the current **Edition 2023-1** of the IT-Grundschutz Compendium are linked to the building blocks in the verinice catalog. Older editions are imported **without a catalog reference** and essentially behave like user-defined building blocks. It is strongly recommended to update the modeling accordingly so that automatic updates can be utilized when future editions are published!

The modules must be **correctly modeled or referenced**; this applies in particular to the links between target objects and requirements.

Modules with official names from the Compendium must be **complete** and **exact** (include all requirements, contain the original description, have the original procedure set, etc.). Otherwise, these building blocks will be interpreted as user-defined building blocks without a reference to the catalog.

Only one person may be referenced as the **building block owner** per building block.

### Check Risk Definition

The risk definition must be **identical to the risk matrix** in verinice. Since the risk definition from the BSI 200-3 standard is used as the default in both generations, no action is required unless the risk definition in verinice has been modified.

If an adjustment to the risk definition is necessary, this can be done easily via the menu in the **Risk Definition** section.

Note that risks are only created in verinice.cloud if the **Risk Analysis Required** option is set for a target object in verinice.

### Defining New Target Objects

Process objects have been extended to include **Specialized Tasks**. Before the VNA export, you can define in verinice whether a business process should be imported as a specialized task by assigning a **tag**:

- Tag for importing as a specialized task:
- **veoimport:IT-Grundschutz:PRO_SpecialisedTask**
- (General syntax: veoimport:*domain-name*:*subtype-id*)

## Installation

Java (at least Java 17) is required for the **VNA Importer**. Since the VNA Importer is continuously being developed, please use the latest version available. The program is only available in English.

To start the VNA Importer:

- on **Windows**, run the file **veo-vna-importer.exe**.
- on **macOS** and **Linux**, enter **java -jar veo-vna-importer.jar** in the terminal after navigating to the appropriate directory.

![VNA Importer](/assets/en/new-in-verinice/vna-importer-start.en.png)

## Performing a VNA Import

After entering the username and password for the target environment (default: https://veo-web.verinice.com/), the program immediately checks them for validity (Valid credentials). If you see the message **Invalid credentials**, please check the username and password for the target environment.

![VNA-Importer](/assets/en/new-in-verinice/vna-importer-select.en.png)

After selecting a VNA file previously exported from verinice, you can start the import using two options:

- **Dry Run:** In this case, the import is performed **without** transferring data (test run) to identify any errors before the actual import.
- **Strict Run:** The import is performed with stricter checks to better identify errors.

A successful import is confirmed by a corresponding message. Unless the import was performed as a **Dry Run**, you will find a unit in your target environment containing all previously exported content. After a **Dry Run**, the content will then be available after a repeated actual import.

If the import was unsuccessful due to errors with a corresponding error message, you can find further information via **Show logs**. In most cases, this means that not all [preparatory work in verinice](#preparatory-work-in-verinice) has been fully implemented yet.

If the export fails despite completing the preparatory work, the verinice.Team will be happy to assist with identifying and resolving the errors.

## Limitations

The following limitations apply to the VNA import:

- A few older fields from verinice are no longer available in the new generation and are intentionally not transferred (e.g., tags).
- The import of user-specific fields/data (following customization) can be added in consultation with the verinice.Team.
