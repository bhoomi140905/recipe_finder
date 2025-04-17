async function findRecipes() {
  const input = document.getElementById('ingredientInput').value.trim().toLowerCase();
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = ''; // Clear previous results

  if (!input) {
      alert("Please enter at least one ingredient.");
      return;
  }

  const inputIngredients = input.split(',').map(i => i.trim());

  const sampleRecipes = [
      {
          title: "Tomato Cheese Pasta",
          image: "images/tomato-pasta.jpeg",
          description: "A delicious pasta made with tomatoes and cheese.",
          ingredients: [
              "200g pasta",
              "2 tomatoes",
              "100g grated cheese",
              "1 tbsp olive oil",
              "Salt and pepper to taste"
          ],
          instructions: "1. Boil pasta until al dente.\n2. In a pan, sauté chopped tomatoes with olive oil.\n3. Mix in the boiled pasta.\n4. Add cheese, salt, and pepper.\n5. Serve hot."
      },
      {
          title: "Cheesy Tomato Soup",
          image: "images/soup.jpeg",
          description: "A warm soup perfect for any day.",
          ingredients: [
              "4 tomatoes",
              "1 cup vegetable broth",
              "50g cheese",
              "1 tsp garlic",
              "Salt and pepper to taste"
          ],
          instructions: "1. Boil and blend tomatoes.\n2. Add broth and garlic in a pan.\n3. Add blended tomatoes.\n4. Stir in cheese until melted.\n5. Season and serve warm."
      },
      {
          title: "Garlic Butter Mushrooms",
          image: "images/garlic-mushrooms.jpeg",
          description: "Sautéed mushrooms in a delicious garlic butter sauce.",
          ingredients: [
              "200g mushrooms",
              "2 tbsp butter",
              "3 cloves garlic, minced",
              "1 tbsp parsley",
              "Salt and pepper to taste"
          ],
          instructions: "1. Melt butter in a pan.\n2. Add garlic and cook for 1 minute.\n3. Add mushrooms and sauté for 5-7 minutes.\n4. Add salt, pepper, and parsley.\n5. Serve warm."
      },
      {
          title: "Grilled Cheese Sandwich",
          image: "images/grilled-cheese.jpeg",
          description: "Crispy golden bread with gooey melted cheese inside.",
          ingredients: [
              "2 slices of bread",
              "2 slices of cheese",
              "1 tbsp butter"
          ],
          instructions: "1. Butter one side of each bread slice.\n2. Place cheese between bread, buttered sides out.\n3. Grill on a pan until golden and crispy.\n4. Flip and cook the other side.\n5. Serve hot."
      },
      {
          title: "Veggie Omelette",
          image: "images/omelette.jpeg",
          description: "A fluffy omelette packed with colorful veggies.",
          ingredients: [
              "2 eggs",
              "1/4 cup chopped onions",
              "1/4 cup bell peppers",
              "1 tbsp milk",
              "Salt and pepper to taste",
              "1 tsp oil or butter"
          ],
          instructions: "1. Whisk eggs with milk, salt, and pepper.\n2. Heat oil in a pan and sauté veggies.\n3. Pour in the egg mixture.\n4. Cook until set, then fold and serve."
      },
      {
          title: "Garlic Bread",
          image: "images/garlic-bread.jpeg",
          description: "Toasted bread slices with flavorful garlic butter.",
          ingredients: [
              "1 loaf of French bread",
              "3 cloves garlic, minced",
              "4 tbsp butter",
              "1 tbsp chopped parsley",
              "Salt to taste"
          ],
          instructions: "1. Mix minced garlic with softened butter and parsley.\n2. Spread on sliced bread.\n3. Toast in oven until golden and crispy.\n4. Serve hot."
      }
  ];

  const filteredRecipes = sampleRecipes.filter(recipe => {
      const recipeText = recipe.ingredients.join(' ').toLowerCase();
      const matchCount = inputIngredients.filter(ing => recipeText.includes(ing)).length;
      return matchCount >= 2;
  });

  if (filteredRecipes.length === 0) {
      recipeList.innerHTML = "<p>No matching recipes found. Try different ingredients!</p>";
      return;
  }

  filteredRecipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
      `;
      card.onclick = () => showRecipeModal(recipe);
      recipeList.appendChild(card);
  });
}

function showRecipeModal(recipe) {
  document.getElementById('modalTitle').textContent = recipe.title;
  document.getElementById('modalImage').src = recipe.image;
  document.getElementById('modalImage').alt = recipe.title;
  document.getElementById('modalDescription').textContent = recipe.description;

  const ingredientsList = document.getElementById('modalIngredients');
  ingredientsList.innerHTML = '';
  recipe.ingredients.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ingredientsList.appendChild(li);
  });

  document.getElementById('modalInstructions').textContent = recipe.instructions;
  document.getElementById('recipeModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('recipeModal').style.display = 'none';
}
