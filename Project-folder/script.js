 // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
        const hamburgerbutton = document.querySelector('.hamburger-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        hamburgerbutton.addEventListener('click', () => 
            mobileMenu.classList.toggle('active')
        );
        });