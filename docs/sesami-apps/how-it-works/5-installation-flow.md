---
sidebar_position: 5
---

# Installation Flow

The install flow should be started by clicking on the install button on the Admin portal apps page. The steps are:

<b>Step 1:</b> The frontend sends a request to the Sesami backend.
<br></br>
<br></br>

<b>Step 2:</b> The backend fetches app information and creates a URL with shop ID and HMAC and redirects the client to the app installation page(if it exists).
<br></br>
<br></br>

<b>Step 3:</b> The app runs the OAuth flow(oauth/v1/authorization).
<br></br>
<br></br>

<b>Step 4:</b> The backend checks the app’s request and redirects the client to the consent page.
<br></br>
<br></br>

<b>Step 5:</b> If the client accepts the requested permissions, the backend will send a code to the app and redirect the client to the app page(https://admin.sesami.co/apps/app_id).
On this page, the frontend should send a request to the backend to get the app information and load it.
If the client denies the requested permissions, the backend will redirect the client to the apps list page(https://admin.sesami.co/apps).
