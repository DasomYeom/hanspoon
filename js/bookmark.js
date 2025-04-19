document.addEventListener("DOMContentLoaded", () => {
    const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
  
    bookmarkButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
  
        const img = button.querySelector("img");
        const currentSrc = img.getAttribute("src");
  
        if (currentSrc.includes("bookmarkblack.png")) {
          img.setAttribute("src", "image/bookmark.png");
        } else {
          img.setAttribute("src", "image/bookmarkblack.png");
        }
  
       
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
        }, 300);
      });
    });
  });
  