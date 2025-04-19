document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const recipeCards = document.querySelectorAll('.recipe-card');
  
    if (!searchInput || recipeCards.length === 0) return;
  
    searchInput.addEventListener('input', function () {
      const keyword = searchInput.value.toLowerCase();
  
      recipeCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
  
        if (title.includes(keyword)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  