---
sidebar_position: 2
---

# Options

The Sesami Experience can be customized in many ways; this is mostly done by passing options to the HTML element:

:::note
Remember that the **shop-id** and **service-id** are the essential/required options for the Experience to work, but other options that will be mentioned below are optional.
:::

### locale
Sometimes you might need Sesami calendar to be displayed in a different language than what is set as your primary language. This is primarily useful if you have a multi-lingual store:

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  locale="fr-FR"
>
</sesami-experience>
```

### button-label
You can display any label on the button; this is useful if you'd like to conditionally render different labels based on product or context. If this option is not provided, it will display what is set on the settings page in Sesami app.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  button-label="Book now!"
>
</sesami-experience>
```

### product-id
If you want to render a button on a page different from a product page, you'll need to tell Sesami for which product you are rendering a button. Depending on your implementation, if you are rendering the button outside a product form or if a variant input is not present on the form, you might need to add a [variant-id](#variant-id) as well.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  product-id="192379823740"
>
</sesami-experience>
```

### variant-id
If you want to render a button on a page different from a product page, you'll need to tell Sesami for which variant you are rendering a button. You always need to specify the [product-id](#product-id) when using this option

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  product-id="192379823740"
  variant-id="379823740343"
>
</sesami-experience>
```

### shop-id
If you want to integrate Sesami in an external page or website, you'll need to tell Sesami for which store you want to display the button; this is done by providing the `shop-id` option:

**Both [variant-id](#variant-id) and [product-id](#product-id) are required when using this option.**

:::info Where can I find my shop ID?

Each store has its own shop id which can be fetched by visiting this address after replacing `STORE` with your store address: http://STORE.myshopify.com/admin/shop.json
:::

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  shop-id="0000000000"
  product-id="192379823740"
  variant-id="379823740343"
>
</sesami-experience>
```

If you need to load Sesami on an external page (like a WordPress website), you'll need to add this line of code to your page:

```html
<script async src="https://cdn.sesami.co/shopify.js"></script>
```




### quantity
If you don't want to display a quantity selector within your product form and need a pre-selected quantity value, you can set this option. defaults to **1** in other cases

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  quantity="1"
>
</sesami-experience>
```

## Events

Sesami fires events to help you handle different scenarios in your booking flow; You can listen for these events to trigger different actions when a customer selects a time slot or when Sesami is loaded and initialized on your page.

### sesami:loaded
Sesami resources are loaded in async mode, so they do not block your other resources. Depending on network conditions and the size of other resources, it can take some time until Sesami is fully loaded on a page. This event will let you know when Sesami is ready to accept bookings.

This is an example that shows how you can listen for this event and trigger an action based on it:

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

### sesami:booking:success
Unlike the classic experience where booking is only completed when the order is placed,
when instant booking is enabled, the entire booking flow happens within Sesami.
This event is triggered when a slot is successfully booked via Instant booking.

```html title="Example" {4}
<script>
(function(){
    window.addEventListener('sesami:booking:success', function(){
      /// Redirect to "Thank you" page
    })
})()
</script>
```


### change

A regular `change` event will be fired on respective hidden inputs displayed on [Rendered result](#rendered-result) section whenever a user selects a new time slot or changes the selected team member or timezone.

**Example:** Listen for [sesami:loaded](#sesamiloaded) event and once inputs are rendered, listen for the change event on the `Date` input and programmatically create an order without customers having to click on add to cart button:

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

