"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Anatomy of Sesami button",s={unversionedId:"storefront-integration/anatomy-of-sesami-button",id:"storefront-integration/anatomy-of-sesami-button",title:"Anatomy of Sesami button",description:"At its simplest form, you'll need an empty div element with id attribute set to sesamibuttonWrapper for Sesami to render the button and the hidden fields:",source:"@site/docs/storefront-integration/anatomy-of-sesami-button.md",sourceDirName:"storefront-integration",slug:"/storefront-integration/anatomy-of-sesami-button",permalink:"/docs/storefront-integration/anatomy-of-sesami-button",draft:!1,editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/storefront-integration/anatomy-of-sesami-button.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Styling",permalink:"/docs/storefront-integration/styling"}},l={},d=[{value:"Rendered result",id:"rendered-result",level:4},{value:"Options",id:"options",level:2},{value:"locale",id:"locale",level:3},{value:"button-label",id:"button-label",level:3},{value:"product-id",id:"product-id",level:3},{value:"variant-id",id:"variant-id",level:3},{value:"shop-id",id:"shop-id",level:3},{value:"quantity",id:"quantity",level:3},{value:"Events",id:"events",level:2},{value:"sesami:loaded",id:"sesamiloaded",level:3},{value:"change",id:"change",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anatomy-of-sesami-button"},"Anatomy of Sesami button"),(0,i.kt)("p",null,"At its simplest form, you'll need an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute set to ",(0,i.kt)("inlineCode",{parentName:"p"},"sesami__buttonWrapper")," for Sesami to render the button and the hidden fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="product-template.liquid"',title:'"product-template.liquid"'},'<div\n  id="sesami__buttonWrapper"\n>\n</div>\n')),(0,i.kt)("h4",{id:"rendered-result"},"Rendered result"),(0,i.kt)("p",null,"This is a final rendered markup that Sesami creates to capture booking information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="sesami__buttonWrapper">\n\x3c!--- Anything inside this div is generated automatically ---\x3e\n    <input type="hidden" id="sesami-date-0" name="properties[Date]" value="">\n    <input type="hidden" id="sesami-time-0" name="properties[Time]" value="">\n    <input type="hidden" id="sesami-timezone-0" name="properties[Timezone]" value="">\n    <input type="hidden" id="sesami-teammember-0" name="properties[Team Member]" value="">\n    <input type="hidden" id="sesami-remainingslots-0" name="sesami-remainingslots" value="">\n    <button class="sesami__button" type="button">\n        Select Date &amp; Time\n    </button>\n</div>\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The above markup will only be generated if the current product is a Sesami service; otherwise, it will do nothing, and your other products won't be affected in any way.")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The Sesami button can be customized in many ways; this is mostly done by passing options to the wrapper element:"),(0,i.kt)("h3",{id:"locale"},"locale"),(0,i.kt)("p",null,"Sometimes you might need Sesami calendar to be displayed in a different language than what is set as your primary language. This is primarily useful if you have a multi-lingual store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},'<div\n  id="sesami__buttonWrapper"\n  data-sesami-locale="fr"\n>\n</div>\n')),(0,i.kt)("h3",{id:"button-label"},"button-label"),(0,i.kt)("p",null,"You can display any label on the button; this is useful if you'd like to conditionally render different labels based on product or context. If this option is not provided, it will display what is set on the settings page in Sesami app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},'<div\n  id="sesami__buttonWrapper"\n  data-sesami-button-label="Book now!"\n>\n</div>\n')),(0,i.kt)("h3",{id:"product-id"},"product-id"),(0,i.kt)("p",null,"If you want to render a button on a page different from a product page, you'll need to tell Sesami for which product you are rendering a button. Depending on your implementation, if you are rendering the button outside a product form or if a variant input is not present on the form, you might need to add a ",(0,i.kt)("a",{parentName:"p",href:"#variant-id"},"variant-id")," as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},'<div\n  id="sesami__buttonWrapper"\n  data-sesami-product-id="192379823740"\n>\n</div>\n')),(0,i.kt)("h3",{id:"variant-id"},"variant-id"),(0,i.kt)("p",null,"If you want to render a button on a page different from a product page, you'll need to tell Sesami for which variant you are rendering a button. You always need to specify the ",(0,i.kt)("a",{parentName:"p",href:"#product-id"},"product-id")," when using this option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},'<div\n  id="sesami__buttonWrapper"\n  data-sesami-product-id="192379823740"\n  data-sesami-variant-id="379823740343"\n>\n</div>\n')),(0,i.kt)("h3",{id:"shop-id"},"shop-id"),(0,i.kt)("p",null,"If you want to integrate Sesami in an external page or website, you'll need to tell Sesami for which store you want to display the button; this is done by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"shop-id")," option:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Both ",(0,i.kt)("a",{parentName:"strong",href:"#variant-id"},"variant-id")," and ",(0,i.kt)("a",{parentName:"strong",href:"#product-id"},"product-id")," are required when using this option.")),(0,i.kt)("admonition",{title:"Where can I find my shop ID?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each store has its own shop id which can be fetched by visiting this address after replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"STORE")," with your store address: ",(0,i.kt)("a",{parentName:"p",href:"http://STORE.myshopify.com/admin/shop.json"},"http://STORE.myshopify.com/admin/shop.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},'<div\n  id="sesami__buttonWrapper"\n  data-sesami-shop-id="0000000000"\n  data-sesami-product-id="192379823740"\n  data-sesami-variant-id="379823740343"\n>\n</div>\n')),(0,i.kt)("p",null,"If you need to load Sesami on an external page (like a WordPress website), you'll need to add this line of code to your page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script async src="https://cdn.sesami.co/shopify.js"><\/script>\n')),(0,i.kt)("h3",{id:"quantity"},"quantity"),(0,i.kt)("p",null,"If you don't want to display a quantity selector within your product form and need a pre-selected quantity value, you can set this option. defaults to ",(0,i.kt)("strong",{parentName:"p"},"1")," in other cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},'<div\n  id="sesami__buttonWrapper"\n  data-sesami-quantity="1"\n>\n</div>\n')),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"Sesami fires events to help you handle different scenarios in your booking flow; You can listen for these events to trigger different actions when a customer selects a time slot or when Sesami is loaded and initialized on your page."),(0,i.kt)("h3",{id:"sesamiloaded"},"sesami:loaded"),(0,i.kt)("p",null,"Sesami resources are loaded in async mode, so they do not block your other resources. Depending on network conditions and the size of other resources, it can take some time until Sesami is fully loaded on a page. This event will let you know when Sesami is ready to accept bookings."),(0,i.kt)("p",null,"This is an example that shows how you can listen for this event and trigger an action based on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Example" {5}',title:'"Example"',"{5}":!0},"<script>\n/// Disable add to cart button\n/// Display a loading spinner\n(function(){\n    window.addEventListener('sesami:loaded', function(){\n      /// Remove loading spinner\n      /// Enable add to cart button\n    })\n})()\n<\/script>\n")),(0,i.kt)("h3",{id:"change"},"change"),(0,i.kt)("p",null,"A regular ",(0,i.kt)("inlineCode",{parentName:"p"},"change")," event will be fired on respective hidden inputs displayed on ",(0,i.kt)("a",{parentName:"p",href:"#rendered-result"},"Rendered result")," section whenever a user selects a new time slot or changes the selected team member or timezone."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Listen for ",(0,i.kt)("a",{parentName:"p",href:"#sesamiloaded"},"sesami:loaded")," event and once inputs are rendered, listen for the change event on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," input and programmatically create an order without customers having to click on add to cart button:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Example" {6}',title:'"Example"',"{6}":!0},"<script>\n(function(){\n    window.addEventListener('sesami:loaded', function(){\n      var formElement = document.querySelector(\"#form\")\n      var sesamiDateInput = formElement.querySelector(\"[name='properties[Date]']\")\n      sesamiDateInput.addEventListener('change', function(){\n        const FD = new FormData( formElement )\n        createOrder(FD)\n      })\n    })\n})()\n<\/script>\n")))}u.isMDXComponent=!0}}]);