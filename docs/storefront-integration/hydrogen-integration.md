---
sidebar_position: 8
---

# Integrating with Shopify Hydrogen

Follow these steps to integrate Sesami with your Shopify Hydrogen :

## Step 1: Generate a New Hydrogen App

Start by creating a new Hydrogen app. Shopify provides a comprehensive guide for this process, which you can find [here](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started).

## Step 2: Set Up Your Shop

In this step, you'll need to configure the **Storefront API** using the Hydrogen channel or headless channel. Shopify's documentation offers a detailed walkthrough to guide you through the setup process. Refer to the [Shopify Storefront API guide](https://shopify.dev/docs/api/storefront).

right now you should have a working hydrogen app connected to your shop

## Step 3: configure Sesami Experience

now generate the sesami experience using sesami [Experience Configurator](/docs/storefront-integration/configurator/)
copy the experience code and base on your need add it to any page you want

## Step 4: load the sesami experience

you can find the proper way of loading 3rd party script into hydrogen [here](https://shopify.dev/docs/api/hydrogen/2024-10/components/script)
you need to load this javascript file where ever you use the sesami experience

```javascript
<Script src="https://cdn.sesami.co/storefront/latest/sesami-main.js" />
```

## Step 5: update CSP

lastly you need to update Content Security Policy(CSP) , you can find this code in entry.server file
it looks something like this

```javascript
const { nonce, header, NonceProvider } = createContentSecurityPolicy({
  shop: {
    checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
    storeDomain: context.env.PUBLIC_STORE_DOMAIN,
  },
});
```

we need to add few more rules to this to make sure sesami script execute properly

```javascript
const { nonce, header, NonceProvider } = createContentSecurityPolicy({
  shop: {
    checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
    storeDomain: context.env.PUBLIC_STORE_DOMAIN,
  },
  scriptSrc: [
    "'unsafe-eval'", // Allows Sesami script to be executed
    "https://app.sesami.co", // Permits scripts from the Sesami app for added functionalities
  ],
  connectSrc: [
    "'unsafe-eval'", // Allows Sesami script to be executed
    "https://app.sesami.co", // Allows network requests to the Sesami app
  ],
  imgSrc: [
    "'self'", // Permits loading images hosted on the same origin as your app.
    "https://cdn.shopify.com", // Allows Shopify-hosted images from its primary CDN.
    "https://cdn.shopifycdn.net", // Allows images from an additional Shopify CDN domain.
    "https://cdn.sesami.co/", // Allows images from Sesami’s CDN to ensure its assets are displayed correctly.
    "https://app.sesami.co", // Permits loading images directly from the Sesami app for its interface or functionality.
  ],
});
```

<br/>

---

<br/>

# congrats 🎉🥳🙌

#### now you should be able to see the Sesami book button in you page

<br/>
