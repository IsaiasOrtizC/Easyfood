/* ══════════════════════════════════════════════════
   EasyFood — shared.js
   Datos de restaurantes reales de Santiago + helpers
   ══════════════════════════════════════════════════ */

// ── Datos globales de restaurantes (simula BD) ──────────────────────────────
const EF = {

  /* Usuario sesión actual (vendrá de auth en producción) */
  user: {
    id: 'u001',
    name: 'Isaías Ortiz',
    handle: '@isaiasortizc',
    initials: 'IO',
    location: 'Providencia, Santiago',
    avatar_color: 'av-a',
    badges: ['🍔 Burger lover','✅ Verificado','⭐ Top contribuidor'],
    prefs: ['burger','ramen','sushi'],
    stats: { reviews: 47, useful: 312, avg: 4.6 },
    favorites: ['r01','r05','r08'],
  },

  /* Categorías */
  categories: [
    { id:'all',    icon:'🍽️', label:'Todos'    },
    { id:'burger', icon:'🍔', label:'Burger'   },
    { id:'pizza',  icon:'🍕', label:'Pizza'    },
    { id:'ramen',  icon:'🍜', label:'Ramen'    },
    { id:'sushi',  icon:'🍣', label:'Sushi'    },
    { id:'tacos',  icon:'🌮', label:'Tacos'    },
    { id:'healthy',icon:'🥗', label:'Sano'     },
    { id:'coffee', icon:'☕', label:'Café'     },
    { id:'bar',    icon:'🍺', label:'Bar'      },
    { id:'seafood',icon:'🦞', label:'Mariscos' },
    { id:'chilena',icon:'🫕', label:'Chilena'  },
    { id:'parrilla',icon:'🥩',label:'Parrilla' },
  ],

  /* Restaurantes reales de Santiago */
  restaurants: [
    {
      id: 'r01',
      name: 'Fuente Alemana',
      category: 'burger',
      icon: '🍔', ri_class: 'ri-bur',
      address: 'Av. Libertador Bernardo O\'Higgins 58, Santiago Centro',
      comuna: 'Santiago Centro',
      lat: -33.4465, lng: -70.6530,
      rating: 4.8, reviews_count: 1240,
      price: '$$', time: '11:30–22:00',
      tags: ['Sánguche alemán','Churrasco','Clásico santiaguino'],
      badge: { type:'top', label:'Ícono histórico' },
      description: 'Referente histórico de los sánguches de churrasco. Desde 1957 en Alameda.',
      phone: '+56 2 2671 4231',
      delivery: false,
    },
    {
      id: 'r02',
      name: 'La Burguesa',
      category: 'burger',
      icon: '🍔', ri_class: 'ri-bur',
      address: 'Av. Italia 1380, Providencia',
      comuna: 'Providencia',
      lat: -33.4452, lng: -70.6351,
      rating: 4.7, reviews_count: 876,
      price: '$$$', time: '12:00–23:00',
      tags: ['Burger gourmet','Carne nacional','Sin gluten'],
      badge: { type:'new', label:'Tendencia' },
      description: 'Burger gourmet con carne Black Angus chilena y pan brioche artesanal.',
      phone: '+56 2 2235 7890',
      delivery: true,
    },
    {
      id: 'r03',
      name: 'Noko Ramen',
      category: 'ramen',
      icon: '🍜', ri_class: 'ri-ram',
      address: 'Loreto 40, Providencia',
      comuna: 'Providencia',
      lat: -33.4429, lng: -70.6367,
      rating: 4.6, reviews_count: 643,
      price: '$$$', time: '13:00–22:30',
      tags: ['Tonkotsu','Shoyu','Vegano disponible'],
      badge: { type:'pop', label:'Muy popular' },
      description: 'El mejor tonkotsu de Santiago. Caldo cocido 18 horas, fideos importados.',
      phone: '+56 2 2334 5621',
      delivery: true,
    },
    {
      id: 'r04',
      name: 'Sushi Yoko',
      category: 'sushi',
      icon: '🍣', ri_class: 'ri-sus',
      address: 'Av. Las Condes 10690, Las Condes',
      comuna: 'Las Condes',
      lat: -33.4031, lng: -70.5727,
      rating: 4.7, reviews_count: 512,
      price: '$$$$', time: '12:30–23:00',
      tags: ['Omakase','Rolls','Pescado fresco'],
      badge: null,
      description: 'Sushi de autor con productos del Pacífico chileno. Omakase disponible.',
      phone: '+56 2 2246 8012',
      delivery: false,
    },
    {
      id: 'r05',
      name: 'Pizza Cómplice',
      category: 'pizza',
      icon: '🍕', ri_class: 'ri-piz',
      address: 'Condell 1277, Providencia',
      comuna: 'Providencia',
      lat: -33.4489, lng: -70.6342,
      rating: 4.5, reviews_count: 389,
      price: '$$', time: '13:00–23:30',
      tags: ['Masa madre','Horno de leña','Napolitana'],
      badge: { type:'new', label:'Nuevo' },
      description: 'Pizza napolitana con masa madre de 72h y mozzarella di bufala importada.',
      phone: '+56 9 8712 3456',
      delivery: true,
    },
    {
      id: 'r06',
      name: 'El Huerto',
      category: 'healthy',
      icon: '🥗', ri_class: 'ri-san',
      address: 'Orrego Luco 054, Providencia',
      comuna: 'Providencia',
      lat: -33.4319, lng: -70.6244,
      rating: 4.4, reviews_count: 727,
      price: '$$$', time: '08:00–22:00',
      tags: ['Vegetariano','Vegano','Sin gluten'],
      badge: null,
      description: 'Cocina vegetariana y vegana desde 1983. El referente saludable de Santiago.',
      phone: '+56 2 2233 2690',
      delivery: true,
    },
    {
      id: 'r07',
      name: 'Confitería Torres',
      category: 'chilena',
      icon: '🫕', ri_class: 'ri-chi',
      address: 'Av. Libertador Bernardo O\'Higgins 1570, Santiago Centro',
      comuna: 'Santiago Centro',
      lat: -33.4502, lng: -70.6667,
      rating: 4.6, reviews_count: 890,
      price: '$$', time: '08:00–23:00',
      tags: ['Cocina chilena','Cazuela','Histórico'],
      badge: { type:'top', label:'Patrimonio' },
      description: 'La confitería más antigua de Chile (1879). Cazuela y cocina chilena tradicional.',
      phone: '+56 2 2688 0751',
      delivery: false,
    },
    {
      id: 'r08',
      name: 'Boragó',
      category: 'chilena',
      icon: '🫕', ri_class: 'ri-chi',
      address: 'Av. Nueva Costanera 3467, Vitacura',
      comuna: 'Vitacura',
      lat: -33.3956, lng: -70.5804,
      rating: 4.9, reviews_count: 342,
      price: '$$$$', time: '13:00–16:00 · 20:00–23:00',
      tags: ['Fine dining','Cocina endémica','Rodolfo Guzmán'],
      badge: { type:'top', label:'#1 Chile' },
      description: 'Top 50 Best Restaurants del mundo. Cocina endémica chilena de autor.',
      phone: '+56 2 2953 8893',
      delivery: false,
    },
    {
      id: 'r09',
      name: 'Puerto Fuy',
      category: 'seafood',
      icon: '🦞', ri_class: 'ri-mar',
      address: 'Dardignac 0184, Barrio Italia, Providencia',
      comuna: 'Barrio Italia',
      lat: -33.4412, lng: -70.6328,
      rating: 4.5, reviews_count: 281,
      price: '$$$', time: '13:00–16:00 · 19:30–23:00',
      tags: ['Mariscos','Ceviche','Pesca del día'],
      badge: null,
      description: 'Mariscos y pescados frescos llegados diariamente desde Chiloé y Talcahuano.',
      phone: '+56 9 7234 5678',
      delivery: false,
    },
    {
      id: 'r10',
      name: 'Mestizo',
      category: 'chilena',
      icon: '🫕', ri_class: 'ri-chi',
      address: 'Av. Bicentenario 4050, Vitacura',
      comuna: 'Vitacura',
      lat: -33.4060, lng: -70.5867,
      rating: 4.6, reviews_count: 456,
      price: '$$$', time: '12:30–23:30',
      tags: ['Vista al parque','Brunch','Cocktails'],
      badge: null,
      description: 'Frente al Parque Bicentenario. Cocina chilena contemporánea con terraza.',
      phone: '+56 2 2228 0101',
      delivery: false,
    },
    {
      id: 'r11',
      name: 'Osaka Santiago',
      category: 'sushi',
      icon: '🍣', ri_class: 'ri-sus',
      address: 'Isidora Goyenechea 3000, Las Condes',
      comuna: 'Las Condes',
      lat: -33.4163, lng: -70.6039,
      rating: 4.5, reviews_count: 612,
      price: '$$$$', time: '12:30–23:30',
      tags: ['Nikkei','Tiradito','Ceviche japonés'],
      badge: null,
      description: 'Cocina nikkei (japonesa-peruana) de autor. El mejor tiradito de la ciudad.',
      phone: '+56 2 2940 8880',
      delivery: false,
    },
    {
      id: 'r12',
      name: 'Galindo',
      category: 'chilena',
      icon: '🫕', ri_class: 'ri-chi',
      address: 'Dardignac 098, Barrio Italia, Providencia',
      comuna: 'Barrio Italia',
      lat: -33.4399, lng: -70.6325,
      rating: 4.4, reviews_count: 934,
      price: '$', time: '12:00–01:00',
      tags: ['Cocina casera','Menú del día','Bar'],
      badge: { type:'pop', label:'Clásico del barrio' },
      description: 'El bar más querido del Barrio Italia. Menú del día, papas fritas perfectas.',
      phone: '+56 2 2777 5519',
      delivery: false,
    },
    {
      id: 'r13',
      name: 'Castillo Forestal',
      category: 'bar',
      icon: '🍺', ri_class: 'ri-bur',
      address: 'Av. Cardenal José María Caro 1, Barrio Yungay, Santiago',
      comuna: 'Barrio Yungay',
      lat: -33.4397, lng: -70.6688,
      rating: 4.3, reviews_count: 512,
      price: '$$', time: '12:00–00:30',
      tags: ['Cerveza artesanal','Picoteo','Terraza'],
      badge: null,
      description: 'Bar con vista al Cerro Santa Lucía. Cervezas artesanales nacionales y picoteos.',
      phone: '+56 9 6543 2109',
      delivery: false,
    },
    {
      id: 'r14',
      name: 'Café Mosqueto',
      category: 'coffee',
      icon: '☕', ri_class: 'ri-san',
      address: 'Mosqueto 488, Santiago Centro',
      comuna: 'Santiago Centro',
      lat: -33.4384, lng: -70.6497,
      rating: 4.6, reviews_count: 378,
      price: '$', time: '08:30–20:00',
      tags: ['Tercera ola','Specialty coffee','Brunch'],
      badge: { type:'new', label:'Favorito' },
      description: 'Café de especialidad en el corazón del barrio Lastarria. Brunch con vista.',
      phone: '+56 9 9821 4567',
      delivery: true,
    },
    {
      id: 'r15',
      name: 'El Parrón',
      category: 'parrilla',
      icon: '🥩', ri_class: 'ri-bur',
      address: 'Av. Vitacura 2891, Las Condes',
      comuna: 'Las Condes',
      lat: -33.4195, lng: -70.5981,
      rating: 4.5, reviews_count: 287,
      price: '$$$', time: '12:30–23:00',
      tags: ['Parrilla argentina','Lomo liso','Asado'],
      badge: null,
      description: 'Parrilla argentina con cortes premium. Lomo al trapo y costillar irresistibles.',
      phone: '+56 2 2334 7890',
      delivery: false,
    },
  ],

  /* Reseñas de ejemplo */
  reviews: [
    { id:'rv01', resto_id:'r01', user_name:'Martina R.', user_initials:'MR', user_color:'av-a', rating:5, text:'El churrasco más jugoso de Santiago. Llevan décadas haciéndolo y se nota. La mente maestra es la salsa especial.', date:'hace 2 días', useful:24, resto_name:'Fuente Alemana' },
    { id:'rv02', resto_id:'r01', user_name:'Carlos L.', user_initials:'CL', user_color:'av-d', rating:5, text:'Un ícono santiaguino que visito cada vez que vengo de regiones. Precio justo, atención rápida a pesar de la cola.', date:'hace 5 días', useful:18, resto_name:'Fuente Alemana' },
    { id:'rv03', resto_id:'r02', user_name:'Andrea P.', user_initials:'AP', user_color:'av-b', rating:4, text:'La burger doble con cheddar y caramelizada es de otro nivel. Esperé 20 minutos pero valió cada segundo.', date:'hace 1 semana', useful:9, resto_name:'La Burguesa' },
    { id:'rv04', resto_id:'r03', user_name:'Javier S.', user_initials:'JS', user_color:'av-c', rating:5, text:'Tonkotsu que me hizo sentir en Fukuoka. El huevo marinado es perfecto y los chāshū derriten en la boca.', date:'hace 2 semanas', useful:31, resto_name:'Noko Ramen' },
    { id:'rv05', resto_id:'r08', user_name:'Valentina M.', user_initials:'VM', user_color:'av-b', rating:5, text:'Boragó es una experiencia transformadora. 17 tiempos de cocina endémica. No vine a comer, vine a entender Chile.', date:'hace 3 días', useful:47, resto_name:'Boragó' },
    { id:'rv06', resto_id:'r07', user_name:'Roberto F.', user_initials:'RF', user_color:'av-e', rating:5, text:'La cazuela de vacuno es exactamente como la hacía mi abuela. Ver este lugar con 140 años de historia emociona.', date:'hace 1 semana', useful:22, resto_name:'Confitería Torres' },
    { id:'rv07', resto_id:'r06', user_name:'Camila T.', user_initials:'CT', user_color:'av-c', rating:4, text:'El huerto lleva décadas siendo el refugio vegetariano de Santiago. El pastel de choclo vegano es sorprendente.', date:'hace 4 días', useful:15, resto_name:'El Huerto' },
    { id:'rv08', resto_id:'r12', user_name:'Felipe A.', user_initials:'FA', user_color:'av-d', rating:5, text:'Galindo es el alma del Barrio Italia. Las papas fritas con salsa golf son el mejor snack de la ciudad por lejos.', date:'hace 6 días', useful:38, resto_name:'Galindo' },
  ],

  /* Comunas de Santiago con coordenadas */
  comunas: [
    { id:'santiago', name:'Santiago Centro', lat:-33.4489, lng:-70.6693 },
    { id:'providencia', name:'Providencia', lat:-33.4319, lng:-70.6244 },
    { id:'barrio_italia', name:'Barrio Italia', lat:-33.4412, lng:-70.6330 },
    { id:'las_condes', name:'Las Condes', lat:-33.4105, lng:-70.5803 },
    { id:'vitacura', name:'Vitacura', lat:-33.3956, lng:-70.5804 },
    { id:'nunoa', name:'Ñuñoa', lat:-33.4569, lng:-70.5983 },
    { id:'miraflores', name:'Barrio Yungay', lat:-33.4397, lng:-70.6688 },
    { id:'lastarria', name:'Lastarria', lat:-33.4384, lng:-70.6497 },
  ],
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Renderiza estrellas como string */
function renderStars(rating, max = 5) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = max - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/** Devuelve el badge HTML de un restaurante */
function badgeHTML(badge) {
  if (!badge) return '';
  const cls = { top:'pill-green', new:'pill-brand', pop:'pill-yellow' }[badge.type] || 'pill-dark';
  return `<span class="pill ${cls}">${badge.label}</span>`;
}

/** Precio a $ visual */
function priceLabel(p) { return p; }

/** Filtra restaurantes por categoría */
function filterByCategory(cat) {
  if (cat === 'all') return EF.restaurants;
  return EF.restaurants.filter(r => r.category === cat);
}

/** Filtra por búsqueda */
function filterBySearch(query) {
  const q = query.toLowerCase();
  return EF.restaurants.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.comuna.toLowerCase().includes(q) ||
    r.tags.some(t => t.toLowerCase().includes(q))
  );
}

