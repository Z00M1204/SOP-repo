import * as React from 'react'
import styled from "styled-components";

import { useHistory } from 'react-router-dom';


interface Props {
    LogoValue: string
}

const Container = styled.div`
    display: flex;
    height: 98px;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 98px;
    justify-content: center;
`

const LogoText = styled.span`
    color: white;
    font-size: 43px;
    margin-left: 74px;
    font-weight: 700;
    font-family: 'open sans';
    cursor: pointer;
`

const NavContainer = styled.div`
    height: 98px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin-right: 102px;
`

const NavItemContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const NavItemText = styled.span`
    font-size: 22px;
    font-weight: 400;
    font-family: 'open sans';
    color: white;
    cursor: pointer;
`

export const AppHeader: React.FC<Props> = ({ LogoValue }) => {

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

    const LogoClick = () => {
        history.push('/');
    }

    return (
        <Container>
            <LogoContainer onClick={LogoClick}>
                <LogoText>
                    {LogoValue}
                </LogoText>
            </LogoContainer>
            <NavContainer>
                <NavItemContainer>
                    <NavItemText onClick={CeasarClick}>Caesar</NavItemText>
                    <NavItemText onClick={VigenereClick}>Vigenere</NavItemText>
                    <NavItemText onClick={AESClick}>AES</NavItemText>
                </NavItemContainer>
            </NavContainer>
        </Container>
    )
}