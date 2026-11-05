const items = [
  { id: 1, n: 'Mouse inalámbrico', c: 'Accesorios', p: 18.5, e: '🖱️' },
  { id: 2, n: 'Teclado compacto', c: 'Accesorios', p: 32.0, e: '⌨️' },
  { id: 3, n: 'Audífonos estéreo', c: 'Audio', p: 27.9, e: '🎧' },
  { id: 4, n: 'Soporte para laptop', c: 'Oficina', p: 22.5, e: '💻' }
];

let page = 'catalog', chosen = 1, cart = [], form = { name: '', email: '', address: '' };
let errors = {}, search = '', cat = 'Todos', loading = false, order = '', orderTotal = 0, orderCount = 0;

const el = id => document.getElementById(id);
const cash = x => '$' + x.toFixed(2);
const sum = () => cart.reduce((a, id) => a + items.find(x => x.id === id).p, 0);

function safe(s) {
  return String(s).replace(/[&<>"']/g, x => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[x]));
}

function go(p) {
  page = p;
  draw();
  window.scrollTo(0, 0);
}

function add(id) {
  cart.push(id);
  el('notice').textContent = 'Producto añadido al carrito';
  draw();
}

function remove(i) {
  cart.splice(i, 1);
  el('notice').textContent = 'Producto eliminado';
  draw();
}

function detail(id) {
  chosen = id;
  go('detail');
}

function field(k, v) {
  form[k] = v;
}

function draw() {
  el('count').textContent = cart.length;
  let h = '';

  if (page === 'catalog') {
    h = `
      <h1>Explora productos</h1>
      <p class="muted">Compra de demostración: sin pagos reales.</p>
      <div class="bar">
        <label for="q">Buscar</label>
        <input id="q" value="${safe(search)}" oninput="search=this.value;products()" placeholder="Ej. mouse">
        <label for="cat">Categoría</label>
        <select id="cat" onchange="cat=this.value;products()">
          <option>Todos</option>
          ${['Accesorios', 'Audio', 'Oficina'].map(c => `<option ${cat === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div id="products" class="grid"></div>
    `;
  }

  if (page === 'detail') {
    let p = items.find(x => x.id === chosen);
    h = `
      <button onclick="go('catalog')">← Volver al Catálogo</button>
      <section class="panel">
        <div class="emoji">${p.e}</div>
        <h1>${p.n}</h1>
        <p>Producto de demostración para estudiantes de Interacción Humano-Computador.</p>
        <p class="price">${cash(p.p)}</p>
        <button onclick="add(${p.id})">Añadir al carrito</button>
      </section>
    `;
  }

  if (page === 'cart') {
    h = `
      <h1>Carrito de Compras</h1>
      <section class="panel">
        ${cart.length
          ? cart.map((id, i) => {
              let p = items.find(x => x.id === id);
              return `
                <div class="row">
                  <span>${p.e} ${p.n} — <strong>${cash(p.p)}</strong></span>
                  <button onclick="remove(${i})" aria-label="Quitar ${p.n}">Quitar</button>
                </div>
              `;
            }).join('') + `
            <hr>
            <p class="price">Total: ${cash(sum())}</p>
            <button onclick="go('checkout')">Continuar al checkout</button>
          `
          : `
            <p>El carrito está vacío.</p>
            <button onclick="go('catalog')">Ver catálogo</button>
          `
        }
      </section>
    `;
  }

  if (page === 'checkout') {
    if (!cart.length) {
      go('cart');
      return;
    }
    h = `
      <button onclick="go('cart')">← Volver al Carrito</button>
      <h1>Confirmar pedido simulado</h1>
      <section class="panel">
        <p>Productos: ${cart.length} · Total: <strong>${cash(sum())}</strong></p>
        <p class="muted">No se envían datos ni se cobra dinero real.</p>
        <form onsubmit="submitOrder(event)" novalidate>
          ${[
            ['name', 'Nombre completo'],
            ['email', 'Correo electrónico'],
            ['address', 'Dirección de entrega']
          ].map(([k, label]) => `
            <div class="field">
              <label for="${k}">${label} *</label>
              <input id="${k}" value="${safe(form[k])}" oninput="field('${k}',this.value)" aria-invalid="${!!errors[k]}" aria-describedby="${k}-error">
              <span id="${k}-error" class="error">${errors[k] || ''}</span>
            </div>
          `).join('')}
          <button type="submit" ${loading ? 'disabled' : ''}>
            ${loading ? 'Procesando...' : 'Confirmar pedido'}
          </button>
          <p role="status">${loading ? 'Procesando pedido...' : ''}</p>
        </form>
      </section>
    `;
  }

  if (page === 'success') {
    h = `
      <section class="panel success" role="status">
        <h1>✓ Pedido de demostración confirmado</h1>
        <p>Número de referencia: <strong>${safe(order)}</strong></p>
        <p>Artículos confirmados: ${orderCount} · Total simulado: ${cash(orderTotal)}</p>
        <p>No se realizó ningún cargo económico.</p>
        <button onclick="go('catalog')">Volver al catálogo</button>
      </section>
    `;
  }

  el('view').innerHTML = h;
  if (page === 'catalog') products();
}

function products() {
  let a = items.filter(p =>
    p.n.toLowerCase().includes(search.toLowerCase()) &&
    (cat === 'Todos' || p.c === cat)
  );

  el('products').innerHTML = a.length
    ? a.map(p => `
        <article class="card">
          <div class="emoji" aria-hidden="true">${p.e}</div>
          <h2>${p.n}</h2>
          <p class="muted">${p.c}</p>
          <p class="price">${cash(p.p)}</p>
          <button onclick="detail(${p.id})">Ver detalle</button>
          <button onclick="add(${p.id})">Añadir</button>
        </article>
      `).join('')
    : '<p role="status">Sin resultados. Cambia los criterios de búsqueda.</p>';
}

function submitOrder(ev) {
  ev.preventDefault();
  for (let k of Object.keys(form)) {
    form[k] = el(k).value;
  }
  errors = {};
  if (form.name.trim().length < 2) errors.name = 'Ingrese un nombre válido.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Ingrese un correo electrónico válido.';
  if (form.address.trim().length < 6) errors.address = 'Ingrese una dirección completa (mínimo 6 caracteres).';

  if (Object.keys(errors).length) {
    draw();
    el(Object.keys(errors)[0]).focus();
    el('notice').textContent = 'Existen campos que requieren corrección';
    return;
  }

  loading = true;
  draw();
  setTimeout(() => {
    order = 'DEMO-' + Date.now().toString().slice(-6);
    orderTotal = sum();
    orderCount = cart.length;
    cart = [];
    loading = false;
    go('success');
  }, 700);
}

el('home').onclick = () => go('catalog');
el('cart').onclick = () => go('cart');
draw();
