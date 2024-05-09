/*Author: Camiel
This is the JavaScript for my page about how to make different cocktails
*/

//Varaibles
const cocktail listUrl = www.thecocktaildb.com/api/json/v1/1/list.php?c=list;
const cocktailList= document.getElementById(*cocktail-list*);
//when the page loads
window.addEventListener(*load* , updateCocktailList);

//Retrieve the list of all cocktails from API
function getCocktailList(){
  return  fetch(cocktailListUrl);
}
//Add cocktails to drop down list
complexity is 3 everything is cool!
async function getCocktailList(){
    return fetch(breedListUrl).then(response => response.json());

}
function updateCocktailList(){
    getCocktailList{}.then{function(data){}
        //get cocktail name
        for(element in data.message){

        }

        //append to the select list
        let option = createOption(element);
        cocktailList.appendChild(option);
    }

  };

} 
function createOption(text){
    let option = document.createElement(*option*);
    option.textContent = text;
    return option;

}