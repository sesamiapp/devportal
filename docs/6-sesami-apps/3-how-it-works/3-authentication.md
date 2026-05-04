---
sidebar_position: 4
---

# Authentication
Apps and extensions can load in different targets, some of these targets are in public pages/products, like Sesami Calendar Experience. In these targets, Sesami does not provide any authentication token.

In these types of public targets, the app developers should know that their app can be called from anywhere, and if an app wants to call an authenticated API, it should do it with its own token in its backend.

But on the other hand, in some other targets, like in the Admin Portal, because there is gonna be private shop data and APIs, we need an authentication method, to make sure that a validated app is loading inside the iframe and requesting APIs.

This requirement can be achieved in 2 ways:

1- When an app is loading, the host attaches an authentication token to its URL, so the app's backend can use this token to call requests to the Sesami's API.

Also, an HMAC will be attached to the URL for the app to make sure the provided info is valid.

```markup
https://myapp.com/extension?token=3746gf34fg8f093fj0283hf32h&hmac=2837ryh309j3209r&...
```
<p class="sesami-description">* The length of the sample token and HMAC has been shortened to fit in one line.</p>

2- The app message can provide an authentication token to the app's frontend, and with this token, the APP can do API calls to its backend, or even a direct call to the Sesami API.
This way, an app can even have no backend and directly work with the Sesami API.

![Authentication](/img/app-authentication.png)
