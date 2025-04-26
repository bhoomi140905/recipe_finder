async function findRecipes() {
  const inputField = document.getElementById('ingredientInput');
  const input = inputField.value.trim().toLowerCase();
  const recipeList = document.getElementById('recipeList');
  const loadingMessage = document.getElementById('loadingMessage');

  recipeList.innerHTML = '';
  inputField.classList.remove('invalid');

  if (!input) {
    alert("Please enter at least one ingredient.");
    inputField.classList.add('invalid');
    return;
  }

  loadingMessage.style.display = 'block';

  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

  const inputIngredients = input.split(',').map(i => i.trim());
  const sampleRecipes = [
    {
      title: "Tomato Cheese Pasta",
      image: "images/tomato-pasta.jpeg",
      description: "A delicious pasta made with tomatoes and cheese.",
      ingredients: [
        "200g pasta", "2 tomatoes", "100g grated cheese",
        "1 tbsp olive oil", "Salt and pepper to taste"
      ],
      instructions: "1. Boil pasta until al dente.\n2. In a pan, sauté chopped tomatoes with olive oil.\n3. Mix in the boiled pasta.\n4. Add cheese, salt, and pepper.\n5. Serve hot."
    },
    {
      title: "Cheesy Tomato Soup",
      image: "images/soup.jpeg",
      description: "A warm soup perfect for any day.",
      ingredients: [
        "4 tomatoes", "1 cup vegetable broth", "50g cheese",
        "1 tsp garlic", "Salt and pepper to taste"
      ],
      instructions: "1. Boil and blend tomatoes.\n2. Add broth and garlic in a pan.\n3. Add blended tomatoes.\n4. Stir in cheese until melted.\n5. Season and serve warm."
    },
    {
      title: "Garlic Butter Mushrooms",
      image: "images/garlic-mushrooms.jpeg",
      description: "Sautéed mushrooms in a delicious garlic butter sauce.",
      ingredients: [
        "200g mushrooms", "2 tbsp butter", "3 cloves garlic, minced",
        "1 tbsp parsley", "Salt and pepper to taste"
      ],
      instructions: "1. Melt butter in a pan.\n2. Add garlic and cook for 1 minute.\n3. Add mushrooms and sauté for 5-7 minutes.\n4. Add salt, pepper, and parsley.\n5. Serve warm."
    },
    {
      title: "Grilled Cheese Sandwich",
      image: "images/grilledcheese.jpeg",
      description: "Crispy golden bread with gooey melted cheese inside.",
      ingredients: [
        "2 slices of bread", "2 slices of cheese", "1 tbsp butter"
      ],
      instructions: "1. Butter one side of each bread slice.\n2. Place cheese between bread, buttered sides out.\n3. Grill on a pan until golden and crispy.\n4. Flip and cook the other side.\n5. Serve hot."
    },
    {
      title: "Veggie Omelette",
      image: "images/veggieomelette.jpeg",
      description: "A fluffy omelette packed with colorful veggies.",
      ingredients: [
        "2 eggs", "1/4 cup chopped onions", "1/4 cup bell peppers",
        "1 tbsp milk", "Salt and pepper to taste", "1 tsp oil or butter"
      ],
      instructions: "1. Whisk eggs with milk, salt, and pepper.\n2. Heat oil in a pan and sauté veggies.\n3. Pour in the egg mixture.\n4. Cook until set, then fold and serve."
    },
    {
      title: "Garlic Bread",
      image: "images/garlicbread.jpeg",
      description: "Toasted bread slices with flavorful garlic butter.",
      ingredients: [
        "1 loaf of French bread", "3 cloves garlic, minced", "4 tbsp butter",
        "1 tbsp chopped parsley", "Salt to taste"
      ],
      instructions: "1. Mix minced garlic with softened butter and parsley.\n2. Spread on sliced bread.\n3. Toast in oven until golden and crispy.\n4. Serve hot."
    },
    {
      title: "Spicy Paneer Wrap",
      image: "images/paneer-wrap.jpeg",
      description: "A spicy Indian-style wrap with paneer and veggies.",
      ingredients: [
        "100g paneer", "1 tortilla or wrap", "1/4 cup onions", "1/4 cup bell peppers",
        "1 tbsp yogurt", "1 tsp chili powder", "Salt to taste"
      ],
      instructions: "1. Marinate paneer in yogurt, chili, and salt.\n2. Sauté onions and peppers.\n3. Add paneer and cook until golden.\n4. Place mixture in wrap and roll tightly.\n5. Grill if desired and serve."
    },
    {
      title: "Avocado Toast",
      image: "images/avocado-toast.jpeg",
      description: "A healthy and simple breakfast option.",
      ingredients: [
        "2 slices of whole grain bread", "1 ripe avocado", "1 tsp lemon juice",
        "Chili flakes", "Salt and pepper to taste"
      ],
      instructions: "1. Toast the bread slices.\n2. Mash avocado with lemon juice, salt, and pepper.\n3. Spread on toast.\n4. Sprinkle chili flakes.\n5. Serve immediately."
    },
    {
      title: "Caprese Salad",
      image: "images/caprese-salad.jpeg",
      description: "Classic Italian salad with tomato, basil, and mozzarella.",
      ingredients: [
        "2 tomatoes", "Fresh mozzarella", "Fresh basil leaves",
        "1 tbsp olive oil", "Salt and pepper to taste"
      ],
      instructions: "1. Slice tomatoes and mozzarella.\n2. Arrange alternately on a plate with basil.\n3. Drizzle with olive oil.\n4. Season with salt and pepper.\n5. Serve chilled."
    },
    {
      title: "Peanut Butter Banana Smoothie",
      image: "images/banana-smoothie.jpeg",
      description: "A creamy and energy-packed smoothie.",
      ingredients: [
        "1 banana", "1 tbsp peanut butter", "1/2 cup milk (or almond milk)",
        "1/4 tsp cinnamon", "Ice cubes"
      ],
      instructions: "1. Add all ingredients to a blender.\n2. Blend until smooth.\n3. Pour into a glass and enjoy cold."
    },
    {
      title: "Mushroom Cheese Omelette",
      image: "images/mushroom-omelette.jpeg",
      description: "Fluffy omelette with mushrooms and cheese inside.",
      ingredients: [
        "2 eggs", "100g mushrooms", "50g cheese", "Salt and pepper", "Butter or oil"
      ],
      instructions: "1. Sauté mushrooms in butter.\n2. Beat eggs with salt and pepper.\n3. Pour over mushrooms and add cheese.\n4. Cook until set and fold."
    },
    {
      title: "Tomato cheese Omelette",
      image: "images/tomato-cheese-omelette.jpeg",
      description: "A tasty omelette with juicy tomatoes and melted cheese.",
      ingredients: [
        "2 eggs",
        "1 tomato, chopped",
        "50g cheese",
        "Salt and pepper to taste",
        "1 tbsp butter"
      ],
      instructions: "1. Beat eggs with salt and pepper.\n2. Heat butter in a pan.\n3. Add tomatoes, then pour in eggs.\n4. Add cheese and cook until set.\n5. Fold and serve."
    },
    {
      title: "Cheesy Garlic Toast",
      image: "images/cheesy-garlic-toast.jpg",
      description: "Crispy toast with garlic butter and gooey cheese topping.",
      ingredients: [
        "4 slices of bread",
        "2 tbsp butter",
        "2 cloves garlic, minced",
        "100g grated cheese",
        "Parsley for garnish"
      ],
      instructions: "1. Mix garlic with butter and spread on bread.\n2. Top with cheese.\n3. Toast in oven until bubbly.\n4. Garnish with parsley and serve."
    },
    {
      title: "Tomato Basil Bruschetta",
      image: "images/tomato-basil-bruschetta.jpeg",
      description: "Crispy bread topped with fresh tomato and basil mix.",
      ingredients: [
        "1 baguette",
        "3 tomatoes",
        "2 cloves garlic",
        "Fresh basil leaves",
        "Olive oil",
        "Salt to taste"
      ],
      instructions: "1. Chop tomatoes and mix with basil, garlic, and oil.\n2. Slice and toast baguette.\n3. Spoon topping onto toast.\n4. Serve immediately."
    },
    {
      title: "Egg Wrap",
      image: "images/egg-cheese-wrap.jpg",
      description: "Quick breakfast wrap with scrambled eggs and cheese.",
      ingredients: [
        "2 eggs",
        "1 tortilla wrap",
        "50g cheese",
        "1 tbsp milk",
        "Butter or oil"
      ],
      instructions: "1. Scramble eggs with milk.\n2. Heat wrap, add cheese and eggs.\n3. Fold and toast slightly.\n4. Serve warm."
    },
    {
      title: "Stuffed Mushrooms",
      image: "images/stuffed-mushrooms.jpeg",
      description: "Mushrooms filled with cheesy garlic stuffing.",
      ingredients: [
        "10 large mushrooms",
        "2 tbsp breadcrumbs",
        "2 cloves garlic, minced",
        "50g cheese",
        "1 tbsp olive oil"
      ],
      instructions: "1. Remove mushroom stems.\n2. Mix garlic, cheese, and breadcrumbs.\n3. Fill mushrooms and bake for 15 min at 180°C.\n4. Serve hot."
    },
    {
      title: "Baked Egg in Tomato",
      image: "images/baked-egg-tomato.jpeg",
      description: "Egg baked inside a tomato, topped with herbs and cheese.",
      ingredients: [
        "2 large tomatoes",
        "2 eggs",
        "50g cheese",
        "Salt and pepper",
        "Herbs (optional)"
      ],
      instructions: "1. Scoop out center of tomato.\n2. Crack egg inside.\n3. Top with cheese and herbs.\n4. Bake for 15 min at 180°C.\n5. Serve hot."
    },
    {
      title: "Creamy Mushroom Toast",
      image: "images/creamy-mushroom-toast.jpeg",
      description: "Buttered toast with creamy garlic mushrooms on top.",
      ingredients: [
        "200g mushrooms",
        "2 slices of bread",
        "2 tbsp cream",
        "2 cloves garlic",
        "1 tbsp butter"
      ],
      instructions: "1. Sauté garlic and mushrooms.\n2. Add cream and cook until thick.\n3. Toast bread and top with mushrooms.\n4. Serve warm."
    },
  
  
  
  
  
  
  
  ];

  const filteredRecipes = sampleRecipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
    const matchCount = inputIngredients.filter(ing =>
      recipeIngredients.some(rIng => rIng.includes(ing))
    ).length;
    return matchCount >= 2;
  });

  loadingMessage.style.display = 'none';

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

window.onclick = function(event) {
  const modal = document.getElementById('recipeModal');
  if (event.target === modal) {
    closeModal();
  }
};

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// ✅ Pressing Enter triggers recipe search
document.getElementById('ingredientInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    findRecipes();
  }
});
