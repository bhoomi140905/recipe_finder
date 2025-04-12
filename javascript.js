async function findRecipes() {
    const ingredients = document.getElementById('ingredientInput').value.trim();
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = ''; // Clear previous results

    if (!ingredients) {
        alert("Please enter at least one ingredient.");
        return;
    }

    // Example recipes with full info
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
        }
    ];

    // Create and append recipe cards
    sampleRecipes.forEach(recipe => {
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

    // Ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ingredientsList.appendChild(li);
    });

    // Instructions
    document.getElementById('modalInstructions').textContent = recipe.instructions;

    document.getElementById('recipeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}
