document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menuPanel = document.getElementById("hamburgerMenu");
    const recipesToggle = document.getElementById("recipesToggle");
    const subMenu = document.getElementById("recipesSubMenu");
  
    if (!menuBtn || !menuPanel) return;
  
    menuBtn.addEventListener("click", () => {
      menuPanel.classList.toggle("active");
      if (menuPanel.classList.contains("active")) {
        menuBtn.style.display = "none";
      } else {
        menuBtn.style.display = "block";
      }
    });
  
    document.addEventListener("click", (e) => {
      if (!menuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
        menuPanel.classList.remove("active");
        if (recipesToggle) recipesToggle.classList.remove("active");
        if (subMenu) subMenu.classList.remove("show");
        menuBtn.style.display = "block";
      }
    });
  

    if (recipesToggle && subMenu) {
      recipesToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        subMenu.classList.toggle("show");
        recipesToggle.classList.toggle("active");
      });
    }
  });
  