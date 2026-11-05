# Prototipo Final (v2) — Tienda Clara

**Responsable:** Verónica Jaque (@ArteMisa82)  
**Asignatura:** Interacción Humano–Computador (UTA)

---

## Descripción General
La versión 2 (`v2`) representa la evolución y versión final del prototipo interactivo para la APE 4. Incorpora mejoras profundas de Experiencia de Usuario (UX), diseño visual cohesivo, micro-interacciones pulidas y cumplimiento riguroso de accesibilidad web (WCAG 2.1 nivel AA).

## Comparación y Mejoras respecto a la v1

| Dimensión | Versión Inicial (v1) | Versión Final Mejorada (v2) |
|---|---|---|
| **Identidad Visual** | Estructura básica en tonos azules simples | Diseño moderno con sistema de variables CSS, badges dinámicos y tipografía escalable |
| **Accesibilidad** | Región oculta básica de aviso | Enlace *"Saltar al contenido principal"*, `focus-visible` con anillo contrastado (naranja/dorado), etiquetas ARIA completas y roles semánticos |
| **Feedback al Usuario** | Mensaje de texto estático | Notificaciones contextuales dinámicas tipo *Toast* con animación y soporte `aria-live="polite"` |
| **Persistencia del Carrito** | Memoria volátil de sesión | Almacenamiento local persistente (`localStorage`) que mantiene los artículos seleccionados entre recargas |
| **Control de Cantidades** | Solo agregar o quitar uno a uno | Incremento y decremento directo de unidades (+/-), cálculo automático de costos de envío simulado |
| **Validación de Formularios** | Mensaje de advertencia genérico | Validación contextual reactiva por campo (`aria-invalid="true"`, `aria-describedby`) con enfoque automático en el primer error |
| **Sección Informativa** | Solo catálogo y checkout | Vista dedicada *"Nosotros"* con créditos del equipo de desarrollo y objetivos pedagógicos |

## Estructura de Archivos
- `index.html`: Marcado semántico optimizado con enlaces de salto y cabecera pegajosa (*sticky*).
- `styles.css`: Estilos avanzados, animaciones fluidas, diseño en cuadrícula adaptable para móviles, tabletas y escritorio.
- `app.js`: Arquitectura SPA (Single Page Application) ligera con router reactivo por eventos delegados.

## Cómo Ejecutar
Abrir `prototipo/v2/index.html` directamente en el navegador. Es compatible con todos los navegadores modernos y lectores de pantalla.
