"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[445],{5680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),d=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=d(e.components);return n.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(g,".").concat(m)]||p[m]||s[m]||l;return a?n.createElement(u,i(i({ref:t},y),{},{components:a})):n.createElement(u,i({ref:t},y))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(8168),r=(a(6540),a(5680));const l={sidebar_position:2},i="Dive Right In: Learn Storefront SDK The Fun Way!",o={unversionedId:"sesami-sdk/learn-by-doing",id:"sesami-sdk/learn-by-doing",title:"Dive Right In: Learn Storefront SDK The Fun Way!",description:"Hi there! We\u2019ll be diving into the Storefront SDK by building a calendar together. It's a fun and practical way to learn as we go. So, without wasting any time, let\u2019s jump right in!",source:"@site/docs/sesami-sdk/learn-by-doing.md",sourceDirName:"sesami-sdk",slug:"/sesami-sdk/learn-by-doing",permalink:"/docs/sesami-sdk/learn-by-doing",draft:!1,editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/sesami-sdk/learn-by-doing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Storefront SDK",permalink:"/docs/sesami-sdk/sdk"},next:{title:"Sesami Storefront API rate limit",permalink:"/docs/sesami-sdk/ratelimit"}},g={},d=[{value:"Initializing",id:"initializing",level:2},{value:"Rendering The Calendar",id:"rendering-the-calendar",level:2},{value:"Object Structure",id:"object-structure",level:3},{value:"Example",id:"example",level:4},{value:"Day Object Structure",id:"day-object-structure",level:3},{value:"Getting Availabilities",id:"getting-availabilities",level:2},{value:"Slot Object Structure",id:"slot-object-structure",level:3},{value:"Example",id:"example-1",level:4},{value:"Including Extra Data",id:"including-extra-data",level:2},{value:"SesamiCustomerObject Structure",id:"sesamicustomerobject-structure",level:3},{value:"SesamiOptionsObject Format",id:"sesamioptionsobject-format",level:3},{value:"Example",id:"example-2",level:4},{value:"Book",id:"book",level:2},{value:"Hold On!",id:"hold-on",level:2}],y={toc:d},p="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"dive-right-in-learn-storefront-sdk-the-fun-way"},"Dive Right In: Learn Storefront SDK The Fun Way!"),(0,r.yg)("p",null,"Hi there! We\u2019ll be diving into the Storefront SDK by building a calendar together. It's a fun and practical way to learn as we go. So, without wasting any time, let\u2019s jump right in!"),(0,r.yg)("h2",{id:"initializing"},"Initializing"),(0,r.yg)("p",null,"To initialize the SDK, first, we need the SDK itself!",(0,r.yg)("br",{parentName:"p"}),"\n","Add the SDK CDN to your project. You can just copy this snippet and include it in your project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<script async src="https://cdn.sesami.co/sdk.js"></script\n')),(0,r.yg)("p",null,"Now we need to create an instance of the SDK.\nI\u2019ll create a ",(0,r.yg)("inlineCode",{parentName:"p"},"main.js")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"let SDKInstance = new SesamiSDK({\n      variantId: {{product.selected_or_first_available_variant.id}},\n      shopId: {{shop.id}},\n      productId: {{product.id}},\n      quantity: 1,\n      autoLoad: true\n    })\n")),(0,r.yg)("p",null,"Store the ",(0,r.yg)("inlineCode",{parentName:"p"},"SDKInstance")," in a place you can access easily. In my case, I\u2019ll store it in ",(0,r.yg)("inlineCode",{parentName:"p"},"window.sesamiSDK"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"window.sesamiSDK = SDKInstance;\n")),(0,r.yg)("h2",{id:"rendering-the-calendar"},"Rendering The Calendar"),(0,r.yg)("p",null,"Each SDK instance includes a data object. You can find a sample dataset ",(0,r.yg)("a",{parentName:"p",href:"https://sesami.dev/docs/sesami-sdk/sdk/#data"},"here"),"."),(0,r.yg)("h3",{id:"object-structure"},"Object Structure"),(0,r.yg)("p",null,"The object has a ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," property with the following structure:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"labels")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Array<Date>")),(0,r.yg)("td",{parentName:"tr",align:null},"An array of ",(0,r.yg)("inlineCode",{parentName:"td"},"Date")," objects.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rows")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Array<Array<SesamiDayObject>>")),(0,r.yg)("td",{parentName:"tr",align:null},"A 2D array containing ",(0,r.yg)("inlineCode",{parentName:"td"},"SesamiDayObject")," arrays.")))),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("p",null,"Here\u2019s an example of what the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," property might look like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"{\n  labels: [Sun Dec 05 2021 00:00:00 {}, Mon Nov 29 2021 00:00:00 {}, ...],\n  rows: [\n            [\n                {\n                    date: Sun Nov 28 2021 00:00:00 {}\n                    getAvailabilities: async \u0192 ()\n                    isCurrentMonth: false\n                    isCurrentWeek: false\n                    isPast: true\n                    isToday: false\n                }\n                ...\n            ]\n            ...\n        ]\n}\n")),(0,r.yg)("p",null,"We use the ",(0,r.yg)("inlineCode",{parentName:"p"},"labels")," to render the label section of the calendar like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Su"),(0,r.yg)("th",{parentName:"tr",align:null},"Mo"),(0,r.yg)("th",{parentName:"tr",align:null},"Tu"),(0,r.yg)("th",{parentName:"tr",align:null},"We"),(0,r.yg)("th",{parentName:"tr",align:null},"Th"),(0,r.yg)("th",{parentName:"tr",align:null},"Fr"),(0,r.yg)("th",{parentName:"tr",align:null},"Sa")))),(0,r.yg)("p",null,"like this"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// helper\nconst dayName = (date) =>\n  new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);\n\nwindow.sesamiSDK.data.labels.map((dateString) => {\n  calendarLabels.innerHTML += `<li >${dayName(new Date(dateString))}</li>`;\n});\n')),(0,r.yg)("p",null,"We use ",(0,r.yg)("inlineCode",{parentName:"p"},"rows")," to generate the days of the calendar like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"9"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"13"),(0,r.yg)("td",{parentName:"tr",align:null},"14")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"17"),(0,r.yg)("td",{parentName:"tr",align:null},"18"),(0,r.yg)("td",{parentName:"tr",align:null},"19"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"21")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"22"),(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"24"),(0,r.yg)("td",{parentName:"tr",align:null},"25"),(0,r.yg)("td",{parentName:"tr",align:null},"26"),(0,r.yg)("td",{parentName:"tr",align:null},"27"),(0,r.yg)("td",{parentName:"tr",align:null},"28")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"29"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("p",null,"Each array in ",(0,r.yg)("inlineCode",{parentName:"p"},"rows")," represents a row and contains the days for that row."),(0,r.yg)("h3",{id:"day-object-structure"},"Day Object Structure"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"date")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"Represents the date for this day.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"getAvailabilities()")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Async Function")),(0,r.yg)("td",{parentName:"tr",align:null},"Returns a promise that resolves to an array of available slots: ",(0,r.yg)("inlineCode",{parentName:"td"},"Promise<Array<SesamiSlotObject>>"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isCurrentMonth")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates if this day is within the same month as the currently set date.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isCurrentWeek")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates if this day is within the same week as the currently set date.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isPast")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates if this day is in the past.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isToday")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates if this day is today.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onLoad(callback)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Function")),(0,r.yg)("td",{parentName:"tr",align:null},"The callback function receives cell availabilities for the currently selected range; requires autoLoad to be enabled. This method triggers a network request only if the data is not already available.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onError(callback)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Function")),(0,r.yg)("td",{parentName:"tr",align:null},"The callback function receives any errors when retrieving cell availabilities for the selected range.")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'// Initialize an empty object to store all availabilities\nlet allAvailabilities = {};\n\n// Helper function to convert a date to ISO string format (YYYY-MM-DD)\nconst toIso = (date) => date.toISOString().split("T")[0];\n\n// Process each row in the Sesami SDK data\nwindow.sesamiSDK.data.rows.forEach((row, rowIndex) => {\n  row.forEach(async (day) => {\n    // Determine the CSS class based on whether the day is in the past\n    const className = day.isPast ? "inactive" : "active";\n\n    // Create and configure a new list item element for the day\n    const dayElement = document.createElement("li");\n    dayElement.className = className;\n    dayElement.textContent = getDayNumber(new Date(day.date));\n\n    // Append the day element to the container for days\n    days.appendChild(dayElement);\n\n    // Fetch availabilities for the day and store them\n    try {\n      const availabilities = await day.getAvailabilities();\n      const isoDate = toIso(new Date(day.date));\n      allAvailabilities[isoDate] = availabilities;\n    } catch (error) {\n      console.error(`Error fetching availabilities for ${day.date}:`, error);\n    }\n\n    // Add a click event listener to handle day selection\n    dayElement.addEventListener("click", () => {\n      if (!day.isPast) {\n        selectDay(day, allAvailabilities);\n      }\n    });\n  });\n});\n')),(0,r.yg)("h2",{id:"getting-availabilities"},"Getting Availabilities"),(0,r.yg)("p",null,"Now that we\u2019ve rendered our days and stored availabilities, it\u2019s time to render available slots!\nBefore that, let\u2019s look at the slot structure."),(0,r.yg)("h3",{id:"slot-object-structure"},"Slot Object Structure"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"duration")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Number")),(0,r.yg)("td",{parentName:"tr",align:null},"The duration of the slot in minutes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"remainingSlots")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Number")),(0,r.yg)("td",{parentName:"tr",align:null},"The number of slots remaining.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"startTime")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},'The start time of the slot in "YYYY-MM-DD HH:MM" format.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"status")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The availability status of the slot.")))),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  duration: 15\n  remainingSlots: 1\n  startTime: "2022-12-30 10:00"\n  status: "available"\n}\n')),(0,r.yg)("p",null,"You can render the availabilities in a drop down and store the selected slot"),(0,r.yg)("h2",{id:"including-extra-data"},"Including Extra Data"),(0,r.yg)("p",null,"There are two types of data you can attach to the booking request:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"SesamiCustomerObject (required)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"SesamiOptionsObject (optional)"))),(0,r.yg)("h3",{id:"sesamicustomerobject-structure"},"SesamiCustomerObject Structure"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"email")),(0,r.yg)("td",{parentName:"tr",align:null},"Customer email address."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"mailto:john@smith.com"},"john@smith.com"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"firstName")),(0,r.yg)("td",{parentName:"tr",align:null},"Customer first name."),(0,r.yg)("td",{parentName:"tr",align:null},"John")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"lastName")),(0,r.yg)("td",{parentName:"tr",align:null},"Customer last name."),(0,r.yg)("td",{parentName:"tr",align:null},"Smith")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"phone")),(0,r.yg)("td",{parentName:"tr",align:null},"Customer phone number."),(0,r.yg)("td",{parentName:"tr",align:null},"+12223333333")))),(0,r.yg)("h3",{id:"sesamioptionsobject-format"},"SesamiOptionsObject Format"),(0,r.yg)("p",null,"The customer object contains a property named ",(0,r.yg)("inlineCode",{parentName:"p"},"properties"),", which is an array of objects with the following format:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"value")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String"))))),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  properties:[\n    {\n      name: "How old are you?"\n      value: "18"\n    }\n    {\n      name: "Marital Status"\n      value: "Single"\n    }\n  ]\n}\n')),(0,r.yg)("h2",{id:"book"},"Book"),(0,r.yg)("p",null,"now you can book an event using SDK instant and the data you gathered"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"await window.sesamiSDK.book(selectedSlot, customerObject, optionsObject);\n")),(0,r.yg)("h2",{id:"hold-on"},"Hold On!"),(0,r.yg)("p",null,"There\u2019s much more to the SDK than what we've covered. This document aimed to simplify the workflow and help you achieve results quickly while giving you a foundational understanding of how the SDK works. To fully utilize the SDK, you\u2019ll need additional methods, such as next, previous, and more. You can explore these and other features in the Storefront SDK documentation."))}s.isMDXComponent=!0}}]);