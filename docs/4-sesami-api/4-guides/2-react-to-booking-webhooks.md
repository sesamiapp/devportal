---
sidebar_position: 2
title: React to booking webhooks
draft: true
---

<!-- Draft: visible in local dev only. Publish once the Webhook Subscriptions API is public. Outline: -->

- Subscribe to `appointment.*` topics
- The delivery payload (`topic`, `shop_id`, `created_at`, `hash`, `data.id`)
- Verify the `hash`
- Fetch the booking: link to Read a booking
- Retries and idempotency
