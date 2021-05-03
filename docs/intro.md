---
sidebar_position: 1
---

# Intro

Here you will find information on how to integrate Sesami into your products, services, or online store.

## Storefront

Sesami creates a [script tag](https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag) on your Shopify store as soon as it is installed.

This script will load a very small script on your store which will then call Sesami to detect if we need to display a **Sesami button** on a page.

### What is a Sesami button?

Sesami button adds booking functionality to your services by launching a calendar view before a service is added to shopping cart, By default it is automatically displayed for products that are added to Sesami as a service.


### What are the requirements?

:::info You might not need this!

By default, Sesami tries to find the product form and attaches itself to it. You'll only need to read this section if you are trying to integrate with a theme that is not following Shopify standards or need a custom behaviour.
:::

Sesami button can be placed almost anywhere, It will create some hidden inputs which will then be populated with the selected time and other information (Like selected team member and timezone)


#### If a Sesami button is placed inside a product form...

Your cutomers will just need to submit the form (Usually by pressing "Add to cart" button)

#### If it is not placed inside a product form...

If for any reason you'd like to have the button renderd outside a product form, you will need to extract the information in the hidden fields and add them as **Line item properties** to the order.
You can find more information about line item properties [here](https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-properties)
