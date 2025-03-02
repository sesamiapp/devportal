---
sidebar_position: 2
---

# Custom Pages

You can add the Sesami button to the home page of your store, Some themes let you pick a **Featured product** to be displayed on the home page, and if you want to display a Sesami service as a **Featured product**, you can find the theme file that renders featured product section and add this code to it:

```markup
{% if product.tags contains 'sesami-service' %}
  <sesami-experience
    shop-id="{{ shop.id }}"
    service-id="{{ product.id }}"
  ></sesami-experience>
{% endif %}
```

*Not sure what is a product tag? check [Product tagging](/docs/sesami-experience/shopify-integration/intro/#product-tagging)*

### Editing Theme Files
:::caution
Knowledge of HTML, CSS, JavaScript, and Liquid are required. Consider hiring a developer if you aren't comfortable doing the steps in the tutorial.
:::

1. From your Shopify admin, go to **Online Store > Themes**.

1. Click **Actions > Edit code**.

![Shopify Theme Customizer](/img/shopify-theme-customizer.png)

From here, you can explore your current theme and its source files.

## Disabling Add To Cart Button
It can take a while until Sesami is fully loaded on your store. You can disable the **Add To Cart** button and enable it back once the Sesami is loaded:

- First, only for Sesami services, add a `sesami-id` and a `disabled` attribute to the **Add To Cart** button:

```handlebars {3,4,5,6}
<button
	<!-- ... -->
	{% if product.tags contains 'sesami-service' %}
		sesami-id="add_to_cart_{{product.id}}"
		disabled="disabled"
	{% endif %}
	<!-- ... -->
</button>
```

- Then, you'll need to add this script to the product page only if the current product is a **Sesami service**:

```markup
{% if product.tags contains 'sesami-service' %}
  <script>
    window.addEventListener('sesami:loaded', () => {
      const addToCartButton = document.querySelector('button[sesami-id="add_to_cart_{{product.id}}"]')
      addToCartButton.removeAttribute('disabled')
    })
  </script>
{% endif %}
```
*Read more about [Sesami events](/docs/sesami-experience/events)*


## Hiding Quantity Selector

Most themes have a quantity selector on products. Unless you have [Group appointments](https://help.sesami.co/hc/en-us/articles/360052498913-Group-Appointments) enabled on Sesami, you will probably want to prevent your customers from selecting more than one of the same time slot, otherwise, it will result in an unassigned appointment.

The quantity field might be used in several different places depending on your theme. You can look for files that contain **product form**, **cart**, and **cart drawer** and add this condition around the code that renders the quantity selector:

```handlebars

{% unless product.tags contains 'sesami-service' %}
    <!-- Qantity field code -->
{% endunless %}

```


## Hiding Duration Selector

Duration option is required for setting up Sesami services ([Learn more](https://help.sesami.co/hc/en-us/articles/360037521993-How-do-I-set-up-my-Sesami-account-))

It is just a simple variant option that you will set on your product, and it will be rendered by your theme just like any other variant selector.

If you have only one fixed duration for your service, you might want to remove this particular selector from your product page by adding this condition around the code that renders variant selectors:

```handlebars

{% unless product.tags contains 'sesami-service' %}
    <!-- Variant options code -->
{% endunless %}

```
