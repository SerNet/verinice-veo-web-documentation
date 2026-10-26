<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 62

Release Date: November 6, 2026 (tentative)

The following new features will be available to users with the release of **verinice 62**.

## Tasks for Implementations
<!-- epics/374 -->

The new [Tasks](../manual/task-workflow.md) page displays open implementations as tasks. This allows responsible users to see at a glance what needs to be done, and managers to see who is working on what.

- New *Tasks* page with an overview of open implementations.
- User accounts can be assigned to person objects.
- Tasks can be filtered by responsible person, including tasks without an assigned responsible person.
- Implementations can be edited directly from the Tasks page.

## Improved Search
<!-- epics/361 -->

The search function has been refined in many details and is now faster and more intuitive to use.

- Search criteria with only one possible value, such as *Has Components* or *Not Part of Another Object*, trigger the search immediately and filter consistently.
- Pressing Enter finalizes the entry of new criteria and triggers the search.
- The drop-down list starts at the cursor’s position and permanently displays the scrollbar.
- An empty search field displays the placeholder text *Search*; the clear button appears only when a search is active.
- Search and page navigation interact with each other.
- Redesigned display of search criteria; criteria that do not fit in the search bar are hidden.

## NIS2 (DE) Domain in Accordance with the NIS2 Implementation Act
<!-- epics/110 -->

The NIS2 (DE) domain now reflects the NIS-2-Umsetzungsgesetz (NIS2UmsuCG), which has entered into force in Germany. With this new version of the domain, certain fields that are no longer needed have been removed.

- Requirements of the NIS2UmsuCG have been incorporated into the domain.
- New catalog containing the requirements of the NIS2UmsuCG.
- The *Scope* and *Organization* object types have been expanded to include, among other things, the NIS 2 contact person and the institution ID.
- The *Security Incident* object type has been adapted to the NIS2UmsuCG; the *Authenticity* field has been removed.
- New profile: *Domainwirtschaft* (only available in German)
- Reports *Security Incident Reporting Form* and *Registration information for competent authority* have been adapted to the NIS2UmsuCG.
- New [documentation](../domain-nis2/domain-nis2.md) on working with the NIS2 (DE) domain.

## NIS2 (INT) domain aligned with NIS2 (DE)
<!-- epics/303 -->

The content of the NIS2 (INT) domain has been aligned with the NIS2 (DE) domain as much as possible.

- The *Security Incident* object type has been optimized and aligned with NIS2 (DE), including details on recurring incidents and incidents with international implications; the *Early Warning* field is now called *Early Initial Report*.
- The *Notification form for security incident* report has been adapted to the updated content and expanded to include planned countermeasures.

## IT-Grundschutz++ (DE) Domain – Alpha
<!-- epics/262 -->

The IT-Grundschutz++ (DE) domain is available as an alpha version for familiarization. It is not ready for production yet.

- Alpha version of the domain IT-Grundschutz++ (DE) available in sandbox.
- Initial [documentation](../domain-gs-pp/index.md) covering ISMS methodology, the migration path and missing features.

## Detail Improvements and Bug Fixes
<!-- epics/278 -->
* Fixed error when importing units that contain risks.
* When entering costs for an implementation, only integers are accepted; error messages are shown for decimal places and non-numeric values.
* When canceling in the implementation dialog, the user is warned that unsaved changes will be lost.
* After applying catalog items to a unit, the confirmation dialog's closing button now reads *close* instead of *cancel*.
* Memory consumption for history export reduced drastically.
* Improved tutorial readability in dark mode