---
sidebar_position: 2
---

# Quick start

### Include SDK

Include Sesami SDK on your theme.

1. From your Shopify admin, go to **Online Store > Themes**.
1. Click **Actions > Edit code**.
1. Open **Layout / theme.liquid**.
1. Insert the following code snippet at the bottom of the file.

```markup
<script async src="https://cdn.sesami.co/sdk.js"></script>
```

### initialize

Sesami will not block your other resources from being loaded and will not cause any delays or decrease your store's performance. You need to initialize it when it is ready and loaded:

```markup
<script>
  window.sesamiAsyncInit = () => {

    sesami = new SesamiSDK({
      variantId: {{product.selected_or_first_available_variant.id}},
      shopId: {{shop.id}},
      productId: {{product.id}},
      quantity: 1,
      autoLoad: true
    })

    sesami.init();
  }
</script>
```

The code above will create a Sesami instance; you use it to render a fully customized calendar and get availabilities for each day.
