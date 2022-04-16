// const { async } = require('regenerator-runtime');
// import icons from '../img/icons.svg';
// import { loadRecipe, searchResult, state } from './model.js';
// import recipeView from './views/recipeView.js';
// import searchView from './views/searchView.js';
// import recipeView from './views/recipeView.js';
// import resultsView from './views/resultsView.js';
const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async function() {
    try {
        // 1.loading recipe
        const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bce26');
        const data = await res.json();
        let { recipe  } = data.data;
        console.log(recipe);
        recipe = {
            id: recipe.id,
            time: recipe.cooking_time,
            publisher: recipe.publisher,
            title: recipe.title,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            ingredients: recipe.ingredients,
            image: recipe.image_url
        };
        // 2.rendering recipe
        const markup = `
    <figure class="recipe__fig">
      <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map((ing)=>{
            return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity}</div>
                <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
              </div>
            </li>
          `;
        }).join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
        recipeContainer.innerHTML = '';
        recipeContainer.insertAdjacentHTML('afterbegin', markup);
    } catch (err) {
        throw err;
    }
};
showRecipe(); // const searchController = async function () {
 //   const inputValue = searchView.getQuery();
 //   await searchResult(inputValue);
 //   const data = state.search.results;
 //   resultsView.render(data);
 //   // console.log(data);
 // };
 // searchView.addHandlerEvent(searchController);
 // recipeView.addHandlerEvent(showRecipe);

//# sourceMappingURL=index.62406edb.js.map
