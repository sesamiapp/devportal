"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},l="Overview",i={unversionedId:"sesami-flows/flows",id:"sesami-flows/flows",title:"Overview",description:"Sesami is a platform that allows merchants to automate workflows using Sesami Flows.",source:"@site/docs/sesami-flows/flows.md",sourceDirName:"sesami-flows",slug:"/sesami-flows/flows",permalink:"/docs/sesami-flows/flows",draft:!1,editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/sesami-flows/flows.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sesami Storefront API rate limit",permalink:"/docs/sesami-sdk/ratelimit"},next:{title:"Shopify Order confirmation emails",permalink:"/docs/miscellaneous/order-confirmation"}},s={},m=[{value:"Flow types",id:"flow-types",level:2},{value:"Email",id:"email",level:3},{value:"Webhook",id:"webhook",level:3},{value:"Flow triggers",id:"flow-triggers",level:2},{value:"Instant",id:"instant",level:3},{value:"Scheduled",id:"scheduled",level:3},{value:"Flow templates",id:"flow-templates",level:2},{value:"HTML or Text",id:"html-or-text",level:3},{value:"JSON",id:"json",level:3},{value:"Date formats",id:"date-formats",level:3}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Sesami is a platform that allows merchants to automate workflows using Sesami Flows."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Sesami Flows are available on all our paid plans.")),(0,r.kt)("p",null,"Using Sesami Flows, you can trigger events for any touchpoints throughout the customers' booking journey."),(0,r.kt)("h2",{id:"flow-types"},"Flow types"),(0,r.kt)("p",null,"Current flow types:"),(0,r.kt)("h3",{id:"email"},"Email"),(0,r.kt)("p",null,"For handling Sesami notifications or scheduling reminders or thank-you messages."),(0,r.kt)("h3",{id:"webhook"},"Webhook"),(0,r.kt)("p",null,"For integrations to other platforms such as Klaviyo, Slack, or Zapier."),(0,r.kt)("h2",{id:"flow-triggers"},"Flow triggers"),(0,r.kt)("p",null,"Different types of triggers:"),(0,r.kt)("h3",{id:"instant"},"Instant"),(0,r.kt)("p",null,"Useful for immediate event types, such as booking confirmations."),(0,r.kt)("h3",{id:"scheduled"},"Scheduled"),(0,r.kt)("p",null,"Useful for early or delayed event types, such as reminders or thank-you messages."),(0,r.kt)("h2",{id:"flow-templates"},"Flow templates"),(0,r.kt)("p",null,"Each Flow has a template which has a different format based on the Flow types:"),(0,r.kt)("h3",{id:"html-or-text"},"HTML or Text"),(0,r.kt)("p",null,"For email-type Flows."),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"For webhook-type Flows."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "customer_name": "{{CustomerName}}",\n    "phone_number": "{{CustomerPhone}}",\n    "properties": { {{#each LineItemProperties}}\n        "{{name}}": "{{value}}"{{/each}}\n    }\n  }\n')),(0,r.kt)("p",null,"Will produce:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "customer_name": "John Smith",\n    "phone_number": "+1000000000",\n    "properties": { \n        "location": "Los Angeles"\n        "preferred_color": "Green"\n    }\n    }\n')),(0,r.kt)("h3",{id:"date-formats"},"Date formats"),(0,r.kt)("p",null,"For those who need more flexibility with date formats, they can use the below helper function to send any date object in their desired format / timezone:"),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{{formatDate <ANY_DATE_OBJECT> <DATE_FORMAT> <OPTIONAL:TIMEZONE>}}\n")),(0,r.kt)("p",null,"Date objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DateTime"),(0,r.kt)("li",{parentName:"ul"},"DateTimeInUTC"),(0,r.kt)("li",{parentName:"ul"},"DateTimeInStoreTimezone"),(0,r.kt)("li",{parentName:"ul"},"DateTimeInCustomerTimezone")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{{formatDate DateTimeInUTC "YYYY Mo DD HH:mm:ss" "Europe/Berlin"}} <-- Appointment time in Berlin timezone formatted like: 2022 Dec 12 18:30:00\n\n{{formatDate AppointmentCreatedAt "YYYY/MM/DD HH:mm:ss"}} <-- Appointment creation time formatted like: 2022/12/21 18:30:00\n\n{{formatDate DateTimeInUTC "YYYY Mo DD HH:mm:ss" CustomerTimezone}} <-- Appointment time in customer timezone formatted like: 2022 Dec 12 18:30:00\n')))}u.isMDXComponent=!0}}]);