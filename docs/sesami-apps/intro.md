---
sidebar_position: 1
---

# Intro
Working with several different businesses with various requirements brought us to create a system for external developers to expand the Sesami feature.

<p>
<b>Sesami Apps</b> provides an echo system for external apps to communicate with the Sesami platform, products, and APIs, expanding Sesami features, providing more services, easing up workflows, and improving customers' user experiences.
</p>

<p>
In this sequence of documents, you can explore working with the Sesami Apps and developing your own apps, or even providing it to other businesses. But first, lets start with some declarations:
</p>

### What is an app?
In the Sesami echo system, an app is a small piece of web software, that serves from a host on the internet, and it is able to communicate with Sesami in its products.

### What is an extension?
Every app has a home page for its users which will open in the Admin Portal. But there are several more places(targets) available for the app developers to load a small version of their app to do something specific in that place. We call that small app an "extension".

<p>
For example, a forms app can collect extra data from the customers in the booking process. This app will have a home page for the shop manager to set up forms, add fields, validation, etc.
</p>
<p>
These generated forms will be loaded inside the Experience instant booking step to collect the data from users. This small app that renders a form and sends its data to the app's backend is an extension of the app.
</p>
<p>
Also, the shop manager wants to see the collected data from the user when he/she is viewing appointment details in the Admin Portal. So here the app can have an extension to get the appointment ID from the Admin and get the saved data for it from its backend, and show it in the Admin's UI.
</p>

### App Targets
The places where an app/extension can load, and have interaction with its provider(Sesami) are called targets.

Currently, these are the available targets:

