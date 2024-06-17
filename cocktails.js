/*Author: Camiel
This is the JavaScript for my page about how to make different cocktails
*/

const searchInput = document.getElementById("searchInput");

// Fetch data from the API based on search input
function searchCocktail() {
  const searchValue = searchInput.value;
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')

.then((response) => response.json())
.then ((data) => {
  if (data.drinks) {
    const cocktail = data.drinks [0];
    displayCocktail (cocktail)
   } else {
    displayNoResults();
   }
  })
.catch((error) => console.log (error));
}

// Fetch data from the API for a random cocktail
function generateRandomCocktail(){
fetch ("www.thecocktaildb.com/api/json/v1/1/random.php")
.then((resonse) => response.json())
.then((data) => {
   const cocktail = data.drinks[0];
   displayCocktail(cocktail);
})
.catch((error) => console.log (error));

}

//Display the cocktail data
{
 function displayCocktail(cocktail) {
   const cocktailContainer = document.getElementById("cocktailContainer");
   cocktailContainer.innerHTML = "";

   const cocktailCard = document.createElement("div");
   cocktailCard.classList.add("cocktail-card");

   const image = document.createElement ("img");
   image.src = cocktail.strDrinkThumb;
   cocktailCard.appendChild(image);

   const name = document.createElement("h2");
   name.textContent = cocktail.strDrink;
   cocktailCard.appendChild(name);

   const ingredients = document.createElement("p");
   ingredients.classLists.add("ingredients")
   ingredients.textContent = "ingredients: " + getIngredients(cocktail);
   cocktailCard.appendChild(ingredients);

   const instructions = document.createElement("p");
   instructions.classList.add("instructions");
   instructions.textContent = "instructions: " + cocktail.strInstructions;
   cocktailCard.appendChild(instructions);

   cocktailContainer.appendChild(cocktailCard)
 }

 // Display a message when no results are found
 function displayNoResults() {
   const cocktailContainer = document.getElementById("cocktailContainer");
   cocktailContainer.innerHTML = "";

   const noResults =document.createElement("p");
   noResults.textContent = "No results found.";
   cocktailContainer.appendChild(noResults);
 }

 // Get the ingredients and measurements
 function getIngredients(cocktail) {
   let ingredients = "";

   for (let i = 1; i <= 15; i++) {
     const ingredients = cocktail ["strIngredient" + i];
     const measurement = cocktail["strMeasure" + i];

     if (ingredient && ingredient.trim() !== "") {
       ingredients += measurement + " " + ingredient + ", ";
     }
   }

   return ingredients.slice(0, -2);
  }

}
