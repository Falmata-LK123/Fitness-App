 // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
        const hamburgerbutton = document.querySelector('.hamburger-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        hamburgerbutton.addEventListener('click', () => 
            mobileMenu.classList.toggle('active')
        );
        });
        // FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const mainH = e.target.closest('.faq-main-h');
  
      if (!mainH) return;
  
      const main = mainH.parentElement;
      const mainB = main.querySelector('.faq-main-b');
      const icon = mainH.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      mainB.classList.toggle('open');
  
      // Close other open FAQ bodies
      const otherMains = faqContainer.querySelectorAll('.faq-main');
  
      otherMains.forEach((otherGroup) => {
        if (otherMain!== main) {
          const otherMainB = otherGroup.querySelector('.faq-main-b');
          const otherIcon = otherMain.querySelector('.faq-main-h i');
  
          otherMainB.classList.remove('yes');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });