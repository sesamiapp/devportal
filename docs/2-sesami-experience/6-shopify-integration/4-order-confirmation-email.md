---
sidebar_position: 4
---

# Order Confirmation Emails

If you have included a form on your Shopify product page and want it to also be included on your Shopify order confirmation emails, just follow the steps below:

- On your Shopify account, click on **Settings** > **Notifications** > **Order Confirmation**
- Search for the following text on the page: `list__item-title`
- Place the following snippet directly below that line:

```handlebars
{% assign property_size = line.properties | size %}
{% if property_size > 0 %}
  <p>
    {% for p in line.properties %}
      {% if p.first contains "_options" %}
        {% continue %}
      {% endif %}
      {% unless p.last == blank %}
        <small>{{ p.first }}:</small>
        {% if p.last contains '/uploads/' %}
          <a target="_blank" href="{{ p.last }}"><small>Link</small></a>
        {% else %}
          <small>{{ p.last }}</small>
        {% endif %}
        <br>
      {% endunless %}
    {% endfor %}
  </p>
{% endif %}
```
