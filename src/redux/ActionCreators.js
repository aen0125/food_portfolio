import * as ActionTypes from './ActionTypes';

export const fetchRecipes = () => dispatch => {

    dispatch(recipesLoading());

    return fetch('recipes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(recipes => dispatch(addRecipes(recipes)))
    .catch(error => dispatch(recipesFailed(error.message)));
};

export const recipesLoading = () => ({
    type: ActionTypes.RECIPES_LOADING
});

export const recipesFailed = errMess => ({
    type: ActionTypes.RECIPES_FAILED
});

export const addRecipes = recipes => ({
    type: ActionTypes.ADD_RECIPES,
    payload: recipes
});