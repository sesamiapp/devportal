---
sidebar_position: 6
---

# App Loading Flow

Front-end sends a request to the load endpoint(api/v1/apps/load-app/app_id).

The backend checks the installed app and its permissions. it creates a property named scopes and encrypts it with the MD5 algorithm. It creates a URL with a new parameter and redirects the client to the app's installation page. The parameters are shop_id, scopes, and hmac.

The app checks the scopes with its scope and runs OAuth flow if needed.

If the scope is changed, the app runs the OAuth flow again. The backend redirects the client to the consent page and so on.

If the scope isn't changed, the app calls the Load API(api/v1/apps/load/app_id) with its credentials: client_id,client_secret, and shop_id.

The backend checks the requests and redirects the client to the app page(https://admin.sesami.dev/apps/app_id).On this page, the Front-end should send a request to the backend to get the app information and load it.


![App Message](/img/app-loading-flow.png)
