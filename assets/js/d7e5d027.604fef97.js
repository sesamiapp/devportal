"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6379],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(6540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=s,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(8168),s=(a(6540),a(5680));const r={sidebar_position:1},i="Intro",o={unversionedId:"sesami-apps/api-reference/app-message/classess/admin-classes/intro",id:"sesami-apps/api-reference/app-message/classess/admin-classes/intro",title:"Intro",description:"These are classes that the app developers can use to interact with Admin Portal.",source:"@site/docs/5-sesami-apps/4-api-reference/app-message/classess/admin-classes/intro.md",sourceDirName:"5-sesami-apps/4-api-reference/app-message/classess/admin-classes",slug:"/sesami-apps/api-reference/app-message/classess/admin-classes/intro",permalink:"/docs/sesami-apps/api-reference/app-message/classess/admin-classes/intro",draft:!1,editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/5-sesami-apps/4-api-reference/app-message/classess/admin-classes/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/docs/sesami-apps/api-reference/app-message/types"},next:{title:"AdminAppLoader",permalink:"/docs/sesami-apps/api-reference/app-message/classess/admin-classes/admin-app-loader"}},l={},p=[{value:"Attributes",id:"attributes",level:3},{value:"Shop ID",id:"shop-id",level:4},{value:"Locale",id:"locale",level:4},{value:"Methods",id:"methods",level:3},{value:"getToken()",id:"gettoken",level:4},{value:"showNotification()",id:"shownotification",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,s.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"intro"},"Intro"),(0,s.yg)("p",null,"These are classes that the app developers can use to interact with Admin Portal."),(0,s.yg)("p",null,"These classes have some common attributes and methods:"),(0,s.yg)("h3",{id:"attributes"},"Attributes"),(0,s.yg)("h4",{id:"shop-id"},"Shop ID"),(0,s.yg)("p",null,"The current shop inside the Admin Portal."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"public getShopId: () => string\n")),(0,s.yg)("h4",{id:"locale"},"Locale"),(0,s.yg)("p",null,"The Admin Portal's current locale."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"public getLocale: () => string\n")),(0,s.yg)("h3",{id:"methods"},"Methods"),(0,s.yg)("h4",{id:"gettoken"},"getToken()"),(0,s.yg)("p",null,"This will be used to get the authentication token before each API call. The app message will check the token and if it is expired, it will refresh itself and return a valid token."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"public getToken: () => Promise<string | null>\n\n// example\nconst token = await Sesami.getToken()\n")),(0,s.yg)("h4",{id:"shownotification"},"showNotification()"),(0,s.yg)("p",null,"This method can show a notification in the Admin Portal."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"public showNotification = (message: string, type: NotificationType) => void\n\n// example\nSesami.showNotification('Upload completed', NotificationType.SUCCESS)\n")))}m.isMDXComponent=!0}}]);