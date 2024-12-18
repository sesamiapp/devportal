---
sidebar_position: 1
---

# Intro
These are classes that the app developers can use to interact with Sesami Experience.

These classes have some common attributes and methods:

### Attributes

#### Session ID
The ID for the current booking flow of the Experience. This ID will generate when the calendar modal opens, and will send to each extension that wants to load in any step.

```ts
public getSessionId: () => string
```


#### Shop ID
The current shop.

```ts
public getShopId: () => string
```

#### Product ID
The current product in the Experience.

```ts
public getProductId: () => string
```

#### Variant ID
The selected variant of the service.

```ts
public getVariantId: () => string
```

#### Quantity
The selected quantity for the service.

```ts
public getQuantity: () => number
```

#### Resources
The selected resources with the user, such as coach, room, etc.

```ts
public getResources: () => Resource[]
```

#### Locale
The Experience's current locale.

```ts
public getLocale: () => string
```


#### Timezone
The Experience's current timezone.

```ts
public getTimezone: () => string
```


#### Slot
Selected slot's date and time.

```ts
public getSlot: () => Date
```