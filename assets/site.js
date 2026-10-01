
let siteArtists=[],siteReleases=[],siteServices=[],siteReviews=[],siteBlog=[],siteSettings={};

const DEFAULT_LOGOS={
  spotify:'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
  apple:'https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg',
  jiosaavn:'https://upload.wikimedia.org/wikipedia/commons/4/44/JioSaavn_Logo.png',
  youtube:'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
  amazon:'https://upload.wikimedia.org/wikipedia/commons/0/05/Amazon_Music_icon.svg',
  tidal:'https://upload.wikimedia.org/wikipedia/commons/2/28/Tidal_%28service%29_logo.svg',
  deezer:'https://upload.wikimedia.org/wikipedia/commons/4/43/Deezer_logo_2023.svg',
  soundcloud:'https://upload.wikimedia.org/wikipedia/en/4/4e/SoundCloud_2024_icon.svg'
};

const FB_ARTISTS=[];
const FB_RELEASES=[];
const FB_SERVICES=[
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#CC0000" stroke-width="1.5"/><path d="M9 8l8 4-8 4V8z" fill="#CC0000"/></svg>`,name:'A&R DEVELOPMENT',description:'Artist discovery, signing, and creative development. We find raw talent and shape it into something undeniable.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#CC0000" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round"/></svg>`,name:'GLOBAL DISTRIBUTION',description:'Your music on 200+ platforms worldwide including Spotify, Apple Music, Amazon, Tidal, and regional stores.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,name:'RIGHTS MANAGEMENT',description:'Full content ID, global copyright protection, and YouTube monetisation. Your work, protected everywhere.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#CC0000" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round"/><path d="M10 10l6-3-6-3v6z" fill="#CC0000"/></svg>`,name:'VEVO & VIDEO',description:'Official VEVO artist channel setup, music video distribution, and YouTube channel management.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,name:'ARTIST VERIFICATION',description:'Verified artist profiles across Spotify, Apple Music, and YouTube Music.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke="#CC0000" stroke-width="1.5"/><circle cx="18" cy="16" r="3" stroke="#CC0000" stroke-width="1.5"/></svg>`,name:'AUDIO MASTERING',description:'Professional mastering services that prep your tracks for radio and streaming standards.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#CC0000" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="#CC0000"/><path d="M21 15l-5-5L5 21" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,name:'COVER ART & BRANDING',description:'Visual identity for your releases. Cover art generation, artist branding, and promotional assets.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,name:'PRE-SAVE CAMPAIGNS',description:'Build anticipation with pre-save smartlinks. Maximise day-one streams and playlist adds.'},
  {icon:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#CC0000" stroke-width="2" stroke-linecap="round"/></svg>`,name:'ROYALTY ANALYTICS',description:'Monthly detailed reports on streams, revenue, and platform performance. Transparent data.'}
];
const FB_REVIEWS=[
  {text:'Best distributor I have ever used. Fast delivery and the team actually cares about your music.',author:'ALEX M.',role:'Independent Artist',stars:5},
  {text:'The VEVO distribution changed everything for me. Getting my official channel was a dream come true.',author:'SARAH K.',role:'Music Producer',stars:5},
  {text:'My music was live on all platforms within 48 hours. The mastering service made it sound incredible.',author:'CHRIS P.',role:'Indie Rock Artist',stars:5},
  {text:'Finally a label that lets me keep upto 85% of my royalties. Transparent, fast, and genuinely supportive.',author:'MARIA L.',role:'Singer-Songwriter',stars:5},
  {text:'Professional team, quick responses. They treat every artist like a priority regardless of how big you are.',author:'THE BEATS',role:'Hip-Hop Group',stars:5},
  {text:'Submitted my demo on a Sunday, got a reply by Tuesday. From signing to release, the process was seamless.',author:'DJ RAVE',role:'Electronic Artist',stars:5}
];

async function loadAllContent(){
  try{
    const withTimeout=(promise,ms=4000)=>Promise.race([promise,new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),ms))]);
    const [aSnap,rSnap,sSnap,rvSnap,bSnap,stDoc]=await Promise.all([
      withTimeout(db.collection('site_artists').get()).catch(()=>null),
      withTimeout(db.collection('site_releases').get()).catch(()=>null),
      withTimeout(db.collection('site_services').get()).catch(()=>null),
      withTimeout(db.collection('site_reviews').get()).catch(()=>null),
      withTimeout(db.collection('site_blog').get()).catch(()=>null),
      withTimeout(db.collection('site_settings').doc('main').get()).catch(()=>null)
    ]);
    const sortByOrder=docs=>docs.sort((a,b)=>(a.order??99)-(b.order??99));
    siteArtists=aSnap&&!aSnap.empty?sortByOrder(aSnap.docs.map(d=>({id:d.id,...d.data()}))):FB_ARTISTS;
    siteReleases=rSnap&&!rSnap.empty?sortByOrder(rSnap.docs.map(d=>({id:d.id,...d.data()}))):FB_RELEASES;
    siteServices=sSnap&&!sSnap.empty?sortByOrder(sSnap.docs.map(d=>({id:d.id,...d.data()}))):FB_SERVICES;
    siteReviews=rvSnap&&!rvSnap.empty?sortByOrder(rvSnap.docs.map(d=>({id:d.id,...d.data()}))):FB_REVIEWS;
    siteBlog=bSnap&&!bSnap.empty?sortByOrder(bSnap.docs.map(d=>({id:d.id,...d.data()}))).sort((a,b)=>new Date(b.date||b.createdAt||0)-new Date(a.date||a.createdAt||0)):[];
    if(stDoc&&stDoc.exists)applySettings(stDoc.data());
    const heroDoc=await withTimeout(db.collection('site_settings').doc('hero').get()).catch(()=>null);
    if(heroDoc&&heroDoc.exists)applyHero(heroDoc.data());
  }catch(e){
    siteArtists=[];siteReleases=[];siteServices=FB_SERVICES;siteReviews=FB_REVIEWS;siteBlog=[];
  }finally{
    renderServices();renderReviews();renderBlog();renderHomeBlog();
    initScrollAnimations();
  }
}
function loadSiteContent(){loadAllContent();}

