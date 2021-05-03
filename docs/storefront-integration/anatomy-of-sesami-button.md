---
sidebar_position: 1
---

# Anatomy of Sesami button

At its simplest form, you'll need an empty `div` element with `id` attribute set to `sesami__buttonWrapper` for Sesami to render the button and the hidden fields:

```html title="product-template.liquid"
<div
  id="sesami__buttonWrapper"
>
</div>
```

#### Rendered result
This is a final rendered markup that Sesami creates to capture booking information:

```html
<div id="sesami__buttonWrapper">
<!--- Anything inside this div is generated automatically --->
	<input type="hidden" id="sesami-date-0" name="properties[Date]" value="">
	<input type="hidden" id="sesami-time-0" name="properties[Time]" value="">
	<input type="hidden" id="sesami-timezone-0" name="properties[Timezone]" value="">
	<input type="hidden" id="sesami-teammember-0" name="properties[Team Member]" value="">
	<input type="hidden" id="sesami-remainingslots-0" name="sesami-remainingslots" value="">
	<button class="sesami__button" type="button">
		Select Date &amp; Time
	</button>
</div>
```

:::note

The above markup will only be generated if the current product is a Sesami service, otherwise, it will do nothing and your other products won't be affected in any way.

:::


## Options

Sesami button can be customized in many ways, this is mostly done by passing options to the wrapper element:

### locale
Sometimes you might need Sesami calendar to be displayed in a different language than what is set as your primary language. This is mostly useful if you have a multi-lingual store:

```html {3}
<div
  id="sesami__buttonWrapper"
  data-sesami-locale="fr"
>
</div>
```

### button-label
You can display any label on the button, this is useful if you'd like to conditionally render different labels based on product or context. If this option is not provided, it will display what is set on the settings page in Sesami app.

```html {3}
<div
  id="sesami__buttonWrapper"
  data-sesami-button-label="Book now!"
>
</div>
```

### product-id
If you want to render a button on a page different from product page, you'll need to tell Sesami for which product you are rendering a button. Depending on your implementation, if you are rendering the button outside a product form or if a variant input is not present on the form, you might need to add a [variant-id](#variant-id) as well

```html {3}
<div
  id="sesami__buttonWrapper"
  data-sesami-product-id="192379823740"
>
</div>
```

### variant-id
If you want to render a button on a page different from product page, you'll need to tell Sesami for which variant you are rendering a button. You always need to specify the [product-id](#product-id) when using this option

```html {3}
<div
  id="sesami__buttonWrapper"
  data-sesami-product-id="192379823740"
  data-sesami-variant-id="379823740343"
>
</div>
```

### shop-id
If you want to integrate Sesami in an external page or website, you'll need to tell Sesami for which store you want to display the button, this is done by providing the `shop-id` option:

**Both [variant-id](#variant-id) and [product-id](#product-id) are required when using this option.**

:::info Where can I find my shop ID?

Each store has it's own shop id which can be fetched by visiting this address after replacing `STORE` with your store address: http://STORE.myshopify.com/admin/shop.json
:::

```html {3}
<div
  id="sesami__buttonWrapper"
  data-sesami-shop-id="0000000000"
  data-sesami-product-id="192379823740"
  data-sesami-variant-id="379823740343"
>
</div>
```

If you need to load Sesami on an external page (like a Wordpress website), you'll need to add this line of code to your page:

```html
<script async src="https://cdn.sesami.co/shopify.js"></script>
```




### quantity
If you don't want to display a quantity selector within your product form, and you need a pre-selected quantity value you can set this option. defaults to **1** in other cases

```html {3}
<div
  id="sesami__buttonWrapper"
  data-sesami-quantity="1"
>
</div>
```

## Events

Sesami fires events to help you handle different scenarios in your booking flow, You can listen for these events to trigger different actions when a cusomer selects a time slot or when Sesami is loaded and initialized on your page.

### sesami:loaded
Sesami resources are loaded in async mode so they do not block your other resources, depending on network conditions and the size of other resources, it can take some time until Sesami is fully loaded on a page. This event will let you know when Sesami is ready to accept bookings.

This is an example that show how you can listen for this event and trigger an action based on it:

```html title="Example" {5}
<script>
/// Disable add to cart button
/// Display a loading spinner
(function(){
    window.addEventListener('sesami:loaded', function(){
      /// Remove loading spinner
      /// Enable add to cart button
    })
})()
</script>
```

### change

A regular `change` event will be fired on respective hidden inputs displayed on [Rendered result](#rendered-result) section whenever a user selects a new time slot or changes the selected team member or timezone.

**Example:** Listen for [sesami:loaded](#sesamiloaded) event and once inputs are rendered, listen for change event on the `Date` input and programmatically create an order without customers having to click on add to cart button:

```html title="Example" {6}
<script>
(function(){
    window.addEventListener('sesami:loaded', function(){
      var formElement = document.querySelector("#form")
      var sesamiDateInput = formElement.querySelector("[name='properties[Date]']")
      sesamiDateInput.addEventListener('change', function(){
        const FD = new FormData( formElement )
        createOrder(FD)
      })
    })
})()
</script>
```

