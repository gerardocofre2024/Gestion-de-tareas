document.addEventListener('DOMContentLoaded', () => {
    const nuevaTareaBtn = document.getElementById('nuevaTareaBtn');
    const nuevaTareaForm = document.getElementById('nuevaTareaForm');
    const notificacion = document.getElementById('notificacion');

    // Mostrar/Ocultar formulario de nueva tarea
    nuevaTareaBtn.addEventListener('click', () => {
        nuevaTareaForm.classList.toggle('hidden');
    });

    // Mostrar notificación
    function mostrarNotificacion(mensaje, tipo = 'success') {
        notificacion.textContent = mensaje;
        notificacion.classList.remove('hidden', 'error');
        if (tipo === 'error') {
            notificacion.classList.add('error');
        }
        notificacion.classList.add('show');

        setTimeout(() => {
            notificacion.classList.remove('show');
            notificacion.classList.add('hide');
            setTimeout(() => {
                notificacion.classList.add('hidden');
                notificacion.classList.remove('hide');
            }, 500);
        }, 3000);
    }

    // Ejemplo de cómo usar la notificación (llamar esta función en respuesta a eventos como creación/actualización de tarea)
    // mostrarNotificacion('Tarea creada exitosamente');
});