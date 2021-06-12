import axios from 'axios';
import { NewGamesURL, PopularGamesURL, UpCommingGamesURL, SearchGameURL } from "../api";

//action creator
const LoadGames = () => async (dispatch) => {

    const respones = await axios.get(PopularGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    const respones1 = await axios.get(UpCommingGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    const respones2 = await axios.get(NewGamesURL(), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: respones.data.results,
            upcomming: respones1.data.results,
            newgame: respones2.data.results,
        }
    })
}

export const SearchGame = (game_name) => async (dispatch) => {
    const respones2 = await axios.get(SearchGameURL(game_name), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    dispatch({
        type: 'SEARCH_GAMES',
        payload: {
            search: respones2.data.results,
        }
    })
}


export default LoadGames;