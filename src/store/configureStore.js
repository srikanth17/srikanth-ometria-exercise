import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import getAllStarWarsCharacters from '../reducers/allCharacters';

export default () => {
    return createStore(
        combineReducers({
            allCharacters: getAllStarWarsCharacters
        }),
        applyMiddleware(ReduxThunk)
    );
};