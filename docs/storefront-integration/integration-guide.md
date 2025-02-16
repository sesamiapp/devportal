---
sidebar_position: 8
---

# Integrating Guide

This document outlines the steps required to integrate Sesami with your front end.

# Step 1: Generate the Sesami Experience#

Generate the Sesami experience using the [Sesami Experience Configurator](/docs/storefront-integration/configurator/). After generating the experience code, copy it and add it to any page where you would like to display the Sesami experience, according to your requirements.

# Step 2: Load the Sesami Script

To integrate the Sesami experience into your front end, you will need to load the Sesami script.

Add the following JavaScript snippet wherever you want to use the Sesami experience:

```javascript
<Script src="https://cdn.sesami.co/storefront/latest/sesami-main.js" />
```

---

# Step 3: Verify the Integration

After completing the above steps, you should be able to see the Sesami booking button on your page, integrated successfully into your front-end.

# Step 4: Handling Events

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

Listen for `sesami:loaded` event and once inputs are rendered (after 1 second delay), listen for the `change` event on the inputs inside of the wrapper:

```javascript
import { useEffect } from "react";

useEffect(() => {
  const onSesamiLoaded = () => {
    setTimeout(() => {
      // Select the wrapper element
      const wrapper = document.querySelector(".sesami-hidden-fields-wrapper");

      if (wrapper) {
        // Select all input elements within the wrapper
        const inputs = wrapper.querySelectorAll("input");

        // Add a change event listener to each input
        inputs.forEach((input) => {
          input.addEventListener("change", (event) => {
            console.log(input.name, input.value);
          });
        });
      }
    }, 1000);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("sesami:loaded", onSesamiLoaded);

    return () => {
      window.removeEventListener("sesami:loaded", onSesamiLoaded);
    };
  }
}, []);
```

if you want to call a certain action you can only listen on one of the inputs otherwise the action will run once for each input

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
