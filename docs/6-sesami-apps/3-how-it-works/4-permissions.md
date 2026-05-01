---
sidebar_position: 3
---

# Permissions

If an app wants to read or change some data from a shop, it should have the correct access to that part.

Our platform currently supports **Read-Only** Permissions. This means all apps accessing the platform can:

**View Data**: Apps can retrieve and view available data across all supported resources.

**Query Information**: Apps can make queries and filter data to suit their needs.

:::info
Apps are not allowed to modify, delete, or create new data at this time.
:::

The App follows a structured permission model, represented as `Shop:Read` and send it in the [**OAuth flow**](../3-api-reference/installation-api.md).

when the Shop manager wants to install the app, the list of the app permissions will be shown, and he/she has to grant permissions to the app to be able to install and use it.

![App Message](/img/app-permission-page.png)

:::info
<a>
After the app is installed, if the app owner changes the permissions, the page above will open when the Shop manager wants to open the app again.
</a>
<p>
If he/she grants access to the app, the app can work with the new permissions, but if not, the app cannot have the new permissions.
</p>
:::
