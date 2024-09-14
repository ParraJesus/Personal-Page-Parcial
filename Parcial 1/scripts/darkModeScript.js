const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Comprobar si el modo oscuro está activado al cargar la página
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Desactivar Modo Oscuro';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Guardar la preferencia del modo oscuro en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
        toggleButton.textContent = 'Desactivar Modo Oscuro';
    } else {
        localStorage.setItem('darkMode', 'false');
        toggleButton.textContent = 'Activar Modo Oscuro';
    }
});
