import{a as f,S as p,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",h="50393852-50daa37e0e79b7bd52cbbdabd";async function y(s){return(await f.get(m,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),u=document.querySelector("#loader");let a=null;function g(s){const o=s.map(t=>`
      <a href="${t.largeImageURL}" class="gallery-card">
        <img src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"/>
        <div class="options">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </a>
    `).join("");d.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new p(".gallery a")}function b(){d.innerHTML=""}function L(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const w=document.querySelector("#search-form"),v=document.querySelector("#search-id");w.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();o&&(b(),L(),y(o).then(t=>{const n=t.hits;if(!n||n.length===0){l.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",className:"my-toast-style",position:"topRight"}),c();return}setTimeout(()=>{g(n),c()},1e3)}).catch(t=>{console.error("Fetch error:",t),l.error({title:"Error",message:"An error occurred while fetching data."}),c()}))});
//# sourceMappingURL=index.js.map
