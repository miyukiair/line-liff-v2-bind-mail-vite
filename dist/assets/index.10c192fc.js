import{a as e,r as t,o,b as l,c as n,d as a,F as s,t as r,w as c,v as i,p as u,e as f,f as p,g as d,h as v}from"./vendor.c2cc40ca.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m=(e,t)=>{for(const[o,l]of t)e[o]=l;return e};const y=(e=>(u("data-v-a773a670"),e=e(),f(),e))((()=>a("h1",null,"驗證碼小幫手 - 身份認證",-1))),g=p("發送身份認證碼到 "),h={key:2,class:"error"};var b=m({setup(u){const f=t(""),p=t(""),d=t(""),v=t(""),m=t(""),b=e=>{alert(e)},k=()=>{let t=d.value.length>0?d.value:v.value;((t,o,l)=>{let n={name:t,email:o,token:l};return e.create({headers:{"Content-Type":"application/x-www-form-encoded"}}).post("https://script.google.com/macros/s/AKfycbxpx6GgQiGJYGeR0t8jO2NvTqnM02k8sinIHXGWlnqsx3tyYVWNlDBSUqiBdlKG_bAsYg/exec",n).then((e=>e||Promise.reject()))})(f.value,t,p.value).then((e=>{console.log("res: ",e)})).catch((e=>{console.log("err: ",e)}))};return o((()=>{liff.init({liffId:"1656419833-74JqODyP"}).then((()=>{(()=>{if(liff.isLoggedIn()&&liff.isInClient()){const e=liff.getDecodedIDToken();f.value=e&&e.name,p.value=e&&e.sub,d.value=e&&e.email}else m.value="please use line liff open"})()})).catch((e=>{console.log(e),m.value="initialize LIFF fail"}))})),(e,t)=>(l(),n(s,null,[y,a("button",{type:"button",class:"btn",onClick:t[0]||(t[0]=e=>k())},"確定"),a("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=e=>{fetch("https://script.google.com/macros/s/AKfycbxIesqiSOZvalcsUaKSv1yYWR9aaEyjkfX0A8QqWPSO4xk62If6K-yTfwRvtEOXELJk1w/exec",{method:"POST",body:{name:"123"},mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"}}).then((e=>{console.log("success:",e)})).catch((e=>{console.log("Error:"+e)}))})},"確定"),d.value&&!m.value?(l(),n(s,{key:0},[a("p",null,"將發送身份認證碼到 "+r(d.value),1),a("button",{type:"button",class:"btn",onClick:t[2]||(t[2]=e=>b(d.value))},"確定")],64)):m.value?(l(),n("p",h,r(m.value),1)):(l(),n(s,{key:1},[a("p",null,[g,c(a("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=e=>v.value=e),placeholder:"請輸入 Email"},null,512),[[i,v.value]])]),a("button",{type:"button",class:"btn",onClick:t[4]||(t[4]=e=>b(v.value))},"確定")],64))],64))}},[["__scopeId","data-v-a773a670"]]);v({setup:e=>(e,t)=>(l(),d(b))}).mount("#app");