---
sidebar_position: 3
---

# Custom pages
Sesami can be integrated with any page on the web.

## In a Shopify store
You can add the Sesami button to any page, Anywhere on your store.

### Static pages
First, you have to create a static page and place this snippet on the page code:


```html
<form method="post" id="cartform" action="/cart/add">
  <input type="hidden" name="id" value="{{product.selected_or_first_available_variant.id}}">
  <input type="hidden" name="quantity" value="1">
  <sesami-button 
    shop-id="SHOP-ID" 
    product-id="PRODUCT-ID"
    variant-id="VARIANT-ID"
    button-label="Select Time"
    locale="en"
    button-customized-settings="%7B%22auto_add_to_cart%22%3Afalse%2C%22skip_cart%22%3Afalse%2C%22button-label%22%3A%22Select time%22%2C%22alignment%22%3A%22center%22%2C%22color%22%3A%22%22%2C%22color_background%22%3A%22%23FFF%22%2C%22font_size%22%3A16%2C%22border_width%22%3A1%2C%22border_radius%22%3A4%2C%22border_color%22%3A%22%23000%22%2C%22width%22%3A%22300px%22%2C%22height%22%3A%2245px%22%2C%22experience%22%3A%22classic%22%7D" 
    style="align-items: center;">
  </sesami-button>
  <input type="submit" value="Add to cart">
</form>
```

:::note
Replace **`PRODUCT-ID`**, **`VARIANT-ID`** and **`SHOP-ID`**
:::

### Home page

Using a similar approach, you can add the Sesami button to the home page of your store, Some themes let you pick a **Featured product** to be displayed on the home page, and if you want to display a Sesami service as a **Featured product**, you can find the theme file that renders featured product section and add this code to it:

```html
{% if product.tags contains "sesami-service" %} 
  <sesami-button 
    product-id="{{product.id}}"
    variant-id="{{product.selected_or_first_available_variant.id}}"
    button-label="Select Time"
    locale="{{ localization.language.iso_code }}"
    button-customized-settings="%7B%22auto_add_to_cart%22%3Afalse%2C%22skip_cart%22%3Afalse%2C%22button-label%22%3A%22Select time%22%2C%22alignment%22%3A%22center%22%2C%22color%22%3A%22%22%2C%22color_background%22%3A%22%23FFF%22%2C%22font_size%22%3A16%2C%22border_width%22%3A1%2C%22border_radius%22%3A4%2C%22border_color%22%3A%22%23000%22%2C%22width%22%3A%22300px%22%2C%22height%22%3A%2245px%22%2C%22experience%22%3A%22classic%22%7D" 
    style="align-items: center;">
  </sesami-button>
{% endif %} 
```
*Not sure what is a product tag? check [Product tagging](/docs/storefront-integration/theme-customization#product-tagging)*

## On an external website

Sesami does have the needed components to be integrated with any external website using the Shopify storefront APIs.

- The following Sesami wrapper element needs to be present on the page with an additional `shop-id`attribute:

:::info
 Please check [Anatomy of Sesami button](/docs/storefront-integration/anatomy-of-sesami-button) if you are not familiar with the different options you can pass to the Sesami button.
:::

```html
<sesami-button
    .
    shop-id="{{shop.id}}"
    product-id="{{product.id}}"
    variant-id="{{product.selected_or_first_available_variant.id}}"
    .
    >
</sesami-button>
```

- Also, since this is an external website, Sesami script needs to be added manually:

```markup
<script async src="https://cdn.sesami.co/shopify.js"></script>
```
