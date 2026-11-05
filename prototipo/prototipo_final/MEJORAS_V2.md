# Tienda Clara — Mejoras de la versión v2

Se conserva el diseño y la versión v1 original para la comparación académica.

## Cambios aplicados
- Se conserva la opción seleccionada de pago simulado al volver a renderizar el formulario.
- Se restaura el foco del teclado tras aumentar o disminuir cantidades del carrito y tras eliminar productos.
- Se devuelve el foco al buscador después de limpiar filtros.
- Se anuncia mediante `role="status"` y `aria-live="polite"` la cantidad de resultados al buscar o filtrar.
- Los errores de formulario se vinculan al campo solo cuando existen y se anuncian mediante `role="alert"`.
- Se respeta la preferencia de movimiento reducido del sistema.
- Se filtran entradas inválidas del carrito almacenado en el navegador.
- Se evita que la pantalla de confirmación falle cuando no existe un pedido en memoria.

## Pruebas manuales recomendadas
1. Abrir `index.html` en un navegador. Buscar 'mouse', filtrar por Audio y limpiar filtros.
2. Añadir dos productos; aumentar, disminuir y eliminar unidades con el teclado.
3. Continuar al checkout; seleccionar Transferencia simulada y enviar el formulario vacío. Comprobar que la selección se mantiene.
4. Introducir datos válidos (nombre de 3 o más caracteres, correo válido, teléfono de 9 o 10 dígitos y dirección de 8 o más caracteres) y confirmar.
5. Revisar foco visible con Tab y Shift+Tab; repetir el flujo con lector de pantalla si está disponible.
6. Capturar resultados reales de las pruebas P01/P02 y no atribuir mejoras empíricas sin medición.