/** Muestra un toast */
function showToast(msg, duration = 2800) {
  let t = document.getElementById('global-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'global-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/** Navega a una página (para multi-html) */
function navTo(page) {
  window.location.href = page;
}

/** Resalta el nav item activo en la barra inferior */
function setActiveNav(current) {
  document.querySelectorAll('.ni[data-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === current);
  });
  document.querySelectorAll('.sl[data-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === current);
  });
}

/** Genera HTML de tarjeta restaurante */
function renderRestoCard(r, opts = {}) {
  const isFav = EF.user.favorites.includes(r.id);
  return `
  <div class="card resto-card" onclick="window.location.href='restaurante.html?id=${r.id}'" data-id="${r.id}">
    <div class="ri-thumb ${r.ri_class}" style="height:140px;display:flex;align-items:center;justify-content:center;font-size:56px;position:relative;">
      ${badgeHTML(r.badge) ? `<div style="position:absolute;top:10px;left:10px">${badgeHTML(r.badge)}</div>` : ''}
      <span>${r.icon}</span>
      <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(event,'${r.id}')" title="Favorito">
        ${isFav ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="rbody" style="padding:14px 16px 18px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px">
        <div class="rname" style="font-size:17px;font-weight:700">${r.name}</div>
        <div class="pill pill-brand" style="flex-shrink:0;font-size:12px">★ ${r.rating}</div>
      </div>
      <div style="font-size:12px;color:var(--ink3);margin-bottom:8px">
        📍 ${r.comuna} · ${priceLabel(r.price)} · ${r.delivery ? '🛵 Delivery' : '🪑 Solo local'}
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${r.tags.slice(0,2).map(t => `<span class="pill" style="background:var(--bg);color:var(--ink2);border:1px solid var(--border)">${t}</span>`).join('')}
      </div>
    </div>
  </div>`;
}

