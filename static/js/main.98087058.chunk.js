(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(5),i=(c(14),c(15),c(16),c(6)),b=c.n(i),j=c(1),r=function(e){var t=e.to,c=e.text;return Object(j.jsx)(s.b,{to:t,className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:c})},l=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(r,{to:"/",text:"Home"}),Object(j.jsx)(r,{to:"/tabs",text:"Tabs"})]})})})},d=c(2),o=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home page"})})},x=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){var e=Object(d.h)().tabId,t=void 0===e?"":e,c=h.find((function(e){return e.id===t}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:h.map((function(e){var c=e.id,a=e.title;return Object(j.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t===c}),children:Object(j.jsx)("a",{href:"#/tabs/".concat(c),children:a})},c)}))})}),c?Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content}):Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},m=function(){return Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(d.b,{path:"home",element:Object(j.jsx)(d.a,{to:"/",replace:!0})}),Object(j.jsxs)(d.b,{path:"tabs",children:[Object(j.jsx)(d.b,{index:!0,element:Object(j.jsx)(O,{})}),Object(j.jsx)(d.b,{path:":tabId",element:Object(j.jsx)(O,{})})]}),Object(j.jsx)(d.b,{path:"*",element:Object(j.jsx)(x,{})})]})},u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)(m,{})})]})};n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.98087058.chunk.js.map