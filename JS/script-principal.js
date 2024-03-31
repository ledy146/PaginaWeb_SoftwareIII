// Espera a que se cargue completamente el DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de menú con la clase 'hamburger-menu'
    const menuButton = document.querySelector('.hamburger-menu');
    // Selecciona el menú con la clase 'menu'
    const menu = document.querySelector('.menu');

    // Agrega un evento de clic al botón de menú
    menuButton.addEventListener('click', function() {
        // Alterna la clase 'open' en el menú, lo que muestra u oculta el menú desplegable
        menu.classList.toggle('open');
    });
});
