# Documentación Inicial y Estructura del Informe APE 4

**Universidad Técnica de Ambato**  
**Facultad de Ingeniería en Sistemas, Electrónica e Industrial**  
**Carrera:** Software  
**Asignatura:** Interacción Humano–Computador (HCI / IHC)  
**Docente:** Ing. José Caiza  
**Responsable de esta entrega:** Sebastián Vaca (@Sebas2h)  
**Archivo formal asociado:** `Informe_APE4_UTA.docx`

---

## 1. Portada y Datos del Proyecto

- **Título:** Tienda Clara: rediseño UX de una tienda de comercio electrónico con compra simulada, validación y recuperación de errores.
- **Participantes:**
  - De La Cruz, Elizabeth
  - Jaque, Verónica
  - Lara, Andrew
  - Vaca, Sebastián
- **Período académico:** Ciclo académico 2026.

---

## 2. Objetivos

### 2.1 Objetivo General
Diseñar y documentar un prototipo navegable de comercio electrónico centrado en el usuario, con estados de interacción claros y mecanismos accesibles de corrección y recuperación de errores.

### 2.2 Objetivos Específicos
1. Diagnosticar cinco problemas potenciales de usabilidad y modelar el recorrido de interacción con su respectiva curva emocional estimada.
2. Definir seis requisitos verificables (R1 a R6), la arquitectura de información (sitemap), flujos de usuario (happy path y control de errores) y wireframes de baja/media fidelidad.
3. Implementar y comparar prototipos funcionales (versión inicial v1 y versión final optimizada v2) que incluyan catálogo, vista de detalle, carrito y checkout simulado.
4. Diseñar y ejecutar un protocolo formal de evaluación de usabilidad con usuarios participantes externos para medir tiempos, tasas de éxito y satisfacción.

---

## 3. Metodología y Diagnóstico Inicial

### 3.1 Persona de Referencia
- **Nombre hipotético:** Alex
- **Perfil:** Estudiante universitario de 21 años, comprador habitual de accesorios de cómputo y periféricos.
- **Meta:** Encontrar un producto tecnológico específico, comparar su precio de forma rápida y completar el pedido sin fricciones ni ambigüedad en los formularios.

### 3.2 Matriz de Problemas Potenciales Diagnosticados

| # | Problema Potencial | Prioridad Estimada | Decisión de Diseño |
|---|---|---|---|
| 1 | Botón de acción principal poco visible en catálogo | Alta | Botones con alto contraste visual y tipografía legible |
| 2 | Mensajes de error globales y ambiguos en formularios | Alta | Validación contextual en línea al lado de cada campo (`aria-invalid`) |
| 3 | Falta de confirmación explícita tras añadir al carrito | Media | Notificación visual accesible inmediata con `aria-live` |
| 4 | Dificultad para revisar el resumen del pedido antes de comprar | Alta | Desglose claro de productos, cantidades y total antes del checkout |
| 5 | Ausencia de indicador de estado durante el procesamiento | Media | Deshabilitación de botón y feedback dinámico de carga |

---

## 4. Requisitos Verificables (R1 – R6)

- **R1 - Búsqueda y Filtrado:** Permitir la búsqueda por texto y filtrado por categoría, actualizando la vista dinámicamente sin recargar la página.
- **R2 - Catálogo y Detalle:** Presentar información clara del producto (nombre, categoría, precio en formato monetario e imagen/icono alusivo).
- **R3 - Gestión de Carrito:** Permitir añadir y retirar artículos calculando y mostrando el total acumulado en tiempo real.
- **R4 - Formulario con Persistencia:** Permitir el ingreso de datos de envío (nombre, correo electrónico, dirección) preservando los valores ingresados ante errores.
- **R5 - Mensajes Contextuales de Error:** Mostrar retroalimentación clara cuando un dato sea inválido, indicando exactamente qué corregir sin desorientar al usuario.
- **R6 - Confirmación Simulado:** Generar un identificador de orden simulado único y mensaje de éxito tras la confirmación del pedido.

---

## 5. Arquitectura de Información (Sitemap)

```
[Inicio / Catálogo]
        │
        ├───> [Vista Detalle de Producto] ───> [Añadir a Carrito]
        │                                             │
        └───> [Vista de Carrito de Compras] <────────┘
                      │
                      └───> [Formulario de Checkout Simulado]
                                    │
                                    ├─── (Datos inválidos) ──> [Error contextual & Corrección]
                                    └─── (Datos válidos)   ──> [Pantalla de Confirmación de Pedido]
```

---

## 6. Estado del Documento Formal

El archivo formal [`Informe_APE4_UTA.docx`](../Informe_APE4_UTA.docx) contiene la portada institucional completa, la justificación teórica, el marco metodológico y las tablas de especificación preparadas para la integración de los resultados experimentales.
