document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Agregar un evento clic para cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnMenuToggle) {
            nav.classList.remove('show');
        }
    });
});
