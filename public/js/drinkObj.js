

const drinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const randomDrinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';



const randomDrinkFunc = async () => {
    let randomDrink = await fetch(randomDrinksAPI);
    let response = await randomDrink.json();
    let drinkObj = response.drinks[0];
    // console.log(drinkObj);
    return drinkObj;
};







module.exports = { randomDrinkFunc}
