<script>
    async function findRecipes() {
        const ingredients = document.getElementById('ingredientInput').value.trim();
        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = ''; // Clear existing recipes

        if (!ingredients) {
            alert("Please enter at least one ingredient.");
            return;
        }

        // Example: Simulated API response
        const sampleRecipes = [
            {
                title: "Tomato Cheese Pasta",
                image: "https://via.placeholder.com/250x150?text=Tomato+Cheese+Pasta",
                description: "A delicious pasta made with tomatoes and cheese."
            },
            {
                title: "Cheesy Tomato Soup",
                image: "https://via.placeholder.com/250x150?text=Cheesy+Tomato+Soup",
                description: "A warm soup perfect for any day."
            }
        ];
        // In a real scenario, you’d fetch data from a recipe API using fetch()
        // Example:
        // const response = await fetch(`https://api.edamam.com/search?q=${ingredients}&app_id=YOUR_ID&app_key=YOUR_KEY`);
        // const data = await response.json();

        sampleRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            `;
            recipeList.appendChild(card);
        });
    }
</script>
