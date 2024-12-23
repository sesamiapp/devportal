---
sidebar_position: 5
---

# Installation Flow

The install flow should be started by clicking on the install button on the Admin portal apps page. The steps are:
<div>
1- The frontend sends a request to the Sesami backend.
</div>
<div>
2- The backend fetches app information and creates a URL with shop ID and HMAC and redirects the client to the app installation page(if it exists).
</div>
<div>
3- The app runs the OAuth flow(oauth/v1/authorization).
</div>
<div>
4- The backend check the app’s request and redirects the client to the consent page.
</div>
<div>
5- If the client accepts the requested permissions, the backend will send a code to the app and redirect the client to the app page(https://admin.sesami.co/apps/app_id).
On this page, the frontend should send a request to the backend to get the app information and load it.
If the client denies the requested permissions, the backend will redirect the client to the apps list page(https://admin.sesami.co/apps).
</div>
