---
sidebar_position: 6
---

# Rate Limit

To ensure our platform remains stable and fair for everyone, Sesami storefront API powering our Sesami storefront SDK is rate-limited. We use a request-based limiting strategy to enforce rate limits. We ask developers to use industry-standard techniques for responsibly limiting calls, caching results, and retrying requests.

:::note
If you exceed the limit, we send a 429 responce with a `Retry-After` header.
:::

## Avoiding rate limit errors

Developing your solution with best practices in mind is the best way to avoid throttling errors. For example, you can stagger API requests in a queue and do other processing tasks while waiting for the next queued job to run. Consider the following best practices when designing your app:

- Optimize your code to only get the data that your app requires.
- Use caching for data that your app uses often.
- Include code that catches errors. If you ignore these errors and keep trying to make requests, your app won't recover gracefully.
- Your code should stop making additional API requests until enough time has passed to retry. The clients should rely on the retry-after header (on a 429 response) to retry.
