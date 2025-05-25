---
sidebar_position: 3
---

# Hydrogen Integration

[Hydrogen](https://hydrogen.shopify.dev/) is Shopify’s headless stack that’s engineered for performance and productivity.

You can add Sesami Experience to your Shopify Hydrogen as easy as this:

### Step1: Load The Bundle

To integrate the Sesami experience into your Hydrogen storefront, you will need to load the Sesami Script:

```url
https://cdn.sesami.co/storefront/latest/sesami-main.js
```

The appropriate way to load third-party scripts into a Hydrogen app is outlined in [here](https://shopify.dev/docs/api/hydrogen/2024-10/components/script).

### Step 2: Generate The Tag

Create your customized Sesami Experience based on your own requirements using the [Sesami Experience Configurator](/docs/sesami-experience/configurator/).

### Step3: Add The Experience

Copy the tag that you generated in the step 2, and add it to any page where you would like to display the Sesami Experience.

```html title="INSIDE YOUR SERVICE PAGE"
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
></sesami-experience>
```

**Note:**
While using Shopify Hydrogen for implementing **auto add to cart** or **skip cart** functionality, adding them to `<sesami-experience></sesami-experience>` tag alone is **not enough**.
You **must also listen** for the relevant custom events on the `window` object and handle them properly base on your application logics:

```js
// Auto add to cart
window.addEventListener('sesami:cart:add', () = {
  console.log('auto add to cart')
  // Example: Use Hydrogen's useCart to add a product
})

// Auto skip cart
window.addEventListener('sesami:cart:skip', () = {
  console.log('skip cart')
  // Example: Redirect to checkout
})
```

you can use hydrogen built in hook [useCart](https://shopify.dev/docs/api/hydrogen-react/2025-01/hooks/usecart) for adding products to the cart.
