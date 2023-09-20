---
sidebar_position: 4
---

# Login Using Password

Login using password is pretty straight forward. user will send his/her email and password and receives a token in response

### Requirement

User should have set password as their login strategy. For more information check Password Strategy document.

#### GraphQL Example

```graphql
query loginByPassword {
  loginByPassword(
    request: { email: "email@email.com", password: "somePassword" }
  ) {
    token
  }
}
```

#### REST Example

```curl
curl --request POST \
  --url https://api.sesami.dev/users/login/password \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"email@email.com",
	"password":"somePassword"
}'
```

### Expected Output

If everything goes well, the output of these methods would have an attribute called `token`.

### Possible Errors

1. no user is found with this email. the status code of this error is **404**
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
2. the password is not correct. the status code of this error is **400**.
   ```json
   [
     {
       "property": "password",
       "constraints": [
         {
           "name": "correct_password"
         }
       ]
     }
   ]
   ```
3. password is not in this user available login strategies list. the status code of this error is **401**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "login_strategy",
           "payload": "server preferred login strategy (e.g. MagicLink, Google)"
         }
       ]
     }
   ]
   ```
4. user is not activated. the status code of this error would be **401**
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
