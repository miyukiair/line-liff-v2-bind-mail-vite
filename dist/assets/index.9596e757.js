import{a as e,r as t,c as l,o as s,b as n,d as o,e as a,t as r,F as i,w as u,v as c,f as p,i as d,u as f,p as m,g as y,h as v,j as g}from"./vendor.d7a5cd0d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const b=p("發送身份認證碼到 "),h={emits:["nextStep"],setup(p,{emit:d}){const f=t(""),m=t(""),y=t(""),v=t(""),g=l().email().required(),h=async t=>{await g.isValid(t)?((t,l,s)=>{let n=JSON.stringify({name:t,mail:l,token:s});return e.post("https://script.google.com/macros/s/AKfycbxpx6GgQiGJYGeR0t8jO2NvTqnM02k8sinIHXGWlnqsx3tyYVWNlDBSUqiBdlKG_bAsYg/exec",n,{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((e=>e||Promise.reject())).catch((e=>{console.log("error",e)}))})(f.value,t,m.value).then((e=>{console.log("res: ",e);const t=e.data.message;d("nextStep",t)})).catch((e=>{console.log("err: ",e)})):alert("請輸入有效的信箱地址")};return s((()=>{liff.ready.then((()=>{const e=liff.getDecodedIDToken();f.value=e&&e.name,m.value=e&&e.sub,y.value=e&&e.email}))})),(e,t)=>y.value?(n(),o(i,{key:0},[a("p",null,"將發送身份認證碼到 "+r(y.value),1),a("button",{type:"button",class:"btn",onClick:t[0]||(t[0]=e=>h(y.value))},"確定")],64)):(n(),o(i,{key:1},[a("p",null,[b,u(a("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>v.value=e),placeholder:"請輸入 Email"},null,512),[[c,v.value]])]),a("button",{type:"button",class:"btn",onClick:t[2]||(t[2]=e=>h(v.value))},"確定")],64))}},k={setup(e){const t=d("resMessage"),l=()=>{liff.closeWindow()};return(e,s)=>(n(),o(i,null,[a("p",null,r("success"===f(t)?"已將驗證碼發送至信箱":"發送失敗，請稍後再試"),1),a("button",{type:"button",class:"btn",onClick:l},"關閉")],64))}},x=a("h1",null,"驗證碼小幫手 - 身份認證",-1),w={key:1,class:"error"},I={setup(e){const l=t(""),a=t("form"),u=t("");m("resMessage",u);const c=e=>{u.value=e,a.value="result"};return s((()=>{liff.init({liffId:"1656419833-74JqODyP"}).then((()=>{liff.isLoggedIn()&&liff.isInClient()||(l.value="please use line liff open")})).catch((e=>{l.value="initialize LIFF fail"}))})),(e,t)=>(n(),o(i,null,[x,l.value?(n(),o("p",w,r(l.value),1)):(n(),y(v("form"===a.value?h:k),{key:0,onNextStep:c}))],64))}};g({setup:e=>(e,t)=>(n(),y(I))}).mount("#app");
