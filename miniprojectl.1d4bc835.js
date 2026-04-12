var t,e="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},i={},o=0/0,n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),p=Object.prototype.toString,d=Math.max,m=Math.min,y=function(){return f.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==p.call(e))return o;if(v(t)){var e,i="function"==typeof t.valueOf?t.valueOf():t;t=v(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=r.test(t);return c||s.test(t)?l(t.slice(2),c?2:8):a.test(t)?o:+t}i=function(t,e,i){var o,n,a,r,s,l,c=0,u=!1,f=!1,p=!0;if("function"!=typeof t)throw TypeError("Expected a function");function h(e){var i=o,a=n;return o=n=void 0,c=e,r=t.apply(a,i)}function g(t){var i=t-l,o=t-c;return void 0===l||i>=e||i<0||f&&o>=a}function j(){var t,i,o,n=y();if(g(n))return T(n);s=setTimeout(j,(t=n-l,i=n-c,o=e-t,f?m(o,a-i):o))}function T(t){return(s=void 0,p&&o)?h(t):(o=n=void 0,r)}function $(){var t,i=y(),a=g(i);if(o=arguments,n=this,l=i,a){if(void 0===s)return c=t=l,s=setTimeout(j,e),u?h(t):r;if(f)return s=setTimeout(j,e),h(l)}return void 0===s&&(s=setTimeout(j,e)),r}return e=b(e)||0,v(i)&&(u=!!i.leading,a=(f="maxWait"in i)?d(b(i.maxWait)||0,e):a,p="trailing"in i?!!i.trailing:p),$.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=n=s=void 0},$.flush=function(){return void 0===s?r:T(y())},$};let h=document.querySelector(".searchInp"),g=document.querySelector(".gallery"),j=document.querySelector(".more"),T="mango",$=1,w=t=>{let e=t.map(t=>`
    <li class="photo-card">
        <img src="${t.webformatURL}" alt="#" />
        <div class="stats">
            <p class="stats-item">
            <i class="material-icons">thumb_up</i>
                ${t.likes}
            </p>
            <p class="stats-item">
                <i class="material-icons">visibility</i>
                ${t.views}
            </p>
            <p class="stats-item">
                <i class="material-icons">comment</i>
                    ${t.comments}
            </p>
            <p class="stats-item">
                <i class="material-icons">cloud_download</i>
                ${t.downloads}
            </p>
        </div>
    </li>`).join("");g.insertAdjacentHTML("beforeend",e)},O=()=>fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${T}&page=${$}&per_page=5&key=55316744-d36208193e3c53252b47581ad`).then(t=>t.json());h.addEventListener("input",((t=i)&&t.__esModule?t.default:t)(t=>{console.log(T=t.target.value.trim()),""===T?(g.innerHTML="",j.style.display="none"):($=1,g.innerHTML="",O().then(t=>{w(t.hits)}),j.style.display="block")},1e3)),j.addEventListener("click",t=>{$++,O().then(t=>{if(w(t.hits),console.log($),t.totalHits<=t.hits.length*$){j.style.display="none";return}})});
//# sourceMappingURL=miniprojectl.1d4bc835.js.map
