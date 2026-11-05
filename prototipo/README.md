# Prototipo v1 — Tienda Clara

**Responsable:** Andrew Lara (@alara05)  
**Asignatura:** Interacción Humano–Computador (UTA)

---

## Descripción General
Esta es la primera versión funcional (v1) del prototipo para la APE 4. Implementa el flujo esencial de comercio electrónico centrado en el usuario, permitiendo explorar productos, consultar sus características, agregarlos a un carrito y simular la confirmación de la compra sin requerir backend ni pasarelas de pago reales.

## Características de la v1
- **Catálogo Interactivo:** Búsqueda en vivo por texto y filtrado por categoría (`Accesorios`, `Audio`, `Oficina`).
- **Vista de Detalle:** Inspección individualizada de cada producto con precio unitario y botón de acción directa.
- **Carrito de Compras:** Listado de artículos seleccionados, opción para remover ítems y cálculo reactivo del valor total.
- **Formulario de Checkout:** Validación de campos obligatorios (`nombre`, `correo`, `dirección`) con mensajes de error contextuales.
- **Accesibilidad Básica:** Estados anunciados con región `aria-live="polite"` y focos visibles por defecto.

## Estructura de Archivos
- `index.html`: Estructura HTML5 semántica y contenedor dinámico `#view`.
- `styles.css`: Hoja de estilos con diseño en cuadrícula responsiva (CSS Grid y Flexbox).
- `app.js`: Lógica de renderizado reactivo basada en estado (`page`, `cart`, `form`, `errors`).

## Cómo Ejecutar
Basta con abrir el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge). No requiere instalación de paquetes ni servidor local.
