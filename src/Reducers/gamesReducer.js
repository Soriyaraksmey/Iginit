const InitalState = {
    popular: [],
    upcomming: [],
    newgame: [],
    search: [],
}

const GamesReducer = (state = InitalState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                popular: action.payload.popular,
                upcomming: action.payload.upcomming,
                newgame: action.payload.newgame
            };
        case 'SEARCH_GAMES':
            return {
                ...state,
                search: action.payload.search,
            };
        case 'CLEAR_SEARCH':
            return {
                ...state,
                search: [],
            }
        default:
            return { ...state };
    }
}
export default GamesReducer;