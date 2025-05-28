---
sidebar_position: 3
---

# Hydrogen Integration

[Hydrogen](https://hydrogen.shopify.dev/) is Shopify’s headless stack that’s engineered for performance and productivity.

for adding the Sesami Experience to your Shopify Hydrogen storefront you can follow this steps:

---

### Step 1: Load the Bundle

To integrate the Sesami Experience into your Hydrogen storefront, you need to load the Sesami script from this URL:

```text
https://cdn.sesami.co/storefront/latest/sesami-main.js
```

The appropriate way to load third-party scripts into a Hydrogen app is outlined [here](https://shopify.dev/docs/api/hydrogen/2025-05/components/script).

Add this code to the target page (usually the product page):

```jsx
<Script src="https://cdn.sesami.co/storefront/latest/sesami-main.js" />
```

To allow Hydrogen to fetch the required data, you need to update your [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) in `entry.server.jsx`:

```js
const { nonce, header, NonceProvider } = createContentSecurityPolicy({
  shop: {
    checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
    storeDomain: context.env.PUBLIC_STORE_DOMAIN,
  },
  scriptSrc: ["https://cdn.sesami.co/", "https://cdn.shopify.com/"],
  connectSrc: ["https://app.sesami.co/"],
  imgSrc: ["http://localhost:3000/", "https://cdn.shopify.com/"],
});
```

you can read more about hydrogen content security policy (CSP) [here](https://shopify.dev/docs/storefronts/headless/hydrogen/content-security-policy)

---

### Step 2: Generate the Tag

Create your customized Sesami Experience based on your own requirements using the [Sesami Experience Configurator](/docs/sesami-experience/configurator/).

---

### Step 3: Add the Experience Tag

Copy the tag you generated in Step 2 and add it to any page where you would like to display the Sesami Experience. By best practices, it makes sense to add it to the product route, but you can add the Sesami Experience anywhere you like.

```html title="INSIDE YOUR SERVICE PAGE"
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
></sesami-experience>
```

---

### Step 4: Final Setup

While using the Sesami Experience, you may want the following options:

---

#### Auto Add to Cart

To add products automatically to the cart after a reservation succeeds , you need to :

1. Add the option to the tag:

```html title="INSIDE YOUR SERVICE PAGE"
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  auto-add-to-cart
></sesami-experience>
```

2. Listen to the relevant event:

```js
// Auto add to cart
window.addEventListener("sesami:cart:add", () => {
  console.log("auto add to cart");
  // Example: Use Hydrogen's useCart to add a product
});
```

You can handle the add-to-cart functionality based on your application’s needs.
Hydrogen’s built-in [useCart](https://shopify.dev/docs/api/hydrogen-react/2025-01/hooks/usecart) hook can be used to add products to the cart.

---

#### Skip Cart

If you want to redirect the user to the checkout page:

1. Add the tag with both `auto-add-to-cart` and `skip-cart` options:

```html
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  auto-add-to-cart
  skip-cart
></sesami-experience>
```

2. Listen to the relevant event:

```js
// skip cart
window.addEventListener("sesami:cart:skip", () => {
  console.log("skip cart");
  // Example: Redirect to checkout
});
```

You can do the same thing in any other event, but this is Sesami’s conventional standard.

---

#### Instant Booking

If you enabled instant booking in the product settings on the Sesami admin panel, you can listen to this event for any follow-up action after booking is complete:

```js
// Booking success
window.addEventListener("sesami:booking:success", () => {
  console.log("appointment was booked");
  // Example: Show a pop-up for signing up to a newsletter
});
```

---

It is possible to implement the Sesami Experience as a React hook.
Here is an example:

```tsx
import { useEffect } from "react";

export type UseSesamiProps = {
  shopId: string;
  productId: string;
  variantId?: string;
  quantity?: number;
  locale?: string;
  buttonCustomizedSettings?: string;
  autoAddToCart?: boolean;
  skipCart?: boolean;
};

const SCRIPT_SRC = "https://cdn.sesami.co/storefront/latest/sesami-main.js";

export const useSesami = (props: UseSesamiProps, containerId: string) => {
  useEffect(() => {
    // Inject the script if it hasn't been loaded yet
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    // Render <sesami-experience> after script is ready
    const render = () => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = "";

      const element = document.createElement("sesami-experience");
      element.setAttribute("shop-id", props.shopId);
      element.setAttribute("product-id", props.productId);
      if (props.variantId) element.setAttribute("variant-id", props.variantId);
      if (props.quantity)
        element.setAttribute("quantity", props.quantity.toString());
      if (props.locale) element.setAttribute("locale", props.locale);
      if (props.buttonCustomizedSettings) {
        element.setAttribute(
          "button-customized-settings",
          props.buttonCustomizedSettings
        );
      }
      if (props.autoAddToCart) element.setAttribute("auto-add-to-cart", "");
      if (props.skipCart) element.setAttribute("skip-cart", "");

      container.appendChild(element);
    };

    const interval = setInterval(() => {
      if (customElements.get("sesami-experience")) {
        clearInterval(interval);
        render();
      }
    }, 100);

    // Event handlers
    const handleCartAdd = async () => {
      console.log("Product added to cart");
      // Example: use linesAdd to add product
    };

    const handleCartSkip = () => {
      console.log("Skip cart");
      // Example: redirect to checkout
    };

    // Event listeners
    window.addEventListener("sesami:cart:add", handleCartAdd);
    window.addEventListener("sesami:cart:skip", handleCartSkip);

    return () => {
      clearInterval(interval);
      window.removeEventListener("sesami:cart:add", handleCartAdd);
      window.removeEventListener("sesami:cart:skip", handleCartSkip);
    };
  }, [props, containerId]);
};
```
