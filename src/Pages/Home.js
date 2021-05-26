import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadGames from '../actions/gamesAction';

const Homepage = () => {
    
    const dispactch = useDispatch();
    useEffect(() => {
        dispactch(LoadGames())
    }, []);

    return (
        <h1>HOme</h1>
    );
}

export default Homepage;