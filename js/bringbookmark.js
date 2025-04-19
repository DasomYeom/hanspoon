function toggleBookmark(recipeId) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
  
    if (bookmarks.includes(recipeId)) {
      bookmarks = bookmarks.filter(id => id !== recipeId);
    } else {
      bookmarks.push(recipeId);
    }
  
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarks));
  }

  function isBookmarked(recipeId) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
    return bookmarks.includes(recipeId);
  }
  