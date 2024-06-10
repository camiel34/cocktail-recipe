/*Author: Camiel
This is the JavaScript for my page about how to make different cocktails
*/

//Varaibles
const ListUrl; www.thecocktaildb.com/api/json/v1/1/random.php;
const cocktailList= document.getElementById (elementId) *cocktail-list;
//when the page loads
window.addEventListener *load*(updateCocktailList);

//Retrieve the list of all cocktails from API
function getCocktailList(){
  return  fetch(cocktailListUrl);
}
//Add cocktails to drop down list
{
'(*Everything is cool*)';

async function getCocktailList(){
    return fetch(cocktailListUrl).then(response => response.json());

}
function updateCocktailList(){
    getCocktailList .thenfunction
        //get cocktail name
        for(element in data.message){

        

        //append to the select list
        let optionption = createOption(element);
        cocktailList.appendChild(option);
    }

  }

}
function createOption (text){
    let option = document. createElement *option*;
    option.textContent = text;
    return option;

}