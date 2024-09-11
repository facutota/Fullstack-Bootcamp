(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const fechaNacimiento = document.getElementById('fecha-nacimiento');

    // Establecer la fecha máxima como hoy
    const hoy = new Date().toISOString().split('T')[0];
    fechaNacimiento.setAttribute('max', hoy);

    // Validar el formulario en el envío
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);

    // Validar la fecha de nacimiento en tiempo real
    fechaNacimiento.addEventListener('input', function() {
        const fechaSeleccionada = new Date(this.value);
        const fechaActual = new Date();
        
        if (fechaSeleccionada > fechaActual) {
            this.setCustomValidity('La fecha no puede ser posterior a hoy');
        } else {
            this.setCustomValidity('');
        }
    });
});

// Código para el cambio de tema (sin cambios)
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    if (body.classList.contains('bg-dark')) {
        themeToggleButton.textContent = 'Cambiar a tema claro';
    } else {
        themeToggleButton.textContent = 'Cambiar a tema oscuro';
    }
});
