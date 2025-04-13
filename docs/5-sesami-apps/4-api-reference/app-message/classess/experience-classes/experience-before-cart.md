---
sidebar_position: 2
---

# ExperienceBeforeCart
This class will be used in the `EXPERIENCE_BEFORE_CART` target.

### Methods

#### onConfirm()
When the user clicks on the Experience instant booking confirm button, an event fires to the app, and the Experience will wait(with a timeout) until the app accepts or rejects it.

```ts
public onConfirm: (callback: () => void) => void

// example
Sesami.onConfirm(() => {
  validateForm()
})
```

#### acceptConfirm() / rejectConfirm()
After the confirm button is clicked, you can accept or reject the event. For example, if the app's form is valid, you can accept the event and let the Experience do the next step, but if the form is not valid, you can reject it and stop the loading state of the Experience confirm button.

```ts
public acceptConfirm: () => void
public rejectConfirm: () => void

// example
Sesami.onConfirm(() => {
  const isFormValid = validateForm()
  if(isFormValid){
    Sesami.acceptConfirm()
  }else{
    Sesami.rejectConfirm()
  }
})
```

:::info
Note: If the app execute the acceptConfirm() or the rejectConfirm() before the onConfirm() event, nothing will happen.
:::
