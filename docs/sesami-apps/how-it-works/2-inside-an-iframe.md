---
sidebar_position: 2
---

# Inside an iframe
The Sesami app will be loaded inside an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe">iframe</a>. This will isolate the app and its host and will block the app from accessing the merchant's Admin Portal or customer's Experience.



### App Message

That said, the app needs some information about the environment that is loading, for example, in the Experience, it may need to know the shop ID, product ID, selected slot, etc.

Also, the app wants to know about certain events, such as moving to the next step or sending an event to its host.

All these requirements can be met using the <a href="https://www.npmjs.com/package/@sesamiapp/app-message"><b>App Message Library</b></a>.

App Message is a Typescript library published on NPM to give the app developers sets of tools to communicate easily with their hosts such as Sesami Admin Portal or Sesami Experience.

![App Message](/img/app-message-sample.png)

### Context from URL

Also, when the host is loading the app, it will attach the necessary context for it to its URL, like the target that is loading in, the shop URL, or the authentication token.

Something like this:
```markup
https://myapp.com/extension?shopId=3746gf34fg&locale=en-US&productId=8273gr0328rfh23
```

This approach has two benefits:

1- The app can receive the needed information at its backend, so it can do actions even before its frontend is loaded, like fetching data from an external API, doing some heavy calculations, or applying SSR.

2- Imaging an app that does not want/needs to implement a frontend, for example, an app that just wants to collect data in different targets for analytics. In this way, it can just use the information inside the URL and does not render anything for its frontend.
