---
sidebar_position: 2
---

# User's Login Strategies

Users should see the login strategies which are available them using their email.

#### GraphQL Example

```graphql
query getLoginStrategies {
  getLoginStrategies(request: { email: "email@email.com" }) {
    strategies
  }
}
```

#### REST Example

```curl
curl --request POST \
  --url https://api.sesami.dev/users/login/strategies \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"email@email.com"
}'
```

### Expected Output

these methods will return an object like this

```json
{
    "strategies": LoginStrategy[]
}
```

`LoginStrategy` is an enum. the values of this enum is as follows.

- MagicLink
- Password
- Google

### Possible Errors

1. user with specified email is not found. the status code of this error would be **404**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "not_found"
         }
       ]
     }
   ]
   ```
2. user is not activated. the status code of this error would be **401**
   ```json
   [
     {
       "constraints": [
         {
           "name": "active_user"
         }
       ],
       "property": "ROOT"
     }
   ]
   ```
