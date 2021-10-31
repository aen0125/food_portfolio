import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Recipes } from './recipes';
import { Reviews } from './reviews';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            recipes: Recipes,
            reviews: Reviews,
        }),

        applyMiddleware(thunk, logger)
    );
    return store; 
}