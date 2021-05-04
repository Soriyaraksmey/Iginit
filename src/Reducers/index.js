import { combineReducers } from 'redux';
import GamesReducer from './gamesReducer';


const rootReducers = combineReducers({
    games: GamesReducer,
});

export default rootReducers;