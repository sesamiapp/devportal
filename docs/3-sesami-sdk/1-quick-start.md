---
sidebar_position: 1
---

# Quick Start

This guide will walk you through initializing the SDK, rendering a calendar, retrieving availabilities, and booking an appointment using the SDK. By following these steps, you will gain a solid understanding of how to integrate and utilize the SDK effectively.

### Include SDK

To begin, include the Storefront SDK in your project by adding the following script to your HTML file:

1. From your Shopify admin, go to **Online Store > Themes**.
1. Click **Actions > Edit code**.
1. Open **Layout / theme.liquid**.
1. Insert the following code snippet at the bottom of the file.

```markup
<script async src="https://cdn.sesami.co/sdk.js"></script>
```

:::info
The Sesami SDK for JavaScript supports the latest two versions of the most popular browsers. <br></br>
Internet Explorer and older browsers are not supported.
:::

### Initialize

Next, create an instance of the SDK. In your `main.js` file, initialize the SDK with the required parameters:

```ts
sesami = new SesamiSDK({
  shopId: {{shop.id}},
  productId: {{product.id}},
  variantId: {{product.selected_or_first_available_variant.id}},
  quantity: 1,
  autoLoad: true
})

sesami.init()
```

The code above will create a Sesami instance, you use it to render a fully customized calendar and get availabilities for each day.

To ensure easy access throughout your application, store the SDK instance in a global variable:

```js
window.sesami = sesami
```

:::note
Sesami will not block your other resources from being loaded or cause any delays or decrease in your store's performance.
:::
