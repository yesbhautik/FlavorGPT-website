(()=>{document.addEventListener("DOMContentLoaded",()=>{sal({threshold:.1});function v(){let e=document.getElementsByClassName("showLoggedIn"),n=document.getElementsByClassName("hideLoggedIn");if(L("access_token"))for(let o of e)o.style.display="inline-flex";else for(let o of n)o.style.display="inline-flex"}function L(e){e+="=";let n=document.cookie.split(";");for(let o=0;o<n.length;o++){let t=n[o];for(;t.charAt(0)===" ";)t=t.substring(1,t.length);if(t.indexOf(e)===0)return t.substring(e.length,t.length)}return null}window.addEventListener("DOMContentLoaded",v);let u=localStorage.getItem("darkMode"),f=document.querySelector("meta[name='theme-color']");u===null&&window.matchMedia("(prefers-color-scheme: dark)").matches&&s();function s(){document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"),f.setAttribute("content","#0a0a0a"),localStorage.setItem("darkMode","enabled")}function k(){document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark"),f.setAttribute("content","#fff"),localStorage.setItem("darkMode",null)}u==="enabled"?(s(),document.getElementById("dark").checked=!0):document.getElementById("light").checked=!0;let h=document.querySelector("#toggleTheme");h&&h.addEventListener("change",e=>{e.target.value==="dark"?s():k()});let i=document.getElementById("header");function g(){i&&(window.scrollY>0?i.classList.add("small"):i.classList.remove("small"))}g(),window.addEventListener("scroll",()=>{g()});let r=document.getElementById("headerLogoLink"),y=r.getAttribute("href");r&&r.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),window.location.pathname===y?window.scrollTo({top:0,behavior:"smooth"}):window.location.href=y});let d=document.getElementById("headerNav"),c=document.getElementById("headerNavOpen"),l=document.getElementById("headerNavClose");l&&(l.style.display="none");function m(e){let n=d.style.display;e&&!n||(c.style.display=n?"":"none",l.style.display=n?"none":"",d.style.display=n?"":"flex")}c&&c.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),m()}),l&&l.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),m()}),document.addEventListener("click",e=>{d&&!d.contains(e.target)&&m(!0)});let p=document.getElementsByClassName("marquee-content"),w=.05,I=24;Array.from(p).forEach(e=>{C(e)});function C(e){let n,o=0,t=0;function E(a){n===void 0&&(n=a);let b=a-o;if(o!==a){if(!p[0].matches(":hover")){t=t+w*b;let M=e.firstElementChild.offsetWidth;t>M+I&&(e.appendChild(e.firstElementChild),t=0),e.style.transform="translateX(-"+t+"px)"}}else e.style.transform="translateX(0)";o=a,window.requestAnimationFrame(E)}window.requestAnimationFrame(E)}});})();
