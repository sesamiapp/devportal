---
sidebar_position: 2
---

# Styling

Sesami button is a regular `button` element that can be styled just like any other element using `css`.

It is given this class name: `sesami__button`

Which you can use as a css selector to add or override a style.

```css title="custom.css"
.sesami__button{
	background: #24d2dc;
	height: 50px;
    line-height: 48px;
    padding: 0 30px;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 24px;
    margin: 8px 0;
}
```

export const Button = ({styles, children}) => (
  <button
    style={styles}
    onClick={() => {
      alert(`Sesami calendar will be diplayed.`)
    }}>
    {children}
  </button>
);

Which will result in:

<Button styles={{
	background: "#24d2dc",
	height: "50px",
    lineHeight: "48px",
    padding: "0 30px",
    border: "none",
    borderRadius: "4px",
    color: "#000",
    fontSize: "24px",
    margin: "8px 0"
}}>Book now!</Button>


:::note

Each theme might use a different name, structure or technology to process css files, some themes have a `custom.css` or `override.css` file that are used for any custom styling. Please ask your theme developer about where you should add this code if you are unsure.
:::