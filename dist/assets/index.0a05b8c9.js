import{c as e,a as t,r,o as n,b as i,d as o}from"./vendor.8c681a18.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s={},l=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/line-liff-v2-bind-mail-vite/dist/${e}`)in s)return;s[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},a=[{path:"/",name:"BindMail",component:()=>l((()=>import("./BindMail.0377c23c.js")),["assets/BindMail.0377c23c.js","assets/vendor.8c681a18.js"])},{path:"/validate",name:"Validate",component:()=>l((()=>import("./Validate.f1e813af.js")),["assets/Validate.f1e813af.js","assets/vendor.8c681a18.js"])}];var c=e({history:t("/line-liff-v2-bind-mail-vite/dist/"),routes:a});const d=o({setup:e=>(e,t)=>{const o=r("router-view");return n(),i(o)}});d.use(c),d.mount("#app");
