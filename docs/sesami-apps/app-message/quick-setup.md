---
sidebar_position: 2
---

# Quick Setup
You can install the App Message Library in your project using the following command:

```markup
npm install @sesamiapp/app-message
```

Once you have installed it, you will have a list of classes to use, each for a specific target. Each class will give you a list of functions to get needed values, actions, etc.

As we know, Sesami will tell your app/extension which target it is loading in, so you have to create the target's specific object, for example:

```js
import {
  AdminClientAppointmentDetailsInfo,
  ExperienceClientInstantBookingForm,
  AppTarget
} from '@sesamiapp/app-message'

// getting the target from URL
const urlParams = new URLSearchParams(window.location.search)
const target = urlParams.get('target')

// example of a single endpoint for rendering extensions in both Admin and Experience
let sesami
switch(target){
  case AppTarget.ADMIN_APPOINTMENT_DETAILS_INFO:
    sesami = await AdminClientAppointmentDetailsInfo.init()
    break
  case AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM:
    sesami = await ExperienceClientInstantBookingForm.init()
    break
}
```

The `static async init()` function will return an instance of its class. All the data you need for this target is inside this class as private attributes, and you can read them with getter functions.
Also, this class's methods can handle all the event listeners and actions.

:::info
Question: What happens if I initialize a wrong class?
Answer: Basically nothing! If you initialize a class that is not ment to be there, its promise will never resolve and no instances will return. It’s like calling somebody in an empty room!
:::

In the following steps, we will review all the classes in this library.