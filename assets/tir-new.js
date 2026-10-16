
(function(){
 var s=document.getElementById('stars');
 for(var i=0;i<70;i++){var d=document.createElement('i');var z=1+Math.random()*2;d.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;animation-delay:-'+Math.random()*6+'s;animation-duration:'+(3+Math.random()*4)+'s';s.appendChild(d)}
 if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
 document.querySelectorAll('h2,.lead,.glass,.dash,.node,.chip,.b,.f,.post,details,.cta p,.cta .tir-btn').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
})();
document.querySelectorAll('.tab').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.tab').forEach(function(x){x.classList.toggle('on',x===b)});document.querySelectorAll('.tp').forEach(function(p){p.classList.toggle('on',p.id==='tp-'+b.dataset.t)})})});


// Mobile menu
(function(){var h=document.querySelector('.tir-ham');var m=document.querySelector('.tir-mob');
if(h&&m){h.addEventListener('click',function(){m.classList.toggle('open');});}})();
// Copy-link buttons (blog share rows)
document.addEventListener('click',function(e){var b=e.target.closest('[data-copy-link]');if(!b)return;
var u=b.getAttribute('data-copy-link');
if(navigator.clipboard){navigator.clipboard.writeText(u).then(function(){var s=b.querySelector('span');
if(s){s.textContent='Copied!';setTimeout(function(){s.textContent='Copy link';},2000);}});}});
// FAQ accordion REMOVED: the /faq/ page carries its own inline accordion
// script (maxHeight + combined search/category filter). This duplicate handler
// fought it on every click and left every answer closed.
