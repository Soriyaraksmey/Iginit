import React from 'react';
import { useDispatch } from 'react-redux'
//import style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FetchGameDetails from '../actions/gameDetailsAction';
import { Link } from 'react-router-dom'

const Game = ({ name, released, image, id }) => {

    const dispatch = useDispatch();
    const loadgameDetail = () => {
        document.body.style.overflow = 'hidden';
        dispatch(FetchGameDetails(id))
    };

    return (
        <Gamestyle onClick={loadgameDetail}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name} />
            </Link>
        </Gamestyle>
    );
}

const Gamestyle = styled(motion.div)`
cursor: pointer;
text-align: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
overflow: hidden;
img{
    width: 100%;
    object-fit: cover;
    min-height: 40vh;
}
`


export default Game;