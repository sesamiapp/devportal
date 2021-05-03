---
sidebar_position: 2
---

# Custom pages
Sesami can be integrated with any page on the web.

## In a Shopify store
You can add the Sesami button to any page, Anywhere on your store.

### Static pages
First you have to create a static page and place this snippet on the page code:


```markup
<form method="post" id="cartform" action="/cart/add">
  <input type="hidden" name="id" data-productid="PRODUCT-ID" value="VARIANT-ID">
  <div
    id="sesami__buttonWrapper"
    data-sesami-product-id="PRODUCT-ID"
    data-sesami-variant-id="VARIANT-ID"
  ></div>
  <input type="submit" value="Add to cart">
</form>

```

:::note
Replace **`PRODUCT-ID`** and **`VARIANT-ID`**
:::

### Home page

Using a similar approach, you can add Sesami button to home page of your store, Some themes let you pick a **Featured product** to be displayed on the home page, if you want to display a Sesami service as a **Featured product**, you can find the theme file that renders featured product section and add this code to it:

```markup
{% if product.tags contains "sesami-service" %} 
  <div
    id="sesami__buttonWrapper"
    data-sesami-product-id="{{product.id}}" data-sesami-variant-id="{{product.selected_or_first_available_variant.id}}"
  ></div> 
{% endif %} 
```
*Not sure what is a product tag? check [Product tagging](/docs/storefront-integration/theme-customization#product-tagging)*

## In an external website

Sesami does have the needed components to be integrated with any external website using the Shopify storefront APIs.

- Following Sesami wrapper element needs to be present on the page with an additional `shop-id`attribute:

:::info
 Please check [Anatomy of Sesami button](/docs/storefront-integration/anatomy-of-sesami-button) if you are not familiar with the different options you can pass to Sesami button.
:::

```markup
<div
  id="sesami__buttonWrapper"
  data-sesami-product-id="PRODUCT_ID"
  data-sesami-shop-id="SHOP_ID"
  data-sesami-variant-id="VARIANT_ID">
</div>
```

- Also, since this is an external website, Sesami script needs to be added manually:

```markup
<script async src="https://cdn.sesami.co/shopify.js"></script>
```

After these two steps, `sesami:loaded` event will be fired on window whenever Sesami button is loaded on the page, after Sesami button is loaded, change event can be listened to on the input fields that are created inside the wrapper element.

Depending on business logic, an order can be created with these properties right after change event, or after clicking an “Add to cart” button similar to normal Shopify flow.

*Read more about [Sesami events](/docs/storefront-integration/anatomy-of-sesami-button#events)*
