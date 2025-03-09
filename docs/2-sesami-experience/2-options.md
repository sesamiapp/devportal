---
sidebar_position: 2
---

# Options

The Sesami Experience can be customized in many ways; this is mostly done by passing options to the HTML element:

:::note
Remember that the **shop-id** and **service-id** are the required options for the Experience to work, but other options that will be mentioned below are optional.
:::

### shop-id
To tell Sesami for which store you want to display the Experience, you have to provide the `shop-id` option:

:::info Where can I find my shop ID?

Each store has its own shop ID which can be fetched by visiting this address after replacing `STORE` with your store name: https://admin.shopify.com/store/STORE_NAME/shop.json
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
If you don't want to display a quantity selector within your service form and need a pre-selected quantity value, you can set this option. defaults to **1** in other cases.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  quantity="1"
></sesami-experience>
```

### appointment-id
To use the Experience to reschedule or reassign an appointment, you need to pass the appointment ID:

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  appointment-id="389yr2983u98rng0832"
  management-token="894394r498h984frj90j490rj4390rj490"
></sesami-experience>
```

### management-token
Having a management token will enable you to change an appointment:

```html {5}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  appointment-id="389yr2983u98rng0832"
  management-token="894394r498h984frj90j490rj4390rj490"
></sesami-experience>
```

### locale
Sometimes you might need the Sesami calendar to be displayed in a different language than what is set as your primary language in the settings. This is primarily useful if you have a multi-lingual store:

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

### experience
You override your experience version in the Sesami settings.<br></br>
There are gonna be two options available: `classic` and `v2`.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  experience="classic"
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
If set, after the reservation is completed, the Experience will automatically add the selected values(date, time, resource, etc.) to the cart.

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  auto-add-to-cart
></sesami-experience>
```

### skip-cart
If set, the Experience will add the selected values to the cart and redirect the page to the checkout page.
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

### cta-background-color & cta-text-color
The CTA(call to action) buttons inside the Experience can be customized to match the theme of your website.

```html {4-5}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  cta-background-color="#55C"
  cta-text-color="FFF"
></sesami-experience>
```

### button-style
You can customize the style of the button that will be rendered to open the calendar by the Experience.
The value of this option should be UIR encoded of the stringified object that has these optional fields:

```ts
type ButtonStyle = {
  width?: string
  height?: string
  font_size?: number
  color?: string
  color_background?: string
  border_width?: number
  border_color?: string
  border_radius?: number
  alignment?: 'flex-start' | 'center' | 'flex-end'
}
```

So for example if you stringify and then URI encode the object below:

```ts
const style = {
  width: 300,
  height: 50,
  font_size: 14,
  color: '#FFF',
  color_background: 'red',
  border_width: 2,
  border_color: 'black',
  border_radius: 10,
  alignment: 'center'
}
```

It can be passed to the Experience like this:

```html {4}
<sesami-experience
  shop-id="761236725762"
  service-id="981219221893"
  button-style="%7B%22width%22%3A%22300px%22%2C%22height%22%3A%2250px%22%2C%22font_size%22%3A14%2C%22color%22%3A%22%23FFF%22%2C%22color_background%22%3A%22red%22%2C%22border_width%22%3A2%2C%22border_color%22%3A%22black%22%2C%22border_radius%22%3A9%2C%22alignment%22%3A%22center%22%7D"
></sesami-experience>
```
