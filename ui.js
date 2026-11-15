/* Photo viewer for the gallery */
(()=>{const items=[...document.querySelectorAll('.g')];if(!items.length)return;
const $=(s,r=document)=>r.querySelector(s),lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Photo gallery');
lb.innerHTML='<figure><img alt=""></figure><div class="ct" aria-live="polite"></div><button class="x" type="button" aria-label="Close">×</button><button class="pv" type="button" aria-label="Previous photo">‹</button><button class="nx" type="button" aria-label="Next photo">›</button>';document.body.append(lb);
const im=$('img',lb),ct=$('.ct',lb);let i=0,opener=null;
function show(k){i=(k+items.length)%items.length;im.classList.remove('ready');const b=new Image();b.onload=()=>{im.src=b.src;im.alt=$('img',items[i]).alt;im.classList.add('ready')};b.src=items[i].href;ct.textContent=(i+1)+' / '+items.length;[i+1,i-1].forEach(j=>{new Image().src=items[(j+items.length)%items.length].href})}
function open(k,from){opener=from;show(k);lb.classList.add('open');document.body.classList.add('noscroll');$('.x',lb).focus()}
function close(){lb.classList.remove('open');document.body.classList.remove('noscroll');im.classList.remove('ready');opener&&opener.focus()}
items.forEach((a,k)=>a.addEventListener('click',e=>{e.preventDefault();open(k,a)}));
$('.x',lb).onclick=close;$('.pv',lb).onclick=()=>show(i-1);$('.nx',lb).onclick=()=>show(i+1);
lb.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='FIGURE')close()});
addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();else if(e.key==='ArrowRight')show(i+1);else if(e.key==='ArrowLeft')show(i-1);
 else if(e.key==='Tab'){const f=[...lb.querySelectorAll('button')],a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
let sx=null;lb.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{if(sx===null)return;const d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>50)show(i+(d<0?1:-1))},{passive:true});})();
