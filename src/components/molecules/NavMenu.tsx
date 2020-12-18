import { Zoom } from '@material-ui/core';
import * as React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { Animate } from './Animate';

interface Props {

}

const NavContainer = styled.div`
    height: 100vh;
    width: 20vw;
    position: absolute;
    background-color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10vw;
`

const NavText = styled.span`
    font-family: 'open sans';
    color: #5963DD;
    font-size: 3.5vw;
    cursor: pointer;
    &:hover {
        color: #1829dd;
    }
`


export const NavMenu: React.FC<Props> = () => {

    const history = useHistory();

    const CeasarClick = () => {
        history.push('/ceasar');
    }

    const AESClick = () => {
        history.push('/AES');
    }

    const VigenereClick = () => {
        history.push('/Vigenere');
    }

    return (
        <NavContainer>
            <NavText onClick={CeasarClick} >Caesar</NavText>
            <NavText onClick={VigenereClick} style={{ marginBottom: '30px', marginTop: '30px' }} >Vigenere</NavText>
            <NavText onClick={AESClick} style={{ marginTop: '5px' }} >AES</NavText>
        </NavContainer>
    )
}
