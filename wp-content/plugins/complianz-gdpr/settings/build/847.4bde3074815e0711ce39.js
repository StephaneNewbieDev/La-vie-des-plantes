"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[847,9091,9758,5228,2489,4759,2921],{99091:(e,t,n)=>{n.r(t),n.d(t,{UseCookieScanData:()=>c});var a=n(81621),r=n(9588);const c=(0,a.vt)(((e,t)=>({initialLoadCompleted:!1,setInitialLoadCompleted:t=>e({initialLoadCompleted:t}),iframeLoaded:!1,loading:!1,nextPage:!1,progress:0,cookies:[],lastLoadedIframe:"",setIframeLoaded:t=>e({iframeLoaded:t}),setLastLoadedIframe:t=>e((e=>({lastLoadedIframe:t}))),setProgress:t=>e({progress:t}),fetchProgress:()=>(e({loading:!0}),r.doAction("get_scan_progress",{}).then((t=>(e({initialLoadCompleted:!0,loading:!1,nextPage:t.next_page,progress:t.progress,cookies:t.cookies}),t))))})))},79758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(51609),r=n(86087),c=n(9588),l=n(4219),s=n(52043),o=n(56427),i=n(99091),d=n(32828);const u=(0,r.memo)((({type:e="action",style:t="tertiary",label:n,onClick:u,href:p="",target:m="",disabled:h,action:f,field:g,children:b})=>{if(!n&&!b)return null;const _=(g&&g.button_text?g.button_text:n)||b,{fetchFieldsData:E,showSavedSettingsNotice:k}=(0,l.default)(),{setInitialLoadCompleted:v,setProgress:y}=(0,i.UseCookieScanData)(),{setProgressLoaded:C}=(0,d.default)(),{selectedSubMenuItem:w}=(0,s.default)(),[A,N]=(0,r.useState)(!1),z=`button cmplz-button button--${t} button-${e}`,S=async e=>{await c.doAction(g.action,{}).then((e=>{e.success&&(E(w),"reset_settings"===e.id&&(v(!1),y(0),C(!1)),k(e.message))}))},x=g&&g.warn?g.warn:"";return"action"===e?(0,a.createElement)(a.Fragment,null,o.__experimentalConfirmDialog&&(0,a.createElement)(o.__experimentalConfirmDialog,{isOpen:A,onConfirm:async()=>{N(!1),await S()},onCancel:()=>{N(!1)}},x),(0,a.createElement)("button",{className:z,onClick:async t=>{if("action"!==e||!u)return"action"===e&&f?o.__experimentalConfirmDialog?void(g&&g.warn?N(!0):await S()):void await S():void(window.location.href=g.url);u(t)},disabled:h},_)):"link"===e?(0,a.createElement)("a",{className:z,href:p,target:m},_):void 0}))},81366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(51609),r=n(58168),c=n(91071),l=n(62133),s=n(9957),o=n(81351),i=n(85357),d=n(31769),u=n(7971),p=n(12579);const m="Checkbox",[h,f]=(0,l.A)(m),[g,b]=h(m),_=(0,a.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,name:l,checked:i,defaultChecked:d,required:u,disabled:m,value:h="on",onCheckedChange:f,...b}=e,[_,y]=(0,a.useState)(null),C=(0,c.s)(t,(e=>y(e))),w=(0,a.useRef)(!1),A=!_||Boolean(_.closest("form")),[N=!1,z]=(0,o.i)({prop:i,defaultProp:d,onChange:f}),S=(0,a.useRef)(N);return(0,a.useEffect)((()=>{const e=null==_?void 0:_.form;if(e){const t=()=>z(S.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[_,z]),(0,a.createElement)(g,{scope:n,state:N,disabled:m},(0,a.createElement)(p.sG.button,(0,r.A)({type:"button",role:"checkbox","aria-checked":k(N)?"mixed":N,"aria-required":u,"data-state":v(N),"data-disabled":m?"":void 0,disabled:m,value:h},b,{ref:C,onKeyDown:(0,s.m)(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:(0,s.m)(e.onClick,(e=>{z((e=>!!k(e)||!e)),A&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())}))})),A&&(0,a.createElement)(E,{control:_,bubbles:!w.current,name:l,value:h,checked:N,required:u,disabled:m,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:n,bubbles:c=!0,...l}=e,s=(0,a.useRef)(null),o=(0,i.Z)(n),u=(0,d.X)(t);return(0,a.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked").set;if(o!==n&&a){const t=new Event("click",{bubbles:c});e.indeterminate=k(n),a.call(e,!k(n)&&n),e.dispatchEvent(t)}}),[o,n,c]),(0,a.createElement)("input",(0,r.A)({type:"checkbox","aria-hidden":!0,defaultChecked:!k(n)&&n},l,{tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function k(e){return"indeterminate"===e}function v(e){return k(e)?"indeterminate":e?"checked":"unchecked"}const y=_,C=(0,a.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,forceMount:c,...l}=e,s=b("CheckboxIndicator",n);return(0,a.createElement)(u.C,{present:c||k(s.state)||!0===s.state},(0,a.createElement)(p.sG.span,(0,r.A)({"data-state":v(s.state),"data-disabled":s.disabled?"":void 0},l,{ref:t,style:{pointerEvents:"none",...e.style}})))}));var w=n(27723),A=n(45111),N=n(86087),z=n(79758);const S=(0,N.memo)((({indeterminate:e,label:t,value:n,id:r,onChange:c,required:l,disabled:s,options:o={}})=>{const[i,d]=(0,N.useState)(!1),[u,p]=(0,N.useState)(!1);let m=n;Array.isArray(m)||(m=""===m?[]:[m]),(0,N.useEffect)((()=>{let e=1===Object.keys(o).length&&"true"===Object.keys(o)[0];d(e)}),[]),e&&(n=!0);const h=m;let f=!1;Object.keys(o).length>10&&(f=!0);const g=e=>i?n:h.includes(""+e)||h.includes(parseInt(e)),b=()=>{p(!u)};let _=s&&!Array.isArray(s);return 0===Object.keys(o).length?(0,a.createElement)(a.Fragment,null,(0,w.__)("No options found","complianz-gdpr")):(0,a.createElement)("div",{className:"cmplz-checkbox-group"},Object.entries(o).map((([o,d],p)=>(0,a.createElement)("div",{key:o,className:"cmplz-checkbox-group__item"+(!u&&p>9?" cmplz-hidden":"")},(0,a.createElement)(y,{className:"cmplz-checkbox-group__checkbox",id:r+"_"+o,checked:g(o),"aria-label":t,disabled:_||Array.isArray(s)&&s.includes(o),required:l,onCheckedChange:e=>((e,t)=>{if(i)c(!n);else{const e=h.includes(""+t)||h.includes(parseInt(t))?h.filter((e=>e!==""+t&&e!==parseInt(t))):[...h,t];c(e)}})(0,o)},(0,a.createElement)(C,{className:"cmplz-checkbox-group__indicator"},(0,a.createElement)(A.default,{name:e?"indeterminate":"check",size:14,color:"dark-blue"}))),(0,a.createElement)("label",{className:"cmplz-checkbox-group__label",htmlFor:r+"_"+o},d)))),!u&&f&&(0,a.createElement)(z.default,{onClick:()=>b()},(0,w.__)("Show more","complianz-gdpr")),u&&f&&(0,a.createElement)(z.default,{onClick:()=>b()},(0,w.__)("Show less","complianz-gdpr")))}))},25228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(51609),r=n(86087),c=n(45296),l=n(45111),s=n(27723);const o=(0,r.memo)((({value:e=!1,onChange:t,required:n,defaultValue:r,disabled:o,options:i={},canBeEmpty:d=!0,label:u})=>{if(Array.isArray(i)){let e={};i.map((t=>{e[t.value]=t.label})),i=e}return d?(""===e||!1===e||0===e)&&(e="0",i={0:(0,s.__)("Select an option","complianz-gdpr"),...i}):e||(e=Object.keys(i)[0]),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-select-group",key:u},(0,a.createElement)(c.bL,{value:e,defaultValue:r,onValueChange:t,required:n,disabled:o&&!Array.isArray(o)},(0,a.createElement)(c.l9,{className:"cmplz-select-group__trigger"},(0,a.createElement)(c.WT,null),(0,a.createElement)(l.default,{name:"chevron-down"})),(0,a.createElement)(c.UC,{className:"cmplz-select-group__content",position:"popper"},(0,a.createElement)(c.PP,{className:"cmplz-select-group__scroll-button"},(0,a.createElement)(l.default,{name:"chevron-up"})),(0,a.createElement)(c.LM,{className:"cmplz-select-group__viewport"},(0,a.createElement)(c.YJ,null,Object.entries(i).map((([e,t])=>(0,a.createElement)(c.q7,{disabled:Array.isArray(o)&&o.includes(e),className:"cmplz-select-group__item",key:e,value:e},(0,a.createElement)(c.p4,null,t)))))),(0,a.createElement)(c.wn,{className:"cmplz-select-group__scroll-button"},(0,a.createElement)(l.default,{name:"chevron-down"})))))}))},10800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(51609),r=n(86087),c=n(58168),l=n(9957),s=n(91071),o=n(62133),i=n(81351),d=n(85357),u=n(31769),p=n(12579);const m="Switch",[h,f]=(0,o.A)(m),[g,b]=h(m),_=(0,a.forwardRef)(((e,t)=>{const{__scopeSwitch:n,name:r,checked:o,defaultChecked:d,required:u,disabled:m,value:h="on",onCheckedChange:f,...b}=e,[_,v]=(0,a.useState)(null),y=(0,s.s)(t,(e=>v(e))),C=(0,a.useRef)(!1),w=!_||Boolean(_.closest("form")),[A=!1,N]=(0,i.i)({prop:o,defaultProp:d,onChange:f});return(0,a.createElement)(g,{scope:n,checked:A,disabled:m},(0,a.createElement)(p.sG.button,(0,c.A)({type:"button",role:"switch","aria-checked":A,"aria-required":u,"data-state":k(A),"data-disabled":m?"":void 0,disabled:m,value:h},b,{ref:y,onClick:(0,l.m)(e.onClick,(e=>{N((e=>!e)),w&&(C.current=e.isPropagationStopped(),C.current||e.stopPropagation())}))})),w&&(0,a.createElement)(E,{control:_,bubbles:!C.current,name:r,value:h,checked:A,required:u,disabled:m,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:n,bubbles:r=!0,...l}=e,s=(0,a.useRef)(null),o=(0,d.Z)(n),i=(0,u.X)(t);return(0,a.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked").set;if(o!==n&&a){const t=new Event("click",{bubbles:r});a.call(e,n),e.dispatchEvent(t)}}),[o,n,r]),(0,a.createElement)("input",(0,c.A)({type:"checkbox","aria-hidden":!0,defaultChecked:n},l,{tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function k(e){return e?"checked":"unchecked"}const v=_,y=(0,a.forwardRef)(((e,t)=>{const{__scopeSwitch:n,...r}=e,l=b("SwitchThumb",n);return(0,a.createElement)(p.sG.span,(0,c.A)({"data-state":k(l.checked),"data-disabled":l.disabled?"":void 0},r,{ref:t}))}));var C=n(4219);const w=(0,r.memo)((({value:e,onChange:t,required:n,disabled:r,className:c,label:l,id:s})=>{const{getField:o}=(0,C.default)();let i=e;return"0"!==e&&"1"!==e||(i="1"===e),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-switch-group"},(0,a.createElement)(v,{className:"cmplz-switch-root "+c,checked:i,onCheckedChange:e=>{"banner"===o(s).data_target&&(e=e?"1":"0"),t(e)},disabled:r,required:n},(0,a.createElement)(y,{className:"cmplz-switch-thumb"})))}))},32489:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(51609);const r=(0,a.memo)((({value:e,onChange:t,required:n,disabled:r,id:c,name:l,placeholder:s})=>{const o=c||l,[i,d]=(0,a.useState)("");return(0,a.useEffect)((()=>{d(e||"")}),[e]),(0,a.useEffect)((()=>{if(e===i)return;const n=setTimeout((()=>{t(i)}),400);return()=>{clearTimeout(n)}}),[i]),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-text-input-group"},(0,a.createElement)("input",{type:"text",id:o,name:l,value:i,onChange:e=>(e=>{d(e)})(e.target.value),required:n,disabled:r,className:"cmplz-text-input-group__input",placeholder:s}))}))},34759:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(81621),r=n(16535),c=n(9588);const l=(0,a.vt)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,n)=>{e((0,r.Ay)((e=>{if("block_script"===n){let n=e.blockedScripts;if(t.urls){for(const[e,a]of Object.entries(t.urls)){if(!a||0===a.length)continue;let e=!1;for(const[t,r]of Object.entries(n))a===t&&(e=!0);e||(n[a]=a)}e.blockedScripts=n}}const a=e.scripts[n].findIndex((e=>e.id===t.id));-1!==a&&(e.scripts[n][a]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:n,plugins:a,scripts:r,placeholders:c,blocked_scripts:l}=await s();let o=r;o.block_script&&o.block_script.length>0&&o.block_script.forEach(((e,t)=>{e.id=t})),o.add_script&&o.add_script.length>0&&o.add_script.forEach(((e,t)=>{e.id=t})),o.whitelist_script&&o.whitelist_script.length>0&&o.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:n,plugins:a,scripts:o,fetching:!1,placeholders:c,blockedScripts:l})))},addScript:n=>{e({fetching:!0}),t().scripts[n]&&Array.isArray(t().scripts[n])||e((0,r.Ay)((e=>{e.scripts[n]=[]}))),e((0,r.Ay)((e=>{e.scripts[n].push({name:"general",id:e.scripts[n].length,enable:!0})})));let a=t().scripts;return c.doAction("update_scripts",{scripts:a}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(n,a)=>{e({fetching:!0}),t().scripts[a]&&Array.isArray(t().scripts[a])||e((0,r.Ay)((e=>{e.scripts[a]=[]}))),e((0,r.Ay)((e=>{const t=e.scripts[a].findIndex((e=>e.id===n.id));-1!==t&&(e.scripts[a][t]=n)})));let l=t().scripts;return c.doAction("update_scripts",{scripts:l}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(n,a)=>{e({fetching:!0}),t().scripts[a]&&Array.isArray(t().scripts[a])||e((0,r.Ay)((e=>{e.scripts[a]=[]}))),e((0,r.Ay)((e=>{const t=e.scripts[a].findIndex((e=>e.id===n.id));-1!==t&&e.scripts[a].splice(t,1)})));let l=t().scripts;return c.doAction("update_scripts",{scripts:l}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,n)=>{e({fetching:!0}),e((0,r.Ay)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].enabled=n)})));const a=await c.doAction("update_plugin_status",{plugin:t,enabled:n}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),a},updatePlaceholderStatus:async(t,n,a)=>{e({fetching:!0}),a&&e((0,r.Ay)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].placeholder=n?"enabled":"disabled")})));const l=await c.doAction("update_placeholder_status",{id:t,enabled:n}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),l}}))),s=()=>c.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},60847:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(51609),r=(n(10800),n(32921)),c=n(32489),l=n(25228),s=n(27723),o=n(34759),i=n(81366);const d=e=>{const{setScript:t,fetching:n,placeholders:d}=(0,o.default)(),u=e.script,p=e.type,m=(n,a)=>{let r={...u};r[a]=n,t(r,e.type)};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)("label",null,(0,s.__)("Placeholder","complianz-gdpr")),(0,a.createElement)(i.default,{id:u.id+"placeholder",disabled:n,value:u.enable_placeholder,onChange:e=>m(e,"enable_placeholder"),options:{true:(0,s.__)("Enable placeholder","complianz-gdpr")}})),!!u.enable_placeholder&&(0,a.createElement)(a.Fragment,null,"block_script"===p&&(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)(i.default,{id:u.id+"iframe",disabled:n,value:u.iframe||"",onChange:e=>m(e||"","iframe"),options:{true:(0,s.__)("The blocked content is an iframe","complianz-gdpr")}})),!u.iframe&&(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row"},(0,a.createElement)("p",null,(0,s.__)("Enter the div class or ID that should be targeted.","complianz-gdpr"),(0,r.default)("https://complianz.io/integrating-plugins/#placeholder/")),(0,a.createElement)(c.default,{disabled:n,value:u.placeholder_class||"",onChange:e=>m(e||"","placeholder_class"),name:"placeholder_class",placeholder:(0,s.__)("Your CSS class","complianz-gdpr")})),(0,a.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,a.createElement)(l.default,{disabled:n,value:u.placeholder?u.placeholder:"default",options:d,onChange:e=>m(e||"default","placeholder")}))))}},32921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(51609),r=n(27723),c=n(44124);const l=e=>(0,a.createElement)(a.Fragment,null," ",(0,a.createElement)(c.default,{url:e,target:"_blank",rel:"noopener noreferrer",text:(0,r.__)("For more information, please read this %sarticle%s.","complianz-gdpr")})," ")},7971:(e,t,n)=>{n.d(t,{C:()=>s});var a=n(51609),r=n(75795),c=n(91071),l=n(88200);const s=e=>{const{present:t,children:n}=e,s=function(e){const[t,n]=(0,a.useState)(),c=(0,a.useRef)({}),s=(0,a.useRef)(e),i=(0,a.useRef)("none"),d=e?"mounted":"unmounted",[u,p]=function(e,t){return(0,a.useReducer)(((e,n)=>{const a=t[e][n];return null!=a?a:e}),e)}(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,a.useEffect)((()=>{const e=o(c.current);i.current="mounted"===u?e:"none"}),[u]),(0,l.N)((()=>{const t=c.current,n=s.current;if(n!==e){const a=i.current,r=o(t);e?p("MOUNT"):"none"===r||"none"===(null==t?void 0:t.display)?p("UNMOUNT"):p(n&&a!==r?"ANIMATION_OUT":"UNMOUNT"),s.current=e}}),[e,p]),(0,l.N)((()=>{if(t){const e=e=>{const n=o(c.current).includes(e.animationName);e.target===t&&n&&(0,r.flushSync)((()=>p("ANIMATION_END")))},n=e=>{e.target===t&&(i.current=o(c.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}p("ANIMATION_END")}),[t,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:(0,a.useCallback)((e=>{e&&(c.current=getComputedStyle(e)),n(e)}),[])}}(t),i="function"==typeof n?n({present:s.isPresent}):a.Children.only(n),d=(0,c.s)(s.ref,i.ref);return"function"==typeof n||s.isPresent?(0,a.cloneElement)(i,{ref:d}):null};function o(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"}}]);