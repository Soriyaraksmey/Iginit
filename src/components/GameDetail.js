import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Gamedetail = () => {

    const { game, screenshots, isLoading } = useSelector(state => state.gamedetails);
    const history = useHistory();

    const Closecomponent = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push("/");
        }
    }

    return (
        <>
            {
                !isLoading && (
                    <CardShadow className="shadow" onClick={Closecomponent}>
                        <Detail>
                            <Stars>
                                <div className="rating">
                                    <h3>{game.name}</h3>
                                    <p>Rating: {game.rating}</p>
                                </div>
                                <Info>
                                    <h3>Platforms</h3>
                                    <Platforms>
                                        {game.platforms.map((data) => (
                                            <p key={data.platform.id}>{data.platform.name}</p>
                                        ))}
                                    </Platforms>
                                </Info>

                            </Stars>
                            <div className="media">
                                <img src={game.background_image} alt={game.background_image} />
                            </div>
                            <Description>
                                <p>{game.description_raw}</p>
                            </Description>

                            <div className="gallery">
                                {screenshots.results.map((screen) => (
                                    <img src={screen.image} key={screen.id} alt={screen.id} />
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
img{
    width: 100%;
    object-fit: cover;
}
`
const Stars = styled(motion.div)`
   display: grid;
   grid-template-columns: 30% 70%;
   margin-bottom: 2rem;
`
const Info = styled(motion.div)`
 text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  img{
      margin-left: 3rem;
  }
`
const Description = styled(motion.div)`

margin: 2rem 0rem;

`

export default Gamedetail;