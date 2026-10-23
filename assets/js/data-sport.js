// Dati sportivi dimostrativi (eventi, quote, promo). Sostituire con il feed reale.
window.PP_SPORTS = [
  {id:'calcio',label:'Calcio',icon:'football',n:852,live:14},
  {id:'tennis',label:'Tennis',icon:'tennis',n:74,live:6},
  {id:'basket',label:'Pallacanestro',icon:'basketball',n:194,live:3},
  {id:'volley',label:'Pallavolo',icon:'volleyball',n:35,live:2},
  {id:'f1',label:'Formula 1',icon:'flag',n:4},
  {id:'motogp',label:'Motociclismo',icon:'helmet',n:2},
  {id:'hockey',label:'Hockey su ghiaccio',icon:'hockey',n:58,live:1},
  {id:'rugby',label:'Rugby',icon:'rugby',n:12},
  {id:'baseball',label:'Baseball',icon:'baseball',n:14},
  {id:'freccette',label:'Freccette',icon:'target',n:25},
  {id:'golf',label:'Golf',icon:'golf',n:6},
  {id:'ciclismo',label:'Ciclismo',icon:'bike',n:2},
  {id:'boxe',label:'Boxe / MMA',icon:'glove',n:9},
  {id:'esports',label:'eSports',icon:'gamepad',n:41,live:5},
  {id:'pallamano',label:'Pallamano',icon:'handball',n:22},
  {id:'snooker',label:'Snooker',icon:'snooker',n:7},
  {id:'pingpong',label:'Tennis tavolo',icon:'pingpong',n:66,live:9},
  {id:'nfl',label:'Football americano',icon:'amfootball',n:16},
  {id:'spettacolo',label:'Spettacolo',icon:'star',n:3}
];
window.PP_FEATURED = [
  {label:'Champions League',flag:'🇪🇺',sport:'calcio',live:true},
  {label:'Serie A',flag:'🇮🇹',sport:'calcio'},
  {label:'Serie B',flag:'🇮🇹',sport:'calcio'},
  {label:'Premier League',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',sport:'calcio'},
  {label:'LaLiga',flag:'🇪🇸',sport:'calcio'},
  {label:'Bundesliga',flag:'🇩🇪',sport:'calcio'},
  {label:'Ligue 1',flag:'🇫🇷',sport:'calcio'},
  {label:'Europa League',flag:'🇪🇺',sport:'calcio'},
  {label:'NBA',flag:'🇺🇸',sport:'basket'},
  {label:'Eurolega',flag:'🇪🇺',sport:'basket'},
  {label:'ATP Vienna',flag:'🇦🇹',sport:'tennis'},
  {label:'ATP Basilea',flag:'🇨🇭',sport:'tennis'}
];
const MK_1X2 = [{lab:'1X2',keys:['1','X','2']},{lab:'U/O 2.5',keys:['U','O']},{lab:'GG/NG',keys:['GG','NG']}];
const MK_H2H = [{lab:'Testa a testa',keys:['1','2']},{lab:'U/O games',keys:['U','O']}];
const MK_BK  = [{lab:'Testa a testa',keys:['1','2']},{lab:'U/O punti',keys:['U','O']}];
window.PP_MARKET_NAMES = {'1':'1','X':'X','2':'2','U':'Under','O':'Over','GG':'Goal','NG':'No Goal'};
window.PP_LIVE_EVENTS = [
  {id:'l1',sport:'calcio',comp:'Champions League',flag:'🇪🇺',mk:MK_1X2,period:'2° T',minute:78,home:'Inter',away:'Arsenal',hs:2,as:1,o:{'1':1.18,'X':6.50,'2':17.0,'U':1.95,'O':1.80,'GG':2.05,'NG':1.70},markets:148},
  {id:'l2',sport:'calcio',comp:'Champions League',flag:'🇪🇺',mk:MK_1X2,period:'2° T',minute:76,home:'Juventus',away:'Real Madrid',hs:1,as:1,o:{'1':3.40,'X':1.85,'2':4.20,'U':1.45,'O':2.60,'GG':1.12,'NG':5.50},markets:152},
  {id:'l3',sport:'calcio',comp:'Champions League',flag:'🇪🇺',mk:MK_1X2,period:'2° T',minute:71,home:'Atalanta',away:'Bayern Monaco',hs:0,as:2,o:{'1':26.0,'X':8.50,'2':1.08,'U':1.65,'O':2.15,'GG':2.40,'NG':1.52},markets:139},
  {id:'l4',sport:'calcio',comp:'Champions League',flag:'🇪🇺',mk:MK_1X2,period:'2° T',minute:80,home:'Napoli',away:'PSV Eindhoven',hs:3,as:0,o:{'1':1.01,'X':17.0,'2':51.0,'U':1.30,'O':3.25,'GG':4.50,'NG':1.18},markets:121},
  {id:'l5',sport:'calcio',comp:'Champions League',flag:'🇪🇺',mk:MK_1X2,period:'2° T',minute:74,home:'Barcellona',away:'Manchester City',hs:2,as:2,o:{'1':2.60,'X':2.40,'2':3.10,'U':1.90,'O':1.85,'GG':1.0,'NG':0},markets:160},
  {id:'l6',sport:'tennis',comp:'ATP Vienna · 1° turno',flag:'🇦🇹',mk:MK_H2H,period:'2° set',minute:0,set:'6-4 · 3-2',home:'J. Sinner',away:'A. Davidovich Fokina',hs:1,as:0,serve:'home',o:{'1':1.05,'2':9.00,'U':1.80,'O':1.95},markets:38},
  {id:'l7',sport:'tennis',comp:'ATP Basilea · 1° turno',flag:'🇨🇭',mk:MK_H2H,period:'1° set',minute:0,set:'4-4',home:'L. Musetti',away:'B. Shelton',hs:0,as:0,serve:'away',o:{'1':2.10,'2':1.72,'U':1.88,'O':1.88},markets:34},
  {id:'l8',sport:'basket',comp:'NBA',flag:'🇺🇸',mk:MK_BK,period:'3° Q',minute:7,home:'Boston Celtics',away:'New York Knicks',hs:71,as:66,o:{'1':1.55,'2':2.45,'U':1.90,'O':1.90},markets:92},
  {id:'l9',sport:'basket',comp:'Eurolega',flag:'🇪🇺',mk:MK_BK,period:'4° Q',minute:4,home:'Olimpia Milano',away:'Real Madrid',hs:78,as:80,o:{'1':2.30,'2':1.62,'U':1.85,'O':1.95},markets:64}
];
window.PP_COUPONS = [
  {comp:'Champions League',flag:'🇪🇺',sport:'calcio',mk:MK_1X2,events:[
    {id:'c1',day:'Gio 22',time:'18:45',home:'Bologna',away:'Benfica',o:{'1':2.35,'X':3.30,'2':3.00,'U':1.85,'O':1.90,'GG':1.70,'NG':2.05},markets:210},
    {id:'c2',day:'Gio 22',time:'21:00',home:'Milan',away:'Paris Saint-Germain',o:{'1':3.10,'X':3.60,'2':2.20,'U':2.05,'O':1.72,'GG':1.55,'NG':2.35},markets:236},
    {id:'c3',day:'Gio 22',time:'21:00',home:'Liverpool',away:'Borussia Dortmund',o:{'1':1.62,'X':4.30,'2':4.80,'U':2.25,'O':1.60,'GG':1.50,'NG':2.50},markets:228},
    {id:'c4',day:'Gio 22',time:'21:00',home:'Chelsea',away:'Atletico Madrid',o:{'1':2.05,'X':3.40,'2':3.60,'U':1.80,'O':1.95,'GG':1.75,'NG':2.00},markets:214}
  ]},
  {comp:'Serie A · 8ª giornata',flag:'🇮🇹',sport:'calcio',mk:MK_1X2,events:[
    {id:'s1',day:'Sab 24',time:'15:00',home:'Torino',away:'Genoa',o:{'1':2.25,'X':3.10,'2':3.40,'U':1.65,'O':2.20,'GG':1.95,'NG':1.80},markets:280},
    {id:'s2',day:'Sab 24',time:'18:00',home:'Fiorentina',away:'Bologna',o:{'1':2.50,'X':3.10,'2':2.95,'U':1.75,'O':2.05,'GG':1.80,'NG':1.95},markets:284},
    {id:'s3',day:'Sab 24',time:'20:45',home:'Inter',away:'Juventus',o:{'1':1.95,'X':3.40,'2':3.90,'U':1.90,'O':1.85,'GG':1.72,'NG':2.05},markets:312},
    {id:'s4',day:'Dom 25',time:'12:30',home:'Udinese',away:'Lecce',o:{'1':2.10,'X':3.20,'2':3.60,'U':1.70,'O':2.10,'GG':2.00,'NG':1.75},markets:270},
    {id:'s5',day:'Dom 25',time:'15:00',home:'Cagliari',away:'Como',o:{'1':2.80,'X':3.15,'2':2.60,'U':1.80,'O':1.95,'GG':1.85,'NG':1.90},markets:268},
    {id:'s6',day:'Dom 25',time:'18:00',home:'Atalanta',away:'Napoli',o:{'1':2.70,'X':3.30,'2':2.65,'U':2.00,'O':1.78,'GG':1.68,'NG':2.10},markets:296},
    {id:'s7',day:'Dom 25',time:'20:45',home:'Roma',away:'Lazio',o:{'1':2.15,'X':3.20,'2':3.50,'U':1.78,'O':2.00,'GG':1.85,'NG':1.90},markets:304},
    {id:'s8',day:'Lun 26',time:'20:45',home:'Milan',away:'Parma',o:{'1':1.45,'X':4.50,'2':6.75,'U':2.10,'O':1.70,'GG':1.90,'NG':1.85},markets:274}
  ]},
  {comp:'Premier League',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',sport:'calcio',mk:MK_1X2,events:[
    {id:'p1',day:'Sab 24',time:'13:30',home:'Arsenal',away:'Tottenham',o:{'1':1.60,'X':4.20,'2':5.25,'U':2.15,'O':1.68,'GG':1.72,'NG':2.05},markets:290},
    {id:'p2',day:'Sab 24',time:'16:00',home:'Manchester City',away:'Everton',o:{'1':1.25,'X':6.00,'2':11.0,'U':2.30,'O':1.60,'GG':2.10,'NG':1.70},markets:276},
    {id:'p3',day:'Sab 24',time:'18:30',home:'Liverpool',away:'Newcastle',o:{'1':1.70,'X':4.00,'2':4.50,'U':2.20,'O':1.65,'GG':1.60,'NG':2.25},markets:288},
    {id:'p4',day:'Dom 25',time:'17:30',home:'Chelsea',away:'Manchester United',o:{'1':1.85,'X':3.70,'2':4.00,'U':2.05,'O':1.75,'GG':1.65,'NG':2.20},markets:294}
  ]},
  {comp:'LaLiga',flag:'🇪🇸',sport:'calcio',mk:MK_1X2,events:[
    {id:'e1',day:'Sab 24',time:'16:15',home:'Real Madrid',away:'Barcellona',o:{'1':2.25,'X':3.80,'2':2.90,'U':2.35,'O':1.58,'GG':1.45,'NG':2.65},markets:320},
    {id:'e2',day:'Sab 24',time:'21:00',home:'Atletico Madrid',away:'Villarreal',o:{'1':1.80,'X':3.50,'2':4.60,'U':1.70,'O':2.10,'GG':1.90,'NG':1.85},markets:260},
    {id:'e3',day:'Dom 25',time:'18:30',home:'Siviglia',away:'Athletic Bilbao',o:{'1':2.60,'X':3.10,'2':2.85,'U':1.68,'O':2.15,'GG':1.95,'NG':1.80},markets:252}
  ]},
  {comp:'ATP Vienna · 2° turno',flag:'🇦🇹',sport:'tennis',mk:MK_H2H,events:[
    {id:'t1',day:'Gio 22',time:'14:00',home:'J. Sinner',away:'F. Cobolli',o:{'1':1.12,'2':6.00,'U':1.85,'O':1.90},markets:42},
    {id:'t2',day:'Gio 22',time:'17:30',home:'A. Zverev',away:'M. Berrettini',o:{'1':1.55,'2':2.45,'U':1.90,'O':1.85},markets:40},
    {id:'t3',day:'Gio 22',time:'19:30',home:'D. Medvedev',away:'J. Draper',o:{'1':2.05,'2':1.75,'U':1.88,'O':1.88},markets:38}
  ]},
  {comp:'NBA',flag:'🇺🇸',sport:'basket',mk:MK_BK,events:[
    {id:'b1',day:'Gio 22',time:'01:30',home:'Los Angeles Lakers',away:'Golden State Warriors',o:{'1':1.68,'2':2.20,'U':1.90,'O':1.90},markets:110},
    {id:'b2',day:'Gio 22',time:'02:00',home:'Denver Nuggets',away:'Dallas Mavericks',o:{'1':1.45,'2':2.75,'U':1.88,'O':1.92},markets:104},
    {id:'b3',day:'Gio 22',time:'04:00',home:'Oklahoma City Thunder',away:'Houston Rockets',o:{'1':1.35,'2':3.20,'U':1.90,'O':1.90},markets:102}
  ]},
  {comp:'Eurolega',flag:'🇪🇺',sport:'basket',mk:MK_BK,events:[
    {id:'eu1',day:'Gio 22',time:'20:30',home:'Virtus Bologna',away:'Fenerbahçe',o:{'1':2.35,'2':1.60,'U':1.90,'O':1.90},markets:70},
    {id:'eu2',day:'Ven 23',time:'20:45',home:'Olimpia Milano',away:'Panathinaikos',o:{'1':2.10,'2':1.72,'U':1.85,'O':1.95},markets:72}
  ]}
];
window.PP_BOOSTS = [
  {ev:'Inter - Juventus · Sab 24, 20:45',sel:'Inter vince e Lautaro Martínez segna',was:4.20,now:5.50},
  {ev:'Real Madrid - Barcellona · Sab 24, 16:15',sel:'Entrambe segnano e Over 3.5',was:2.60,now:3.25},
  {ev:'Milan - PSG · Gio 22, 21:00',sel:'Leão o Dembélé marcatore',was:1.95,now:2.40},
  {ev:'ATP Vienna · Gio 22',sel:'Sinner, Zverev e Medvedev vincono',was:3.10,now:3.90},
  {ev:'Roma - Lazio · Dom 25, 20:45',sel:'Derby con 3+ cartellini gialli per squadra',was:2.10,now:2.65},
  {ev:'Arsenal - Tottenham · Sab 24, 13:30',sel:'Arsenal vince con 2+ gol di scarto',was:2.75,now:3.40}
];
window.PP_HERO = [
  {img:'assets/img/banners/1500x300_bonussumisu.webp',alt:'Bonus su misura per te',title:'Bonus su misura per te',sub:'Welcome Bonus del 100% fino a 1.100€ sul primo deposito.',cta:'Scopri di più',href:'promo.html'},
  {img:'assets/img/banners/1500x300_caprese.webp',alt:'Quota Caprese',title:'Quota Caprese',sub:'Ogni settimana una quota maggiorata sui grandi eventi.',cta:'Vai alle quote',href:'sport.html'},
  {img:'assets/img/banners/1500x300_sport.webp',alt:'Vivi lo sport',title:'Vivi lo sport, punta sull’emozione',sub:'Oltre 20 discipline, Bet Builder e scommesse live.',cta:'Scommetti ora',href:'sport.html'},
  {img:'assets/img/banners/40anni-1500x300-2.webp',alt:'40 anni di esperienza',title:'40 anni di esperienza',sub:'Dal Casinò Perla di Nova Gorica al tuo smartphone.',cta:'Scopri Perla Live',href:'livecasino.html'},
  {img:'assets/img/banners/1500x300_igt.webp',alt:'IGT su Perlaplay',title:'Le slot IGT sono arrivate',sub:'Cleopatra, Wheel of Fortune e i grandi classici da sala.',cta:'Gioca ora',href:'casino.html'}
];
window.PP_HERO_MOBILE = ['assets/img/banners/asset7.webp','assets/img/banners/sportt.webp','assets/img/banners/asset9.webp','assets/img/banners/asset4.webp'];
window.PP_PROMOS = [
  {k:'Benvenuto',title:'Welcome Bonus Casinò',text:'100% fino a 1.100€ sul primo deposito. Deposito minimo 10€.',img:'assets/img/banners/1500x300_bonussumisu.webp',href:'#'},
  {k:'Casinò Live',title:'Welcome Bonus Casinò Live',text:'Scegli il bonus Live e gioca ai tavoli in streaming dal Perla.',img:'assets/img/banners/2000x350_desksport_livecasino.jpg',href:'#'},
  {k:'Sport',title:'Quota Caprese',text:'Ogni settimana una quota maggiorata selezionata dal nostro team.',img:'assets/img/banners/1500x300_caprese.webp',href:'#'},
  {k:'Sport',title:'Promo Sport',text:'Freebet e quote maggiorate sui grandi eventi del weekend.',img:'assets/img/banners/2000x350_homepromo_desksport.jpg',href:'#'},
  {k:'Casinò',title:'Crown Coins',text:'Raccogli le monete nelle slot selezionate e sblocca i premi.',img:'assets/img/banners/1500x300_crown.webp',href:'#'},
  {k:'Casinò',title:'Playson Coin Race',text:'Montepremi fino a 3.000€ nelle slot Playson in gara.',img:'assets/img/banners/1500x300_playson.webp',href:'#'},
  {k:'Casinò',title:'Le slot IGT',text:'Scopri i grandi classici da sala: Cleopatra, Wheel of Fortune e molti altri.',img:'assets/img/banners/1500x300_igt.webp',href:'#'},
  {k:'Perla Live',title:'Live Casinò 24/7',text:'Roulette e Punto Banco in diretta dal Casinò Perla di Nova Gorica.',img:'assets/img/banners/2000x350_desksport_24.jpg',href:'#'},
  {k:'Gruppo Hit',title:'40 anni di gioco',text:'Dal 1984 il Casinò Perla è uno dei più grandi d’Europa. Festeggia con noi.',img:'assets/img/banners/40anni-2000x350_desktop.webp',href:'#'},
  {k:'Gioco responsabile',title:'Il controllo è il vero gioco',text:'Limiti di deposito, autoesclusione e strumenti di autovalutazione.',img:'assets/img/banners/responsabile-1500x300.webp',href:'#'}
];
window.PP_WINS = [
  {when:'Oggi',game:'Gates of Olympus',amt:'4.180,00 €'},
  {when:'Oggi',game:'Roulette Perla',amt:'1.250,00 €'},
  {when:'Ieri',game:'Multipla calcio (6 eventi)',amt:'896,40 €'},
  {when:'Ieri',game:'Big Bass Bonanza',amt:'560,00 €'}
];
window.PP_MYBETS = [
  {ev:'Multipla · 4 eventi',sel:'Inter, Arsenal, Over 2.5, Sinner',stake:'10,00 €',win:'82,40 €',st:'In corso'},
  {ev:'Singola · Napoli - PSV',sel:'1 @ 1.45',stake:'20,00 €',win:'29,00 €',st:'Vinta',win_:true}
];
