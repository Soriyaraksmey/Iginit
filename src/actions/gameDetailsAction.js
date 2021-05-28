import axios from 'axios';
import { GameDetails, Screencshots } from '../api';

//action creator
const FetchGameDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING"
    })

    const respones = await axios.get(GameDetails(id), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    const respones1 = await axios.get(Screencshots(id), {
        params: {
            key: process.env.REACT_APP_API_KEY,
        },
    });
    dispatch({
        type: 'GET_DETAILS',
        payload: {
            game: respones.data,
            screenshots: respones1.data
        }
    })

}

export default FetchGameDetails;