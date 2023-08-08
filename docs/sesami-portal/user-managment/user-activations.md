---
sidebar_position: 2
---

# User Activation

After the user has been created based on the request of a shop admin we would send an invitation link to the newly created user's email. In this email there is a link to the frontend application. here is an example of this link

```url
https://portal.sesami.dev/users/activate?code=someCode&email=email@email.com
```

the link that is sent to the user's mail is the REST API for activating user. As you can see there is a code inside this URL.Activating user's account require to send this code alongside the user's email back to the application using either GraphQL method or the REST method.

#### GraphQL Example

```graphql
mutation activateUser {
  activateUser(request: { email: "email@email.com", code: "someCode" })
}
```

#### REST Example

```curl
curl --request GET \
  --url 'https://api.sesami.dev/users/activate?email=email%40email.com&code=someCode'
```

### Expected Output

REST method would be redirected to this url of the front end.

```url
http://portal.sesami.dev/activated?email=${email}
```

GraphQL method doesn't return anything

### Possible Errors

Either of this methods might raise one of these errors

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
2. the code is not valid. the status code of this error would be **400**
   ```json
   [
     {
       "property": "code",
       "constraints": [
         {
           "name": "valid_otp"
         }
       ]
     }
   ]
   ```
3. when email is not valid. the status code of this error would be **400**
   ```json
   [
     {
       "property": "email",
       "constraints": [
         {
           "name": "is_email"
         }
       ]
     }
   ]
   ```
