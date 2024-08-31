---
sidebar_position: 3
---

# Errors

## Schema

The overall schema of errors is as follows.

```json
{
  "property": "date",
  "constraints": [
    {
      "name": "is_date",
      "payload": "yyyy-MM-dd HH:mm"
    }
  ]
}
```

| Field    | Description                                                                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| property | The name of the property which caused the error. It can also be `ROOT` which indicates that something wrong with overall request.                                             |
| name     | Each request needs to satisfy a list of constraints. If one of these constraints are not satisfied, you would see the name of it here.                                        |
| payload  | Extra information about the error. for example if the input was supposed to pass some regex, the regex body would be inside this payload. E.g. hh:mm. This field is nullable. |

## Error List

Each time a request fails, server would return a list of errors.The errors list is as follows:

```list
   'valid_permissions'
   'not_found'
   'is_unique'
   'valid_interval'
   'is_json'
   'forbidden'
   'unauthorized'
   'invalid_input'
   're_password'
   'login_strategy'
   'is_enum'
   'valid_otp'
   'existing_otp'
   'active_user'
   'correct_password'
   'internal_error'
   'internal_server_error'
   'is_not_empty'
   'is_number'
   'is_string'
   'is_boolean'
   'is_email'
   'is_date'
   'is_object'
   'is_mongo_id'
   'is_array'
   'is_url'
   'is_time_zone'
   'max'
   'min'
```

## Examples

here is an example of the response of a failed request.

#### GraphQL Example

```json
{
  "message": "400",
  "errors": [
    {
      "extensions": {
        "errors": [
          {
            "constraints": [
              {
                "name": "is_mongo_id"
              }
            ],
            "property": "id"
          }
        ]
      }
    }
  ]
}
```

You can find the API errors in the `errors.extensions.errors` property of the response. This is due to the GraphQL
nature. the corresponding REST status code would be placed in the `message` property.

#### REST Example

```json
[
  {
    "constraints": [
      {
        "name": "internal_server_error"
      }
    ],
    "property": "ROOT"
  }
]
```

## Error Handling

You can use the [error list](#error-list) to handle your errors.
It is an example of how to handle an error with NodeJs:

```typescript

callAnSpecificAPI().then(response => {
    // do something
}).catch(e => {
    const constraints = e[0].constraints;
    constraints.forEach(obj => {
        switch (obj.name) {
            case 'is_mongo_id':
                // do something
                break;
            case 'unauthorized':
                // do something
                break;
            //... other cases
        }
    })
})

```