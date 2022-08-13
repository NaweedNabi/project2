const ingredientsArray = [];
const ingredientsDisplay = document.getElementById('ingredients');

for (let i = 1; i <= 15; i++){
    if(drinkObj.strIngredients + i){
    ingredientsArray.push(drinkObj.strIngredients + i)
    }
};

ingredientsDisplay.innerHTML = ingredientsArray;

