const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('nombre');
const lastNameInput = document.getElementById('apellido');
const dobInput = document.getElementById('fecha-nacimiento');
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Expresión regular para validar el email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validación del formulario al enviar
form.addEventListener('submit', (event) => {
    let valid = true;
    let errorMessage = '';

    // Validación del nombre
    if (nameInput.value.trim() === '') {
        valid = false;
        errorMessage += 'Por favor, ingresa tu nombre.\n';
    }

    // Validación del apellido
    if (lastNameInput.value.trim() === '') {
        valid = false;
        errorMessage += 'Por favor, ingresa tu apellido.\n';
    }

    // Validación de la fecha de nacimiento
    if (dobInput.value === '') {
        valid = false;
        errorMessage += 'Por favor, selecciona tu fecha de nacimiento.\n';
    }

    // Validación del email
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        errorMessage += 'Por favor, ingresa un email válido.\n';
    }

    // Si alguna validación falla, muestra un mensaje de error y previene el envío
    if (!valid) {
        alert(errorMessage);
        event.preventDefault(); // Previene el envío del formulario
    }
});

// Lógica para cambiar de tema 
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Cambiar a tema claro';
    } else {
        themeToggleButton.textContent = 'Cambiar a tema oscuro';
    }
});
