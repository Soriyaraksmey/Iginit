import React from 'react';
import { useDispatch } from 'react-redux'
//import style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FetchGameDetails from '../actions/gameDetailsAction';
import { Link } from 'react-router-dom'
import { ReduceSizeimg } from '../utils';
import { PopUp } from '../animation';

const Game = ({ name, released, image, id }) => {


    const CovertID = id.toString();
    const dispatch = useDispatch();
    const loadgameDetail = () => {
        document.body.style.overflow = 'hidden';
        dispatch(FetchGameDetails(id))
    };



    return (
        <Gamestyle variants={PopUp} initial='hidden' animate='show' layoutId={CovertID} onClick={loadgameDetail}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${CovertID}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`img ${CovertID}`} src={ReduceSizeimg(image, 640)} alt={name} />
            </Link>
        </Gamestyle>
    );



}

const Gamestyle = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

`


export default Game;