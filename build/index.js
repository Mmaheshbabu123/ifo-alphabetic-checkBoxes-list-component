/*! For license information please see index.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["React"],r):"object"==typeof exports?exports.YourLibraryName=r(require("react")):e.YourLibraryName=r(e.React)}(self,(e=>(()=>{var r={523:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var n=t(601),o=t.n(n),a=t(314),c=t.n(a)()(o());c.push([e.id,'.cardHeader\n{\n  font-family: "Sofia pro regular";\n  /* font-size: var(--font-size-20px); */\n  line-height: 1.875rem;\n  color:  #475969 ;\n  font-weight: normal;\n  background-color: #4759690D;\n}\n.cardBody\n{\n  min-height: 2rem;\n  font-family: "Sofia pro Light";\n  color:  #475969 ;\n  max-height: 8rem;\n  overflow: auto;\n}\n\n.FilterButton\n{\n  background-color: #FFFFFF !important;\n  margin: 0.2rem 0.2rem;\n  border: none;\n  /* font-size: var(--font-size-18px); */\n  line-height: 1.4375rem;\n  font-family: "Sofia pro regular";\n  color: #475969;\n}\n.FilterButton:nth-child(1),\n.FilterCategory .cardTitle .FilterButton:nth-child(1)\n{\n  margin: 0.2rem 0rem !important;\n}\n.button:focus\n{\n  background: #475969;\n}\n.button:active\n{\n  background: #475969;\n}\n.cardTitle .FilterButton:disabled\n{\n  color:#47596966 !important;\n  font-family: "Sofia pro regular";\n  /* font-size: var(--font-size-18px); */\n  line-height: 1.4375rem;\n  font-weight: normal;\n}\n.FilterCategory .cardTitle .FilterButton\n{\n    margin:0.2rem 0.5rem !important;\n}\n.Checkbox__alignment input[type="checkbox"]\n{\n  position: relative;\n  top: 3px;\n}\n@media screen and (min-width:0px) and (max-width:1399px)\n{\n  .FilterButton,\n  .FilterCategory .cardTitle .FilterButton\n  {\n    width: 53px;\n    text-align: center;\n    margin: 0.2rem 0rem !important;\n  }\n}\n.FilterButtonWikionActive_1\n{\n  background-color: #475969 !important;\n  color: #FFFFFFB3 !important;\n  border-radius: 3px !important;\n}\n.filter__checkbox,\n.filter__checkbox:checked,\n.checkbox--blue .form_check_input:checked,\n.Createtodo__checkbox .form_check_input:checked,\n.filter__checkbox .form_check_input:checked[type="checkbox"],\n.CreateSprint--selectTodo .form_check_input:checked[type="checkbox"],\n.checkbox-blue .form_check_input:checked[type="checkbox"] {\n  background-color: var(--color-blue) !important;\n  border-color: var(--color-blue) !important;\n  width: 1em;\n  height: 1em;\n}\n',""]);const i=c},314:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},601:e=>{"use strict";e.exports=function(e){return e[1]}},694:(e,r,t)=>{"use strict";var n=t(925);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,a,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},556:(e,r,t)=>{e.exports=t(694)()},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},20:(e,r,t)=>{"use strict";var n=t(156),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var n,l={},s=null,u=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:u,props:l,_owner:c.current}}},848:(e,r,t)=>{"use strict";e.exports=t(20)},72:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=n.base?l[0]+n.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var f=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)r[f].references++,r[f].updater(m);else{var p=o(m,n);n.byIndex=i,r.splice(i,0,{identifier:d,updater:p,references:1})}c.push(d)}return c}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);r[i].references--}for(var l=n(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=l}}},659:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},56:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},113:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},156:r=>{"use strict";r.exports=e},942:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=c(e,a(t)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)n.call(e,t)&&e[t]&&(r=c(r,t));return r}function c(e,r){return r?e?e+" "+r:e+r:e}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return r[e](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";n.r(o),n.d(o,{default:()=>oe});var e=n(156),r=n.n(e),t=n(942),a=n.n(t),c=n(848);const i=e.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:l,Provider:s}=i;function u(r,t){const{prefixes:n}=(0,e.useContext)(i);return r||n[t]||t}const d=e.forwardRef((({className:e,bsPrefix:r,as:t="div",...n},o)=>(r=u(r,"card-body"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));d.displayName="CardBody";const f=d,m=e.forwardRef((({className:e,bsPrefix:r,as:t="div",...n},o)=>(r=u(r,"card-footer"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));m.displayName="CardFooter";const p=m,b=e.createContext(null);b.displayName="CardHeaderContext";const y=b,h=e.forwardRef((({bsPrefix:r,className:t,as:n="div",...o},i)=>{const l=u(r,"card-header"),s=(0,e.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,c.jsx)(y.Provider,{value:s,children:(0,c.jsx)(n,{ref:i,...o,className:a()(t,l)})})}));h.displayName="CardHeader";const v=h,g=e.forwardRef((({bsPrefix:e,className:r,variant:t,as:n="img",...o},i)=>{const l=u(e,"card-img");return(0,c.jsx)(n,{ref:i,className:a()(t?`${l}-${t}`:l,r),...o})}));g.displayName="CardImg";const x=g,k=e.forwardRef((({className:e,bsPrefix:r,as:t="div",...n},o)=>(r=u(r,"card-img-overlay"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));k.displayName="CardImgOverlay";const N=k,_=e.forwardRef((({className:e,bsPrefix:r,as:t="a",...n},o)=>(r=u(r,"card-link"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));_.displayName="CardLink";const S=_,C=r=>e.forwardRef(((e,t)=>(0,c.jsx)("div",{...e,ref:t,className:a()(e.className,r)}))),w=C("h6"),O=e.forwardRef((({className:e,bsPrefix:r,as:t=w,...n},o)=>(r=u(r,"card-subtitle"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));O.displayName="CardSubtitle";const j=O,E=e.forwardRef((({className:e,bsPrefix:r,as:t="p",...n},o)=>(r=u(r,"card-text"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));E.displayName="CardText";const P=E,A=C("h5"),F=e.forwardRef((({className:e,bsPrefix:r,as:t=A,...n},o)=>(r=u(r,"card-title"),(0,c.jsx)(t,{ref:o,className:a()(e,r),...n}))));F.displayName="CardTitle";const T=F,R=e.forwardRef((({bsPrefix:e,className:r,bg:t,text:n,border:o,body:i=!1,children:l,as:s="div",...d},m)=>{const p=u(e,"card");return(0,c.jsx)(s,{ref:m,...d,className:a()(r,p,t&&`bg-${t}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,c.jsx)(f,{children:l}):l})}));R.displayName="Card";const B=Object.assign(R,{Img:x,Title:T,Subtitle:j,Body:f,Link:S,Text:P,Header:v,Footer:p,ImgOverlay:N});var I=n(556),L=n.n(I),M=n(72),D=n.n(M),H=n(825),q=n.n(H),U=n(659),$=n.n(U),W=n(56),z=n.n(W),Y=n(540),J=n.n(Y),K=n(113),V=n.n(K),G=n(523),Q={};function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){re(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function re(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=X(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=X(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==X(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function te(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function ne(t){var n,o,a=t.selectIds,c=t.itemList,i=t.handleCheck,l=t.handleSelectAll,s=t.isAllSelected,u=(n=(0,e.useState)({alphabet:"All",activateKey:0}),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,c,i=[],l=!0,s=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(n,o)||function(e,r){if(e){if("string"==typeof e)return te(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?te(e,r):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=u[0],f=u[1],m=function(e){e.target.value,f(ee(ee({},d),{alphabet:e.target.value}))};return r().createElement(r().Fragment,null,r().createElement(B,{className:"card border-0"},r().createElement(B.Header,{className:"cardHeader border-0"},r().createElement("div",{className:"d-flex"})),r().createElement(B.Title,{className:"cardTitle border mb-0 rounded-top"},r().createElement("div",{className:"ps-3 border-blue"},function(){var e,t=[],n=(e=[],void 0!==c&&(e=c.map((function(e){var r;return null===(r=e.label)||void 0===r?void 0:r.charAt(0).toUpperCase()}))),e),o=d.alphabet,a="All"===o?1:0;t.push(r().createElement("button",{className:"py-1 FilterButton  ".concat(1===a?"FilterButtonWikionActive_1":""),type:"button",onClick:m,value:"All",key:"All"},"All"));for(var i=65;i<91;i++){var l=o===String.fromCharCode(i)?1:0;t.push(r().createElement("button",{className:"py-1 FilterButton ".concat(1===l?"FilterButtonWikionActive_1":""),type:"button",onClick:m,value:String.fromCharCode(i),key:String.fromCharCode(i),disabled:!n.includes(String.fromCharCode(i))},String.fromCharCode(i)))}return r().createElement(r().Fragment,null,t)}())),r().createElement(B.Body,{className:"cardBody border border-top-0 rounded-bottom"},r().createElement("div",null,c.length>0?r().createElement("div",{className:"row"},function(e){var t=d.alphabet,n=e||[];"All"!==t&&n&&t&&(n=n.filter((function(e){var r;return(null===(r=e.label)||void 0===r?void 0:r.charAt(0).toLowerCase())===t.toLowerCase()}))),n.sort((function(e,r){return e.label.localeCompare(r.label)}));var o=Math.max(0/n.length,4);return r().createElement(r().Fragment,null,r().createElement("div",{key:"selectAll",className:"col-md-".concat(o," mb-3 word-break")},r().createElement("div",{className:"form-check"},r().createElement("input",{className:"form_check_input shadow-none rounded-0 filter__checkbox} border-blue",type:"checkbox",value:"",id:"selectAll",onChange:l,checked:s}),r().createElement("label",{className:"form-check-label",htmlFor:"selectAll"},"Select All"))),n.map((function(e){var t=e.value,n=e.label;return r().createElement("div",{key:t,className:"col-md-".concat(o," mb-3 word-break")},r().createElement("div",{className:"form-check "},r().createElement("input",{className:"form_check_input shadow-none rounded-0 filter__checkbox border-blue",type:"checkbox",value:"",id:t,onChange:i,checked:s||a&&a.includes(t.toString())}),r().createElement("label",{className:"form-check-label",htmlFor:t},n)))})))}(c)):r().createElement("div",{className:"text-danger text-center"},"No result found")))))}Q.styleTagTransform=V(),Q.setAttributes=z(),Q.insert=$().bind(null,"head"),Q.domAPI=q(),Q.insertStyleElement=J(),D()(G.A,Q),G.A&&G.A.locals&&G.A.locals,ne.propTypes={selectIds:L().arrayOf(L().string).isRequired,itemList:L().arrayOf(L().string).isRequired,handleCheck:L().func.isRequired,handleSelectAll:L().func.isRequired,isAllSelected:L().func.isRequired};const oe=ne})(),o})()));