/** Toggle favorito */
function toggleFav(e, id) {
  e.stopPropagation();
  const idx = EF.user.favorites.indexOf(id);
  if (idx === -1) {
    EF.user.favorites.push(id);
    showToast('❤️ Guardado en favoritos');
  } else {
    EF.user.favorites.splice(idx, 1);
    showToast('🤍 Eliminado de favoritos');
  }
  // Actualizar corazón
  const btn = document.querySelector(`.fav-btn[onclick*="${id}"]`);
  if (btn) {
    const isFav = EF.user.favorites.includes(id);
    btn.textContent = isFav ? '❤️' : '🤍';
    btn.classList.toggle('active', isFav);
  }
}

/* ── Estilos inline para fav-btn ── */
const _style = document.createElement('style');
_style.textContent = `
.fav-btn {
  position:absolute;top:10px;right:10px;width:34px;height:34px;border-radius:50%;
  background:rgba(255,255,255,.88);border:none;cursor:pointer;font-size:16px;
  display:flex;align-items:center;justify-content:center;transition:transform .15s;
  box-shadow:0 2px 6px rgba(0,0,0,.12);
}
.fav-btn:hover { transform:scale(1.15); }
.resto-card { cursor:pointer; }
.ri-thumb { position:relative; }
`;
document.head.appendChild(_style);
