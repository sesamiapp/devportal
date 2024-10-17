---
sidebar_position: 2
---

# ExperienceClientInstantBookingForm
This class will be used in the “experience.instantBooking.form” target.

### Methods

#### onConfirm()
When the user clicks on Experience's instant booking confirm button, an event fires to the app, and Experience waits until the app accepts or rejects it.

```ts
public onConfirm: (callback: () => void) => void

// example
sesami.onConfirm(() => {
  validateForm()
})
```

#### acceptConfirm() / rejectConfirm()
After the confirm button is clicked, you can accept or reject the event. For example, if the app's form is valid, you can accept the event and let the Experience do the next step, but if the form is not valid, you can reject it and stop the loading state of the confirm button.

```ts
public acceptConfirm: () => void
public rejectConfirm: () => void

// example
sesami.onConfirm(() => {
  const isFormValid = validateForm()
  if(isFormValid){
    sesami.acceptConfirm()
  }else{
    sesami.rejectConfirm()
  }
})
```

:::info
Note: If the app execute the acceptConfirm() or the rejectConfirm() before the onConfirm() event, nothing will happen.
:::
