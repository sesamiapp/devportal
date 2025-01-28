---
sidebar_position: 6
---

# Helpers

### formatDate(date, options)

Formats a `Date` object based on the user's preferred locale using the [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) API. This method simplifies the process of creating localized date strings.

| **Argument** | **Type** | **Description**                                                                                                                                                                                              |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `date`       | `Date`   | The date to format.                                                                                                                                                                                          |
| `options`    | `Object` | An object specifying date formatting options. Refer to [Intl.DateTimeFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) for more details. |

**Example Usage:**

```javascript
sesami.formatDate(new Date("2022-07-07"), { month: "short", year: "numeric" });
// Output: "Jul 2022" (depending on the locale)
```

---

### getSesamiFields(slot)

Generates a set of hidden input fields for use in a Shopify storefront. These fields are typically added as [line item properties](https://shopify.dev/api/liquid/objects/line_item#line_item-properties) when adding a product to the cart, ensuring that the selected time slot is linked to the product.

| **Argument** | **Type**                                                | **Description**                                               |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------- |
| `slot`       | [SesamiSlotObject](../data-structure/#sesamislotobject) | The slot object returned from the `getAvailabilities` method. |

**Usage in Storefront Integration:**  
To learn more about these fields, refer to the [rendered result](https://docs.sesami.co/docs/storefront-integration/anatomy-of-sesami-button#rendered-result) section of the storefront integration documentation.
