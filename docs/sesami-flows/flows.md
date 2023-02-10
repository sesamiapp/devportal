---
sidebar_position: 1
---

# Overview
Sesami is a platform that allows merchants to automate workflows using Sesami Flows.

:::note 

Sesami Flows are available on all our paid plans.

:::

Using Sesami Flows, you can trigger events for any touchpoints throughout the customers' booking journey.

 
## Flow types
Current flow types:

### Email
For handling Sesami notifications or scheduling reminders or thank-you messages.

### Webhook
For integrations to other platforms such as Klaviyo, Slack, or Zapier.


## Flow triggers
Different types of triggers:

### Instant
Useful for immediate event types, such as booking confirmations.

### Scheduled
Useful for early or delayed event types, such as reminders or thank-you messages.


## Flow templates
Each Flow has a template which has a different format based on the Flow types:

### HTML or Text
For email-type Flows.

### JSON
For webhook-type Flows.

Example:
```json
  {
    "customer_name": "{{CustomerName}}",
    "phone_number": "{{CustomerPhone}}",
    "properties": { {{#each LineItemProperties}}
        "{{name}}": "{{value}}"{{/each}}
    }
  }
```
Will produce:

```json
    {
    "customer_name": "John Smith",
    "phone_number": "+1000000000",
    "properties": { 
        "location": "Los Angeles"
        "preferred_color": "Green"
    }
    }
```
### Date formats
For those who need more flexibility with date formats, they can use the below helper function to send any date object in their desired format / timezone:

Syntax:
```json
{{formatDate <ANY_DATE_OBJECT> <DATE_FORMAT> <OPTIONAL:TIMEZONE>}}
```

Date objects:
- DateTime
- DateTimeInUTC
- DateTimeInStoreTimezone
- DateTimeInCustomerTimezone

Examples:
```json
{{formatDate DateTimeInUTC "YYYY Mo DD HH:mm:ss" "Europe/Berlin"}} <-- Appointment time in Berlin timezone formatted like: 2022 Dec 12 18:30:00

{{formatDate AppointmentCreatedAt "YYYY/MM/DD HH:mm:ss"}} <-- Appointment creation time formatted like: 2022/12/21 18:30:00

{{formatDate DateTimeInUTC "YYYY Mo DD HH:mm:ss" CustomerTimezone}} <-- Appointment time in customer timezone formatted like: 2022 Dec 12 18:30:00
```