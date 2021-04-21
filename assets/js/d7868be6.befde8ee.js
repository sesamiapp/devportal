(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(7),i=(n(0),n(107)),r={sidebar_position:1},s={unversionedId:"email-templates/order-confirmation",id:"email-templates/order-confirmation",isDocsHomePage:!1,title:"Order confirmation emails",description:"If you have included a form on your Shopify product page and want it to also be included on your Shopify order confirmation, just follow the steps below.",source:"@site/docs/email-templates/order-confirmation.md",sourceDirName:"email-templates",slug:"/email-templates/order-confirmation",permalink:"/devportal/docs/email-templates/order-confirmation",editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/email-templates/order-confirmation.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Custom pages",permalink:"/devportal/docs/storefront-integration-advanced/custom-pages"}},l=[],p={toc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you have included a form on your Shopify product page and want it to also be included on your Shopify order confirmation, just follow the steps below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"On your Shopify account, click on Settings > Notifications > Order Confirmation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Search for the following text on this page: ",Object(i.b)("inlineCode",{parentName:"p"},"list__item-title"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Place this snippet directly below that line:"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-handlebars"},'{% assign property_size = line.properties | size %}\n{% if property_size > 0 %}\n  <p>\n    {% for p in line.properties %}\n      {% if p.first contains "_options" %}\n        {% continue %}\n      {% endif %}\n      {% unless p.last == blank %}\n        <small>{{ p.first }}:</small>\n        {% if p.last contains \'/uploads/\' %}\n          <a target="_blank" href="{{ p.last }}"><small>Link</small></a>\n        {% else %}\n          <small>{{ p.last }}</small>\n        {% endif %}\n        <br>\n      {% endunless %}\n    {% endfor %}\n  </p>\n{% endif %}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Looking to customize Sesami emails?")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"We are considering providing template customization for Sesami appointment confirmation emails. Please let us know by voting for this feature (Or anything else that you wish for) on our ",Object(i.b)("a",{parentName:"p",href:"https://sesami.co/feedback/"},"Feedback page")))))}c.isMDXComponent=!0}}]);