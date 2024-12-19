---
sidebar_position: 4
---

# Sesami Apps Boilerplate

To ease up the developer's workflow to create an app in the Sesami platform, we provide a simple boilerplate created with React.JS, Express.JS, and MongoDB.

You can use this boilerplate to speed up the process of creating apps for Sesami, without the hustle of setting up different technologies.

### Why Sesami boilerplate?

#### Easy to setup
You just need to <a href="https://github.com/sesamiapp/sesami-apps-boilerplate">clone the repository</a> and run the <code>docker compose up</code>, that's it! It will run the database, backend, and the frontend for you.

#### Lazy Loading
You can use different tools and technologies for different targets, and they will lazy load where needed, so the bundle size will be the minimum.
<p>
For example, the boilerplate is using <a href="https://ant.design/">Ant Design</a> in the Admin, to match the app's design to the Admin. But because we want the extensions in the Experience to be as lightweight as possible, we just use pure CSS in it, so the Ant Design will not load there.
</p>

#### Advanced development environment
Developing and testing an app outside a provider can be frustrating, but in the Sesami Apps Boilerplate when you are in the development mode, a mock provider will wrap your app and talk to it using the App Message, but when you are in the production mode, the wrapper will not enable and the app will listen to the actual provider.

#### App Message implementation
The boilerplate is implemented the App Message inside it and you just need to use the correct hook for your app target.
<p>
Initializing the classes, getting tokens, and all your needs from the App Message is done with the boilerplate.
</p>