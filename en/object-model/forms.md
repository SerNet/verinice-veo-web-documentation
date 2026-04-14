<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Forms

Forms can be defined in verinice with which objects can be created from the model. There can be several forms for a specialized object. The forms do not have to contain fields for all properties of an object. A form can be used to enter exactly the data that is required for a use case. A form can also be used to edit links and their properties. The elements of the forms are described in a form schema. The schema defines which fields are displayed and which aspects are changed. You can also configure which form element is to be used. For example, an element can be selected from a list using a drop-down list or a radio button. The form schema can also be used to flexibly configure how the elements in the form are grouped and arranged.
For example, a simple form for a processing activity can contain the data of the process itself (modeled as [process](objects#process)) and two links to a server and a responsible person.
![forms-data-VTK](  /assets/en/object-model/forms-data-VTK.png)
If the technical and organizational measures (TOMs) are also to be recorded, a second form can be created that can also manage links to the TOMs, which are modelled as [Control](objects#control).
![forms-data-VTK-TOM](  /assets/en/object-model/forms-data-VTK-TOM.png)
