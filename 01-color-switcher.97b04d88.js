const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let n=null,a=!1;t.addEventListener("click",(function(){if(a)return;a=!0,t.disabled=!0,n=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),a=!1,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.97b04d88.js.map
