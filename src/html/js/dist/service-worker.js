if(!self.define){let e,t={};const s=(s,i)=>(s=new URL(s+".js",i).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const d=e=>s(e,o),l={module:{uri:o},exports:r,require:d};t[o]=Promise.all(i.map((e=>l[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/html/js/dist/index.html",revision:"53157db75729d6959604d3649d5b241a"},{url:"/html/js/dist/main.js",revision:"78cb2e10a70259050d2fdfd607a3d9c2"}],{})}));