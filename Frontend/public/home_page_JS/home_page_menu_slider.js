
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeButton = document.querySelector('.close-button');
    const body = document.body;

    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
        body.classList.toggle('disable-interaction');
    }

    hamburgerMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    closeButton.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    mobileMenuOverlay.addEventListener('click', function (e) {
        if (e.target === mobileMenuOverlay) {
            toggleMenu();
        }
    });

    document.querySelectorAll('.mobile-category-item .arrow').forEach(function (arrow) {
        arrow.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        });
    });
});