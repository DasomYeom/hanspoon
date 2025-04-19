const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function() {
  sidebar.classList.toggle("show");
});


recipesToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  subMenu.classList.toggle("show");
  recipesToggle.classList.toggle("active"); // ▼ 회전용
});
