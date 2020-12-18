import * as React from 'react'
import styled from "styled-components";
// @ts-ignore 
import Lottie from 'react-lottie-player'
import AnimationJSON from '../../Assets/AnimationJSON.json'
import BigPattern from '../../Assets/BigPattern.svg'
import { IndexButton } from '../atoms/IndexButton';
// @ts-ignore 
import { NavMenu } from './NavMenu';
import { Header } from './Header';
import { Animate } from './Animate';
import { useHistory } from 'react-router-dom';

const OuterContainer = styled.div`
    display: flex;
`

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
`

const HeaderText = styled.span`
    font-family: 'open sans';
    font-size: 4vw;
    color: #1A285B;
    font-weight: 700;
    width: 40vw;
    margin-top: 15vh;
    z-index: 1;
    margin-bottom: 5vh;
`

const PlayerContainer = styled.div`
    position: absolute;
    width: 50vw;
    height: 100vh;
    padding-left: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3vw;
    z-index: 0;
`

const BigPatternImg = styled.img`
    position: absolute;
    z-index: 0;
`

const ButtonText = styled.span`
    font-family: 'open sans';
    font-size: 30px;
    color: white;
`

interface Props {

}

export const IndexBody: React.FC<Props> = () => {

    const [opened, setOpened] = React.useState(false);

    const History = useHistory();

    const OpenNavBar = () => {
        opened ? setOpened(false) : setOpened(true);
    }

    const clickHandler = () => {
        History.push("/ceasar")
    }

    return (
        <OuterContainer>
            <div onClick={OpenNavBar} >
                <Header />
            </div>
            {opened && (
                <NavMenu />
            )}
            <InnerContainer>
                <HeaderText>Discover several different types of encryption</HeaderText>
                <IndexButton onClick={clickHandler} >
                    <ButtonText>Lets go!</ButtonText>
                </IndexButton>
                <BigPatternImg src={BigPattern} />
                <PlayerContainer>
                    <Lottie
                        loop
                        animationData={AnimationJSON}
                        play
                        style={{ width: '100vw', height: '80vh' }}
                    />
                </PlayerContainer>
            </InnerContainer>
        </OuterContainer>
    )
}
