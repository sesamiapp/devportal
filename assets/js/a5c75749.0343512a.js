"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2306],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,g=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return n?a.createElement(g,s(s({ref:t},l),{},{components:n})):a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(8168),r=(n(6540),n(5680));const o={},s="Personal Access Token",i={unversionedId:"sesami-api/personal-access-token",id:"sesami-api/personal-access-token",title:"Personal Access Token",description:"To use the Sesami API, you first need to have a Personal Access Token (PAT).",source:"@site/docs/6-sesami-api/2-personal-access-token.md",sourceDirName:"6-sesami-api",slug:"/sesami-api/personal-access-token",permalink:"/docs/sesami-api/personal-access-token",draft:!1,editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/6-sesami-api/2-personal-access-token.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/sesami-api/intro"},next:{title:"Make a Request",permalink:"/docs/sesami-api/make-a-request"}},c={},p=[{value:"Get PAT via Sesami Admin Portal",id:"get-pat-via-sesami-admin-portal",level:3}],l={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(m,(0,a.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"personal-access-token"},"Personal Access Token"),(0,r.yg)("p",null,"To use the Sesami API, you first need to have a Personal Access Token (PAT)."),(0,r.yg)("h3",{id:"get-pat-via-sesami-admin-portal"},"Get PAT via Sesami Admin Portal"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Login to ",(0,r.yg)("a",{parentName:"li",href:"https://admin.sesami.co"},"Sesami Admin portal"),"."),(0,r.yg)("li",{parentName:"ol"},"Navigate to the ",(0,r.yg)("a",{parentName:"li",href:"https://admin.sesami.co/token"},(0,r.yg)("strong",{parentName:"a"},"Tokens"))," section."),(0,r.yg)("li",{parentName:"ol"},"Click on ",(0,r.yg)("strong",{parentName:"li"},"Create Token"),"."),(0,r.yg)("li",{parentName:"ol"},"Enter a ",(0,r.yg)("strong",{parentName:"li"},"Name")," and select the ",(0,r.yg)("strong",{parentName:"li"},"Grant Permissions"),"."),(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("strong",{parentName:"li"},"Create"),"."),(0,r.yg)("li",{parentName:"ol"},"You will now see your ",(0,r.yg)("strong",{parentName:"li"},"Client ID")," and ",(0,r.yg)("strong",{parentName:"li"},"Personal Access Token"),".")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Personal Access Token",src:n(6709).A,width:"1027",height:"745"})),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Please keep your personal access token in a secure place, if you lose it, it cannot be recovered."))),(0,r.yg)("admonition",{type:"important"},(0,r.yg)("p",{parentName:"admonition"},"Each ",(0,r.yg)("strong",{parentName:"p"},"PAT")," is uniquely associated with a specific ",(0,r.yg)("strong",{parentName:"p"},"shop"),". This means that the key grants access only to the resources and data for that particular shop, ensuring secure and isolated access.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"As of now, ",(0,r.yg)("strong",{parentName:"p"},"Personal Access Tokens")," are not automatically generated through the developer portal. To obtain your PAT, please contact our Support Team. They will assist you in generating and securing your PAT, ensuring you have everything you need to start integrating with our platform.")))}u.isMDXComponent=!0},6709:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/personal-access-token-65ae328c43b1ff85bea9d8344c1f2842.png"}}]);