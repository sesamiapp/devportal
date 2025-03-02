---
sidebar_position: 6
---

# App Loading Flow

<b>Step 1:</b> The frontend sends a request to the load endpoint(api/v1/apps/load-app/app_id).
<br></br>
<br></br>

<b>Step 2:</b> The backend checks the installed app and its permissions. it creates a property named scopes and encrypts it with the MD5 algorithm. It creates a URL with a new parameter and redirects the client to the app's installation page. The parameters are shop ID, scopes, and HMAC.
<br></br>
<br></br>

<b>Step 3:</b> The app checks the scopes with its scope and runs OAuth flow if needed.
<br></br>
<br></br>

<b>Step 4:</b> If the scope is changed, the app runs the OAuth flow again. The backend redirects the client to the consent page and so on.
<br></br>
<br></br>

<b>Step 5:</b> If the scope isn't changed, the app calls the Load API(api/v1/apps/load/app_id) with its credentials: client ID, client secret, and shop ID.
<br></br>
<br></br>

<b>Step 6:</b> The backend checks the requests and redirects the client to the app page(https://admin.sesami.co/apps/app_id). On this page, the frontend should send a request to the backend to get the app information and load it.
<br></br>
<br></br>

![App Message](/img/app-loading-flow.png)
