---
sidebar_position: 1
---

# Loading inside iframe

Sesami app will be loaded inside an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe">iframe</a>. This will isolates the app and it's provider and will block the app from accessing to the merchant's Admin Portal or customer's Experience.

But the app needs some information about the environment that is loading, for example, in the Experience, it may need to know the shop ID, product ID, selected slot, etc.

Also, the app wants to know about certain events, such as moving to the next step, or it wants to send an event to its provider.

All these requirements can be met using the <a href="https://www.npmjs.com/package/@sesamiapp/app-message"><b>App Message Library</b></a>.

App Message is a Typescript library published on NPM to give the app developers sets of tools to communicate easily to their providers such as Sesami Admin Portal or Sesami Experience.


<!-- import DocusaurusSvg from '../../../static/img/app-message-sample-2.png'; -->

<!-- <DocusaurusSvg />; -->

![Docusaurus logo](/img/docusaurus.png)
![App Message](/img/am.png)
<!-- ![Docusaurus logo](/img/p7WvPUswSyjPobrJw6648g.jpg) -->

<!-- <img src={img/app-message-sample-2.png} />; -->
<!-- ./assets/docusaurus-asset-example-banner.png -->