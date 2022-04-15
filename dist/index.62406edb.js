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
    try {
        const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}(${res.status})`);
        console.log(res, data);
        let { resipe  } = data.data;
        resipe = {
            cooking_time: resipe.cooking_time,
            id: resipe.id,
            img: resipe.image_url,
            ingredients: resipe.ingredients,
            publisher: resipe.publisher,
            servings: resipe.servings,
            source_url: resipe.source_url,
            title: resipe.title
        };
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
