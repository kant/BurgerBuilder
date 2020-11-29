webpackJsonp([0],{152:function(r,e,n){"use strict";function t(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),A=n(11),i=n(8),d=n(165),l=n.n(d),c=n(153),m=n(49),p=n(20),C=n(19),s=n(12),u=function(){function r(r,e){var n=[],t=!0,a=!1,o=void 0;try{for(var A,i=r[Symbol.iterator]();!(t=(A=i.next()).done)&&(n.push(A.value),!e||n.length!==e);t=!0);}catch(r){a=!0,o=r}finally{try{!t&&i.return&&i.return()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=o.a.memo(function(r){var e=Object(i.c)(),n=Object(i.d)(function(r){return r.orderReducer.purchased}),d=function(r){e(C.i(r))},h=Object(i.d)(function(r){return r.burgerReducer.ingredients}),x=Object(i.d)(function(r){return r.burgerReducer.totalPrice}),B=Object(i.d)(function(r){return r.orderReducer.loading}),f=Object(i.d)(function(r){return r.authReducer.userId}),b=Object(a.useState)(!1),w=u(b,2),_=w[0],v=w[1],g=Object(a.useState)({name:{elementType:"input",elementConfig:{type:"text",name:"Name",placeholder:"Name.",value:""},validation:{required:!0},valid:!1,touched:!1,label:"Name"},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email.",value:""},validation:{required:!0},valid:!1,touched:!1,label:"E-mail"},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street address.",value:""},validation:{required:!0},valid:!1,touched:!1,label:"Street"},pinCode:{elementType:"input",elementConfig:{type:"number",placeholder:"Postal code.",value:""},validation:{required:!0,minLength:6},valid:!1,touched:!1,label:"PIN Code"},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country.",value:""},validation:{required:!0},valid:!1,touched:!1,label:"Country"},delivery:{elementType:"dropdown",elementConfig:{options:["Super","Normal"],value:""},validation:{},valid:!0,touched:!0,label:"Delivery"}}),k=u(g,2),D=k[0],I=k[1],y=function(r){r.preventDefault();var e={};for(var n in D)e[n]=D[n].elementConfig.value;d({ingredients:h,price:x,orderData:e,userId:f})},E=function(r,e){var n=Object(s.b)(D,t({},e,Object(s.b)(D[e],{elementConfig:Object(s.b)(D[e].elementConfig,{value:r.target.value}),touched:!0,valid:Object(s.a)(r.target.value,D[e].validation)}))),a=!0;for(var o in n)a=n[o].valid&&a;I(n),v(a)},j=[];for(var S in D)j.push(Object.assign({},D[S],{id:S}));var O=o.a.createElement("form",{className:l.a.ContactForm,onSubmit:y},j.map(function(r){return o.a.createElement(c.a,{key:r.id,elementtype:r.elementType,elementconfig:r.elementConfig,valid:r.valid,invalid:!r.valid,touched:r.touched,inputChange:function(e){return E(e,r.id)}})}),o.a.createElement(m.a,{btnType:"Success",disabled:!_},"Order Now"));return B&&(O=o.a.createElement(p.a,null)),o.a.createElement("div",{className:l.a.ContactData},n?o.a.createElement(A.c,{to:"/"}):null,o.a.createElement("div",{className:l.a.Sidebar},o.a.createElement("h3",null,"Some details please...")),O)});e.default=h},153:function(r,e,n){"use strict";var t=n(0),a=n.n(t),o=n(154),A=n.n(o),i=function(r){var e=null,n=[A.a.Input];switch(r.valid?n.push(A.a.Valid):r.invalid&&r.touched&&n.push(A.a.Invalid),r.elementtype){case"input":e=a.a.createElement("input",Object.assign({className:n.join(" "),onChange:r.inputChange},r.elementconfig));break;case"dropdown":e=a.a.createElement("select",{className:n.join(" "),value:r.elementconfig.value,onChange:r.inputChange},r.elementconfig.options.map(function(r){return a.a.createElement("option",{key:r},r)}));break;case"textarea":e=a.a.createElement("textarea",Object.assign({className:A.a.Input},r.elementConfig))}return a.a.createElement("div",{className:A.a.formElement},e)};e.a=i},154:function(r,e,n){var t=n(155);"string"===typeof t&&(t=[[r.i,t,""]]);var a={hmr:!1};a.transform=void 0;n(147)(t,a);t.locals&&(r.exports=t.locals)},155:function(r,e,n){e=r.exports=n(146)(!0),e.push([r.i,".Input__formElement__1ajuJ{padding:1rem;width:70%;margin-bottom:.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}.Input__Input__1VROp{padding:1rem;width:65%;height:5.5rem;border:3px solid var(--color-theme-dark);border-radius:50px;-webkit-box-shadow:2px 2px 2px var(--color-theme-dark);box-shadow:2px 2px 2px var(--color-theme-dark);font-family:inherit;font-size:1.75rem;font-weight:600;color:var(--color-black);background-color:#dad735}@media(max-width:900px){.Input__Input__1VROp{width:75%}}@media(max-width:500px){.Input__Input__1VROp{font-size:2rem}}.Input__Input__1VROp:focus{outline:none}.Input__Input__1VROp::-webkit-input-placeholder{color:var(--color-theme-dark);font-size:1.75rem}.Input__Input__1VROp::-moz-placeholder{color:var(--color-theme-dark);font-size:1.75rem}.Input__Input__1VROp::-ms-input-placeholder{color:var(--color-theme-dark);font-size:1.75rem}.Input__Input__1VROp::placeholder{color:var(--color-theme-dark);font-size:1.75rem}.Input__Valid__1naKw{padding:1rem;width:65%;border:3px solid var(--color-white);border-radius:50px;-webkit-box-shadow:2px 2px 2px var(--color-theme-dark);box-shadow:2px 2px 2px var(--color-theme-dark);font-family:inherit;font-size:1.75rem;font-weight:600;color:var(--color-black);background-color:#adff2f}@media(max-width:900px){.Input__Valid__1naKw{width:75%}}.Input__Invalid__38X2d{padding:1rem;width:65%;border:3px solid var(--color-white);border-radius:50px;-webkit-box-shadow:2px 2px 2px var(--color-theme-dark);box-shadow:2px 2px 2px var(--color-theme-dark);font-family:inherit;font-size:1.25rem;font-weight:600;color:var(--color-white);background-color:salmon}@media(max-width:900px){.Input__Invalid__38X2d{width:75%}}@media(max-width:600px){.Input__formElement__1ajuJ{width:100%}.Input__Input__1VROp,.Input__Valid__1naKw{font-size:2rem;padding:1rem}}@media(max-width:400px){.Input__Input__1VROp,.Input__Valid__1naKw{width:60%}}","",{version:3,sources:["C:/Users/Nischal Nikit/Desktop/Elevate Labs/4.BurgerBuilder/src/components/UI/Input/Input.css"],names:[],mappings:"AACA,2BACI,aAAc,AACd,UAAW,AACX,oBAAsB,AAEtB,oBAAqB,AAErB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC/B,AAED,qBACI,aAAc,AACd,UAAW,AACX,cAAe,AAEf,yCAA0C,AAC1C,mBAAoB,AACpB,uDAAwD,AAChD,+CAAgD,AAExD,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AAEjB,yBAA0B,AAC1B,wBAA0B,CAC7B,AAED,wBACI,qBACE,SAAU,CACX,CACJ,AAGD,wBACI,qBACE,cAAgB,CACjB,CACJ,AAGD,2BACI,YAAc,CACjB,AAED,gDACI,8BAA+B,AAC/B,iBAAmB,CACtB,AAED,uCACI,8BAA+B,AAC/B,iBAAmB,CACtB,AAED,4CACI,8BAA+B,AAC/B,iBAAmB,CACtB,AAED,kCACI,8BAA+B,AAC/B,iBAAmB,CACtB,AAED,qBACI,aAAc,AACd,UAAW,AAEX,oCAAqC,AACrC,mBAAoB,AACpB,uDAAwD,AAChD,+CAAgD,AAExD,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AAEjB,yBAA0B,AAC1B,wBAA8B,CACjC,AAED,wBACI,qBACE,SAAU,CACX,CACJ,AAED,uBACI,aAAc,AACd,UAAW,AAEX,oCAAqC,AACrC,mBAAoB,AACpB,uDAAwD,AAChD,+CAAgD,AAExD,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AAEjB,yBAA0B,AAC1B,uBAAyB,CAC5B,AAED,wBACI,uBACE,SAAU,CACX,CACJ,AAED,wBACI,2BACI,UAAY,CACf,AAED,0CAEI,eAAgB,AAChB,YAAc,CACjB,CACJ,AAED,wBACI,0CAEI,SAAW,CACd,CACJ",file:"Input.css",sourcesContent:["/*Changes made to input css*/\r\n.formElement{\r\n    padding: 1rem;\r\n    width: 70%;\r\n    margin-bottom: 0.5rem;\r\n\r\n    display: -ms-flexbox;\r\n\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n.Input{\r\n    padding: 1rem;\r\n    width: 65%;\r\n    height: 5.5rem;\r\n\r\n    border: 3px solid var(--color-theme-dark);\r\n    border-radius: 50px;\r\n    -webkit-box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n            box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n\r\n    font-family: inherit;\r\n    font-size: 1.75rem;\r\n    font-weight: 600;\r\n\r\n    color: var(--color-black);\r\n    background-color: #DAD735;\r\n}\r\n\r\n@media(max-width: 900px){\r\n    .Input{\r\n      width: 75%\r\n    }\r\n}\r\n\r\n\r\n@media(max-width: 500px){\r\n    .Input{\r\n      font-size: 2rem;\r\n    }\r\n}\r\n  \r\n  \r\n.Input:focus{\r\n    outline: none;\r\n}\r\n\r\n.Input::-webkit-input-placeholder{\r\n    color: var(--color-theme-dark);\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.Input::-moz-placeholder{\r\n    color: var(--color-theme-dark);\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.Input::-ms-input-placeholder{\r\n    color: var(--color-theme-dark);\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.Input::placeholder{\r\n    color: var(--color-theme-dark);\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.Valid{\r\n    padding: 1rem;\r\n    width: 65%;\r\n\r\n    border: 3px solid var(--color-white);\r\n    border-radius: 50px;\r\n    -webkit-box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n            box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n\r\n    font-family: inherit;\r\n    font-size: 1.75rem;\r\n    font-weight: 600;\r\n\r\n    color: var(--color-black);\r\n    background-color: greenyellow;\r\n}\r\n\r\n@media(max-width: 900px){\r\n    .Valid{\r\n      width: 75%\r\n    }\r\n}\r\n  \r\n.Invalid{\r\n    padding: 1rem;\r\n    width: 65%;\r\n\r\n    border: 3px solid var(--color-white);\r\n    border-radius: 50px;\r\n    -webkit-box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n            box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n\r\n    font-family: inherit;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    color: var(--color-white);\r\n    background-color: salmon;\r\n}\r\n\r\n@media(max-width: 900px){\r\n    .Invalid{\r\n      width: 75%\r\n    }\r\n}\r\n\r\n@media(max-width: 600px){\r\n    .formElement{\r\n        width: 100%;\r\n    }\r\n\r\n    .Input, \r\n    .Valid{\r\n        font-size: 2rem;\r\n        padding: 1rem;\r\n    }\r\n}\r\n\r\n@media(max-width: 400px){\r\n    .Input,\r\n    .Valid{\r\n        width: 60%;\r\n    }\r\n}"],sourceRoot:""}]),e.locals={formElement:"Input__formElement__1ajuJ",Input:"Input__Input__1VROp",Valid:"Input__Valid__1naKw",Invalid:"Input__Invalid__38X2d"}},165:function(r,e,n){var t=n(166);"string"===typeof t&&(t=[[r.i,t,""]]);var a={hmr:!1};a.transform=void 0;n(147)(t,a);t.locals&&(r.exports=t.locals)},166:function(r,e,n){e=r.exports=n(146)(!0),e.push([r.i,".ContactData__ContactData__1whvJ{width:100%;height:100%;text-align:center;text-transform:capitalize;display:-ms-flexbox;display:flex}@media(max-width:550px){.ContactData__ContactData__1whvJ{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}}.ContactData__ContactData__1whvJ h3{font-size:2.5rem;width:60%;margin:auto;padding:.5rem;color:var(--color-theme-dark);border:2px solid var(--color-theme-dark);border-radius:25px;background-color:#dad735;-webkit-box-shadow:2px 2px 2px var(--color-theme-dark);box-shadow:2px 2px 2px var(--color-theme-dark)}.ContactData__Sidebar__CVaaA{width:30%;height:100%;background-color:var(--color-theme-light);border-right:2px solid var(--color-theme-dark);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media(max-width:1100px) and (min-height:601px){.ContactData__Sidebar__CVaaA{width:40%}}@media(max-width:700px) and (min-height:601px){.ContactData__Sidebar__CVaaA{width:45%}}@media(max-width:550px){.ContactData__Sidebar__CVaaA{width:100%;height:auto;padding:2rem;border-right:none;border-bottom:2px solid var(--color-theme-dark)}}@media(max-width:900px){.ContactData__ContactData__1whvJ h3{width:80%}}@media(max-width:400px){.ContactData__ContactData__1whvJ h3{width:80%}}.ContactData__ContactForm__2hsh5{width:100%;-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:scroll}.ContactData__ContactForm__2hsh5 Button{font-size:1.75rem;padding:1rem 2rem;letter-spacing:1px;border:1px solid var(--color-black);border-radius:25px;-webkit-box-shadow:2px 2px 2px var(--color-black);box-shadow:2px 2px 2px var(--color-black);background-color:green;color:#fff}","",{version:3,sources:["C:/Users/Nischal Nikit/Desktop/Elevate Labs/4.BurgerBuilder/src/containers/Checkout/ContactData/ContactData.css"],names:[],mappings:"AAAA,iCACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,0BAA2B,AAC3B,oBAAqB,AACrB,YAAc,CACjB,AAED,wBACI,iCACG,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC7B,CACJ,AAED,oCACI,iBAAkB,AAClB,UAAW,AACX,YAAa,AACb,cAAgB,AAChB,8BAA+B,AAC/B,yCAA0C,AAC1C,mBAAoB,AACpB,yBAA0B,AAC1B,uDAAwD,AAChD,8CAAgD,CAC3D,AAED,6BACI,UAAW,AACX,YAAa,AACb,0CAA2C,AAC3C,+CAAgD,AAChD,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CAC3B,AAED,gDACI,6BACI,SAAW,CACd,CACJ,AAED,+CACI,6BACI,SAAW,CACd,CACJ,AAED,wBACI,6BACG,WAAY,AACZ,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,+CAAiD,CACnD,CACJ,AAGD,wBACI,oCACE,SAAW,CACZ,CACJ,AAED,wBACI,oCACE,SAAW,CACZ,CACJ,AAED,iCACI,WAAY,AACZ,aAAa,AACT,SAAS,AACb,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,iBAAmB,CACtB,AAED,wCACI,kBAAmB,AACnB,kBAAmB,AACnB,mBAAoB,AAEpB,oCAAqC,AACrC,mBAAoB,AACpB,kDAAmD,AAC3C,0CAA2C,AACnD,uBAAwB,AACxB,UAAa,CAChB",file:"ContactData.css",sourcesContent:[".ContactData{\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n@media(max-width: 550px){\r\n    .ContactData{\r\n       display: -ms-flexbox;\r\n       display: flex;\r\n       -ms-flex-direction: column;\r\n           flex-direction: column;\r\n    }\r\n}\r\n\r\n.ContactData h3{\r\n    font-size: 2.5rem;\r\n    width: 60%;\r\n    margin: auto;\r\n    padding: 0.5rem;\r\n    color: var(--color-theme-dark);\r\n    border: 2px solid var(--color-theme-dark);\r\n    border-radius: 25px;\r\n    background-color: #DAD735;\r\n    -webkit-box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n            box-shadow: 2px 2px 2px var(--color-theme-dark);\r\n}\r\n\r\n.Sidebar{\r\n    width: 30%;\r\n    height: 100%;\r\n    background-color: var(--color-theme-light);\r\n    border-right: 2px solid var(--color-theme-dark);\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n\r\n@media(max-width: 1100px) and (min-height: 601px){\r\n    .Sidebar{\r\n        width: 40%;\r\n    }\r\n}\r\n\r\n@media(max-width: 700px) and (min-height: 601px){\r\n    .Sidebar{\r\n        width: 45%;\r\n    }\r\n}\r\n\r\n@media(max-width: 550px){\r\n    .Sidebar{\r\n       width: 100%;\r\n       height: auto;\r\n       padding: 2rem;\r\n       border-right: none;\r\n       border-bottom: 2px solid var(--color-theme-dark);\r\n    }\r\n}\r\n\r\n\r\n@media(max-width: 900px){\r\n    .ContactData h3{\r\n      width: 80%;\r\n    }\r\n}\r\n\r\n@media(max-width: 400px){\r\n    .ContactData h3{\r\n      width: 80%;\r\n    }\r\n}\r\n\r\n.ContactForm{\r\n    width: 100%;\r\n    -ms-flex:1 1;\r\n        flex:1 1;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.ContactForm Button {\r\n    font-size: 1.75rem;\r\n    padding: 1rem 2rem;\r\n    letter-spacing: 1px;\r\n\r\n    border: 1px solid var(--color-black);\r\n    border-radius: 25px;\r\n    -webkit-box-shadow: 2px 2px 2px var(--color-black);\r\n            box-shadow: 2px 2px 2px var(--color-black);\r\n    background-color: green;\r\n    color: white;\r\n}\r\n\r\n"],sourceRoot:""}]),e.locals={ContactData:"ContactData__ContactData__1whvJ",Sidebar:"ContactData__Sidebar__CVaaA",ContactForm:"ContactData__ContactForm__2hsh5"}}});
//# sourceMappingURL=0.733aab2e.chunk.js.map