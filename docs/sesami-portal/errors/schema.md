---
sidebar_position: 1
---

# Schema

the overall schema of errors is as follows

```json
{
  "property": "name of the property which caused the error. it can also be `ROOT` which indicates that something wrong with overall request ",
  "constraints": [
    {
      "name": "each request needs to satisfy a list of constraints. if one of these constraints are not satisfied, you would see the name of it here",
      "payload": "extra information about the error. for example if the input was supposed to pass some regex, the regex body would be inside this payload. E.g. hh:mm. this field is nullable"
    }
  ]
}
```

each time a request fails, server would return a list of errors. here is an example of the response of a failed request.

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

You can find the API errors in the `errors.extensions.errors` property of the response. This is due to the GraphQL nature. the corresponding REST status code would be placed in the `message` property.

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
