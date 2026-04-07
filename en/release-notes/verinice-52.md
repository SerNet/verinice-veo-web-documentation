<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# verinice 52

The following new features are available to users with the release of **verinice 52**.

## Improving the handling of Markdown fields
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/321 -->

![verinice-52-markdown.de.gif](/assets/release-notes/verinice-52-markdown.de.gif)

The use of Markdown fields is to be improved, particularly for catalog elements (controls, scenarios, etc.), by ensuring that they:
- can be edited even after creation.
- can be populated via CSV import.

## Improvements to OnPrem operation prior to roll-out
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/294 -->

Improvements for OnPrem operation prior to the official roll-out (Helm chart and Talos VM).

## Detail improvements and bug fixes (Uncommon valor)
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/268 -->

Detail improvements and bug fixes in the **Uncommon valor** sprint.

### Bug fix: Objects from other units can be viewed
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4606 -->

Objects from a unit cannot be viewed with an incorrect UUID.

### Bug fix: Risk values are lost
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4604 -->

In the risk dialog, the potential impacts are not always loaded correctly.

### Use translation of the domain name in the domain selection
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4556 -->

In the domain selection, the translation is displayed instead of the domain name.

### Manual test of the object view
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4505 -->

Manual test of the object view, including all functionalities.

### Manual test of object overview
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4504 -->

Manual test of the object overview, including all functionalities.

### Bug fix: Origination in RI must be required
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/4433 -->

In the `RequirementImplementationDto` endpoint, the Origination field is optional, which makes no business sense since the control must be implemented at some level. The field must be required.

### More Compact Menu
<!-- https://gitlab.int.sernet.de/veo/verinice-veo/-/issues/3827 -->

![grafik.png](/assets/release-notes/grafik.png)

The menu has been redesigned to be more compact to avoid unnecessary scrolling:

## Standardize Documentation Creation
<!-- https://gitlab.int.sernet.de/groups/veo/-/epics/251 -->

The creation and updating of the verinice documentation should be documented for content creators. This part of domain development, currently used only internally, must be standardized for future white-label use.


