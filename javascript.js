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