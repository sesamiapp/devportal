---
sidebar_position: 2
---

# Quick Setup
You can install the App Message Library in your app using the following command:

```markup
npm install @sesamiapp/app-message
```

Or

```markup
yarn add @sesamiapp/app-message
```

Once installed, you will have a list of classes for a specific target. Each class will give you a list of functions to get needed values, actions, etc.

If you specified a specific route in your app for a target(you know which target you are loading), you can initialize the correct class right away:

```ts
import { AdminAppointmentDetails } from '@sesamiapp/app-message'

// init the class
const Sesami = await AdminAppointmentDetails.init()
```

But if you don't know where your app is loading(having a single endpoint for multiple targets), Sesami will tell your app which target it is loading in, so you have to create the target's specific object, for example:

```ts
import {
  AdminAppointmentDetails,
  ExperienceInstantBookingForm,
  AppTarget
} from '@sesamiapp/app-message'

// getting the target from URL
const urlParams = new URLSearchParams(window.location.search)
const target = urlParams.get('target')

// init the class
let Sesami
switch(target){
  case AppTarget.ADMIN_APPOINTMENT_DETAILS_INFO:
    Sesami = await AdminAppointmentDetails.init()
    break
  case AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM:
    Sesami = await ExperienceInstantBookingForm.init()
    break
}
```

The `static async init()` function will return an instance of its class. All the data you need for this target is inside this class as private attributes, and you can read them with getter functions.
Also, this class's methods can handle all the event listeners and actions.

:::info
<a>Question: What happens if I initialize a wrong class?</a>
<p>
Answer: Basically nothing! If you initialize a class that is not meant to be there, its promise will never resolve and no instances will return. It’s like calling somebody in an empty room!
</p>
:::

In the following steps, we will review all the classes in this library.

:::info
<a>
All the event callbacks in the Sesami App Message have a timeout(8 seconds), so if the host(Admin, Experience, etc) asks for a callback from the app, and the app does not respond to the host in the timeout duration, after the timeout the host will continue its flow.
</a>
<p>
Also, if the app/extension itself took a long time to load, after a timeout(16 seconds) th host will ignore it and continue its flow.
</p>
:::
