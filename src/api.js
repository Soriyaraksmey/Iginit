const Base_URL = "https://api.rawg.io/api/";
//date format
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const CurrentYear = `${yyyy}-${mm}-${dd}`;
const LastYear = `${yyyy - 1}-${mm}-${dd}`;
const NextYear = `${yyyy + 1}-${mm}-${dd}`;
//

//const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${LastYear},${CurrentYear}&ordering=-rating&page_size=10`;
const popular_games = `games?dates=${LastYear},${CurrentYear}&ordering=-rating&page_size=10&?`;
const upcoming_games = `games?dates=${CurrentYear},${NextYear}&ordering=-added&page_size=10&?`;
const new_games = `games?dates=${LastYear},${CurrentYear}&ordering=-released&page_size=10&?`;

export const PopularGamesURL = () => Base_URL + popular_games;
export const UpCommingGamesURL = () => Base_URL + upcoming_games;
export const NewGamesURL = () => Base_URL + new_games;
//Game detail 
export const GameDetails = (game_id) => `${Base_URL}games/${game_id}`;
export const Screencshots = (game_id) => `${Base_URL}games/${game_id}/screenshots`;
