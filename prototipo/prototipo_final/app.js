const products = [
  {
    id: 1,
    name: "Mouse inalámbrico",
    category: "Accesorios",
    price: 18.5,
    icon: "🖱️",
    desc: "Precisión y comodidad para estudiar o trabajar. Diseño ergonómico y conexión inalámbrica.",
  },
  {
    id: 2,
    name: "Teclado compacto",
    category: "Accesorios",
    price: 32,
    icon: "⌨️",
    desc: "Teclado compacto con teclas suaves y diseño minimalista para tu escritorio.",
  },
  {
    id: 3,
    name: "Audífonos estéreo",
    category: "Audio",
    price: 27.9,
    icon: "🎧",
    desc: "Audio nítido y comodidad para videollamadas, clases y entretenimiento.",
  },
  {
    id: 4,
    name: "Soporte para laptop",
    category: "Oficina",
    price: 22.5,
    icon: "💻",
    desc: "Soporte ajustable que ayuda a organizar mejor tu espacio de trabajo.",
  },
  {
    id: 5,
    name: "Webcam HD",
    category: "Oficina",
    price: 39.9,
    icon: "📷",
    desc: "Cámara de alta definición para reuniones y clases virtuales.",
  },
  {
    id: 6,
    name: "Parlante portátil",
    category: "Audio",
    price: 29.5,
    icon: "🔊",
    desc: "Parlante compacto para acompañar tus actividades favoritas.",
  },
  {
    id: 7,
    name: "Hub USB multipuerto",
    category: "Accesorios",
    price: 16.9,
    icon: "🔌",
    desc: "Conecta tus dispositivos en un solo lugar con facilidad.",
  },
  {
    id: 8,
    name: "Lámpara de escritorio",
    category: "Oficina",
    price: 24.9,
    icon: "💡",
    desc: "Iluminación práctica para jornadas de estudio y trabajo.",
  },
];
const $ = (s) => document.querySelector(s),
  money = (n) =>
    new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
    }).format(n);
