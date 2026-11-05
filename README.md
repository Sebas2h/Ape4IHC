# APE 4 — Interacción Humano–Computador

Este repositorio reúne el informe formal definitivo, las pruebas de usabilidad y los prototipos interactivos académicos de la **APE 4** para la asignatura de **Interacción Humano–Computador (IHC / HCI)** de la Universidad Técnica de Ambato (UTA).

El proyecto, denominado **Tienda Clara**, presenta una experiencia de compra centrada en el usuario, simple, accesible y con mecanismos claros de prevención y recuperación de errores.

---

> [!IMPORTANT]
> ### 📌 Documento Final Oficial para Revisión y Calificación
> El informe definitivo, completo y validado para la calificación de la APE 4 es:
> - 📕 **[`Informe_Final_APE4_UTA.pdf`](Informe_Final_APE4_UTA.pdf)** *(Versión final en PDF, 11 páginas completas con tablas, pruebas y figuras)*.
> - 📐 Carpeta de código fuente LaTeX: **[`Documento/Informe_Final.tex`](Documento/Informe_Final.tex)** (y compilado: **[`Documento/Informe_Final.pdf`](Documento/Informe_Final.pdf)**).

---

## Equipo de Trabajo y Roles

| Integrante | Rol en el Proyecto | Rama Git | Responsabilidad Principal |
|---|---|---|---|
| **Sebastián Vaca** (@Sebas2h) | Redacción y Arquitectura Base | `sebastian` | Elaboración del informe inicial, planteamiento de objetivos y estructura de la práctica (`Informe_APE4_UTA.docx`). |
| **Andrew Lara** (@alara05) | Desarrollo de Prototipo Base | `andrew` | Implementación de la primera versión funcional del prototipo interactivo (`prototipo/v1`). |
| **Verónica Jaque** (@ArteMisa82) | Desarrollo de Prototipo Final | `veronica` | Mejora integral de interfaz, micro-interacciones y accesibilidad web WCAG (`prototipo/prototipo_final`). |
| **Elizabeth De la Cruz** (@Elizabeth1925) | Evaluación y Documentación Final | `elizabeth` | Ejecución del protocolo de pruebas de usabilidad con usuarios, auditoría de accesibilidad, migración al formato LaTeX oficial y consolidación del informe final. |

---

## Cómo Probar los Prototipos

Ambas versiones están desarrolladas con tecnologías web nativas (**HTML5, CSS3 y JavaScript vanilla**), por lo que **no requieren dependencias, compilación ni servidor**:

- **Prototipo Final Oficial:** Abrir [`prototipo/prototipo_final/index.html`](prototipo/prototipo_final/index.html) en el navegador (o directamente [`prototipo/index.html`](prototipo/index.html) que redirige automáticamente).
- **Prototipo v1 (Versión Inicial):** Abrir [`prototipo/v1/index.html`](prototipo/v1/index.html) en el navegador.

---

## Documentación del Proyecto

### 🏆 Informe Definitivo (Válido para Calificación):
- 📕 [`Informe_Final_APE4_UTA.pdf`](Informe_Final_APE4_UTA.pdf): **Informe final oficial del proyecto en PDF** (incluye portada institucional, marco metodológico, requisitos R1–R6, sitemap, wireframes, resultados de pruebas empíricas, auditoría WCAG 2.1 AA y trazabilidad en GitHub).
- 📐 [`Documento/Informe_Final.tex`](Documento/Informe_Final.tex): Código fuente en LaTeX con la plantilla oficial UTA–FISEI.
- 📑 [`Documento/Informe_Final.pdf`](Documento/Informe_Final.pdf): PDF compilado en la carpeta del documento LaTeX.

### 📋 Documentos de Apoyo y Versiones Anteriores:
- 📄 [`Informe_APE4_UTA.docx`](Informe_APE4_UTA.docx): Versión editable en formato Word.
- 📋 [`docs/informe_inicial.md`](docs/informe_inicial.md): Síntesis inicial de requisitos y diagnóstico.
- 📊 [`docs/pruebas_usabilidad_accesibilidad.md`](docs/pruebas_usabilidad_accesibilidad.md): Resultados empíricos de las pruebas de usabilidad con participantes (P01 y P02).
- 📁 [`prototipo/README.md`](prototipo/README.md): Documentación técnica del prototipo v1.
- 📁 [`prototipo/prototipo_final/README.md`](prototipo/prototipo_final/README.md): Documentación técnica y comparativa de mejoras del prototipo final.

---

## Alcance Académico
*Tienda Clara* permite explorar el catálogo, buscar productos, filtrar por categorías, consultar detalles de artículos, gestionar el carrito de compras con persistencia local y completar una simulación de pedido con validación de datos. Es una demostración estrictamente educativa y no procesa transacciones bancarias ni almacena datos personales reales.
