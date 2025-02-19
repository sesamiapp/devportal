---
sidebar_position: 2
---

# Options

The Sesami Experience can be customized in many ways; this is mostly done by passing options to the HTML element:

:::note
Remember that the **shop-id** and **service-id** are the required options for the Experience to work, but other options that will be mentioned below are optional.
:::

### shop-id
In order to tell Sesami for which store you want to display the Experience, you have to provide the `shop-id` option:

:::info Where can I find my shop ID?

Each store has its own shop id which can be fetched by visiting this address after replacing `STORE` with your store address: http://STORE.myshopify.com/admin/shop.json
:::

```html {2}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
></sesami-experience>
```

### service-id
You'll need to tell Sesami for which service you are rendering the Experience.

```html {3}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
></sesami-experience>
```

### variant-id
You can set a specific variant of your service for the Experience, but if not set, it will pick the first variant of your service.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  variant-id="3267432784373"
></sesami-experience>
```

### quantity
If you don't want to display a quantity selector within your service form and need a pre-selected the quantity value, you can set this option. defaults to **1** in other cases.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  quantity="1"
></sesami-experience>
```

### locale
Sometimes you might need Sesami calendar to be displayed in a different language than what is set as your primary language. This is primarily useful if you have a multi-lingual store:

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  locale="fr-FR"
></sesami-experience>
```

### timezone
By default, the Experience will pick the user's browser timezone(if it's set to visible in the Sesami settings) to show the date and time, but you can preselect it by passing it as an option.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  timezone="America/New_York"
></sesami-experience>
```

### experience-version
Sesami V2 calendar is our latest version of the Experience, but you can set the version manually to older versions(like Sesami Classic) if you want.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  experience-version="classic"
></sesami-experience>
```

### calendar-type
You can configure the calendar type in the Sesami settings, but if you want to manually override it on the tag, you can do it by passing the calendar type as an option:

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  calendar-type="timeline"
></sesami-experience>
```

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  calendar-type="slot"
></sesami-experience>
```

### skip-monthly-calendar
If you choose the slot calendar, the monthly calendar will render a step before it, to pick the desired day, but you can bypass it by adding the **skip-monthly-calendar** option.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  skip-monthly-calendar
></sesami-experience>
```
### hide-any-available
When a user wants to select a resource(Team member for example) there can be an option as "Any Available", which will allow the Sesami to choose the first available resource.
You can remove this option in the Sesami settings for that resource, also, you can override the settings by passing it to the tag. This way, it will hide all the "Any Available" options for all the selectable resources.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  hide-any-available
></sesami-experience>
```

### auto-add-to-cart
If set, after reservation completed, the Experience will automatically add the selected values(date, time, resource, etc.) to the cart.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  auto-add-to-cart
></sesami-experience>
```

### skip-cart
If set, the Experience will add the selected values to the cart and redirect the page to the check out page.
To make this work, you also have to set the **auto-add-to-cart** option.

```html {5}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  auto-add-to-cart
  skip-cart
></sesami-experience>
```

### button-label
You can display any label on the button, this is useful if you'd like to conditionally render different labels based on service or context. If this option is not provided, it will display what is set on the settings page in the Sesami.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  button-label="Book now!"
></sesami-experience>
```

### button-style
You can customize the button style that will be rendered to open the calendar by the Experience.








### cta-background-color
CTA buttons

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  button-label="Book now!"
></sesami-experience>
```


