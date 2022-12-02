---
sidebar_position: 2
---

# Sesami Storefront API rate limit

To ensure our platform remains stable and fair for everyone, Sesami storefront API, powering our Sesami storefront SDK is rate-limited. We use a request-based limiting strategy to enforce rate limits. We ask developers to use industry standard techniques for limiting calls, caching results, and re-trying requests responsibly.

This is the current setup in 3 different buckets:

- 10m:200
- 10s:40
- 1s:20

Meaning that a user can't make more than 20 requests per second, more than 40 requests per 10 seconds and more than 200 in 10 minutes.

:::note
If you exceed the limit, we send 429 responce with a Retry-After header
:::

## Avoiding rate limit errors
Developing your solution with best practices in mind is the best way to avoid throttling errors. For example, you can stagger API requests in a queue and do other processing tasks while waiting for the next queued job to run. Consider the following best practices when designing your app:

- Optimize your code to only get the data that your app requires.
- Use caching for data that your app uses often.
- Include code that catches errors. If you ignore these errors and keep trying to make requests, then your app won’t be able to gracefully recover.
- Your code should stop making additional API requests until enough time has passed to retry. The recommended backoff time is 1 second.