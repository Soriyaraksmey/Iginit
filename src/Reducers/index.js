import { combineReducers } from 'redux';
import GameDetailReducer from './gameDetailsReducer';
import GamesReducer from './gamesReducer';


const rootReducers = combineReducers({
    games: GamesReducer,
    gamedetails: GameDetailReducer,
});

export default rootReducers;