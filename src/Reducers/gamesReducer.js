const InitalState = {
    popular: [],
    upcomming: [],
    newgame: [],
}

const GamesReducer = (state = InitalState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return { ...state };
            break;
        default:
            return { ...state };
            break;
    }
}
export default GamesReducer;