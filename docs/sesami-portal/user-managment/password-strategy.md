---
sidebar_position: 4
---

# Password Strategy

## Setting Password

If the user wants to set Password as his/her login strategy, he/she should set a password for the account. If user has already used another strategy except `MagicLink`, he/she can no longer use password strategy. For setting password user should be logged in.

#### GraphQL Example

```graphql
mutation updatePassword {
  updatePassword(
    request: { password: "somePassword", rePassword: "somePassword" }
  )
}
```

#### REST Example

```curl
curl --request PATCH \
  --url https://api.sesami.dev/users/password \
  --header 'Authorization: Bearer SomeTOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"password":"somePassword",
	"rePassword":"somePassword"

}'
```

### Expected Output

these methods doesn't return anything

### Possible Errors

1. user is not logged in or the user token is not valid. the status code of this error would be **401**

   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "unauthorized"
         }
       ]
     }
   ]
   ```

2. password is not equal to rePassword. the status code of this error would be **400**
   ```json
   [
     {
       "property": "password",
       "constraints": [
         {
           "name": "re_password"
         }
       ]
     }
   ]
   ```
3. user can not set password as his/her login strategy. the status code of this error would be **401**
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

## Updating Password

If the user has already set password as their login strategy then, they can update their password using these methods as well all they need is the add another field called current password to the request

#### GraphQL Example

```graphql
mutation updatePassword {
  updatePassword(
    request: {
      password: "somePassword"
      rePassword: "somePassword"
      currentPassword: "somePassword"
    }
  )
}
```

#### REST Example

```curl
curl --request PATCH \
  --url https://api.sesami.dev/users/password \
  --header 'Authorization: Bearer SomeTOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"password":"somePassword",
	"rePassword":"somePassword",
    "currentPassword":"somePassword"
}'
```

### Expected Output

these methods doesn't return anything

### Possible Errors

1. user is not logged in or the user token is not valid. the status code of this error would be **401**

   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "unauthorized"
         }
       ]
     }
   ]
   ```

2. password is not equal to rePassword. the status code of this error would be **400**
   ```json
   [
     {
       "property": "password",
       "constraints": [
         {
           "name": "re_password"
         }
       ]
     }
   ]
   ```
3. user can not set password as his/her login strategy. the status code of this error would be **401**
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
4. user entered incorrect correct password. the status code of this error would be **400**
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
