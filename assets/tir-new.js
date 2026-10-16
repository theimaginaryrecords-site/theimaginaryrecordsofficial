
(function(){
 var s=document.getElementById('stars');
 for(var i=0;i<70;i++){var d=document.createElement('i');var z=1+Math.random()*2;d.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;animation-delay:-'+Math.random()*6+'s;animation-duration:'+(3+Math.random()*4)+'s';s.appendChild(d)}
 if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
 document.querySelectorAll('h2,.lead,.glass,.dash,.node,.chip,.b,.f,.post,details,.cta p,.tir-cta .tir-btn, .tir-step, .tir-steps .tir-step').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
})();


// Mobile menu
(function(){var h=document.querySelector('.tir-ham');var m=document.querySelector('.tir-mob');
if(h&&m){h.addEventListener('click',function(){m.classList.toggle('open');});}})();
// Copy-link buttons (blog share rows)
document.addEventListener('click',function(e){var b=e.target.closest('[data-copy-link]');if(!b)return;
var u=b.getAttribute('data-copy-link');
if(navigator.clipboard){navigator.clipboard.writeText(u).then(function(){var s=b.querySelector('span');
if(s){s.textContent='Copied!';setTimeout(function(){s.textContent='Copy link';},2000);}});}});
// FAQ accordion + search + category filter (old FAQ page)
(function(){var items=document.querySelectorAll('.faq-item');if(!items.length)return;
items.forEach(function(item){var btn=item.querySelector('.faq-q');var ans=item.querySelector('.faq-a');
if(!btn||!ans)return;btn.addEventListener('click',function(){var open=item.classList.contains('open');
items.forEach(function(i){i.classList.remove('open');var a=i.querySelector('.faq-a');if(a)a.style.display='none';
var bb=i.querySelector('.faq-q');if(bb)bb.setAttribute('aria-expanded','false');});
if(!open){item.classList.add('open');ans.style.display='block';btn.setAttribute('aria-expanded','true');}});});
var inp=document.getElementById('faq-search');
if(inp){inp.addEventListener('input',function(){var q=inp.value.toLowerCase();
items.forEach(function(item){var t=item.textContent.toLowerCase();item.style.display=t.indexOf(q)>-1?'':'none';});});}
document.querySelectorAll('.faq-cat').forEach(function(c){c.addEventListener('click',function(){
document.querySelectorAll('.faq-cat').forEach(function(x){x.classList.remove('active');});c.classList.add('active');
var cat=c.getAttribute('data-cat');
items.forEach(function(item){item.style.display=(cat==='all'||item.getAttribute('data-cat')===cat)?'':'none';});});});})();