function applySettings(s){
  if(!s)return;
  siteSettings=s;
  if(s.email){const el=document.getElementById('footer-email');if(el){el.href='mailto:'+s.email;el.textContent=s.email;}}
  if(s.instagramUrl||s.instagram){const el=document.getElementById('footer-instagram');if(el){if(s.instagramUrl)el.href=s.instagramUrl;if(s.instagram)el.textContent=s.instagram.startsWith('@')?s.instagram:'@'+s.instagram;}}
  if(s.footerTagline){const el=document.getElementById('footer-tagline');if(el)el.innerHTML=s.footerTagline;}
  const demoPortal=s.demoPortal||'https://tir-demo-portal.vercel.app/';
  ['nav-demo-btn','mob-demo-btn','hero-demo-btn','cta-demo-btn','footer-demo-link','anr-demo-btn','dist-demo-btn'].forEach(id=>{const el=document.getElementById(id);if(el)el.href=demoPortal;});
  if(s.email){const el=document.getElementById('cta-email-btn');if(el)el.href='mailto:'+s.email;}
}

function applyHero(h){
  if(!h)return;
  if(h.eyebrow){const el=document.getElementById('hero-eyebrow');if(el)el.textContent=h.eyebrow;}
  if(h.subtitle){const el=document.getElementById('hero-subtitle');if(el)el.textContent=h.subtitle;}
  if(h.body){const el=document.getElementById('hero-body');if(el)el.textContent=h.body;}
  if(h.aboutP1){const el=document.getElementById('about-p1');if(el)el.textContent=h.aboutP1;}
  if(h.aboutP2){const el=document.getElementById('about-p2');if(el)el.textContent=h.aboutP2;}
  if(h.aboutP3){const el=document.getElementById('about-p3');if(el)el.textContent=h.aboutP3;}
  ['1','2','3','4'].forEach(n=>{
    const en=document.getElementById('stat-'+n+'n'),el=document.getElementById('stat-'+n+'l');
    if(en&&h['stat'+n+'n'])en.textContent=h['stat'+n+'n'];
    if(el&&h['stat'+n+'l'])el.textContent=h['stat'+n+'l'];
  });
  if(h.planPrice){const el=document.getElementById('plan-price');if(el)el.textContent=h.planPrice;}
  if(h.planSub){const el=document.getElementById('plan-sub');if(el)el.textContent=h.planSub;}
  if(h.planFeatures&&h.planFeatures.length){
    const el=document.getElementById('plan-features');
    if(el)el.innerHTML=h.planFeatures.map(f=>{const muted=f.startsWith('—');const txt=f.replace(/^[✓—]\s*/,'');return `<li class="${muted?'muted':''}">${txt}</li>`;}).join('');
  }
  if(h.responseTime){const el=document.getElementById('anr-response');if(el)el.textContent='Response within '+h.responseTime;}
}





