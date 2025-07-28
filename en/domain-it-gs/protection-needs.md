<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Protection Requirements (Schutzbedarf)

## Definition of Protection Requirements

The institution-wide and valid-for-all-target-objects **protection requirement categories** for the **security objectives** are defined in the [Risk Definition](./domain-it-gs-description#risikodefinition).  
Navigate in the menu to **Risk Definitions** and then **GSRA**. Here you can edit the categories of the security objectives by clicking the **pencil icon**.

![Protection Requirement Definitions]( /assets/en/domain-it-gs/4-Schutzbedarf-Definitionen.png)

:::info  
Currently, only the values and descriptions can be changed! The extension of the risk definition is under development, see the [Roadmap](/roadmap/).  
:::

## Determination of Protection Requirements

Within an information network, the protection requirement for all relevant target objects can be determined. According to the BSI IT Baseline Protection, these are business processes/specialized procedures, information, applications, IT systems, ICS systems, IoT systems, communication connections, and rooms.  
To do this, open the form of the respective target object and scroll down to the section **Impact Analysis**. Select the corresponding protection requirement for the security objectives from the drop-down menus.

![Determination of Protection Requirements]( /assets/en/domain-it-gs/5-Schutzbedarf.png)

## Inheritance of Protection Requirements

In verinice, the protection requirement is automatically derived starting from business processes/specialized procedures as the top level in the derivation hierarchy for the other target objects separately by security objective.  
The automated derivation of the protection requirement always follows the maximum principle over the entire derivation hierarchy, but can also be manually **overridden** in each target object by setting the protection requirement via the drop-down field **User Specification**.  
In this case, it must also be documented by selection in the drop-down field whether the **distribution effect** or **cumulative effect** was applied.

![Inheritance of Protection Requirements]( /assets/en/domain-it-gs/6-Ableitung%20des%20Schutzbedarfs.png)
