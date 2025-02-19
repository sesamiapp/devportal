---
sidebar_position: 1
---

# Intro

Here you will find information on integrating and customizing Sesami into your Shopify online store.

## Storefront

### Shopify theme architecture

There are two types of integrations, based on which version of the Shopify Online Store your theme is based on:
#### 1. Shopify Online Store 2.0 themes
You should activate the Sesami app block and embed the Sesami Booking Button app block using your Shopify theme customizer.
#### 2. Legacy Shopify themes
Sesami creates a [script tag](https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag) on your Shopify store as soon as it is installed. This script will load a tiny script on your store, which will then call Sesami to detect if we need to display a **Sesami button** (which opens up the Sesami Experience) on the page.


### What is a Sesami Experience?

The Sesami Experience adds booking functionality to your services by launching a calendar view before a service is added to the shopping cart; By default, it is automatically displayed for products added to Sesami as a service.


### What are the requirements?

:::info You might not need this!

By default, Sesami tries to find the product form and attaches itself to it. You'll only need to read this section if you are trying to integrate with a theme that is not following Shopify standards or need a custom behaviour.
:::

The Sesami Experience can be placed almost anywhere; It will create some hidden inputs which will then be populated with the selected time and other information (Like selected resource and timezone)


#### If the Sesami Experience is placed inside a product form...

Your customers will just need to submit the form (Usually by pressing "Add to cart" button)

#### If it is not placed inside a product form...

If for any reason you'd like to have the button rendered outside a product form, you will need to extract the information in the hidden fields and add them as **Line item properties** to the order.
You can find more information about line item properties [here](https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-properties).

#### If you want multiple Experiences in a page...

You can add multiple Experiences inside a page at the same time for different services, variants, etc. To avoid mixing different information of each Experience, there will be a common tag-id shared between each Experience and its hidden fields, this tag-id will be available on their tags and also in the payload of the [events](./).
