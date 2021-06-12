import React, { useState } from 'react';
//style
import styled from "styled-components"
import { motion } from 'framer-motion';
import logo from "../img/logo.svg"
//redux
import { useDispatch } from 'react-redux';
import { SearchGame } from '../actions/gamesAction';
import { FadIn } from '../animation';

const Nav = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        if (text) {
            dispatch(SearchGame(text));
            setText("");
        } else {
            dispatch("CLEAR_SEARCH");
        }

    }

    const clearSearch = () => {
        dispatch({ type: "CLEAR_SEARCH" });
        setText("");
    }

    return (
        <StyledNav variants={FadIn} initial="hidden" animate="show">
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo"></img>
                <h1>GGamenews</h1>
            </Logo>
            <form className="search" onSubmit={submitHandler}>
                <input value={text} onChange={(event) => setText(event.target.value)} type="text" />
                <button type='submit'>Search</button>
            </form>
        </StyledNav>
    );
}


const StyledNav = styled(motion.div)`
padding: 3rem 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
}
button{
    font-size: 1.7rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    &:hover{
        font-size: 1.8rem;
        color: black;
        transition: all 0.5s ease-in-out;
    }
}


`
const Logo = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
img{
    width: 7vh;
    min-height: 7vh;
}
`


export default Nav;