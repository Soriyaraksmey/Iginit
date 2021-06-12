import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReduceSizeimg } from '../utils';
//icon
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
//stars
import startfull from '../img/star-full.png';
import emptystar from '../img/star-empty.png';


const Gamedetail = ({ pathID }) => {

    const { game, screenshots, isLoading } = useSelector(state => state.gamedetails);
    const history = useHistory();

    const Closecomponent = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push("/");
        }
    }

    //adding icon
    const getIcon = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "Xbox Series S/X":
                return xbox;
            case "Xbox S":
                return xbox;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    //getstar
    const getStars = () => {
        let stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={startfull} alt={`start${i}`} key={i}></img>)
            } else {
                stars.push(<img src={emptystar} alt={`start${i}`} key={i}></img>)
            }
        }
        return stars;
    }
    return (
        <>
            {
                !isLoading && (
                    <CardShadow className="shadow" onClick={Closecomponent}>
                        <Detail layoutId={pathID}>
                            <Stars>
                                <div className="rating">
                                    <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                                    <p>Rating: {game.rating}</p>
                                    {getStars()}
                                </div>
                                <Info>
                                    <h3>Platforms</h3>
                                    <Platforms>
                                        {game.platforms.map((data) => (
                                            <img key={data.platform.id} src={getIcon(data.platform.name)} alt={data.platform.name} title={data.platform.name}></img>
                                        ))}
                                    </Platforms>
                                </Info>

                            </Stars>
                            <Media>
                                <motion.img layoutId={`img ${pathID}`} src={ReduceSizeimg(game.background_image, 640)} alt={game.background_image} />
                            </Media>
                            <Description>
                                <p>{game.description_raw}</p>
                            </Description>

                            <div className="gallery">
                                {screenshots.results.map((screen) => (
                                    <img src={ReduceSizeimg(screen.image, 640)} key={screen.id} alt={screen.id} />
                                ))}
                            </div>
                        </Detail>
                    </CardShadow>
                )
            }
        </>
    );
}
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  left: 0;
  cursor: pointer;
  z-index: 120;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding:  2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  cursor: auto;
  z-index: 150;
img{
    width: 100%;
    object-fit: cover;
}

`
const Stars = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`
const Info = styled(motion.div)`
 text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
      margin-left: 3rem;
  }
`
const Description = styled(motion.div)`
margin: 2rem 0rem;
`
const Media = styled(motion.div)`
margin-top: 5rem;
img{
    width: 100%;
}
`;


export default Gamedetail;