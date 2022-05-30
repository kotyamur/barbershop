(() => {
    const refs = {
      openMenuBtn: document.querySelector(".menu-open-btn"),
      menu: document.querySelector(".menu-mob"),
      body: document.querySelector("body"),
      closeMenuLinks: document.querySelectorAll(".menu-link a, .menu-close-btn"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuLinks.forEach(link => link.addEventListener('click', toggleMenu));
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-open");
      refs.body.classList.toggle("no-scroll");
    }
  })();