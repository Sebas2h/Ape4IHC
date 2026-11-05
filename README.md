# APE 4 — Interacción Humano–Computador

Este repositorio reúne el informe formal, las pruebas de usabilidad y los prototipos interactivos académicos de la **APE 4** para la asignatura de **Interacción Humano–Computador (IHC / HCI)** de la Universidad Técnica de Ambato (UTA).

El proyecto, denominado **Tienda Clara**, presenta una experiencia de compra centrada en el usuario, simple, accesible y con mecanismos claros de prevención y recuperación de errores.

---

## Equipo de Trabajo y Roles

| Integrante | Rol en el Proyecto | Rama Git | Responsabilidad Principal |
|---|---|---|---|
| **Sebastián Vaca** (@Sebas2h) | Redacción y Arquitectura Base | `sebastian` | Elaboración del informe inicial, planteamiento de objetivos y estructura de la práctica (`Informe_APE4_UTA.docx`). |
| **Andrew Lara** (@alara05) | Desarrollo de Prototipo Base | `andrew` | Implementación de la primera versión funcional del prototipo interactivo (`prototipo/v1`). |
| **Verónica Jaque** (@ArteMisa82) | Desarrollo de Prototipo Final | `veronica` | Mejora integral de interfaz, micro-interacciones y accesibilidad web WCAG (`prototipo/v2`). |
| **Elizabeth De la Cruz** (@Elizabeth1925) | Evaluación y Documentación Final | `elizabeth` | Ejecución del protocolo de pruebas de usabilidad con usuarios, auditoría de accesibilidad y consolidación del informe final. |

---

## Cómo Probar los Prototipos

Ambas versiones están desarrolladas con tecnologías web nativas (**HTML5, CSS3 y JavaScript vanilla**), por lo que **no requieren dependencias, compilación ni servidor**:

- **Prototipo v1 (Versión Inicial):** Abrir [`prototipo/index.html`](prototipo/index.html) en el navegador.
- **Prototipo v2 (Versión Final Mejorada):** Abrir [`prototipo/v2/index.html`](prototipo/v2/index.html) en el navegador.

---

## Documentación del Proyecto

- 📄 [`Informe_APE4_UTA.docx`](Informe_APE4_UTA.docx): Informe formal del proyecto (portada, metodología, requisitos y protocolo).
- 📕 [`Informe_APE4_UTA.pdf`](Informe_APE4_UTA.pdf): Versión final completa en formato PDF del informe formal del proyecto.
- 📐 [`Documento/main.tex`](Documento/main.tex): Documento formal completo en código LaTeX (formato institucional UTA–FISEI).
- 📑 [`Documento/main.pdf`](Documento/main.pdf): PDF compilado directamente a partir del código LaTeX.
- 📋 [`docs/informe_inicial.md`](docs/informe_inicial.md): Síntesis de requisitos (R1–R6), diagnóstico y sitemap.
- 📊 [`docs/pruebas_usabilidad_accesibilidad.md`](docs/pruebas_usabilidad_accesibilidad.md): Resultados empíricos de las pruebas con participantes (P01 y P02), métricas de tiempo, tasa de éxito y auditoría WCAG 2.1 AA.
- 📁 [`prototipo/README.md`](prototipo/README.md): Documentación técnica del prototipo v1.
- 📁 [`prototipo/v2/README.md`](prototipo/v2/README.md): Documentación técnica y comparativa de mejoras del prototipo v2.

---

## Alcance Académico
*Tienda Clara* permite explorar el catálogo, buscar productos, filtrar por categorías, consultar detalles de artículos, gestionar el carrito de compras con persistencia local y completar una simulación de pedido con validación de datos. Es una demostración estrictamente educativa y no procesa transacciones bancarias ni almacena datos personales reales.