const escapeHTML = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
let state = {
  page: "catalog",
  selected: 1,
  query: "",
  category: "Todas",
  cart: loadCart(),
  form: {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Ambato",
    payment: "contraentrega",
  },
  errors: {},
  processing: false,
  order: null,
};
function loadCart() {
  try {
    let c = JSON.parse(localStorage.getItem("tiendaclara-cart") || "{}");
    return typeof c === "object" && c && !Array.isArray(c)
      ? Object.fromEntries(
          Object.entries(c).filter(
            ([id, n]) =>
              products.some((p) => String(p.id) === id) &&
              Number.isInteger(n) &&
              n > 0 &&
              n <= 99,
          ),
        )
      : {};
  } catch {
    return {};
  }
}
function persist() {
  try {
    localStorage.setItem("tiendaclara-cart", JSON.stringify(state.cart));
  } catch {}
}
function count() {
  return Object.values(state.cart).reduce((a, b) => a + Number(b || 0), 0);
}
function subtotal() {
  return products.reduce((a, p) => a + p.price * (state.cart[p.id] || 0), 0);
}
function delivery() {
  return subtotal() >= 60 || !count() ? 0 : 3.5;
}
function total() {
  return subtotal() + delivery();
}
let timer;
function toast(s) {
  const t = $("#toast");
  t.textContent = s;
  t.classList.add("show");
  clearTimeout(timer);
  timer = setTimeout(() => t.classList.remove("show"), 2600);
}
function navigate(page) {
  if (state.processing) return;
  state.page = page;
  render();
  window.scrollTo({ top: 0, behavior: "auto" });
  $("#main").focus({ preventScroll: true });
}
function focusAfterCartUpdate(id, delta) {
  const selector = `[data-qty="${id}"][data-delta="${delta}"]`;
  const target =
    document.querySelector(selector) ||
    document.querySelector(`[data-qty="${id}"]`) ||
    document.querySelector('[data-go="catalog"]') ||
    document.querySelector('[data-go="checkout"]');
  target?.focus({ preventScroll: true });
}
function filteredProducts() {
  return products.filter(
    (p) =>
      (p.name + " " + p.desc)
        .toLocaleLowerCase("es")
        .includes(state.query.toLocaleLowerCase("es")) &&
      (state.category === "Todas" || p.category === state.category),
  );
}
function updateResults() {
  const visible = filteredProducts();
  const results = $("#results");
  if (!results) return;
  results.innerHTML =
    visible.map(productCard).join("") ||
    '<div class="empty"><h3>Sin resultados</h3><p>Prueba otra búsqueda o categoría.</p><button class="btn ghost" data-clear="1">Limpiar filtros</button></div>';
  const countLabel = $("#results-count");
  if (countLabel)
    countLabel.textContent = `${visible.length} ${visible.length === 1 ? "producto disponible" : "productos disponibles"}`;
}
function add(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  persist();
  render();
  toast("✓ Producto añadido al carrito");
}
function changeQty(id, delta) {
  const n = (state.cart[id] || 0) + delta;
  if (n <= 0) delete state.cart[id];
  else state.cart[id] = Math.min(n, 99);
  persist();
  render();
  focusAfterCartUpdate(id, delta);
  toast(delta < 0 ? "Carrito actualizado" : "Cantidad actualizada");
}
function productCard(p) {
  return `<article class="product"><div class="pic" aria-hidden="true">${p.icon}</div><div class="product-body"><span class="tag">${p.category}</span><h3>${p.name}</h3><div class="price">${money(p.price)}</div><div class="actions"><button class="btn ghost" data-detail="${p.id}">Ver detalle</button><button class="btn" data-add="${p.id}" aria-label="Añadir ${p.name} al carrito">+ Añadir</button></div></div></article>`;
}
function catalog() {
  let visible = filteredProducts();
  return `<section class="hero"><div class="hero-copy"><span class="eyebrow">TU TECNOLOGÍA, MÁS CERCA</span><h1>Pequeños accesorios.<br>Grandes ideas.</h1><p>Equipa tu espacio con productos que simplifican tu día. Compra de demostración clara, rápida y segura.</p><button class="btn white" data-scroll="products">Explorar productos →</button></div><div class="hero-art" aria-hidden="true">🎧 💻<br>⌨️ ✨</div></section><section id="products"><div class="sectionhead"><div><span class="tag">NUESTRA SELECCIÓN</span><h2>Encuentra tu próximo favorito</h2><span id="results-count" class="muted" role="status" aria-live="polite" aria-atomic="true">${visible.length} ${visible.length === 1 ? "producto disponible" : "productos disponibles"}</span></div><span class="pill">✓ Compra simulada</span></div><div class="filters"><input id="search" type="search" placeholder="Buscar por nombre o descripción…" aria-label="Buscar productos" value="${escapeHTML(state.query)}"><select id="category" aria-label="Filtrar por categoría">${["Todas", "Accesorios", "Audio", "Oficina"].map((c) => `<option ${state.category === c ? "selected" : ""}>${c}</option>`).join("")}</select></div><div id="results" class="grid">${visible.map(productCard).join("") || '<div class="empty"><h3>Sin resultados</h3><p>Prueba con otra búsqueda o categoría.</p><button class="btn ghost" data-clear="1">Limpiar filtros</button></div>'}</div></section>`;
}
function detail() {
  const p = products.find((x) => x.id === state.selected) || products[0];
  return `<div class="crumb"><button data-go="catalog">Inicio</button> / ${p.category} / ${p.name}</div><div class="detail"><div class="detail-art" aria-label="Ilustración de ${p.name}" role="img">${p.icon}</div><div><span class="tag">${p.category} · Producto destacado</span><h1>${p.name}</h1><span class="pill">✓ Disponible</span><p>${p.desc}</p><div class="price">${money(p.price)}</div><p class="muted">Precio final del producto. Envío de demostración calculado en el carrito.</p><button class="btn" data-add="${p.id}">🛒 Añadir al carrito</button> <button class="btn ghost" data-go="catalog">Seguir comprando</button><hr><p>✓ Navegación sencilla &nbsp; ✓ Información clara &nbsp; ✓ Sin pagos reales</p></div></div>`;
}
function cart() {
  if (!count())
    return `<div class="empty"><div class="emoji">🛒</div><h1>Tu carrito está vacío</h1><p class="muted">Agrega productos para comenzar tu compra de demostración.</p><button class="btn" data-go="catalog">Ver productos →</button></div>`;
  return `<div class="crumb"><button data-go="catalog">Inicio</button> / Carrito</div><h1 class="page-title">Tu carrito <span class="muted">(${count()})</span></h1><div class="layout"><section class="panel">${products
    .filter((p) => state.cart[p.id])
    .map(
      (p) =>
        `<div class="line"><div class="mini">${p.icon}</div><div class="lineinfo"><h3>${p.name}</h3><span class="muted">${money(p.price)} c/u</span></div><div class="qty"><button data-qty="${p.id}" data-delta="-1" aria-label="Disminuir ${p.name}">−</button><strong aria-label="Cantidad: ${state.cart[p.id]}">${state.cart[p.id]}</strong><button data-qty="${p.id}" data-delta="1" aria-label="Aumentar ${p.name}">+</button></div><b>${money(p.price * state.cart[p.id])}</b><button class="btn danger" data-remove="${p.id}" aria-label="Eliminar ${p.name}">✕</button></div>`,
    )
    .join(
      "",
    )}<p><button class="btn ghost" data-go="catalog">← Seguir comprando</button></p></section>${summary("checkout")}</div>`;
}
function summary(next) {
  return `<aside class="summary"><h2>Resumen del pedido</h2><div class="sumrow"><span>Subtotal (${count()} artículos)</span><b>${money(subtotal())}</b></div><div class="sumrow"><span>Envío simulado</span><b>${delivery() ? money(delivery()) : "Gratis"}</b></div><p class="muted" style="font-size:13px">Envío gratis en pedidos desde $60.</p><div class="sumrow total"><span>Total</span><span>${money(total())}</span></div>${next === "checkout" ? '<button class="btn" data-go="checkout">Continuar compra →</button>' : '<p class="notice">🔒 No se realizará ningún cobro real.</p>'}</aside>`;
}
const fields = [
  ["name", "Nombre completo", "text", "Ej. Ana Pérez"],
  ["email", "Correo electrónico", "email", "ana@ejemplo.com"],
  ["phone", "Teléfono", "tel", "0991234567"],
  ["address", "Dirección de entrega", "text", "Calle, número y referencia"],
];
function checkout() {
  if (!count()) {
    state.page = "cart";
    return cart();
  }
  return `<div class="crumb"><button data-go="cart">Carrito</button> / Finalizar compra</div><h1 class="page-title">Finalizar compra</h1><p class="muted">Completa tus datos para generar un pedido simulado.</p><div class="layout"><section class="panel"><h2>📦 Información de entrega</h2><div class="notice">Los datos permanecen en esta demostración; no se envían a ningún servidor.</div><form id="checkout-form" novalidate>${fields.map(([id, label, type, placeholder]) => `<div class="field"><label for="${id}">${label} *</label><input id="${id}" name="${id}" type="${type}" autocomplete="${id === "name" ? "name" : id === "email" ? "email" : id === "phone" ? "tel" : "street-address"}" placeholder="${placeholder}" value="${escapeHTML(state.form[id])}" aria-invalid="${!!state.errors[id]}" aria-describedby="${state.errors[id] ? id + "-error" : ""}" ${state.processing ? "disabled" : ""}><small id="${id}-error" ${state.errors[id] ? 'role="alert"' : ""}>${escapeHTML(state.errors[id] || "")}</small></div>`).join("")}<div class="field"><label for="city">Ciudad *</label><select id="city" name="city">${["Ambato", "Quito", "Guayaquil", "Cuenca", "Riobamba", "Otra ciudad"].map((c) => `<option ${state.form.city === c ? "selected" : ""}>${c}</option>`).join("")}</select></div><div class="field"><label for="payment">Método de pago (simulado)</label><select id="payment" name="payment"><option value="contraentrega" ${state.form.payment === "contraentrega" ? "selected" : ""}>Pago contra entrega (simulado)</option><option value="transferencia" ${state.form.payment === "transferencia" ? "selected" : ""}>Transferencia (simulada, sin datos bancarios)</option></select></div><button class="btn" type="submit" ${state.processing ? "disabled" : ""}>${state.processing ? '<span class="loader"></span> Procesando…' : "Confirmar pedido de demostración →"}</button><p id="form-status" role="status" class="muted"></p></form></section>${summary()}</div>`;
}
function success() {
  let o = state.order;
  if (!o) {
    state.page = "catalog";
    return catalog();
  }
  return `<div class="panel success"><div class="success-icon">🎉</div><span class="pill">✓ Pedido generado</span><h1>¡Tu pedido fue confirmado!</h1><p>Gracias, <b>${escapeHTML(o.name)}</b>. Esta es una confirmación de demostración.</p><h2>${o.id}</h2><p>${o.count} artículo(s) · Total: <b>${money(o.total)}</b></p><p class="notice">No se realizó ningún pago ni se enviaron datos a un servidor.</p><button class="btn" data-go="catalog">Volver a la tienda →</button></div>`;
}
function about() {
  return `<div class="panel" style="margin-top:40px"><span class="tag">SOBRE ESTE PROYECTO</span><h1>Tienda Clara</h1><p>Prototipo de comercio electrónico desarrollado para la APE 4 de Interacción Humano–Computador de la Universidad Técnica de Ambato.</p><p>Integra catálogo, filtros, detalle, carrito persistente, validación de formularios, mensajes de retroalimentación y confirmación simulada. Está pensado para evaluar usabilidad y accesibilidad.</p><h3>Equipo</h3><p>Elizabeth De La Cruz · Andrew Lara · Veronica Jaque · Sebastian Vaca</p><p>Docente: Ing. Jose Caiza</p><button class="btn" data-go="catalog">Explorar catálogo</button></div>`;
}
function render() {
  const root = $("#main");
  $("#cartcount").textContent = count();
  root.innerHTML = (
    { catalog, detail, cart, checkout, success, about }[state.page] || catalog
  )();
}
function validate() {
  let f = state.form,
    e = {};
  if (f.name.trim().length < 3)
    e.name = "Escribe tu nombre completo (mínimo 3 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Introduce un correo electrónico válido.";
  if (!/^\d{9,10}$/.test(f.phone.replace(/[\s-]/g, "")))
    e.phone = "Introduce un teléfono de 9 o 10 dígitos.";
  if (f.address.trim().length < 8)
    e.address = "La dirección debe tener al menos 8 caracteres.";
  return e;
}
document.addEventListener("click", (e) => {
  let b = e.target.closest(
    "[data-go],[data-add],[data-detail],[data-qty],[data-remove],[data-clear],[data-scroll]",
  );
  if (!b) return;
  if (b.dataset.go) navigate(b.dataset.go);
  else if (b.dataset.add) add(+b.dataset.add);
  else if (b.dataset.detail) {
    state.selected = +b.dataset.detail;
    navigate("detail");
  } else if (b.dataset.qty) changeQty(+b.dataset.qty, +b.dataset.delta);
  else if (b.dataset.remove) {
    delete state.cart[b.dataset.remove];
    persist();
    render();
    document
      .querySelector('[data-go="catalog"]')
      ?.focus({ preventScroll: true });
    toast("Producto eliminado");
  } else if (b.dataset.clear) {
    state.query = "";
    state.category = "Todas";
    render();
    $("#search")?.focus({ preventScroll: true });
  } else if (b.dataset.scroll)
    document
      .getElementById(b.dataset.scroll)
      ?.scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("input", (e) => {
  if (e.target.id === "search") {
    state.query = e.target.value;
    updateResults();
  } else if (e.target.closest("#checkout-form")) {
    state.form[e.target.name] = e.target.value;
    if (state.errors[e.target.name]) {
      delete state.errors[e.target.name];
      e.target.setAttribute("aria-invalid", "false");
      e.target.removeAttribute("aria-describedby");
      const errorNode = document.getElementById(e.target.name + "-error");
      if (errorNode) {
        errorNode.textContent = "";
        errorNode.removeAttribute("role");
      }
    }
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "category") {
    state.category = e.target.value;
    updateResults();
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id !== "checkout-form") return;
  e.preventDefault();
  if (state.processing) return;
  for (let field of fields)
    state.form[field[0]] = e.target.elements[field[0]].value;
  state.form.city = e.target.elements.city.value;
  state.form.payment = e.target.elements.payment.value;
  state.errors = validate();
  if (Object.keys(state.errors).length) {
    render();
    document.getElementById(Object.keys(state.errors)[0]).focus();
    toast("Revisa los campos marcados");
    return;
  }
  state.processing = true;
  render();
  setTimeout(() => {
    const id = "TC-" + Date.now().toString().slice(-7);
    state.order = {
      id,
      name: state.form.name.trim(),
      count: count(),
      total: total(),
    };
    state.cart = {};
    persist();
    state.processing = false;
    state.errors = {};
    state.form = {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "Ambato",
      payment: "contraentrega",
    };
    navigate("success");
  }, 900);
});
render();
