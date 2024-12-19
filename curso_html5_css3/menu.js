document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('nav a');
    const menu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('desplegado');
    });
});
