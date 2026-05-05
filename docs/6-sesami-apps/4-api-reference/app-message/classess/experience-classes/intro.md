---
sidebar_position: 1
---

# Intro
These are classes that the app developers can use to interact with Sesami Experience.

These classes have some common attributes:

### Attributes

#### Shop ID
The current shop.

```ts
public getShopId: () => string
```

#### Session ID
This is the ID for the current booking flow of the Experience. It will be generated when the calendar modal opens and sent to each extension that wants to load in any step.
So using it, the extension can find the relation between information given in different steps.

```ts
public getSessionId: () => string
```

#### Locale
The Experience's current locale.

```ts
public getLocale: () => string
```
