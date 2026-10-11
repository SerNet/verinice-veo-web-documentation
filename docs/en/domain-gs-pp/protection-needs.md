<!-- © 2026 The Project Contributors - see AUTHORS.txt -->
# Protection Needs

The goal of the *Schutzbedarfsfeststellung* (protection need assessment) in Grundschutz++ is to decide, for the business processes within the *Anwendungsbereich* (scope of application), which *Schutzbedarf* (protection need) they have with regard to **Confidentiality**, **Integrity** and **Availability**. The *Schutzbedarf* is based on the damage that can occur if the business process is impaired. It must be determined, documented and approved by top management for each business process.

## Protection Need Categories

Grundschutz++ specifies two protection need categories:

- ***normal*** (normal): The impact of damage is limited and manageable.
- ***hoch*** (high): The impact of damage can be considerable.

The institution may define its own protection need categories, but must map them to these two categories. The domain's risk definition **GSRD** provides four categories per security objective. We recommend the following mapping:

| Category in verinice (GSRD) | Protection need according to Grundschutz++ |
|---|---|
| **Negligible** | *normal* |
| **Limited** | *normal* |
| **Considerable** | *hoch* |
| **Existential** | *hoch* |

Document this mapping once, e.g. in your policy or your risk management rules.

## Protection Need Definition

The institution-wide protection need categories that apply to all objects are defined in the [risk definition](./domain-gs-pp-description#risk-definition). To do this, navigate in the menu to **Risk Definitions** and then **GSRD**. Here you can edit the categories of the security objectives by clicking the **pencil icon**, e.g. to adapt the descriptions to your institution and to the damage scenarios of Grundschutz++.

<!-- SCREENSHOT: ![Protection need definitions](../assets/domain-gs-pp/verinice-gspp-protection-need-definitions.png) – Editing the protection need categories in the GSRD risk definition -->


As guidance for the classification as *hoch*, the *Pilotierungsfassung* (pilot version) lists, among others, the following damage scenarios:

- violation of laws, regulations or contracts with consequences that threaten the institution's existence
- a statutory mandate can no longer be fulfilled
- impairment of the right to informational self-determination with considerable reputational damage
- impairment of personal integrity
- impairment of task fulfillment with consequences that threaten the institution's existence
- lasting damage to reputation
- financial impact of an existence-threatening extent

## Protection Need Assessment

Open the form of the respective business process (or specialised task) and scroll down to the **Impact Analysis** section. In the drop-down menus, select the *Schutzbedarf* for the security objectives confidentiality, integrity and availability.

<!-- SCREENSHOT: ![Protection need assessment](../assets/domain-gs-pp/verinice-gspp-protection-need.png) – Impact Analysis section in the form of a business process -->


When doing so, take into account the information processed in the business process: the *Schutzbedarf* of the information is transferred to the business process in which it is processed. You can record information as **Target objects** and link it to the business process (see [Information Domain and Assets](./structure-analysis)).

::: tip Determine the order
For the initial introduction, Grundschutz++ recommends starting with the most important business process from the highest protection need category. Top management determines the order in which they are processed.
:::

::: warning A high protection need requires a risk consideration
For business processes with a high *Schutzbedarf* – unlike with a normal *Schutzbedarf* – a [*Risikobetrachtung* (risk consideration)](./risk-analysis) is required. In addition, the documentation of the assets and their dependencies is more extensive (see [Dependencies](./structure-analysis#dependencies-between-assets)).
:::

## Protection Need Inheritance

In verinice, the protection need is automatically derived, separately for each security objective, from business processes and specialised tasks to linked objects. The basis is the links **Required business process**, **Required specialised task** and **Required target object**. The derivation follows the maximum principle across the entire derivation hierarchy.

The Grundschutz++ methodology requires the *Schutzbedarfsfeststellung* only for the business processes. The derived values on the assets are nevertheless helpful: they show which assets belong to a business process with a high *Schutzbedarf* and must therefore be included in the *Risikobetrachtung*.

The derived protection need can be manually **overridden** in any object by setting the protection need via the drop-down field **User Specification**. In this case, a selection in the drop-down field must document whether the **distribution effect** or the **cumulative effect** was applied.

<!-- SCREENSHOT: ![Protection need inheritance](../assets/domain-gs-pp/verinice-gspp-protection-need-inheritance.png) – Derived protection need on a target object with the User Specification field and the selection of distribution/cumulative effect -->
