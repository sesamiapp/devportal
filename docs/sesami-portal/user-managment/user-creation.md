---
sidebar_position: 1
---

# User Creation

Currently we only create accounts based on invitations, store owners can invite their staff to access their shop on Sesami portal.
When A shop is created in shopify, a user with full access to the shop is also Created. This user has the permission to create user and assign permissions to them. In this document we only look at how we can create user. Assigning permissions would be done in a different API.

All the Parameters of these methods are required.

#### GraphQL Example

```graphql
mutation createUser {
  createUser(
    request: {
      email: "email@email.com"
      firstName: "firstName"
      lastName: "lastName"
    }
  ) {
    id
    email
    firstName
    lastName
  }
}
```

#### REST Example

```curl
curl --request POST \
  --url https://api.sesami.dev/users \
  --header 'Authorization: Bearer shopManageToken' \
  --header 'Content-Type: application/json' \
  --data '{
  "email":"email@email.com",
	"firstName":"name",
	"lastName":"name"
}'
```

### Expected Output

You can check the swagger or the GraphQL schema to see the output of these methods

### Possible Errors

Either of this methods might raise one of these errors

1. when user doesn't send any token in the authorization header or the token that was sent is not valid. the status code of this error would be **401**
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
2. when you don't have enough accessibility to create shop. status code of this error would be **403**
   ```json
   [
     {
       "property": "ROOT",
       "constraints": [
         {
           "name": "forbidden"
         }
       ]
     }
   ]
   ```
3. when the Email has already been taken. status code of this error would be **400**
   ```json
   [
     {
       "property": "email",
       "constraints": [
         {
           "name": "is_unique"
         }
       ]
     }
   ]
   ```
4. when one of these 3 fields are empty. the status code of this error would be **400**
   ```json
   [
     {
       "property": "name of the field which is empty. e.g email",
       "constraints": [
         {
           "name": "is_not_empty"
         }
       ]
     }
   ]
   ```
5. when email is not valid. the status code of this error would be **400**
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
