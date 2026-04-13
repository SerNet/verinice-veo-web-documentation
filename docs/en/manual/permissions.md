# Permissions

As a verinice user, the following factors determine whether I am authorized to perform an action:

* **Am I the main user or a sub user?**
  Main users can do anything in their [client](../object-model/objects.md#client), whereas sub users require special rights to perform certain actions. These rights can only be granted by main users.
* **Do I have the role "write access"?**
  As a sub user I cannot make any changes (create, edit or delete [objects](../object-model/objects.md#specialist-objects)) without this role.
* **Is unit access restricted or free in my client?**
  Main users sub users can [control](accounts.md#read-and-write-permissions-for-units) whether sub users can access only certain units ("restricted") or if all users can access all units ("free").
* **To which access groups do I belong?**
  As a sub user in a client with restricted unit access, my access groups determine which units I can see ("read") and in which units I can make changes ("write").

In the following, it is described which permissions are required for specific actions.

## Manage users

Only main users can access the [user administration](accounts.md#user-management-1) and query, create, edit and delete sub users there.
In the user administration, they may also restrict or free unit access, manage access groups, and assign roles and access groups to sub users.

Sub users, on the other hand, have no access to the accounts of other users.

| User      | Action permitted? |
|-----------|-------------------|
| sub user  | **No**            |
| main user | **Yes**           |

## Reading a Unit

Reading a unit means seeing it listed in the [unit management](unit-management.md) and viewing the dashboard, objects, risks, etc. within that unit. Units that I cannot read remain hidden from me.

Main users can always read all units in their client. On the other hand, sub users may only read a unit if they are either a member of an access group that grants them read access to that unit, or if unit access is generally free in their client.

| Unit access | User      | Access groups               | Action permitted? |
|-------------|-----------|-----------------------------|-------------------|
| restricted  | sub user  | none                        | **No**            |
| restricted  | sub user  | reading group for this unit | **Yes**           |
| restricted  | main user | n.a.                        | **Yes**           |
| free        | sub user  | none                        | **Yes**           |
| free        | sub user  | reading group for this unit | **Yes**           |
| free        | main user | n.a.                        | **Yes**           |

## Creating, editing or deleting a unit

Units can be created, edited and deleted in the [unit management](unit-management.md). "Editing a unit" only encompasses renaming the unit, changing its description and assigning additional domains to it. These actions are distinct from by [writing inside a unit](#writing-inside-a-unit), which will be discussed below.

As the main user, creating, editing and deleting units is always allowed. On the other hand, sub users can only do this if they have the role "write access" and if unit access is free in their client.

| Unit access | User      | Roles        | Action permitted? |
|-------------|-----------|--------------|-------------------|
| restricted  | sub user  | none         | **No**            |
| restricted  | sub user  | write access | **No**            |
| restricted  | main user | n.a.         | **Yes**           |
| free        | sub user  | none         | **No**            |
| free        | sub user  | write access | **Yes**           |
| free        | main user | n.a.         | **Yes**           |

# Writing inside a unit

To write inside a unit means to create, edit and delete objects and risks within the unit. This is distinct from by [editing the unit itself](#creating-editing-or-deleting-a-unit), which is described above.

Main users can always write in all units within their client. On the other hand, sub users may only write inside a unit if they have the role "write access" and if they are either a member of an access group that grants them write access to that unit, or if unit access is generally free in their client.

| Unit access | User      | Roles        | Access groups               | Action permitted? |
|-------------|-----------|--------------|-----------------------------|-------------------|
| restricted  | sub user  | none         | none                        | **No**            |
| restricted  | sub user  | none         | writing group for this unit | **No**            |
| restricted  | sub user  | write access | none                        | **No**            |
| restricted  | sub user  | write access | writing group for this unit | **Yes**           |
| restricted  | main user | n.a.         | n.a.                        | **Yes**           |
| free        | sub user  | none         | none                        | **No**            |
| free        | sub user  | none         | writing group for this unit | **No**            |
| free        | sub user  | write access | none                        | **Yes**           |
| free        | sub user  | write access | writing group for this unit | **Yes**           |
| free        | main user | n.a.         | n.a.                        | **Yes**           |
