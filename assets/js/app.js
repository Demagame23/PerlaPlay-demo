/* Perlaplay redesign – app.js (shell, schedina, carousel, casinò) */
(function(){
'use strict';
const PP = window.PP = {};
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const esc = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtOdd = o=>Number(o).toFixed(2);
const fmtEur = n=>Number(n).toLocaleString('it-IT',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';
PP.$=$;PP.$$=$$;PP.esc=esc;

/* ---------------- icone (sprite inline) ---------------- */
const ICONS={
football:'<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5l4.3 3.1-1.6 5h-5.4l-1.6-5z"/><path d="M12 2.5v5M16.3 10.6l4.6-1.5M14.7 15.6l2.8 4M9.3 15.6l-2.8 4M7.7 10.6L3.1 9.1"/>',
tennis:'<circle cx="12" cy="12" r="9.5"/><path d="M5.3 5.3c3.8 1.4 5.6 4.7 5.6 8.4 0 2.8-1 5.4-2.9 7.3M18.7 5.3c-3.8 1.4-5.6 4.7-5.6 8.4 0 2.8 1 5.4 2.9 7.3"/>',
basketball:'<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5v19M5.3 5.3c3.2 3.2 3.2 10.2 0 13.4M18.7 5.3c-3.2 3.2-3.2 10.2 0 13.4"/>',
volleyball:'<circle cx="12" cy="12" r="9.5"/><path d="M12 2.5c0 6-3 10-9 11.5M12 12c4 3.5 8.5 4.5 9.5 1.5M12 12c-2-5.5 1-9.5 6.5-8.5"/>',
flag:'<path d="M5 21V4"/><path d="M5 4h13l-2.5 4 2.5 4H5"/><path d="M8 4v8M11 4v8M14 4v8M5 7h13M5 10h13" opacity=".5"/>',
helmet:'<path d="M4 14a8 8 0 0 1 16 0v3a2 2 0 0 1-2 2h-3l-1-3H9l-1 3H6a2 2 0 0 1-2-2z"/><path d="M4 13h16"/>',
hockey:'<path d="M4 3l9 12.5c.6.9 1.6 1.5 2.7 1.5H19a2 2 0 0 1 0 4h-3.5c-2 0-3.9-1-5-2.7L4 7"/><ellipse cx="7" cy="19.5" rx="3" ry="1.3"/>',
rugby:'<path d="M18.9 5.1c2.4 2.4 1.4 8.6-2.9 12.9S6.5 23.3 4.1 20.9 2.7 12.3 7 8 16.5 2.7 18.9 5.1z"/><path d="M9 15l6-6M10 12.5l1.5 1.5M12 10.5l1.5 1.5"/>',
baseball:'<circle cx="12" cy="12" r="9.5"/><path d="M6 4.5c2 2.5 2.5 5 2.5 7.5S8 17 6 19.5M18 4.5c-2 2.5-2.5 5-2.5 7.5s.5 5 2.5 7.5"/>',
target:'<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.6"/>',
golf:'<path d="M9 3v16"/><path d="M9 3l8 3-8 3"/><ellipse cx="11" cy="20" rx="7" ry="2"/>',
bike:'<circle cx="5.5" cy="16.5" r="3.5"/><circle cx="18.5" cy="16.5" r="3.5"/><path d="M5.5 16.5L9 9h6l3.5 7.5M9 9l3 7.5h6M14 5h3"/>',
glove:'<path d="M7 11V6a3 3 0 0 1 6 0v1h2a3 3 0 0 1 3 3v4a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-1z"/><path d="M7 14h11"/>',
gamepad:'<path d="M6.5 8h11a4.5 4.5 0 0 1 4.4 5.4l-.6 3a2.5 2.5 0 0 1-4.3 1.2L15 15H9l-2 2.6a2.5 2.5 0 0 1-4.3-1.2l-.6-3A4.5 4.5 0 0 1 6.5 8z"/><path d="M8 11v3M6.5 12.5h3M16 11.5h.01M18 13.5h.01"/>',
handball:'<circle cx="12" cy="12" r="9.5"/><path d="M7 7l10 10M7 17L17 7"/><circle cx="12" cy="12" r="3"/>',
snooker:'<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="4"/><path d="M12 10.5v3"/>',
pingpong:'<circle cx="9.5" cy="9.5" r="6.5"/><path d="M14 14l5.5 5.5"/><circle cx="18.5" cy="6.5" r="1.5"/>',
amfootball:'<path d="M5.1 18.9c-2.4-2.4-1.4-8.6 2.9-12.9s10.5-5.3 12.9-2.9 1.4 8.6-2.9 12.9-10.5 5.3-12.9 2.9z"/><path d="M9 15l6-6M10 12.5l1.5 1.5M12 10.5l1.5 1.5M3.5 13l7.5 7.5M13 3.5l7.5 7.5"/>',
star:'<path d="M12 3l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.4l-5.7 3.1 1.2-6.4L2.8 9.7l6.4-.8z"/>',
live:'<circle cx="12" cy="12" r="3"/><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
chevL:'<path d="M15 5l-7 7 7 7"/>',chevR:'<path d="M9 5l7 7-7 7"/>',chevD:'<path d="M5 9l7 7 7-7"/>',
close:'<path d="M6 6l12 12M18 6L6 18"/>',
ticket:'<path d="M3 9a2 2 0 0 0 2-2V5h14v2a2 2 0 0 0 2 2v6a2 2 0 0 0-2 2v2H5v-2a2 2 0 0 0-2-2z"/><path d="M12 7v10" stroke-dasharray="2 2"/>',
menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
play:'<path d="M7 5v14l11-7z"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/>',
gift:'<rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12M12 9c-2-4-6-4-6-1.5S10 9 12 9zm0 0c2-4 6-4 6-1.5S14 9 12 9z"/>',
flame:'<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 2 2c0-4-1-6 2-9z"/>',
trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
cards:'<rect x="4" y="5" width="11" height="15" rx="1.5"/><path d="M15 7l4 1-3 12-3-.8"/><path d="M9.5 10.5l2 2-2 2-2-2z"/>',
dice:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01" stroke-width="2.6"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
whatsapp:'<path d="M4 20l1.3-3.8A8 8 0 1 1 8 19z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/>',
plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="M5 12l4 4L19 7"/>',
spade:'<path d="M12 3c3 4 7 6.5 7 10a4 4 0 0 1-6.5 3L12 21l-.5-5A4 4 0 0 1 5 13c0-3.5 4-6 7-10z"/>',
tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
medal:'<circle cx="12" cy="15" r="5"/><path d="M8.5 10.5L6 3h4l2 5 2-5h4l-2.5 7.5"/>',
filter:'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 17l9 5 9-5"/>',
builder:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h6M7 17h4"/>'
};
PP.icon=(n,cls='')=>`<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||ICONS.star}</svg>`;

/* ---------------- toast / modal ---------------- */
let toastT;
PP.toast=msg=>{let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}t.textContent=msg;t.classList.add('is-on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('is-on'),2600);};
PP.openModal=id=>{$('#'+id)?.classList.add('is-open');};
PP.closeModals=()=>$$('.modal').forEach(m=>m.classList.remove('is-open'));

/* ---------------- shell ---------------- */
const NAV=[
 {id:'home',label:'Home',href:'index.html',icon:'home'},
 {id:'sport',label:'Sport',href:'sport.html'},
 {id:'live',label:'Live',href:'live.html',dot:true},
 {id:'casino',label:'Casinò',href:'casino.html'},
 {id:'livecasino',label:'Casinò Live',href:'livecasino.html'},
 {id:'perla',label:'Perla Live',href:'livecasino.html#perla'},
 {id:'gameshow',label:'Game Show',href:'livecasino.html#show'},
 {id:'asian',label:'Asian',href:'livecasino.html#asian'},
 {id:'privilege',label:'Privilege Club',href:'promo.html#privilege'},
 {id:'promo',label:'Promozioni',href:'promo.html',cls:'nav-promo'}
];
function clock(){const d=new Date();const s=d.toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric'});return `${d.toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'})} · ${s.charAt(0).toUpperCase()+s.slice(1)}`;}
const FOOT_COLS=[
 {title:'Il supporto per te',html:`<ul class="foot-support">
   <li>${PP.icon('chat','sm')}<div>Live chat<small>Lun–Dom 16–20</small></div></li>
   <li>${PP.icon('phone','sm')}<div><a href="tel:800796698">N° verde 800 796 698</a><small>Lun–Sab 10–18</small></div></li>
   <li>${PP.icon('whatsapp','sm')}<div><a href="https://wa.me/38631346645">WhatsApp +386 31 346 645</a><small>Lun–Dom 10–20</small></div></li>
   <li>${PP.icon('info','sm')}<div><a href="mailto:assistenza@perlaplay.it">assistenza@perlaplay.it</a><small>Lun–Dom 10–20</small></div></li></ul>`},
 {title:'Giochi',tag:'Trova il gioco, nel cuore del Perla.',links:[['Perla Live – live casinò dal Perla','livecasino.html#perla'],['Slot machine','casino.html'],['Giochi da tavolo','casino.html'],['Casinò live','livecasino.html'],['Scommesse sportive','sport.html'],['Scommesse live','live.html'],['Fortuna cinese: Punto banco live','livecasino.html#asian']]},
 {title:'Perlaplay.it',tag:'Oltre 40 anni di storia, il gioco continua qui.',links:[['Chi è Perlaplay.it'],['Contatti'],['Gruppo HIT'],['Sostenibilità'],['Perlaplay News']]},
 {title:'La legge è la nostra regola',tag:'Le regole sempre in chiaro.',links:[['Condizioni generali di contratto'],['Carta dei servizi ADM'],['Probabilità di vincita'],['Vincite nel mese'],['Privacy e sicurezza dei dati'],['Politica dei cookie']]},
 {title:'Come entrare in gioco',tag:'Iniziare è semplice, bastano 6 minuti.',links:[['Aprire un conto gioco'],['Firma il contratto di gioco'],['Come mandare i documenti'],['Depositi'],['Prelievi'],['FAQ'],['Scarica l’app'],['Glossario'],['Regolamenti dei giochi']]},
 {title:'Gioca bene, gioca sano',tag:'Il controllo è il vero gioco.',links:[['Limiti di deposito e autolimitazione'],['Autoesclusione e registro RUA'],['Test di autovalutazione del giocatore'],['Numero verde nazionale – dipendenze'],['Linee guida per il gioco responsabile']]}
];
/* footer: sezioni aperte su desktop, a scomparsa su mobile */
PP.footerAccordion=function(){
  const mq=matchMedia('(max-width:900px)');
  const apply=()=>{$$('#foot-grid .fcol').forEach(d=>{d.open=!mq.matches;});};
  apply();mq.addEventListener('change',apply);
  $('#foot-grid').addEventListener('click',e=>{if(e.target.closest('summary')&&!mq.matches)e.preventDefault();});
};
/* testo descrittivo: su mobile mostra solo l'inizio */
PP.seoCollapse=function(){
  $$('.seo').forEach(el=>{if(el.dataset.ready)return;el.dataset.ready=1;el.classList.add('is-clamped');
    const b=document.createElement('button');b.className='seo-more';b.type='button';b.textContent='Leggi tutto';
    b.addEventListener('click',()=>{const c=el.classList.toggle('is-clamped');b.textContent=c?'Leggi tutto':'Mostra meno';});
    el.after(b);});
};
PP.shell=function(page){
  const top=$('#shell-top'),bot=$('#shell-bottom');
  const sportsStrip=['home','sport','live'].includes(page);
  top.innerHTML=`
  <div class="utilbar"><div class="wrap">
    <div class="left"><span id="pp-clock">${clock()}</span><span class="hide-m">${PP.icon('phone','sm')} Helpdesk 800 796 698</span><span class="hide-m">${PP.icon('whatsapp','sm')} WhatsApp +386 31 346 645</span></div>
    <div class="right"><span>Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica. Probabilità di vincita sul sito ADM.</span><img src="assets/img/brand/18plus.png" alt="18+"><img src="assets/img/brand/adm.png" alt="ADM"></div>
  </div></div>
  <div class="site-head">
    <div class="topbar"><div class="wrap">
      <button class="burger" id="burger" aria-label="Menu">${PP.icon('menu')}</button>
      <a class="brand" href="index.html"><img src="assets/img/brand/logo.svg" alt="Perlaplay"></a>
      <label class="search">${PP.icon('search')}<input type="search" placeholder="Cerca squadre, eventi, giochi…" id="global-search"></label>
      <div class="auth"><button class="btn btn-ghost" data-open="modal-login">${PP.icon('user','sm')} Accedi</button><button class="btn btn-primary" data-open="modal-register">Registrati</button></div>
    </div></div>
    <nav class="mainnav"><div class="wrap">
      ${NAV.map(n=>`<a href="${n.href}" class="${n.id===page?'is-active':''} ${n.cls||''}">${n.dot?'<span class="dot"></span>':''}${n.label}</a>`).join('')}
      <span class="spacer"></span><a class="mini" href="#app">${PP.icon('phone','sm')} Scarica l’app</a>
    </div></nav>
    ${sportsStrip?`<div class="sportstrip"><div class="wrap">
      <a href="live.html" class="live-link ${page==='live'?'is-active':''}">${PP.icon('live','sm')} Live <span class="n">${PP_LIVE_EVENTS.length}</span></a>
      ${PP_SPORTS.slice(0,14).map(s=>`<a href="sport.html#${s.id}" data-sport="${s.id}">${PP.icon(s.icon,'sm')} ${s.label}<span class="n">${s.n}</span></a>`).join('')}
      <a href="sport.html#boost">${PP.icon('bolt','sm')} Quote maggiorate</a><a href="sport.html#calendar">${PP.icon('calendar','sm')} Calendario</a>
    </div></div>`:''}
  </div>
  <div class="backdrop" id="backdrop"></div>`;
  bot.innerHTML=`
  <footer class="footer" id="app"><div class="wrap">
    <div class="foot-top">
      <div class="warn"><img src="assets/img/brand/18plus.png" alt="18+">Il gioco è vietato ai minori e può causare dipendenza patologica.</div>
      <div class="foot-badges"><img src="assets/img/brand/adm-full.png" alt="ADM – Agenzia delle Accise, Dogane e Monopoli"><img src="assets/img/brand/timone.png" alt="Timone ADM"><img src="assets/img/brand/iso.png" alt="Certificazioni ISO"></div>
    </div>
    <div class="foot-grid" id="foot-grid">${FOOT_COLS.map(c=>`<details class="fcol"><summary>${c.title}${PP.icon('chevD','sm')}</summary><div class="fbody">${c.html||`<ul>${c.links.map(l=>`<li><a href="${l[1]||'#'}">${l[0]}</a></li>`).join('')}</ul>`}${c.tag?`<p class="tag">${c.tag}</p>`:''}</div></details>`).join('')}</div>
    <div class="foot-bottom">
      <div class="foot-app"><a href="#"><img src="assets/img/brand/ios.svg" alt="Scarica dall’App Store"></a><a href="#"><img src="assets/img/brand/android.svg" alt="Scarica per Android"></a></div>
      <div class="foot-pay"><img class="visa" src="assets/img/payments/visa.png" alt="Visa"><img src="assets/img/payments/mastercard.svg" alt="Mastercard"><img src="assets/img/payments/maestro.svg" alt="Maestro"><img src="assets/img/payments/skrill.svg" alt="Skrill"><img src="assets/img/payments/sepa.svg" alt="Bonifico SEPA"></div>
      <p class="legal">PERLAPLAY – Concessione GAD 16003 – HIT D.D. NOVA GORICA S.P.A., Via Delpinova 7/a, 5000 Nova Gorica, Slovenia – P.IVA IT 01472260932. Il gioco è riservato ai maggiorenni. Gioca responsabilmente.</p>
    </div>
  </div></footer>
  <div class="modal" id="modal-login"><div class="box"><button class="x" data-close>${PP.icon('close')}</button><h2>Accedi</h2><p class="sub">Entra nel tuo conto gioco Perlaplay.</p>
    <form data-demo><div class="field"><label>Username</label><input type="text" autocomplete="username" required></div><div class="field"><label>Password</label><input type="password" autocomplete="current-password" required></div><button class="btn btn-primary btn-block" type="submit">Accedi</button></form>
    <div class="links"><a href="#">Recupera password</a><a href="#" data-open="modal-register">Non hai un conto? Registrati</a></div></div></div>
  <div class="modal" id="modal-register"><div class="box"><button class="x" data-close>${PP.icon('close')}</button><h2>Registrati</h2><p class="sub">Welcome Bonus del 100% fino a 1.100€. Bastano 6 minuti.</p>
    <form data-demo><div class="field"><label>Codice fiscale</label><input type="text" placeholder="Compila automaticamente i tuoi dati" required></div><div class="field"><label>Email</label><input type="email" required></div><div class="field"><label>Password</label><input type="password" required></div><button class="btn btn-pink btn-block" type="submit">Crea il conto gioco</button></form>
    <div class="links"><span style="color:var(--muted)">Concessione ADM n. 16003</span><a href="#" data-open="modal-login">Hai già un conto? Accedi</a></div></div></div>`;
  PP.footerAccordion();PP.seoCollapse();
  setInterval(()=>{const c=$('#pp-clock');if(c)c.textContent=clock();},30000);
  // interactions
  document.addEventListener('click',e=>{
    const o=e.target.closest('[data-open]');if(o){e.preventDefault();PP.closeModals();PP.openModal(o.dataset.open);return;}
    if(e.target.closest('[data-close]')||e.target.classList.contains('modal')){PP.closeModals();return;}
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){PP.closeModals();PP.closeDrawers();}});
  document.addEventListener('submit',e=>{if(e.target.matches('[data-demo]')){e.preventDefault();PP.closeModals();PP.toast('Anteprima grafica: login e registrazione non sono attivi.');}});
  $('#burger')?.addEventListener('click',()=>{$('.sidebar')?.classList.toggle('is-open');$('#backdrop').classList.toggle('is-on',$('.sidebar')?.classList.contains('is-open'));});
  $('#backdrop').addEventListener('click',PP.closeDrawers);
  const gs=$('#global-search');gs?.addEventListener('keydown',e=>{if(e.key==='Enter'){location.href='casino.html?q='+encodeURIComponent(gs.value);}});
};
PP.closeDrawers=()=>{$('.sidebar')?.classList.remove('is-open');$('.slipcol')?.classList.remove('is-open');$('#backdrop')?.classList.remove('is-on');};

/* ---------------- sidebar sport ---------------- */
PP.sidebarSport=function(el,active){
  const sorted=[...PP_SPORTS].sort((a,b)=>a.label.localeCompare(b.label,'it'));
  el.innerHTML=`
  <div class="panel"><div class="side-quick">
    <a href="live.html">${PP.icon('live','lg')}<span>Live</span></a>
    <a href="live.html#multi">${PP.icon('grid','lg')}<span>Multilive</span></a>
    <a href="sport.html#calendar">${PP.icon('calendar','lg')}<span>Calendario</span></a>
    <a href="sport.html#boost">${PP.icon('bolt','lg')}<span>Quote maggiorate</span></a>
    <a href="sport.html#builder">${PP.icon('builder','lg')}<span>Bet Builder</span></a>
    <a href="#" data-fav>${PP.icon('star','lg')}<span>Preferiti</span></a>
  </div></div>
  <div class="panel"><div class="panel-h">${PP.icon('flame','sm')} In evidenza</div><ul class="side-list">
    ${PP_FEATURED.map(f=>`<li><a href="sport.html#${f.sport}"><span class="flag">${f.flag}</span>${f.label}${f.live?'<span class="live">LIVE</span>':''}</a></li>`).join('')}
  </ul></div>
  <div class="panel"><div class="panel-h">${PP.icon('layers','sm')} Tutti gli sport <span class="right">A–Z</span></div><ul class="side-list">
    ${sorted.map(s=>`<li><a href="sport.html#${s.id}" class="${s.id===active?'is-active':''}">${PP.icon(s.icon)}${s.label}${s.live?`<span class="live">${s.live} live</span>`:''}<span class="n">${s.n}</span></a></li>`).join('')}
  </ul></div>`;
  el.addEventListener('click',e=>{if(e.target.closest('[data-fav]')){e.preventDefault();PP.toast('Accedi per salvare i tuoi preferiti.');}});
};

/* ---------------- schedina ---------------- */
const SLIP_KEY='pp_slip_v1';
const slip={sel:[],type:'multipla',stake:10,tab:'slip'};
try{Object.assign(slip,JSON.parse(localStorage.getItem(SLIP_KEY)||'{}'));}catch(e){}
slip.sel=Array.isArray(slip.sel)?slip.sel:[];
const save=()=>{try{localStorage.setItem(SLIP_KEY,JSON.stringify({sel:slip.sel,type:slip.type,stake:slip.stake}));}catch(e){}};
PP.slipHas=sid=>slip.sel.some(s=>s.sid===sid);
PP.oddBtn=function(ev,key,mktLab){
  const o=ev.o?.[key];const lab=PP_MARKET_NAMES[key]||key;
  if(!o)return `<button class="odd lock" disabled><small>${esc(lab)}</small>–</button>`;
  const sid=ev.id+'|'+key;
  return `<button class="odd${PP.slipHas(sid)?' is-selected':''}" data-sid="${sid}" data-ev="${esc(ev.home)} - ${esc(ev.away)}" data-mkt="${esc(mktLab)}" data-pick="${esc(lab)}" data-odd="${o}" aria-pressed="${PP.slipHas(sid)}"><small>${esc(lab)}</small><span class="v">${fmtOdd(o)}</span></button>`;
};
function toggle(btn){
  const sid=btn.dataset.sid;const i=slip.sel.findIndex(s=>s.sid===sid);
  if(i>=0){slip.sel.splice(i,1);}else{
    const evId=sid.split('|')[0];
    const same=slip.sel.findIndex(s=>s.sid.split('|')[0]===evId);
    if(same>=0){slip.sel.splice(same,1);}
    slip.sel.push({sid,ev:btn.dataset.ev,mkt:btn.dataset.mkt,pick:btn.dataset.pick,odd:+btn.dataset.odd});
    if(slip.sel.length===1)slip.type='singola';else if(slip.sel.length===2&&slip.type==='singola')slip.type='multipla';
  }
  save();PP.renderSlip();PP.syncOdds();
}
PP.syncOdds=()=>$$('.odd[data-sid]').forEach(b=>{const on=PP.slipHas(b.dataset.sid);b.classList.toggle('is-selected',on);b.setAttribute('aria-pressed',on);});
document.addEventListener('click',e=>{const b=e.target.closest('.odd[data-sid]');if(b){toggle(b);}});
PP.renderSlip=function(){
  const el=$('#slip');if(!el)return;
  const n=slip.sel.length;const fab=$('#slip-fab .cnt');if(fab)fab.textContent=n;
  const prod=slip.sel.reduce((p,s)=>p*s.odd,1);
  const bonusPct=slip.type==='multipla'&&n>=5?Math.min((n-4)*5,150):0;
  let body='';
  if(slip.tab==='mybets'){
    body=`<ul class="mybets">${PP_MYBETS.map(b=>`<li><div><b>${esc(b.ev)}</b><div style="color:var(--muted);font-size:11px">${esc(b.sel)}</div><div style="margin-top:4px">Puntata ${b.stake} · Vincita ${b.win}</div></div><span class="st ${b.win_?'win':''}">${b.st}</span></li>`).join('')}</ul><p class="hint" style="font-size:10.5px;color:var(--muted);text-align:center;margin-top:10px">Accedi per vedere tutte le tue giocate.</p>`;
  } else if(!n){
    body=`<div class="slip-empty">${PP.icon('ticket')}<div><b style="color:var(--text-2)">La schedina è vuota</b><br>Clicca su una quota per aggiungere una selezione.</div></div>`;
  } else {
    const stake=Math.max(0,+slip.stake||0);
    const totStake=slip.type==='singola'?stake*n:stake;
    const win=slip.type==='singola'?slip.sel.reduce((a,s)=>a+stake*s.odd,0):stake*prod*(1+bonusPct/100);
    body=`${slip.sel.map(s=>`<div class="sel"><div><div class="pick">${esc(s.pick)}</div><div class="mkt">${esc(s.mkt)}</div></div><button class="rm" data-rm="${s.sid}" title="Rimuovi">${PP.icon('close','sm')}</button><div class="ev">${esc(s.ev)}</div><div class="o">${fmtOdd(s.odd)}</div></div>`).join('')}
    <div class="slip-type"><button data-type="singola" class="${slip.type==='singola'?'is-active':''}">Singola${n>1?` ×${n}`:''}</button><button data-type="multipla" class="${slip.type==='multipla'?'is-active':''}" ${n<2?'disabled':''}>Multipla</button></div>
    ${slip.type==='multipla'?`<div class="slip-row">Quota totale <b>${fmtOdd(prod)}</b></div>`:''}
    ${bonusPct?`<div class="slip-row">Bonus multipla <b style="color:var(--green)">+${bonusPct}%</b></div>`:''}
    <div class="stake"><span>${slip.type==='singola'?'Puntata per singola':'Puntata'}</span><input type="number" min="1" step="1" inputmode="decimal" value="${stake}" id="stake-in"><span class="eur">€</span></div>
    <div class="quick">${[5,10,20,50,100].map(v=>`<button data-stake="${v}">${v} €</button>`).join('')}</div>
    <div class="slip-row" style="margin-top:8px">Importo totale <b>${fmtEur(totStake)}</b></div>
    <div class="slip-row total">Vincita potenziale <b>${fmtEur(win)}</b></div>`;
  }
  el.innerHTML=`<div class="slip-tabs"><button data-tab="slip" class="${slip.tab==='slip'?'is-active':''}">${PP.icon('ticket','sm')} Schedina ${n?`<span class="cnt">${n}</span>`:''}</button><button data-tab="mybets" class="${slip.tab==='mybets'?'is-active':''}">Le mie giocate</button></div>
  <div class="slip-body">${body}</div>
  ${slip.tab==='slip'&&n?`<div class="slip-foot"><button class="btn btn-pink btn-block" id="place">Piazza scommessa</button><button class="btn btn-soft btn-sm btn-block" id="clear">${PP.icon('trash','sm')} Svuota schedina</button><p class="hint">Le quote possono variare fino alla conferma della giocata.</p></div>`:''}`;
  el.onclick=e=>{
    const t=e.target.closest('[data-tab]');if(t){slip.tab=t.dataset.tab;PP.renderSlip();return;}
    const r=e.target.closest('[data-rm]');if(r){slip.sel=slip.sel.filter(s=>s.sid!==r.dataset.rm);if(slip.sel.length<2)slip.type='singola';save();PP.renderSlip();PP.syncOdds();return;}
    const ty=e.target.closest('[data-type]');if(ty&&!ty.disabled){slip.type=ty.dataset.type;save();PP.renderSlip();return;}
    const q=e.target.closest('[data-stake]');if(q){slip.stake=+q.dataset.stake;save();PP.renderSlip();return;}
    if(e.target.closest('#clear')){slip.sel=[];save();PP.renderSlip();PP.syncOdds();return;}
    if(e.target.closest('#place')){PP.openModal('modal-login');PP.toast('Accedi per piazzare la scommessa.');}
  };
  el.oninput=e=>{if(e.target.id==='stake-in'){slip.stake=+e.target.value;save();const n2=slip.sel.length,st=Math.max(0,slip.stake||0);const tot=slip.type==='singola'?st*n2:st;const w=slip.type==='singola'?slip.sel.reduce((a,s)=>a+st*s.odd,0):st*prod*(1+bonusPct/100);const rows=$$('.slip-row b',el);rows[rows.length-2].textContent=fmtEur(tot);rows[rows.length-1].textContent=fmtEur(w);}};
};
PP.slipExtras=function(el){
  el.innerHTML=`<div class="panel"><div class="panel-h">${PP.icon('trophy','sm')} Ultime vincite</div><ul class="wins">${PP_WINS.map(w=>`<li><span class="lab">${w.when} · ${esc(w.game)}</span><span class="amt">${w.amt}</span><span>Vincita totale</span></li>`).join('')}</ul></div>
  <a class="promo-card" href="promo.html" style="display:block;margin-top:12px"><img src="assets/img/banners/asset7.webp" alt="Bonus su misura per te"><span class="btn btn-primary btn-sm">Scopri di più</span></a>`;
};
PP.slipFab=function(){
  const b=document.createElement('button');b.className='slip-fab';b.id='slip-fab';b.innerHTML=`${PP.icon('ticket','sm')} Schedina <span class="cnt">${slip.sel.length}</span>`;document.body.appendChild(b);
  b.addEventListener('click',()=>{const s=$('.slipcol');s.classList.toggle('is-open');});
};

/* ---------------- coupon / match rows ---------------- */
PP.couponHead=(c)=>`<div class="coupon-h">${c.flag?`<span class="flag">${c.flag}</span>`:PP.icon('football','sm')}${esc(c.comp)}<div class="mk">${c.mk.map(m=>`<div class="g"><span class="lab">${m.lab}</span>${m.keys.map(k=>`<span>${PP_MARKET_NAMES[k]||k}</span>`).join('')}</div>`).join('')}<span class="ph" style="width:44px"></span></div></div>`;
PP.matchRow=function(ev,mk,live){
  const when=live?`<b class="lv">${esc(ev.period)}</b>${ev.minute?`<span>${ev.minute}’</span>`:ev.set?`<span>${esc(ev.set)}</span>`:''}`:`<b>${esc(ev.day)}</b><span>${esc(ev.time)}</span>`;
  const sc=(v)=>live?`<span class="sc">${v}</span>`:'';
  return `<div class="match ${live?'live':''}" data-ev="${ev.id}">
    <div class="when">${when}</div>
    <div class="teams"><div class="team">${ev.serve==='home'?'<span class="serve"></span>':''}${esc(ev.home)}${sc(ev.hs)}</div><div class="team">${ev.serve==='away'?'<span class="serve"></span>':''}${esc(ev.away)}${sc(ev.as)}</div></div>
    <div class="mkts">${mk.map(m=>`<div class="g">${m.keys.map(k=>PP.oddBtn(ev,k,m.lab)).join('')}</div>`).join('')}<a class="more" href="#" style="width:44px;text-align:right" data-more>+${ev.markets}</a></div>
  </div>`;
};
PP.coupon=(c,live)=>`<div class="coupon" data-sport="${c.sport}">${PP.couponHead(c)}${c.events.map(ev=>PP.matchRow(ev,c.mk,live)).join('')}${c.events.length>3?`<a class="showall" href="#">Mostra tutti gli eventi (${c.events.length+12})</a>`:''}</div>`;
PP.liveGroups=function(filterSport){
  const g={};PP_LIVE_EVENTS.filter(e=>!filterSport||e.sport===filterSport).forEach(e=>{(g[e.comp]=g[e.comp]||{comp:e.comp,flag:e.flag,sport:e.sport,mk:e.mk,events:[]}).events.push(e);});
  return Object.values(g);
};
document.addEventListener('click',e=>{if(e.target.closest('[data-more],.showall')){e.preventDefault();PP.toast('Anteprima: mercati aggiuntivi non inclusi.');}});
PP.boosts=(list)=>`<div class="boosts">${list.map(b=>`<div class="boost"><span class="tag">${PP.icon('bolt','sm')} Quota maggiorata</span><span class="ev">${esc(b.ev)}</span><span class="sel">${esc(b.sel)}</span><div class="row"><span class="was">${fmtOdd(b.was)}</span><button class="odd wide now" data-sid="boost|${esc(b.sel)}" data-ev="${esc(b.ev)}" data-mkt="Quota maggiorata" data-pick="${esc(b.sel)}" data-odd="${b.now}">${PP.icon('bolt','sm')} ${fmtOdd(b.now)}</button></div></div>`).join('')}</div>`;

/* ---------------- live ticker ---------------- */
PP.liveTicker=function(){
  setInterval(()=>{
    const btns=$$('.match.live .odd[data-sid]:not(.lock)');if(!btns.length)return;
    for(let i=0;i<2;i++){const b=btns[Math.floor(Math.random()*btns.length)];let o=+b.dataset.odd;const d=(Math.random()<.5?-1:1)*(Math.round((0.02+Math.random()*0.1)*100)/100);o=Math.max(1.01,Math.round((o+d)*100)/100);b.dataset.odd=o;$('.v',b).textContent=fmtOdd(o);b.classList.remove('up','down');void b.offsetWidth;b.classList.add(d>0?'up':'down');
      const s=slip.sel.find(x=>x.sid===b.dataset.sid);if(s){s.odd=o;save();PP.renderSlip();}}
  },4000);
  setInterval(()=>{PP_LIVE_EVENTS.forEach(e=>{if(e.minute&&e.sport==='calcio'&&e.minute<90)e.minute++;});$$('.match.live').forEach(r=>{const e=PP_LIVE_EVENTS.find(x=>x.id===r.dataset.ev);const m=$('.when span',r);if(e&&m&&e.minute)m.textContent=e.minute+'’';});},60000);
};

/* ---------------- hero carousel ---------------- */
PP.hero=function(el,slides){
  let i=0,t;
  el.innerHTML=`${slides.map((s,k)=>`<a class="slide ${k===0?'is-active':''}" href="${s.href}"><img src="${s.img}" alt="${esc(s.alt)}" ${k?'loading="lazy"':''}></a>`).join('')}
  <button class="nav prev" aria-label="Precedente">${PP.icon('chevL')}</button><button class="nav next" aria-label="Successiva">${PP.icon('chevR')}</button>
  <div class="dots">${slides.map((s,k)=>`<button class="${k===0?'is-active':''}" data-i="${k}" aria-label="Slide ${k+1}"></button>`).join('')}</div>`;
  const go=n=>{i=(n+slides.length)%slides.length;$$('.slide',el).forEach((s,k)=>s.classList.toggle('is-active',k===i));$$('.dots button',el).forEach((d,k)=>d.classList.toggle('is-active',k===i));};
  const auto=()=>{clearInterval(t);t=setInterval(()=>go(i+1),6000);};
  el.addEventListener('click',e=>{if(e.target.closest('.prev')){e.preventDefault();go(i-1);auto();}else if(e.target.closest('.next')){e.preventDefault();go(i+1);auto();}else{const d=e.target.closest('[data-i]');if(d){e.preventDefault();go(+d.dataset.i);auto();}}});
  auto();
};
PP.scrollRow=function(sec){ // arrows in .sec .tools scroll the next .hscroll
  $$('.sec').forEach(s=>{const row=s.nextElementSibling;if(!row||!row.classList.contains('hscroll'))return;s.addEventListener('click',e=>{const a=e.target.closest('.arrow');if(!a)return;row.scrollBy({left:(a.dataset.dir==='prev'?-1:1)*row.clientWidth*0.8,behavior:'smooth'});});});
};

/* ---------------- giochi ---------------- */
PP.gameCard=function(g,opts={}){
  const badges=[];if(g.tags.includes('new'))badges.push('<span class="badge">Novità</span>');if(g.tags.includes('jackpot'))badges.push('<span class="badge gold">Jackpot</span>');if(opts.promo)badges.push('<span class="badge pink">Promo</span>');
  const inner=`<img src="${g.img}" alt="${esc(g.name)}" loading="lazy"><div class="bd">${badges.join('')}</div>${opts.live?`<span class="lvtag">Live</span>`:''}<div class="ov"><div class="nm">${esc(g.name)}</div><div class="pv">${esc(g.provider)}</div><div class="acts"><button class="btn btn-primary" data-play="${esc(g.name)}">${PP.icon('play','sm')} Gioca</button>${opts.live?'':`<button class="btn btn-soft" data-try="${esc(g.name)}">Prova</button>`}</div></div>`;
  return opts.rank?`<div class="game ranked"><div class="fr">${inner}</div><span class="rk">${opts.rank}</span></div>`:`<div class="game">${inner}</div>`;
};
document.addEventListener('click',e=>{const p=e.target.closest('[data-play],[data-try]');if(p){PP.toast(p.dataset.play?`Accedi per giocare a ${p.dataset.play}.`:`Modalità prova: ${p.dataset.try}.`);}});
PP.providers=()=>{const files=['pragmatic','playngo','netent','igt','playson','gamesglobal','habanero','booming','endorphina','betsoft','isoftbet','redrake','evoplay','leander','gameart','1x2gaming','nextgen','spribe','tuko'];return files.map(f=>`<a class="provider" href="casino.html?provider=${f}"><img src="assets/img/providers/${f}.webp" alt="${f}" loading="lazy"></a>`).join('');};

/* ---------------- pagine ---------------- */
const PAGES={};
PAGES.home=function(){
  PP.sidebarSport($('#sidebar'));
  PP.hero($('#hero'),PP_HERO);
  $('#hero-mobile').innerHTML=PP_HERO_MOBILE.map(i=>`<a class="promo-card" href="promo.html"><img src="${i}" alt="Promozione"></a>`).join('');
  $('#live-now').innerHTML=PP.liveGroups().slice(0,2).map(c=>PP.coupon({...c,events:c.events.slice(0,3)},true)).join('');
  $('#featured').innerHTML=[{...PP_COUPONS[1],events:PP_COUPONS[1].events.slice(2,6)},{...PP_COUPONS[0],events:PP_COUPONS[0].events.slice(0,2)}].map(c=>PP.coupon(c)).join('');
  $('#top10').innerHTML=PP_GAMES.filter(g=>g.rank).sort((a,b)=>a.rank-b.rank).map(g=>PP.gameCard(g,{rank:g.rank})).join('');
  $('#gameshow').innerHTML=PP_LIVE.filter(t=>t.tags.includes('show')).map(t=>PP.gameCard({...t,tags:[]},{live:true})).join('');
  $('#newslots').innerHTML=PP_GAMES.filter(g=>g.tags.includes('new')).slice(0,12).map(g=>PP.gameCard(g)).join('');
  $('#boosts').innerHTML=PP.boosts(PP_BOOSTS.slice(0,3));
  $('#providers').innerHTML=PP.providers();
  PP.renderSlip();PP.slipExtras($('#slip-extras'));PP.slipFab();PP.scrollRow();PP.liveTicker();
};
PAGES.sport=function(){
  const sport=location.hash.replace('#','')||'';
  const known=PP_SPORTS.some(s=>s.id===sport)?sport:'';
  PP.sidebarSport($('#sidebar'),known||'calcio');
  const render=tab=>{
    $$('#sport-tabs .tab').forEach(t=>t.classList.toggle('is-active',t.dataset.tab===tab));
    const c=$('#sport-content');
    const filt=known?PP_COUPONS.filter(x=>x.sport===known):PP_COUPONS;
    if(tab==='live'){const g=PP.liveGroups(known);c.innerHTML=g.length?g.map(x=>PP.coupon(x,true)).join(''):'<div class="panel empty">Nessun evento live per questo sport in questo momento.</div>';}
    else if(tab==='boost'){c.innerHTML=PP.boosts(PP_BOOSTS);}
    else if(tab==='next'){c.innerHTML=filt.map(x=>PP.coupon(x)).join('');}
    else{const live=PP.liveGroups(known).slice(0,1);c.innerHTML=(live.length?`<div class="sec"><h2>${PP.icon('live')} Live ora</h2><a class="link" href="live.html" style="margin-left:auto">Tutti gli eventi live</a></div>${live.map(x=>PP.coupon({...x,events:x.events.slice(0,3)},true)).join('')}`:'')+`<div class="sec"><h2>${PP.icon('flame')} Top match</h2></div>`+filt.map(x=>PP.coupon(x)).join('')+`<div class="sec"><h2>${PP.icon('bolt')} Quote maggiorate</h2></div>`+PP.boosts(PP_BOOSTS.slice(0,3));}
    PP.syncOdds();
  };
  $('#sport-tabs').addEventListener('click',e=>{const t=e.target.closest('.tab');if(t)render(t.dataset.tab);});
  render(location.hash==='#boost'?'boost':'featured');
  $('#sport-title').textContent=known?PP_SPORTS.find(s=>s.id===known).label:'Scommesse sportive';
  window.addEventListener('hashchange',()=>location.reload());
  PP.renderSlip();PP.slipExtras($('#slip-extras'));PP.slipFab();PP.liveTicker();
};
PAGES.live=function(){
  const sb=$('#sidebar');
  const counts={};PP_LIVE_EVENTS.forEach(e=>counts[e.sport]=(counts[e.sport]||0)+1);
  sb.innerHTML=`<div class="panel"><div class="panel-h">${PP.icon('live','sm')} Sport live</div><ul class="side-list" id="live-sports"><li><a href="#" data-s="" class="is-active">${PP.icon('grid')}Tutti<span class="n">${PP_LIVE_EVENTS.length}</span></a></li>${Object.keys(counts).map(k=>{const s=PP_SPORTS.find(x=>x.id===k);return `<li><a href="#" data-s="${k}">${PP.icon(s.icon)}${s.label}<span class="n">${counts[k]}</span></a></li>`;}).join('')}</ul></div>
  <div class="panel"><div class="panel-h">${PP.icon('tv','sm')} Streaming</div><ul class="side-list">${PP_LIVE_EVENTS.slice(0,5).map(e=>`<li><a href="#" data-track="${e.id}">${PP.icon('play')}<span style="overflow:hidden;text-overflow:ellipsis">${esc(e.home)} – ${esc(e.away)}</span></a></li>`).join('')}</ul></div>`;
  const tracker=id=>{
    const e=PP_LIVE_EVENTS.find(x=>x.id===id)||PP_LIVE_EVENTS[0];const pos=52,shots=[9,6],corner=[5,3];
    $('#tracker').innerHTML=`<div class="pitch"><svg viewBox="0 0 420 240" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2"><rect x="10" y="10" width="400" height="220" rx="4"/><line x1="210" y1="10" x2="210" y2="230"/><circle cx="210" cy="120" r="36"/><rect x="10" y="60" width="66" height="120"/><rect x="344" y="60" width="66" height="120"/><rect x="10" y="90" width="24" height="60"/><rect x="386" y="90" width="24" height="60"/><circle cx="${110+Math.random()*200}" cy="${60+Math.random()*120}" r="6" fill="#fff" stroke="none"/></svg></div>
    <div class="tr-side"><div class="tr-head"><span class="tr-team">${esc(e.home)}</span><span class="score">${e.hs} – ${e.as}</span><span class="tr-team" style="text-align:right">${esc(e.away)}</span></div><div class="min">${esc(e.period)} ${e.minute?e.minute+'’':esc(e.set||'')} · ${esc(e.comp)}</div>
    <div class="bar"><span class="lab">Possesso palla</span><span>${pos}%</span><div class="tr"><i style="width:${pos}%"></i><i class="b" style="width:${100-pos}%"></i></div><span>${100-pos}%</span></div>
    <div class="bar"><span class="lab">Tiri</span><span>${shots[0]}</span><div class="tr"><i style="width:${shots[0]/(shots[0]+shots[1])*100}%"></i><i class="b" style="width:${shots[1]/(shots[0]+shots[1])*100}%"></i></div><span>${shots[1]}</span></div>
    <div class="bar"><span class="lab">Calci d’angolo</span><span>${corner[0]}</span><div class="tr"><i style="width:${corner[0]/(corner[0]+corner[1])*100}%"></i><i class="b" style="width:${corner[1]/(corner[0]+corner[1])*100}%"></i></div><span>${corner[1]}</span></div>
    <button class="btn btn-soft btn-sm" style="align-self:flex-start;margin-top:4px">${PP.icon('tv','sm')} Guarda lo streaming</button></div>`;
  };
  const render=s=>{$$('#live-sports a').forEach(a=>a.classList.toggle('is-active',a.dataset.s===s));$$('#live-tabs .tab').forEach(t=>t.classList.toggle('is-active',t.dataset.s===s));$('#live-content').innerHTML=PP.liveGroups(s).map(c=>PP.coupon(c,true)).join('');PP.syncOdds();};
  sb.addEventListener('click',e=>{const a=e.target.closest('[data-s]');if(a){e.preventDefault();render(a.dataset.s);PP.closeDrawers();}const t=e.target.closest('[data-track]');if(t){e.preventDefault();tracker(t.dataset.track);$('#tracker').scrollIntoView({behavior:'smooth',block:'center'});}});
  $('#live-tabs').innerHTML=`<button class="tab is-active" data-s="">Tutti (${PP_LIVE_EVENTS.length})</button>${Object.keys(counts).map(k=>`<button class="tab" data-s="${k}">${PP_SPORTS.find(x=>x.id===k).label} (${counts[k]})</button>`).join('')}`;
  $('#live-tabs').addEventListener('click',e=>{const t=e.target.closest('.tab');if(t)render(t.dataset.s);});
  document.addEventListener('click',e=>{const r=e.target.closest('.match.live');if(r&&!e.target.closest('.odd,a'))tracker(r.dataset.ev);});
  tracker('l1');render('');
  PP.renderSlip();PP.slipExtras($('#slip-extras'));PP.slipFab();PP.liveTicker();
};
PAGES.casino=function(){
  const CATS=[{id:'',label:'Tutti i giochi',img:'tutti'},{id:'top',label:'Top 10',img:'top-10'},{id:'new',label:'Novità',img:'novita'},{id:'sugg',label:'Suggerite',img:'suggerite'},{id:'slot',label:'Slot',img:'ikone-providers'},{id:'megaways',label:'Megaways',img:'giornid'},{id:'book',label:'Book',img:'book'},{id:'crash',label:'Crash games',img:'crash'},{id:'jackpot',label:'Jackpot',img:'evo'},{id:'table',label:'Table games',img:'table-games'}];
  const qs=new URLSearchParams(location.search);
  const st={cat:'',q:qs.get('q')||'',prov:qs.get('provider')||''};
  const provCounts={};PP_GAMES.forEach(g=>provCounts[g.provider]=(provCounts[g.provider]||0)+1);
  const normP=p=>p.toLowerCase().replace(/[^a-z0-9]/g,'');
  if(st.prov){const m=Object.keys(provCounts).find(p=>normP(p).includes(normP(st.prov)));st.prov=m||'';}
  PP.hero($('#hero'),[{img:'assets/img/banners/1500x300_playson.webp',alt:'Playson Coin Race',href:'promo.html'},{img:'assets/img/banners/1500x300_crown.webp',alt:'Crown Coins',href:'promo.html'},{img:'assets/img/banners/1500x300_igt.webp',alt:'Le slot IGT',href:'promo.html'},{img:'assets/img/banners/1500x300_bonussumisu.webp',alt:'Bonus su misura',href:'promo.html'}]);
  $('#chips').innerHTML=CATS.map(c=>`<button class="chip ${c.id===st.cat?'is-active':''}" data-cat="${c.id}"><img src="assets/img/icons/${c.img}.png" alt="">${c.label}</button>`).join('');
  $('#sidebar').innerHTML=`<div class="panel"><div class="panel-h">${PP.icon('grid','sm')} Categorie</div><div class="filter-list" id="cat-list">${CATS.map(c=>`<button data-cat="${c.id}" class="${c.id===st.cat?'is-active':''}"><img src="assets/img/icons/${c.img}.png" alt="">${c.label}<span class="n">${c.id?PP_GAMES.filter(g=>c.id==='top'?g.rank:g.tags.includes(c.id)).length:PP_GAMES.length}</span></button>`).join('')}</div></div>
  <div class="panel"><div class="panel-h">${PP.icon('layers','sm')} Provider</div><div class="filter-list" id="prov-list"><button data-prov="" class="${st.prov?'':'is-active'}">${PP.icon('grid')}Tutti i provider</button>${Object.keys(provCounts).sort().map(p=>`<button data-prov="${esc(p)}" class="${p===st.prov?'is-active':''}">${esc(p)}<span class="n">${provCounts[p]}</span></button>`).join('')}</div></div>`;
  $('#q').value=st.q;
  const filtered=()=>PP_GAMES.filter(g=>(!st.cat||(st.cat==='top'?g.rank:g.tags.includes(st.cat)))&&(!st.prov||g.provider===st.prov)&&(!st.q||(g.name+' '+g.provider).toLowerCase().includes(st.q.toLowerCase())));
  const render=()=>{
    $$('[data-cat]').forEach(b=>b.classList.toggle('is-active',b.dataset.cat===st.cat));$$('[data-prov]').forEach(b=>b.classList.toggle('is-active',b.dataset.prov===st.prov));
    const c=$('#casino-content');
    if(st.cat||st.q||st.prov){const list=filtered();const lab=st.q?`Risultati per “${esc(st.q)}”`:st.prov||CATS.find(x=>x.id===st.cat).label;c.innerHTML=`<div class="sec"><h2>${lab} <span style="color:var(--muted);font-weight:500;font-size:13px">(${list.length})</span></h2><div class="tools"><button class="link" id="reset">Azzera filtri</button></div></div>`+(list.length?`<div class="game-grid">${list.map(g=>PP.gameCard(g,{rank:st.cat==='top'?g.rank:0})).join('')}</div>`:`<div class="panel empty">Nessun gioco trovato. ${st.cat==='table'?'I giochi da tavolo sono disponibili nella sezione Casinò Live.':''}</div>`);}
    else{
      const row=(title,icon,games,opts={},cls='')=>`<div class="sec"><h2><img src="assets/img/icons/${icon}.png" alt="">${title}</h2><div class="tools"><a class="link" href="#" data-cat="${opts.cat||''}">Tutti</a><button class="arrow" data-dir="prev">${PP.icon('chevL','sm')}</button><button class="arrow" data-dir="next">${PP.icon('chevR','sm')}</button></div></div><div class="hscroll ${cls}">${games.map(g=>PP.gameCard(g,opts)).join('')}</div>`;
      c.innerHTML=row('I più giocati','top-10',PP_GAMES.filter(g=>g.rank).sort((a,b)=>a.rank-b.rank).map(g=>({...g,_r:g.rank})),{},'lg').replace(/<div class="game">/g,'<div class="game">')
        +row('Nuovi arrivi','novita',PP_GAMES.filter(g=>g.tags.includes('new')),{cat:'new'})
        +row('Suggerite da noi','suggerite',PP_GAMES.filter(g=>g.tags.includes('sugg')),{cat:'sugg'})
        +row('Crash & instant games','crash',PP_GAMES.filter(g=>g.tags.includes('crash')),{cat:'crash'})
        +`<div class="sec"><h2><img src="assets/img/icons/ikone-providers.png" alt="">I nostri provider</h2><div class="tools"><button class="arrow" data-dir="prev">${PP.icon('chevL','sm')}</button><button class="arrow" data-dir="next">${PP.icon('chevR','sm')}</button></div></div><div class="hscroll providers">${PP.providers()}</div>`
        +`<div class="sec"><h2><img src="assets/img/icons/tutti.png" alt="">Tutte le slot</h2><span style="color:var(--muted);font-size:12px">${PP_GAMES.length} giochi</span></div><div class="game-grid">${PP_GAMES.map(g=>PP.gameCard(g)).join('')}</div>`;
      // rank badges for first row
      const first=$('.hscroll',c);$$('.game',first).forEach((g,i)=>{g.classList.add('ranked');g.innerHTML=`<div class="fr">${g.innerHTML}</div><span class="rk">${i+1}</span>`;});
      PP.scrollRow();
    }
  };
  document.addEventListener('click',e=>{
    const c=e.target.closest('[data-cat]');if(c){e.preventDefault();st.cat=c.dataset.cat;st.q='';$('#q').value='';render();PP.closeDrawers();window.scrollTo({top:$('#chips').offsetTop-130,behavior:'smooth'});return;}
    const p=e.target.closest('[data-prov]');if(p){st.prov=p.dataset.prov;render();PP.closeDrawers();return;}
    if(e.target.closest('#reset')){st.cat='';st.q='';st.prov='';$('#q').value='';render();}
  });
  $('#q').addEventListener('input',e=>{st.q=e.target.value.trim();render();});
  render();
};
PAGES.livecasino=function(){
  const CATS=[{id:'',label:'Tutti',img:'tutti'},{id:'perla',label:'Perla Live',img:'evo'},{id:'roulette',label:'Roulette',img:'roulette'},{id:'baccarat',label:'Baccarat & Punto Banco',img:'baccarat'},{id:'blackjack',label:'Blackjack',img:'nov25_table-games'},{id:'show',label:'Game Show',img:'game-show'},{id:'asian',label:'Sala della Fortuna',img:'asian-games'}];
  const hashCat=location.hash.replace('#','');const st={cat:CATS.some(c=>c.id===hashCat)?hashCat:''};
  PP.hero($('#hero'),[{img:'assets/img/banners/2000x350_desksport_livecasino.jpg',alt:'Live casinò dal Perla',href:'#perla'},{img:'assets/img/banners/2000x350_desksport_24.jpg',alt:'Live casinò 24/7',href:'#perla'},{img:'assets/img/banners/40anni-2000x350_desktop.webp',alt:'40 anni Casinò Perla',href:'promo.html'},{img:'assets/img/banners/2000x350_desksport_giochilive.jpg',alt:'Giochi live',href:'#show'}]);
  $('#chips').innerHTML=CATS.map(c=>`<button class="chip ${c.id===st.cat?'is-active':''}" data-cat="${c.id}"><img src="assets/img/icons/${c.img}.png" alt="">${c.label}</button>`).join('');
  $('#sidebar').innerHTML=`<div class="panel"><div class="panel-h">${PP.icon('grid','sm')} Sale</div><div class="filter-list">${CATS.map(c=>`<button data-cat="${c.id}" class="${c.id===st.cat?'is-active':''}"><img src="assets/img/icons/${c.img}.png" alt="">${c.label}<span class="n">${c.id?PP_LIVE.filter(t=>t.tags.includes(c.id)).length:PP_LIVE.length}</span></button>`).join('')}</div></div>
  <div class="panel"><div class="panel-h">${PP.icon('clock','sm')} Orari Perla Live</div><ul class="side-list"><li><a href="#perla">${PP.icon('live')}Roulette Perla<span class="n">07:00–02:30</span></a></li><li><a href="#perla">${PP.icon('cards')}Punto Banco Perla<span class="n">07:00–02:30</span></a></li></ul></div>`;
  const perla=`<div class="sec" id="perla"><h2><img src="assets/img/icons/evo.png" alt="">Dal vivo dal Casinò Perla</h2><span style="color:var(--muted);font-size:12px">Streaming in diretta da Nova Gorica</span></div><div class="live-perla">
    <div class="lp"><img src="assets/img/live/perla-roulette-card.jpeg" alt="Roulette Perla"><div class="in"><h3>Roulette Live Perla</h3><span class="hrs"><span class="dot"></span>Tutti i giorni 07:00 – 02:30</span><p>La roulette francese del Casinò Perla, con croupier reali e streaming in HD. Puntata minima 1€.</p><button class="btn btn-pink btn-sm" data-play="Roulette Perla">${PP.icon('play','sm')} Gioca</button></div></div>
    <div class="lp"><img src="assets/img/live/perla-puntobanco-card.jpeg" alt="Punto Banco Perla"><div class="in"><h3>Punto Banco Live Perla</h3><span class="hrs"><span class="dot"></span>Tutti i giorni 07:00 – 02:30</span><p>Il baccarat dei tavoli del Perla, in diretta dalla sala. Puntata minima 5€.</p><button class="btn btn-pink btn-sm" data-play="Punto Banco Perla">${PP.icon('play','sm')} Gioca</button></div></div></div>`;
  const render=()=>{
    $$('[data-cat]').forEach(b=>b.classList.toggle('is-active',b.dataset.cat===st.cat));
    const c=$('#live-content');
    if(st.cat){const list=PP_LIVE.filter(t=>t.tags.includes(st.cat));c.innerHTML=(st.cat==='perla'?perla:'')+`<div class="sec"><h2><img src="assets/img/icons/${CATS.find(x=>x.id===st.cat).img}.png" alt="">${CATS.find(x=>x.id===st.cat).label} <span style="color:var(--muted);font-weight:500;font-size:13px">(${list.length})</span></h2><div class="tools"><button class="link" data-cat="">Tutte le sale</button></div></div><div class="game-grid">${list.map(t=>PP.gameCard({...t,tags:[]},{live:true})).join('')}</div>`;}
    else{c.innerHTML=perla+CATS.slice(2).map(cat=>{const list=PP_LIVE.filter(t=>t.tags.includes(cat.id));return `<div class="sec" id="${cat.id}"><h2><img src="assets/img/icons/${cat.img}.png" alt="">${cat.label}</h2><div class="tools"><button class="link" data-cat="${cat.id}">Tutti (${list.length})</button><button class="arrow" data-dir="prev">${PP.icon('chevL','sm')}</button><button class="arrow" data-dir="next">${PP.icon('chevR','sm')}</button></div></div><div class="hscroll">${list.map(t=>PP.gameCard({...t,tags:[]},{live:true})).join('')}</div>`;}).join('');PP.scrollRow();}
  };
  document.addEventListener('click',e=>{const c=e.target.closest('[data-cat]');if(c){st.cat=c.dataset.cat;render();PP.closeDrawers();window.scrollTo({top:$('#chips').offsetTop-130,behavior:'smooth'});}});
  render();
};
PAGES.promo=function(){
  const cats=['Tutte',...new Set(PP_PROMOS.map(p=>p.k))];let cur='Tutte';
  $('#chips').innerHTML=cats.map(c=>`<button class="chip ${c===cur?'is-active':''}" data-k="${esc(c)}">${c}</button>`).join('');
  const render=()=>{$$('[data-k]').forEach(b=>b.classList.toggle('is-active',b.dataset.k===cur));$('#promo-grid').innerHTML=PP_PROMOS.filter(p=>cur==='Tutte'||p.k===cur).map(p=>`<div class="promo"><img src="${p.img}" alt="${esc(p.title)}" loading="lazy"><div class="in"><span class="k">${esc(p.k)}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><div class="acts"><button class="btn btn-primary btn-sm" data-open="modal-register">Partecipa</button><a class="btn btn-ghost btn-sm" href="#">Termini e condizioni</a></div></div></div>`).join('');};
  $('#chips').addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(b){cur=b.dataset.k;render();}});
  render();
};
document.addEventListener('DOMContentLoaded',()=>{const page=document.body.dataset.page;PP.shell(page);(PAGES[page]||(()=>{}))();PP.syncOdds();});
})();
