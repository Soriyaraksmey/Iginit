const InitalState = {
    popular: [],
    upcomming: [],
    newgame: [],
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
        default:
            return { ...state };
    }
}
export default GamesReducer;