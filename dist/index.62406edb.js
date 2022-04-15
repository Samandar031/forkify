// const { async } = require('regenerator-runtime');
const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async function() {
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}(${res.status})`);
};
const loadRecipe = async function(id) {
    try {
        const data = await getJson(API_URL + id); //getJson fungsiyadidan javob kelishinin kutib turadi(fungsiyani  olib keladi)
        // console.log(data);
        const obj = data.data.recipe;
        state.recipe = {
            //tepadagi ozgaruvchimizga saqlab oldik
            id: obj.id,
            time: obj.cooking_time,
            publisher: obj.publisher,
            title: obj.title,
            servings: obj.servings,
            source_url: obj.source_url,
            ingredients: obj.ingredients,
            image: obj.image_url
        };
    } catch (err) {
        throw err;
    }
}; // const { async } = require('regenerator-runtime');
 // import { loadRecipe, searchResult, state } from './model.js';
 // import recipeView from './views/recipeView.js';
 // import searchView from './views/searchView.js';
 // import recipeView from './views/recipeView.js';
 // import resultsView from './views/resultsView.js';
 // // https://forkify-api.herokuapp.com/v2
 // ///////////////////////////////////////
 // const showRecipe = async function () {
 //   try {
 //     const id = window.location.hash.slice(1);
 //     if (!id) return;
 //     recipeView.loading(); //modul serverga borib kelguncha loading ishlab turadi
 //     await loadRecipe(id);
 //     const data = state.recipe;
 //     recipeView.render(data); //Moduldan kelgan malumotlarni view ga junatayabmiz
 //     // console.log(data);
 //     // console.log(await loadRecipe(id));
 //   } catch (err) {
 //     recipeView.renderError();
 //     throw err; //bu tursa ham buladi turmasa ham buladi
 //   }
 // };
 // // showRecipe();
 // const searchController = async function () {
 //   const inputValue = searchView.getQuery();
 //   await searchResult(inputValue);
 //   const data = state.search.results;
 //   resultsView.render(data);
 //   // console.log(data);
 // };
 // searchView.addHandlerEvent(searchController);
 // recipeView.addHandlerEvent(showRecipe);

//# sourceMappingURL=index.62406edb.js.map
