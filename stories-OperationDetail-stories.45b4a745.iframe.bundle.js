"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[169],{"./src/stories/OperationDetail.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationDetail_stories});__webpack_require__("./node_modules/react/index.js");var Description=__webpack_require__("./src/shared/description/Description.tsx"),Button=__webpack_require__("./src/shared/button/Button.tsx"),MT15=__webpack_require__("./src/shared/mt15/MT15.tsx"),OperationContainer=__webpack_require__("./src/shared/icome-expenses-accounting/operation-container/OperationContainer.tsx"),Operation=__webpack_require__("./src/shared/icome-expenses-accounting/operation/Operation.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OperationDetail_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/icome-expenses-accounting/operation-detail/OperationDetail.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OperationDetail_module.Z,options);const operation_detail_OperationDetail_module=OperationDetail_module.Z&&OperationDetail_module.Z.locals?OperationDetail_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var EditButton=function EditButton(){return(0,jsx_runtime.jsx)(MT15.p,{children:(0,jsx_runtime.jsx)(Button.z,{disabled:!0,children:"Редактировать"})})};EditButton.displayName="EditButton";var OperationDetail=function OperationDetail(data){return(0,jsx_runtime.jsxs)(OperationContainer.W,{children:[(0,jsx_runtime.jsx)(Operation.O,_objectSpread({},data)),(0,jsx_runtime.jsx)(Description.d,{description:data.description}),(0,jsx_runtime.jsx)("div",{className:operation_detail_OperationDetail_module.date,children:data.date}),(0,jsx_runtime.jsx)(EditButton,{})]})};OperationDetail.displayName="OperationDetail";try{OperationDetail.displayName="OperationDetail",OperationDetail.__docgenInfo={description:"",displayName:"OperationDetail",props:{amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"number"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/icome-expenses-accounting/operation-detail/OperationDetail.tsx#OperationDetail"]={docgenInfo:OperationDetail.__docgenInfo,name:"OperationDetail",path:"src/shared/icome-expenses-accounting/operation-detail/OperationDetail.tsx#OperationDetail"})}catch(__react_docgen_typescript_loader_error){}const OperationDetail_stories={component:OperationDetail,title:"Учет доходов-расходов/Полная операция",tags:["autodocs"]};var Test={args:{amount:2999.99,category:"оплата",title:"Подписка",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis tempore cupiditate magni ad porro nihil consectetur a voluptas, rerum error, maiores rem, ut adipisci sint? Esse excepturi at non?",date:(new Date).toLocaleDateString()}};Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  args: {\n    amount: 2999.99,\n    category: 'оплата',\n    title: 'Подписка',\n    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis tempore cupiditate magni ad porro nihil consectetur a voluptas, rerum error, maiores rem, ut adipisci sint? Esse excepturi at non?',\n    date: new Date().toLocaleDateString()\n  }\n}",...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Test"]},"./src/shared/icome-expenses-accounting/operation-container/OperationContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>OperationContainer});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OperationContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/icome-expenses-accounting/operation-container/OperationContainer.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OperationContainer_module.Z,options);const operation_container_OperationContainer_module=OperationContainer_module.Z&&OperationContainer_module.Z.locals?OperationContainer_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),OperationContainer=function OperationContainer(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:operation_container_OperationContainer_module["operation-container"],children})};OperationContainer.displayName="OperationContainer";try{OperationContainer.displayName="OperationContainer",OperationContainer.__docgenInfo={description:"",displayName:"OperationContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/icome-expenses-accounting/operation-container/OperationContainer.tsx#OperationContainer"]={docgenInfo:OperationContainer.__docgenInfo,name:"OperationContainer",path:"src/shared/icome-expenses-accounting/operation-container/OperationContainer.tsx#OperationContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/icome-expenses-accounting/operation/Operation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Operation});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Operation_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/icome-expenses-accounting/operation/Operation.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Operation_module.Z,options);const operation_Operation_module=Operation_module.Z&&Operation_module.Z.locals?Operation_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Operation=function Operation(data){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:operation_Operation_module.amount,children:data.amount}),(0,jsx_runtime.jsx)("div",{className:operation_Operation_module.category,children:data.category}),(0,jsx_runtime.jsx)("div",{className:operation_Operation_module.title,children:data.title})]})};try{Operation.displayName="Operation",Operation.__docgenInfo={description:"",displayName:"Operation",props:{amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"number"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/icome-expenses-accounting/operation/Operation.tsx#Operation"]={docgenInfo:Operation.__docgenInfo,name:"Operation",path:"src/shared/icome-expenses-accounting/operation/Operation.tsx#Operation"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/icome-expenses-accounting/operation-container/OperationContainer.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".l2Kw4jiAA3qkoNz_qX0q{background-color:#fff;border:1px solid #ddd;border-radius:5px;padding:15px;margin-bottom:20px;box-shadow:0 2px 4px rgba(0,0,0,.1)}","",{version:3,sources:["webpack://./src/shared/icome-expenses-accounting/operation-container/OperationContainer.module.scss"],names:[],mappings:"AAAA,sBACE,qBAAA,CACA,qBAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,mCAAA",sourcesContent:[".operation-container {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"operation-container":"l2Kw4jiAA3qkoNz_qX0q"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/icome-expenses-accounting/operation-detail/OperationDetail.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Z6Ms_odnUcMHcvoTbYo4{font-size:.9em;color:#999;margin-top:10px}","",{version:3,sources:["webpack://./src/shared/icome-expenses-accounting/operation-detail/OperationDetail.module.scss"],names:[],mappings:"AAAA,sBACE,cAAA,CACA,UAAA,CACA,eAAA",sourcesContent:[".date {\n  font-size: 0.9em;\n  color: #999;\n  margin-top: 10px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={date:"Z6Ms_odnUcMHcvoTbYo4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/icome-expenses-accounting/operation/Operation.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.cVosQV0IofkkPzh5QZNu{font-size:1.5em;font-weight:bold;color:#4caf50}.cVosQV0IofkkPzh5QZNu::before{content:"₽"}.e7r3kS8wyaseUqpaPGwN{font-size:1.2em;color:#888;margin-top:5px}.qr6K_onEYnlA5cfgfgWv{font-size:1.3em;font-weight:bold;margin-top:10px}',"",{version:3,sources:["webpack://./src/shared/icome-expenses-accounting/operation/Operation.module.scss"],names:[],mappings:"AAAA,sBAAA,eACE,CAAA,gBACA,CAAA,aACA,CAAA,8BAEA,WACE,CAAA,sBAIJ,eACE,CAAA,UACA,CAAA,cACA,CAAA,sBAGF,eACE,CAAA,gBACA,CAAA,eACA",sourcesContent:[".amount {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #4caf50;\n\n  &::before {\n    content: '₽';\n  }\n}\n\n.category {\n  font-size: 1.2em;\n  color: #888;\n  margin-top: 5px;\n}\n\n.title {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin-top: 10px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={amount:"cVosQV0IofkkPzh5QZNu",category:"e7r3kS8wyaseUqpaPGwN",title:"qr6K_onEYnlA5cfgfgWv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);