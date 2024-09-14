const toggleButton = document.getElementById('toggleButton');
const body = document.body;

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Desactivar Modo Oscuro';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
        toggleButton.textContent = 'Desactivar Modo Oscuro';
    } else {
        localStorage.setItem('darkMode', 'false');
        toggleButton.textContent = 'Activar Modo Oscuro';
    }
});
