"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[852],{6904:(e,a,t)=>{t.d(a,{cN:()=>c,d8:()=>l,pQ:()=>s,u7:()=>i});var n=t(5043),r=t(579);const o=(0,n.lazy)((()=>t.e(906).then(t.bind(t,6906)))),c=e=>(0,r.jsx)(o,{...e});function s(e){return e=Number.parseInt(e),(!Number.isInteger(e)||e<1)&&(e=1),e}function l(e){return e=Number.parseInt(e),(!Number.isInteger(e)||e<5||e>100)&&(e=5),e}function i(e,a){const t=new URLSearchParams(window.location.search);t.set("page",s(e).toString()),t.set("per_page",l(a).toString());const n="".concat(window.location.pathname,"?").concat(t.toString());window.history.pushState({path:n},"",n)}},9055:(e,a,t)=>{t.d(a,{A:()=>r,Z:()=>n});const n=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";for(const[t,n]of Object.entries(e))a=a.replace(":".concat(t),n);return a};function r(){const e=new URLSearchParams(window.location.search),a=new Set;e.forEach(((e,t)=>{a.add(t)}));const t=Array.from(a),n=new URLSearchParams;return t.forEach((a=>n.append(a,e.get(a)))),n}},7852:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var n=t(5043),r=t(3003),o=t(5026),c=t(7150),s=t(9055);const l=()=>{const e=(0,r.wA)(),a=(0,r.d4)((e=>e.categoryReducer)),t=a.all.data,n=a.all.loading;return{allCategories:t,allCategoriesMeta:a.all.meta,allCategoriesLoading:n,getAllCategoriesLogic:function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=0===Object.keys(a).length?(0,s.A)():a,e((0,c.Cd)(!0)),o.A.get("/admin/categories",{params:a}).then((a=>{e((0,c.AV)(a.data.data)),e((0,c.FA)(a.data.meta))})).finally((()=>{e((0,c.Cd)(!1))}))}}};var i=t(6904),g=t(579);const d=(0,n.lazy)((()=>t.e(588).then(t.bind(t,3588)))),u=()=>{const{allCategories:e,getAllCategoriesLogic:a,allCategoriesMeta:t,allCategoriesLoading:r}=l(),[o,c]=(0,n.useState)((0,i.d8)()),[s,u]=(0,n.useState)((0,i.pQ)());(0,n.useEffect)((()=>{a()}),[s,o]);return(0,g.jsx)(d,{data:e,handleSearch:e=>{console.log(e)},allCategoriesLoading:r,paginationObject:{meta:t,currentPerPage:o,currentPage:s,handlePageChange:e=>{u(e),(0,i.u7)(e,o)},handlePerPageChange:e=>{c(e),(0,i.u7)(s,e),c(e)},setCurrentPageState:u}})}}}]);
//# sourceMappingURL=852.380b8f3d.chunk.js.map