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

You can listen to the sesami:loaded event to update the UI after Sesami has loaded.
For example, you can add the following code to the parent component of the sesami-experience component:

```javascript
useEffect(() => {
  const changeUI = () => {
    // Add logic for handling the "sesami:loaded" event
    console.log("Sesami has loaded!");
  };

  // Ensure `window` is accessible before adding the event listener
  if (typeof window !== "undefined") {
    window.addEventListener("sesami:loaded", changeUI);

    // Clean up the event listener when the component unmounts or dependencies change
    return () => {
      window.removeEventListener("sesami:loaded", changeUI);
    };
  }
}, []);
```

For a complete list of all available events, refer to the [Sesami Events Documentation.](https://sesami.dev/docs/storefront-integration/anatomy-of-sesami-button/#events).

---

Congratulations! 🎉 You have successfully integrated Sesami with your Shopify Hydrogen app.
