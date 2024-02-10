const recipes = [
    { name: "Spaghetti Carbonara", ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"] },
    { name: "Chicken Alfredo", ingredients: ["Chicken Breast", "Fettuccine", "Alfredo Sauce", "Garlic", "Parmesan Cheese"] },
    { name: "Vegetable Stir Fry", ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Onions", "Soy Sauce"] }
  ];

  function displayRecipes() {
    const recipeListElement = document.getElementById('recipeList');
    recipeListElement.innerHTML = '';

    recipes.forEach((recipe, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = recipe.name;
      listItem.onclick = () => displayRecipeDetails(index);
      recipeListElement.appendChild(listItem);
    });
  }

  function displayRecipeDetails(index) {
    const recipeDetailsElement = document.getElementById('recipeDetails');
    recipeDetailsElement.innerHTML = '';

    const recipe = recipes[index];
    const heading = document.createElement('h3');
    heading.textContent = recipe.name;
    recipeDetailsElement.appendChild(heading);

    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      ingredientsList.appendChild(ingredientItem);
    });
    recipeDetailsElement.appendChild(ingredientsList);
  }

  function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput));
    if (filteredRecipes.length > 0) {
      displayFilteredRecipes(filteredRecipes);
    } else {
      alert('No recipes found.');
    }
  }

  function displayFilteredRecipes(filteredRecipes) {
    const recipeListElement = document.getElementById('recipeList');
    recipeListElement.innerHTML = '';

    filteredRecipes.forEach((recipe, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = recipe.name;
      listItem.onclick = () => displayRecipeDetails(recipes.indexOf(recipe));
      recipeListElement.appendChild(listItem);
    });
  }

  displayRecipes();