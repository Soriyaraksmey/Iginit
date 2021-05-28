import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadGames from '../actions/gamesAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Game from '../components/Game';
import Gamedetail from "../components/GameDetail";
import { useLocation } from 'react-router-dom';
const Homepage = () => {

    const location = useLocation();
    const pathID = location.pathname.split("/")[2];
    console.log(pathID);

    const dispactch = useDispatch();
    useEffect(() => {
        dispactch(LoadGames())
    }, [dispactch]);

    const { popular, upcomming, newgame } = useSelector(state => state.games);

    return (
        <GameLists>
            {pathID && <Gamedetail />}
            <h2>Up Comming Games</h2>
            <Games>
                {upcomming.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newgame.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
        </GameLists>
    );
}

const GameLists = styled(motion.div)`
  padding: 0 5rem;
  h2{
      padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;


export default Homepage;