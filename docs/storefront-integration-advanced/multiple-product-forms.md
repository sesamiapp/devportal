---
sidebar_position: 1
---

# Multiple product forms

Some themes might have multiple form elements on the product page, One example would be a theme that has different markups for different devices, So one form appears on desktop another on mobile, In this case, Sesami button will be attached to the first form on the page, In order to add it to other forms on the same page you can use this code:

```markup
<div
  class="sesami__additionalButtonWrapper"
  data-sesami-product-id="PRODUCT-ID"
>
</div>

```

The main difference here is that instead of an `id` attribute, we are using a `class` name. This will tell Sesami that a button for a given product needs to be rendered at this location.

The options described in [Anatomy of Sesami button](/docs/storefront-integration/anatomy-of-sesami-button) can be applied to this element as well.

## Example 1

A theme might have two different markups for desktop and mobile devices, If you can see Sesami button on one of these devices and not on the other, this might be the case for your theme. Fixing it is easy, you can find the two forms:

*This is a pseudo code to demonstrate how Sesami can be initialized on multiple forms, your theme might use a different structure or class names*


```markup {5,14}
<!-- ... -->
<div class="product-form-mobile">
  <form action="/cart/add">
    <!-- ... -->
    <div id="sesami__buttonWrapper" data-sesami-product-id="{{product.id}}"></div>
    <button name="add" type="submit">Add to cart!</button>
    <!-- ... -->
  </form>
</div>
<!-- ... -->
<div class="product-form-desktop">
  <form action="/cart/add">
    <!-- ... -->
    <div class="sesami__additionalButtonWrapper" data-sesami-product-id="{{product.id}}"></div>
    <button name="add" type="submit">Add to cart!</button>
    <!-- ... -->
  </form>
</div>

<!-- ... -->

```

## Example 2

You might want to use Sesami in page where multiple product forms are present, One use case is when you want to upsell appointments and want to display an additional service on the same page, for this purpose, you can use the same method to render multiple Sesami buttons:

*This is a pseudo code to demonstrate how Sesami can be initialized on multiple forms, your theme might use a different structure or class names*


```markup {5,14}
<!-- ... -->
<div class="main-product">
  <form action="/cart/add">
    <!-- ... -->
    <div id="sesami__buttonWrapper" data-sesami-product-id="{{product.id}}"></div>
    <button name="add" type="submit">Add to cart!</button>
    <!-- ... -->
  </form>
</div>
<!-- ... -->
<div class="upsell-product">
  <form action="/cart/add">
    <!-- ... -->
    <div class="sesami__additionalButtonWrapper" data-sesami-product-id="{{product.id}}"></div>
    <button name="add" type="submit">Add to cart!</button>
    <!-- ... -->
  </form>
</div>

<!-- ... -->

```