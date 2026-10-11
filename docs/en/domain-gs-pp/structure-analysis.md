<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Information Domain and Assets

With the *Anforderungsanalyse* (requirements analysis), process step 2, you delimit the *Informationsverbund* (information domain), record its assets and assign them to the *Zielobjektkategorien* (target object categories). You can find the corresponding requirements in the *Praktik* (practice) **Strukturmodellierung (STM)**.

## Information Domain

The *Anwendungsbereich* (scope of application) defines the formal framework of the ISMS; the *Informationsverbund* is its content-related and technical representation. An *Anwendungsbereich* can contain one or more *Informationsverbünde*. A separate *Anforderungspaket* (requirements package) is created for each *Informationsverbund*.

Navigate to the object type **Scope** and the subtype **Information domains** and, as with the institution, create your first **Information domain**. Enter all data in the form (e.g. abbreviation, name, description) and then save.

<!-- SCREENSHOT: ![Create information domain](../assets/domain-gs-pp/verinice-gspp-information-domain-create.png) – “Create information domain” form -->


Answer and document the following in the description or in a linked **Document**:

- **Organizational and personnel boundaries:** Which organizational units, roles and persons belong to the *Informationsverbund*?
- **Technical boundaries:** Which applications, systems and networks are part of it? Where are the technical boundaries, and how are interfaces to external systems designed?
- **Infrastructural boundaries:** Which sites, buildings and rooms belong to it?
- **Outsourcing boundaries:** What is operated in-house, and what is outsourced? Which cloud services are used?

In addition, document the interfaces to external processes and systems as well as to other *Informationsverbünde*.

::: tip Reuse assets
Assets that have already been recorded may and should be reused in further business processes and in other *Informationsverbünde* of the *Anwendungsbereich*. Therefore, create each asset only once and link it multiple times.
:::

## Recording Assets

Record the assets that are required to carry out the business processes. The order is based on the prioritization from the [*Schutzbedarfsfeststellung* (protection need assessment)](./protection-needs). In the first cycle, it is sufficient to record the assets of the most important business process. Relevant assets are in particular:

- information
- systems and applications
- network and communication components
- infrastructural and physical assets (sites, buildings, rooms)
- personnel and organizational assets (user groups, services, purchases)

Record all assets as **Target objects**: navigate to the object type **Assets** and the subtype **Target objects** and create new objects using the plus button. For each asset, enter:

- a unique **Abbreviation** and **Name**
- a **Description** with its purpose and use in the business process
- the **Responsible person** (asset owner)
- if applicable, **Number**, **Platform** and **Operating stage** (planning, test, rollout, operation, reserve, repair)
- the assigned *Zielobjektkategorie(n)* (see [Target Object Categories](./target-object-categories))

<!-- SCREENSHOT: ![Record target object](../assets/domain-gs-pp/verinice-gspp-target-object-form.png) – Form of a target object with abbreviation, name, description, responsible person, number and operating stage -->

Assets with similar properties and the same purpose may be grouped, e.g. all identically configured clients as one target object with the corresponding **Number**. You can draw on existing asset registers and CMDB data.

::: tip Example target objects from the profile
The profile **Grundschutz++-Profil V2** contains, for each *Zielobjektkategorie*, an example target object of the same name that is already modeled with its category. You can copy these as templates and adapt them to your institution (see [Requirements Package from a Profile](./modelling#requirements-package-from-profile) and [Profiles in the Grundschutz++ Domain](./gs-pp-profiles)).
:::

## Dependencies Between Assets

Links between objects represent the dependencies in the *Informationsverbund* and are the basis of protection need inheritance. The following are particularly relevant:

- on the business process: **Required target object**, **Required business process**, **Required specialised task**
- on the target object: **Required target object**

To create a link, add the required other object in the form of an object. To do this, scroll down in the form to the section where the required objects are listed and select the object you need. If the object does not exist yet, you can create it directly from within the form via **+ Create "desired object"**. In the object view, all incoming and outgoing links are listed under **Links**.

<!-- SCREENSHOT: ![Links](../assets/domain-gs-pp/verinice-gspp-relations.png) – Object view of a business process with the links to required target objects -->


According to the *Pilotierungsfassung* (pilot version), the required scope of documentation depends on the *Schutzbedarf* (protection need) of the business process:

| Protection need of the business process | Dependencies to be documented |
|---|---|
| ***hoch*** (high) | The essential dependencies between the business process, the information and the supporting assets must be documented in a traceable manner. |
| ***normal*** (normal) | The assignment of the assets to the business process is not required. At a minimum, the dependencies between **Anwendungen** and **IT-Systeme** (physical and virtual) must be documented. |

The dependencies may also be available in existing sources such as a CMDB, network plan or service map. You can store network plans as **Documents** with the subtype **Network plans**.

<!-- SCREENSHOT: ![Dashboard - Information domain](../assets/domain-gs-pp/verinice-gspp-dashboard.png) – Dashboard with recorded business processes and target objects -->


In the next step, you assign the assets to the [*Zielobjektkategorien*](./target-object-categories).
