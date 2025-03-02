---
sidebar_position: 4
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

| Field      | Description                                                                                                                              |
|------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `property` | The name of the property which caused the error. It can also be `ROOT` which indicates that something wrong with the overall request.    |
| `name`     | Each request needs to satisfy a list of constraints. If one of these constraints is not satisfied, you will see the name of it here.     |
| `payload`  | Extra information about the error. For example, if the input was supposed to pass some regex, the regex body would be inside this payload. E.g. hh:mm. This field is nullable. |

## Error List

Each time a request fails, the server returns a list of errors. The error list is as follows:

```list
valid_permissions
not_found
is_unique
valid_interval
is_json
forbidden
unauthorized
invalid_input
re_password
login_strategy
is_enum
valid_otp
existing_otp
active_user
correct_password
internal_error
internal_server_error
is_not_empty
is_number
is_string
is_boolean
is_email
is_date
is_object
is_mongo_id
is_array
is_url
is_time_zone
max
min
```

## Examples

### GraphQL

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

### REST

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

This is an example of how to handle an error with NodeJs:

```typescript
callAnSpecificAPI().then(response => {
  // ...
}).catch(e => {
  const constraints = e[0].constraints
  constraints.forEach(obj => {
    switch(obj.name){
      case 'is_mongo_id':
        // ...
        break
      case 'unauthorized':
        // ...
        break
      default:
        // ...
        break
    }
  })
})
```