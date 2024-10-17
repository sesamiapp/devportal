---
sidebar_position: 1
---

# Intro
Sesami App Message

As we know, apps and their extensions will be loaded inside an iframe. This will isolates the app and will block it from accessing to the merchant's Admin Portal or customer's Experience.

But the app needs some information about the environment that is loading, for example, in the Experience, it may need to know the shop ID, product ID, selected team member or slot, etc.

Also, the app wants to know about some events, such as going to the next step or sending some events to its host, letting it know when it's done its job.

All these actions can be done using the App Message Library.

App Message is a Typescript library published on NPM to give the app developers sets of tools to communicate easily to their hosts such as Sesami Admin Portal or Sesami Experience.

This documentation will be an introduction to this library’s features and a simple guide for using it.
