<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# User Management

## Edit User Account

Click the account button to edit your user account:

![Edit User Account](  /assets/en/manual/account.de.png)

verinice uses a [Keycloak](https://www.keycloak.org/) instance for identity and access management, which opens in a new browser tab:

![Edit User Account](  /assets/en/manual/account_management.de.png)

### Personal Information

In the Personal Information section, you can change your name or email address. After changing your email, you will receive a verification email asking you to set a new password.

![Personal Information](  /assets/en/manual/account_profile.de.png)

### Authentication Method

In the Account Security > Login section, you can choose between standard password authentication or two-factor authentication and configure it:

![Authentication](  /assets/en/manual/account_authentification.de.png)

### Device Activity

In Account Security > Device Activity, you can view logged-in devices and log out any unfamiliar devices:

![Device Activity](  /assets/en/manual/account_activity.de.png)

### Manage Applications

In the Applications section, you can see which clients/applications are connected to your verinice account. Since the number of connected applications is limited, you may be automatically logged out, for example, when opening verinice in multiple browsers simultaneously.

![Applications](  /assets/en/manual/account_applications.de.png)

### Resources

::: info
Additional functions such as resource sharing are currently not supported!
:::

## User Management

::: details Why is the user management not available to me?

To add or manage additional users, the following conditions must be met:

- Your subscription plan must include additional users.
- You must have the **Main User** role, which is assigned during the purchasing process.
:::

Access the user management via the account button:

![User Management](  /assets/en/manual/accounts.de.png)

The following overview shows all users in your client along with additional details:

![User List](  /assets/en/manual/accounts_list.de.png)

1. All users have access to all units in your client.
2. The interface displays active and available user slots. Note that the Main User already reduces the available user count by one.
3. You can create new users,
4. edit existing users, or
5. delete existing users.

When creating a user, enter the required information:

![Create User](  /assets/en/manual/accounts_create.de.png)

1. Username, email, first name, last name.
2. Activate or deactivate the user.
3. By default, all users have write access. To restrict to read-only access, disable the write permission.
4. After creation, an email will be sent to the user to verify their email address. The user must set a secure password via the provided link before logging in to verinice:

![Verification Email](  /assets/en/manual/accounts_email.de.png)

::: info
We recommend notifying new users in advance about the creation of their verinice account.
:::

## License control

Users of *verinice.onprem* store a license file in their local instance. This file specifies the maximum number of accounts, units, clients, and the use of licensed content, such as official texts from standards.

If actual usage exceeds the limits specified in the license file, all users will have their write permissions revoked until the license conditions are met again. This can be achieved by increasing the license or reducing usage.

The license violation status is displayed as a warning in the user interface. Users must inform their **main user**, administrator, or purchaser to resolve this situation.

![License warning](/assets/manual/license-warnings.png)