function renderServices(){
  const grid=document.getElementById('tir-services-grid');if(!grid)return;
  if(!siteServices.length){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:80px;color:rgba(255,255,255,.2)">No services yet.</div>';return;}
  grid.innerHTML=siteServices.map((s,i)=>`<div class="service-block scale-in" style="transition-delay:${(i%3)*.04}s"><div class="service-icon-wrap">${s.icon||'<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#CC0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'}</div><div class="service-block-name">${esc(s.name)}</div><div class="service-block-desc">${esc(s.description)}</div></div>`).join('');
  setTimeout(()=>document.querySelectorAll('#tir-services-grid .scale-in').forEach(el=>el.classList.add('visible')),50);
}

function renderReviews(){
  const grid=document.getElementById('tir-reviews-grid');if(!grid)return;
  if(!siteReviews.length){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:80px;color:rgba(255,255,255,.2)">No reviews yet.</div>';return;}
  grid.innerHTML=siteReviews.map(r=>`<div class="review-tile fade-in"><div class="r-stars">${'★'.repeat(r.stars||5)}</div><p class="r-quote">${esc(r.text)}</p><div class="r-author">${esc(r.author)}</div><div class="r-role">${esc(r.role)}</div></div>`).join('');
  setTimeout(()=>document.querySelectorAll('#tir-reviews-grid .fade-in').forEach(el=>el.classList.add('visible')),50);
}

function renderBlog(){
  const grid=document.getElementById('tir-blog-grid');if(!grid)return;
  if(!siteBlog.length){grid.innerHTML='<div class="blog-empty">NO POSTS YET — CHECK BACK SOON</div>';return;}
  grid.innerHTML=siteBlog.map((p,i)=>{
    const imgHtml=p.imageUrl?`<img src="${esc(p.imageUrl)}" alt="${esc(p.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><div class="blog-card-img-placeholder" style="display:none">📰</div>`:`<div class="blog-card-img-placeholder">📰</div>`;
    const dateStr=p.date?new Date(p.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'';
    return `<div class="blog-card scale-in" style="transition-delay:${Math.min(i,6)*.04}s" onclick="openBlogPost(${i})">
      <div class="blog-card-img">${imgHtml}</div>
      <div class="blog-card-body">
        <div class="blog-card-tag">${esc(p.tag||'TIR NEWS')}</div>
        <div class="blog-card-title">${esc(p.title)}</div>
        <div class="blog-card-excerpt">${esc(p.excerpt||'')}</div>
        <div class="blog-card-meta"><span>${dateStr}</span><span class="blog-card-read">READ MORE →</span></div>
      </div>
    </div>`;
  }).join('');
  setTimeout(()=>document.querySelectorAll('#tir-blog-grid .scale-in').forEach(el=>el.classList.add('visible')),50);
}

function renderHomeBlog(){
  const grid=document.getElementById('home-blog-grid');if(!grid)return;
  const posts=siteBlog.slice(0,3);
  if(!posts.length){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px;color:rgba(255,255,255,.15);font-family:var(--font-mono);font-size:.6rem;letter-spacing:.2em">BLOG POSTS COMING SOON</div>';return;}
  grid.innerHTML=posts.map((p)=>{
    const dateStr=p.date?new Date(p.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'';
    const idx=siteBlog.indexOf(p);
    return `<div class="home-blog-card" onclick="openBlogPost(${idx})">
      <div class="home-blog-img">
        ${p.imageUrl?`<img src="${esc(p.imageUrl)}" alt="${esc(p.title)}" loading="lazy"/>`:'<div class="home-blog-img-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(204,0,0,.3)" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg></div>'}
        <div class="home-blog-tag-pill">${esc(p.tag||'TIR NEWS')}</div>
      </div>
      <div class="home-blog-body">
        <div class="home-blog-card-title">${esc(p.title)}</div>
        <div class="home-blog-author"><div class="home-blog-author-dot"></div>${esc(p.author||'TIR')}<div class="home-blog-author-dot"></div>${dateStr}</div>
      </div>
    </div>`;
  }).join('');
}

function toSlug(title){
  return (title||'post').toLowerCase()
    .replace(/[^a-z0-9\s-]/g,'').trim()
    .replace(/\s+/g,'-').replace(/-+/g,'-').slice(0,80);
}

function openBlogPost(idx){
  const p=siteBlog[idx];if(!p)return;
  const slug=p.slug||toSlug(p.title);
  const fullUrl='https://theimaginaryrecords.in/blog/'+slug;
  const dateStr=p.date?new Date(p.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}):'';
  const bodyHtml=(p.content||'').split(/\n\s*\n/).map(para=>`<p>${esc(para).replace(/\n/g,'<br/>')}</p>`).join('');

  const encodedUrl=encodeURIComponent(fullUrl);
  const encodedTitle=encodeURIComponent(p.title||'');
  const waUrl=`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const fbUrl=`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twUrl=`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  document.getElementById('blogpost-content').innerHTML=`
    <div class="post-hero">
      ${p.imageUrl?`<img src="${esc(p.imageUrl)}" alt="${esc(p.title)}"/>`:''}
      <div class="post-hero-inner">
        <div class="post-tag">${esc(p.tag||'TIR NEWS')}</div>
        <div class="post-title">${esc(p.title)}</div>
        <div class="post-meta">${dateStr}${p.author?' · '+esc(p.author):''}</div>
      </div>
    </div>
    <div class="post-body">
      <div class="post-back" onclick="showView('blog')">← BACK TO BLOG</div>
      ${bodyHtml||'<p style="color:rgba(255,255,255,.2)">No content.</p>'}
      <div class="post-share">
        <span class="post-share-label">Share</span>
        <a class="share-btn wa" href="${waUrl}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.524 4.004 1.443 5.699L0 24l6.432-1.424A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.36-.214-3.716.823.838-3.625-.234-.373A9.79 9.79 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
          WhatsApp
        </a>
        <a class="share-btn ig" href="https://www.instagram.com/" target="_blank" rel="noopener" onclick="copyLink('${fullUrl}',event);alert('Link copied! Paste it in your Instagram story or bio.')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg>
          Instagram
        </a>
        <a class="share-btn fb" href="${fbUrl}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
          Facebook
        </a>
        <a class="share-btn tw" href="${twUrl}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X / Twitter
        </a>
        <button class="share-btn cp" id="copy-btn-${idx}" onclick="copyLink('${fullUrl}',event,this)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          Copy Link
        </button>
      </div>
    </div>`;

  history.pushState({view:'blogpost',slug,idx},'','/blog/'+slug);
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-blogpost').classList.add('active');
  window.scrollTo(0,0);
}

function copyLink(url, e, btn){
  e && e.preventDefault();
  navigator.clipboard.writeText(url).then(()=>{
    if(btn){
      btn.classList.add('copied');
      btn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      setTimeout(()=>{
        btn.classList.remove('copied');
        btn.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Link';
      },2500);
    }
  }).catch(()=>{
    const ta=document.createElement('textarea');
    ta.value=url;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();
    document.execCommand('copy');document.body.removeChild(ta);
    if(btn){btn.innerHTML='✓ Copied!';setTimeout(()=>{btn.innerHTML='Copy Link';},2000);}
  });
}

/* ══ SCROLL ANIMATIONS, PROGRESS BAR, COUNTERS, BACK-TO-TOP ══ */
function initScrollAnimations(){
  // On mobile: make everything instantly visible, no JS-driven animation
  if(window.innerWidth<=768){
    document.querySelectorAll('.fade-in,.scale-in,.slide-left,.slide-right,.fm-in').forEach(el=>{
      el.style.opacity='1';el.style.transform='none';el.style.transition='none';
    });
    return;
  }
  const io=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        requestAnimationFrame(()=>{
          en.target.classList.add('visible','fm-go');
          if(en.target.classList.contains('stat-n')&&!en.target.classList.contains('counted')){
            animateCounter(en.target);
          }
        });
      }
    });
  },{threshold:0,rootMargin:'0px 0px -5% 0px'});
  document.querySelectorAll('.fade-in,.scale-in,.slide-left,.slide-right,.fm-in').forEach(el=>io.observe(el));
  document.querySelectorAll('.stat-n').forEach(el=>io.observe(el));
}

window.addEventListener('DOMContentLoaded',()=>{
  requestAnimationFrame(()=>{
    document.getElementById('hero-eyebrow')?.classList.add('fm-go');
    document.querySelector('.hero-bottom')?.classList.add('fm-go');
    document.getElementById('hero-ticker')?.classList.add('fm-go');
  });
});

function animateCounter(el){
  const raw=el.textContent.trim();
  const match=raw.match(/^([\d,.]+)(.*)$/);
  if(!match){el.classList.add('counted');return;}
  const num=parseFloat(match[1].replace(/,/g,''));
  const suffix=match[2]||'';
  if(isNaN(num)){el.classList.add('counted');return;}
  el.classList.add('counted');
  let cur=0;const dur=1200,start=performance.now();
  function step(now){
    const t=Math.min((now-start)/dur,1);
    const eased=1-Math.pow(1-t,3);
    cur=Math.round(num*eased);
    el.textContent=(Number.isInteger(num)?cur:cur.toFixed(1))+suffix;
    if(t<1)requestAnimationFrame(step);else el.textContent=raw;
  }
  requestAnimationFrame(step);
}

/* rAF-throttled scroll — passive, no forced reflow */
let _rafPending=false;
window.addEventListener('scroll',()=>{
  if(_rafPending)return;
  _rafPending=true;
  requestAnimationFrame(()=>{
    const st=window.scrollY||document.documentElement.scrollTop;
    const sh=document.documentElement.scrollHeight-window.innerHeight;
    const bar=document.getElementById('scroll-progress');
    if(bar)bar.style.width=(sh>0?(st/sh*100):0)+'%';
    const tt=document.getElementById('to-top');
    if(tt)tt.classList.toggle('show',st>400);
    _rafPending=false;
  });
},{passive:true});


const VIEW_HISTORY=[];
const TO_URL={
  home:'/',about:'/about',
  services:'/services',distribution:'/distribution',
  anr:'/anr',press:'/press',blog:'/blog',blogpost:'/blog',contact:'/contact',
  privacy:'/privacy',
  terms:'/terms',agreement:'/agreement'
};
const FROM_PATH={
  '':'home','about':'about',
  'services':'services','distribution':'distribution',
  'anr':'anr','press':'press','blog':'blog','contact':'contact',
  'privacy':'privacy','terms':'terms','agreement':'agreement'
};

function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const v=document.getElementById('view-'+name);
  if(v){v.classList.add('active');window.scrollTo(0,0);}
  document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.toggle('active',a.dataset.view===name);});
  VIEW_HISTORY.push(name);
  const url=TO_URL[name]||('/'+name);
  history.pushState({view:name},'',url);
  setTimeout(initScrollAnimations,60);
}

window.addEventListener('popstate',e=>{
  if(e.state?.view==='blogpost'&&e.state?.idx!=null){openBlogPost(e.state.idx);return;}
  if(e.state?.view){showView(e.state.view);return;}
  const parts=window.location.pathname.replace(/^\/|\/$/g,'').split('/');
  if(parts[0]==='blog'&&parts[1]){
    const idx=siteBlog.findIndex(p=>(p.slug||toSlug(p.title))===parts[1]);
    if(idx>-1){openBlogPost(idx);}else{showView('blog');}
    return;
  }
  showView(FROM_PATH[parts[0]]||'home');
});

(function initRoute(){
  const pathname=window.location.pathname.replace(/^\/|\/$/g,'');
  const parts=pathname.split('/');

  function activate(viewName){
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    const el=document.getElementById('view-'+viewName);
    if(el)el.classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.toggle('active',a.dataset.view===viewName);});
    history.replaceState({view:viewName},'',window.location.pathname);
  }

  if(parts[0]==='blog'&&parts[1]){
    activate('blog');
    const tryOpenSlug=()=>{
      const slug=parts[1];
      const idx=siteBlog.findIndex(p=>(p.slug||toSlug(p.title))===slug);
      if(idx>-1){openBlogPost(idx);}else{activate('blog');}
    };
    if(siteBlog.length){tryOpenSlug();}
    else{
      let attempts=0;
      const wait=setInterval(()=>{
        attempts++;
        if(siteBlog.length){clearInterval(wait);tryOpenSlug();}
        else if(attempts>20){clearInterval(wait);activate('blog');}
      },200);
    }
  } else {
    activate(FROM_PATH[parts[0]]||'home');
  }
})();

function toggleMob(){
  const m=document.getElementById('mob-menu');
  const open=m.classList.toggle('open');
  const sp=document.querySelectorAll('.ham span');
  if(open){sp[0].style.transform='translateY(6px) rotate(45deg)';sp[1].style.opacity='0';sp[2].style.transform='translateY(-6px) rotate(-45deg)';document.body.style.overflow='hidden';}
  else{sp.forEach(s=>{s.style.transform='';s.style.opacity=''});document.body.style.overflow='';}
}
function closeMob(){document.getElementById('mob-menu').classList.remove('open');document.querySelectorAll('.ham span').forEach(s=>{s.style.transform='';s.style.opacity=''});document.body.style.overflow='';}
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('scrolled',window.scrollY>30);},{passive:true});

function esc(v){return(v||'').toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),3000);}
