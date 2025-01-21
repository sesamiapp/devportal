---
sidebar_position: 8
---

# Integrating Sesami with Shopify Hydrogen

This document outlines the steps required to integrate Sesami with your Shopify Hydrogen storefront.

## Step 1: Generate a New Hydrogen App

Begin by creating a new Hydrogen app. Shopify provides a detailed guide on how to set up a Hydrogen app, which can be found [here](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started).

## Step 2: Set Up Your Shop

In this step, you will need to configure the **Storefront API** by utilizing the Hydrogen or headless channel. Shopify’s documentation provides a comprehensive walkthrough to assist with the configuration process. Refer to the [Shopify Storefront API guide](https://shopify.dev/docs/api/storefront) for further details.

At this stage, you should have a working Hydrogen app connected to your Shopify store.

## Step 3: Configure the Sesami Experience

Generate the Sesami experience using the [Sesami Experience Configurator](/docs/storefront-integration/configurator/). After generating the experience code, copy it and add it to any page where you would like to display the Sesami experience, according to your requirements.

## Step 4: Load the Sesami Experience

To integrate the Sesami experience into your Hydrogen storefront, you will need to load the Sesami script. The appropriate way to load third-party scripts into a Hydrogen app is outlined in the Shopify documentation, which can be found [here](https://shopify.dev/docs/api/hydrogen/2024-10/components/script).

Add the following JavaScript snippet wherever you want to use the Sesami experience:

```javascript
<Script src="https://cdn.sesami.co/storefront/latest/sesami-main.js" />
```

---

After completing the above steps, you should be able to see the Sesami booking button on your page, integrated successfully into your Shopify Hydrogen storefront.

## Events

sesami offer a list of events

| Event                    | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `sesami:loaded`          | Triggered when the Sesami widget is fully loaded.                        |
| `change`                 | Triggered when a user selects a new time slot, team member, or timezone. |
| `sesami:modal:open`      | Triggered when the Sesami modal is opened.                               |
| `sesami:modal:closed`    | Triggered when the Sesami modal is closed.                               |
| `sesami:booking:success` | Triggered when a booking is successfully completed.                      |

### Example:

#### When instant booking is off

Listen for `sesami:loaded` event and once inputs are rendered, listen for the `change` event on the sesami-experience and programmatically create an order without customers having to click on add to cart button:

```javascript
import { useEffect } from "react";

useEffect(() => {
  const onSesamiLoaded = () => {
    console.log("Sesami has loaded!");

    const sesamiExperience = document.querySelector("sesami-experience");
    if (!sesamiExperience) {
      console.warn("Sesami experience element not found!");
      return;
    }

    sesamiExperience.addEventListener("change", (event) => {
      const formData = new FormData();
      sesamiExperience.querySelectorAll("input").forEach((input) => {
        if (input.name) {
          formData.append(input.name, input.value);
        }
      });

      createOrder(formData);
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("sesami:loaded", onSesamiLoaded);

    return () => {
      window.removeEventListener("sesami:loaded", onSesamiLoaded);
    };
  }
}, []);
```

#### When instant booking is on

Listen for `sesami:loaded` event for making any action when sesami was fully loaded and listen for `sesami:booking:success` to make any action after customer finished booking:

```javascript
import { useEffect } from "react";

useEffect(() => {
  const initializeSesamiIntegration = () => {
    console.log("Sesami has loaded!");
    // ex : hide the add to cart button
  };

  const successfulBooking = () => {
    console.log("event was booked successfully!");
    // ex : redirect to another page
  };

  if (typeof window !== "undefined") {
    window.addEventListener("sesami:loaded", initializeSesamiIntegration);
    window.addEventListener("sesami:booking:success", successfulBooking);

    return () => {
      window.removeEventListener("sesami:loaded", initializeSesamiIntegration);
      window.addEventListener("sesami:booking:success", successfulBooking);
    };
  }
}, []);
```
