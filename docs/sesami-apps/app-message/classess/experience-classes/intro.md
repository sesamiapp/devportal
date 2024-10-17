---
sidebar_position: 1
---

# Intro
These are classes that the app developers can use to interact with Sesami Experience.

They have some common attributes and methods:

### Attributes

#### sessionId
The ID for the current booking flow of the Experience.

```ts
public getSessionId: () => string
```


#### shopId
The current shop.

```ts
public getShopId: () => string
```


#### productId
The current product in the Experience.

```ts
public getProductId: () => string
```


#### variantId
The selected variant of the service.

```ts
public getVariantId: () => string
```


#### quantity
The selected quantity for the service.

```ts
public getQuantity: () => number
```


#### resources
The selected team member, location, etc.

```ts
public getResources: () => Resource[]

// the "any available" team member will be like:
[{
  id: null,
  name: 'Any Available', // will be translated
  image: 'https://app.sesami.dev/static/default_avatar.png',
  description: 'Book with maximum availability' // will be translated
}]
```


#### locale
The Experience's current locale.

```ts
public getLocale: () => string
```


#### timezone
The Experience's current timezone.

```ts
public getTimezone: () => string
```


#### slot
Selected slot's date and time.

```ts
public getSlot: () => Date
```