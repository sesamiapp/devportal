---
sidebar_position: 1
---

# Login Strategies

First step of login is to see what are the overall available login strategies. Currently we have 3 login strategies.

1. Magic Link
2. Google
3. Password

#### GraphQL Example

```graphql
query getAvailableStrategies {
  getAvailableStrategies {
    strategies
  }
}
```

#### REST Example

```curl
curl --request GET \
  --url https://api.sesami.dev/loginstrategies
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
