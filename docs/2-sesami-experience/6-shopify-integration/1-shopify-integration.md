---
sidebar_position: 1
---

# Shopify Integration

There are two types of integrations, based on which version of the Shopify Online Store your theme is based on:
#### 1. Shopify Online Store 2.0 themes
You should activate the Sesami app block and embed the Sesami Booking Button app block using your Shopify theme customizer.
#### 2. Legacy Shopify themes
Sesami creates a [script tag](https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag) on your Shopify store as soon as it is installed. This script will load a tiny script on your store, which will then call Sesami to detect if we need to display a **Sesami button** (which opens up the Sesami Experience) on the page.

### What are the requirements?

:::info You might not need this!

By default, Sesami tries to find the product form and attaches itself to it. You'll only need to read this section if you are trying to integrate with a theme that is not following Shopify standards or need a custom behaviour.
:::

### Custom pages

You can add the Sesami button to the home page of your store, Some themes let you pick a **Featured product** to be displayed on the home page, and if you want to display a Sesami service as a **Featured product**, you can find the theme file that renders featured product section and add this code to it:

```markup
{% if product.tags contains 'sesami-service' %}
  <sesami-experience
    shop-id="{{ shop.id }}"
    service-id="{{ product.id }}"
  ></sesami-experience>
{% endif %}
```

*Not sure what is a product tag? check [Product tagging](/docs/storefront-integration/theme-customization#product-tagging)*
