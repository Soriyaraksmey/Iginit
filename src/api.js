const Base_URL = "https://api.rawg.io/api/";
const APIkey = "16a82efa07f9433099ab10d427e8effb";
//date format
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const CurrentYear = `${yyyy}-${mm}-${dd}`;
const LastYear = `${yyyy - 1}-${mm}-${dd}`;
const NextYear = `${yyyy + 1}-${mm}-${dd}`;
//

const popular_games = `games?dates=${LastYear},${CurrentYear}&ordering=-rating&page_size=10`;

const Popular_Games_URL = () => Base_URL + popular_games;

