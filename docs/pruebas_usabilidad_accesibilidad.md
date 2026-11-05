# Reporte de Pruebas de Usabilidad, Evaluación Heurística y Accesibilidad (APE 4)

**Universidad Técnica de Ambato**  
**Carrera:** Software  
**Asignatura:** Interacción Humano–Computador  
**Responsable:** Elizabeth De la Cruz (@Elizabeth1925)  
**Documento Formal:** `Informe_APE4_UTA.docx` (Sección 2.6.4 completada y resultados)

---

## 1. Resumen Ejecutivo
En cumplimiento del protocolo de evaluación planificado en la propuesta de la APE 4, se ejecutaron sesiones de prueba con dos participantes externos al equipo de diseño y desarrollo. Las pruebas evaluaron la interacción con el prototipo navegable *Tienda Clara* (contrastando la línea base `v1` y la versión optimizada `v2`) para verificar la eficacia, eficiencia, prevención/recuperación de errores y satisfacción subjetiva del usuario.

---

## 2. Perfil de los Participantes

| ID | Perfil / Ocupación | Edad | Experiencia en E-commerce | Dispositivo de Prueba |
|---|---|---|---|---|
| **P01** | Estudiante de Ingeniería | 21 años | Usuario frecuente (compras mensuales) | Laptop Windows 11 / Chrome / Teclado y Trackpad |
| **P02** | Estudiante universitaria | 23 años | Usuario ocasional (compras semestrales) | Computador de escritorio / Firefox / Teclado y Mouse |

*Nota ética:* Se solicitó consentimiento informado para fines estrictamente académicos. No se recolectaron contraseñas ni datos financieros reales.

---

## 3. Matriz de Ejecución de Tareas (Protocolo Empírico)

Se definieron tres tareas críticas centradas en el flujo principal de valor:
- **Tarea 1 (T1):** Localizar un producto específico (Mouse inalámbrico) mediante la barra de búsqueda o filtros de categoría.
- **Tarea 2 (T2):** Añadir el producto al carrito, modificar las unidades o retirar un ítem, y verificar el importe total.
- **Tarea 3 (T3):** Proceder al checkout simulado, ingresar deliberadamente un campo inválido, observar la corrección contextual y confirmar el pedido hasta visualizar la pantalla de éxito.

### Resultados Registrados por Participante y Prototipo

| Participante | Prototipo | Tarea | Tiempo (seg) | Tasa de Éxito | Errores Cometidos | Emoción Observada |
|---|---|---|---|---|---|---|
| **P01** | v1 | T1 | 8.4 s | 100% | 0 | Curiosidad |
| **P01** | v1 | T2 | 14.1 s | 100% | 0 | Neutra |
| **P01** | v1 | T3 | 24.6 s | 100% | 1 (error de validación) | Ligera duda tras error genérico |
| **P01** | v2 | T1 | **5.2 s** | 100% | 0 | Muy positiva (búsqueda fluida) |
| **P01** | v2 | T2 | **8.7 s** | 100% | 0 | Satisfacción con Toast dinámico |
| **P01** | v2 | T3 | **16.3 s** | 100% | 0 | Alivio con foco directo al error |
| **P02** | v1 | T1 | 11.2 s | 100% | 0 | Neutra |
| **P02** | v1 | T2 | 17.5 s | 100% | 1 (clic fuera del botón) | Duda sobre totalización |
| **P02** | v1 | T3 | 29.8 s | 100% | 1 (falta de formato email) | Frustración leve |
| **P02** | v2 | T1 | **6.9 s** | 100% | 0 | Positiva |
| **P02** | v2 | T2 | **9.4 s** | 100% | 0 | Confianza con botones +/- |
| **P02** | v2 | T3 | **18.9 s** | 100% | 0 | Excelente recepción del mensaje final |

---

## 4. Comparativa Cuantitativa y Eficiencia

```
Tiempo promedio por tarea (segundos):
T1: v1 (9.8s)  ───> v2 (6.1s)  [37.7% más rápido]
T2: v1 (15.8s) ───> v2 (9.1s)  [42.4% más rápido]
T3: v1 (27.2s) ───> v2 (17.6s) [35.3% más rápido]

Tasa de éxito general: 100% en ambas versiones.
Tasa de errores no forzados: Reducción del 100% en la v2 gracias a validaciones contextuales.
```

---

## 5. Auditoría de Accesibilidad (WCAG 2.1 - Nivel AA)

Se verificaron las pautas de accesibilidad digital recomendadas por la W3C:

1. **Contraste de color (Criterio 1.4.3):**
   - El texto sobre fondos (`#172654` sobre `#ffffff` y `#19243c` sobre `#f7f8fc`) superó el umbral mínimo de contraste 4.5:1 (ratio promedio obtenido: **9.2:1**).
2. **Navegación exclusiva por teclado (Criterio 2.1.1):**
   - El enlace *"Saltar al contenido principal"* se activa con la tecla `Tab` al cargar la página.
   - El orden de tabulación es lógico y secuencial a lo largo de catálogo, modales y formularios.
   - Indicador de foco visual (`:focus-visible`) resaltado con borde amarillo/naranja de 3px sin solapamientos.
3. **Compatibilidad con lectores de pantalla (Criterio 4.1.2 y 4.1.3):**
   - Los cambios de estado (adición de productos, eliminación, alertas de error) son anunciados mediante `aria-live="polite"` y `role="status"`.
   - Los campos de formulario cuentan con `aria-invalid` y `aria-describedby` que asocian el mensaje de error directamente al input.

---

## 6. Evaluación Heurística (10 Heurísticas de Nielsen)

- **H1 - Visibilidad del estado del sistema:** Cumplido con éxito. El contador del carrito se actualiza instantáneamente y el toast confirma cada acción.
- **H2 - Correspondencia entre el sistema y el mundo real:** Vocabulario familiar de comercio (catálogo, carrito, checkout, total).
- **H3 - Control y libertad del usuario:** Permite vaciar el carrito, modificar cantidades y regresar en cualquier momento sin perder la sesión.
- **H4 - Consistencia y estándares:** Disposición intuitiva con header fijo, buscador arriba y carrito a la derecha.
- **H5 - Prevención de errores:** Formatos validados en tiempo real antes del envío final.
- **H9 - Ayuda a reconocer, diagnosticar y recuperarse de errores:** Mensajes claros al lado de cada campo erróneo, evitando términos técnicos crípticos.

---

## 7. Conclusiones y Recomendaciones para el Informe Final

1. La versión 2 demostró una reducción notable en los tiempos de tarea (promedio superior al 38%), validando las decisiones de diseño basadas en accesibilidad y jerarquía visual.
2. La retroalimentación no intrusiva (Toast accesible y validaciones en línea) redujo la incertidumbre observada en los usuarios durante el proceso de compra.
3. Se recomienda para futuras iteraciones incorporar almacenamiento de pedidos anteriores y soporte de filtrado múltiple por rango de precio.
