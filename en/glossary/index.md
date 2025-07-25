<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Glossary

This section explains some fundamental terms used in verinice and provides links to more in-depth information where applicable.

## Client

The **Client** (or **Tenant**) separates user groups and data strictly from one another—for example, different companies using the same (cloud) installation of verinice.  
Data belonging to one client is isolated from all other clients and cannot be mixed or linked in any way.

## Unit

A subdivision of a client into multiple subunits. This is used to separate subsidiaries, company locations, departments, etc., as individual **Units**.

## Account

An **Account** is a personal, non-transferable login for using verinice. There are at least three different types of accounts:
- In the verinice.Shop, a **Purchaser** can buy and manage subscriptions, units, or named user licenses. When purchasing a client, a main user is always included, and the purchaser designates this user.
- The **Main User** is always assigned to exactly one client. In the verinice application, they can create and manage users and user groups.
- The main user can currently configure whether **Users**:
  - have read or write permissions in verinice,
  - can log in to their VEO client or are deactivated.

An account can never access data belonging to a client to which it is not assigned!

## Domain

**Domains** represent specialized fields such as *GDPR* or *IT-Grundschutz".  
By subscribing to a domain, you receive everything needed to work in that subject area. This includes the definition of professional objects and their properties, input forms, report templates, catalogs of measures, threats, and profiles.

Domains are the logical evolution of what used to be known in verinice as **Perspectives**!

## Object

verinice provides fundamental **Objects** or **Object Types** defined by basic properties. These currently include *Scopes, Processes, Assets, Measures, Threats, Incidents, Documents, and Persons*.  
Objects of type **Scope** play a special role, as they define arbitrary *Subjects of Analysis*.

## Subtype

**Subtypes** allow viewing the same object from different **perspectives**.  
For example, a process object can be used as a **Specialized Task** in the *IT-Grundschutz* domain and simultaneously as a **Data Processing** in the *GDPR* domain.

## Form

Each subtype must be displayed and edited in at least one specific **Form** to show only the relevant data per domain.  
Even within a single domain, combining **Subtype** and **Form** allows for presenting subtype-specific data.  
For example, the asset details for an **Application** and a **Communication Connection** differ in the IT Baseline Protection domain.

## Catalog

**Catalogs** in a domain provide objects based on standards and specialized fields—for example, the *IT-Grundschutz Kompendium*, the *ISO 27001 family*, or the *VDA ISA catalog for TISAX*.  
Catalog objects can be **applied**, i.e., copied into the active unit along with their possible links to other catalog objects.  
A typical use case is modeling IT-Grundschutz modules.
System-wide catalogs cannot be modified.

## Profile

**Profiles** provide predefined object collections, which may already include applied catalog elements.  
This may sound complex, but it becomes clearer with examples:  
Consider the *Standard- oder Kernabsicherung nach IT-Grundschutz-Kompendium* profile or the *GDPR Example Organization*.
**Applying** profiles to units is a quick and efficient way to set up organizations, institutions, information networks, or projects using existing templates.
