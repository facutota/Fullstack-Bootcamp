const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Expresión regular para validar el email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validación del email al enviar el formulario
form.addEventListener('submit', (event) => {
    // Si el email no coincide con el patrón, muestra un error y previene el envío
    if (!emailPattern.test(emailInput.value)) {
        alert('Por favor, ingresa un email válido.');
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


