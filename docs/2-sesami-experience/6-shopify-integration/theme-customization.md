---
sidebar_position: 9
---

# Theme customization

Sesami turns normal Shopify products into services that can be booked and paid for. The booking flow can be different from buying a physical product. Therefore, You might want to customize your theme to provide a better user experience for your customers when booking with Sesami.


:::info
Since the introduction of the Shopify Online Store 2.0, most of the theme customizations can be done using the theme customizer: Refer to [Setting up Sesami for the Shopify Online Store 2.0](https://help.sesami.co/hc/en-us/articles/4421864289687-Setting-up-Sesami-for-the-Shopify-Online-Store-2-0)

The rest of this article applies to the legacy Shopify themes or when using non-app-embed integration on the OS 2.0 themes.
:::

:::note

For the legacy Shopify themes,  Each theme and business is different; you can apply any of these techniques that you feel will provide value for your business and works with your current theme.

:::

## Prerequisites

### Product tagging
Tagging products will allow you to apply these customizations only on products that are used as a service.

Sesami is auto-tagging all Shopify products you add to Sesami as a service with the tag `sesami-service`. 

:::info
The rest of this article assumes that the tag `sesami-service` was added to the product.
:::

This way, all the changes will be applied to your future services only by adding a tag and you can also benefit from Shopify's features such as creating collections filtered by this tag.

Please read this article if you need help with creating or assigning tags to your products:
[Creating and using tags in Shopify](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/using-tags)

### Editing theme files
:::caution
Knowledge of HTML, CSS, JavaScript, and Liquid is required. Consider hiring a developer if you aren't comfortable doing the steps in the tutorial.
:::

1. From your Shopify admin, go to **Online Store > Themes**.

1. Click **Actions > Edit code**.

From here, you can explore your current theme and its source files.

## Disabling Add to cart button
Sesami uses script tags ([Learn more](/docs/intro#storefront)) to load the **Sesami button** on your store. Because of the nature of script tags, it can take a while until Sesami is fully loaded on your store. You can disable **Add to cart button** and enable it back once Sesami loaded:

- You'll need to add this script to the product page only if the current product is a **Sesami service**. 

```markup
{% if product.tags contains 'sesami-service' %}
  <script>
    window.addEventListener('sesami:loaded',function(){
      var addToCartButton = document.querySelector('button[sesami-id="add_to_cart_{{product.id}}"]');
      // Or use any other selector that correctly returns only the add to cart button
      addToCartButton.removeAttribute('disabled');
    })
  </script>
{% endif %}
```
*Read more about [Sesami events](/docs/storefront-integration/anatomy-of-sesami-button#events)*

- Then, only for Sesami services, add a `sesami-id` attribute and `disable` the button. It will automatically be enabled back by the code we added in the previous step, once Sesami is loaded.

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


## Hiding quantity selector

Most themes have a quantity selector on products. Unless you have [Group appointments](https://help.sesami.co/hc/en-us/articles/360052498913-Group-Appointments) enabled on Sesami, you will probably want to prevent your customers from selecting more than one of the same time slot, otherwise, it will result in an unassigned appointment.

The quantity field might be used in several different places depending on your theme. You can look for files that contain **product form**, **cart** and **cart drawer** and add this condition around the code that renders the quantity selector:

```handlebars

{% unless product.tags contains 'sesami-service' %}
    <!-- Qantity field code -->
{% endunless %}

```


## Hiding duration selector

Duration option is required for setting up Sesami services ([Learn more](https://help.sesami.co/hc/en-us/articles/360037521993-How-do-I-set-up-my-Sesami-account-))

It is just a simple variant option that you will set on your product, and it will be rendered by your theme just like any other variant selector.

If you have only one fixed duration for your service, you might want to remove this particular selector from your product page by adding this condition around the code that renders variant selectors:

```handlebars

{% unless product.tags contains 'sesami-service' %}
    <!-- Variant options code -->
{% endunless %}

```

