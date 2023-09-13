---
sidebar_position: 6
---

# Forgot Password

user can use this options if they have choose the password as their login strategy. this feature has 2 steps.

## Initialize Forgot Password

the first step is to inform the app that user has forgot their password. the app would send an email containing a link like this

```url
https://portal.sesami.dev/password-reset?email=email@email.com?code=someCode
```

which is a url to the frontend application

#### GraphQL Example

```graphql
mutation initForgotPassword {
  initForgotPassword(request: { email: "email@email.com" })
}
```

#### REST Example

```curl
curl --request POST \
  --url https://api.sesami.dev/users/forgot/password \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"email@email.com"
}'
```

### Expected Output

these method doesn't return anything.

### Possible Errors

1. user can not set password as his/her login strategy. the status code of this error would be **401**
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
2. an opt has been generated for user in the last 5 minutes. the status code of this error is **401**
   ```json
   [
     {
       "property": "code",
       "constraints": [
         {
           "name": "existing_otp"
         }
       ]
     }
   ]
   ```
3. user is not activated. the status code of this error would be **401**
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
4. there is no user found with this email. the status code of this error is **404**
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

## Complete Forgot Password

the link that has been sent to user's email contains a code which should be sent along the user's email and new password and the repeated password.

#### GraphQL Example

```graphql
mutation completeForgotPassword {
  resetPassword(
    request: {
      password: "somePassword"
      rePassword: "somePassword"
      code: "someCode"
      email: "email@email.com"
    }
  )
}
```

#### REST Example

```curl
curl --request POST \
  --url http://localhost:8000/users/reset/password \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"email@email.com",
	"password":"somePassword",
	"rePassword":"somePassword",
	"code":"someCode"
}'
```

### Expected Output

these methods doesn't return anything

### Possible Errors

1. password is not equal to rePassword. the status code of this error would be **400**
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
2. the code is not valid. either the latest code was not generated for this purpose or the code is dead. the status of this error is **400**
   ```json
   [
     {
       "constraints": [
         {
           "name": "valid_otp"
         }
       ],
       "property": "code"
     }
   ]
   ```
3. there is no user found with this email. the status code of this error is **404**
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
