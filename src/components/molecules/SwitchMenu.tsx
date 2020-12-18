import * as React from 'react'
import styled from "styled-components";

import { useHistory } from 'react-router-dom';


interface Props {
    button1Color: any,
    button2Color: any,
    path1: string,
    path2: string,


}

const Container = styled.div`
    display: flex;
    margin-left: 78px;
    justify-content: center;
    align-items: center;
    width: 460px;
    margin-bottom: 30px;
`

const ButtonText = styled.span`
    font-family: 'open sans';
    color: white;
    font-size: 25px;
`

const NavButton1 = styled.div<{button1Color: string}>`
    width: 229px;
    height: 62px;
    background-color: ${p => (p.button1Color)};
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const NavButton2 = styled.div<{button2Color: string}>`
    width: 229px;
    height: 62px;
    background-color:  ${p => (p.button2Color)};
    border-radius: 11px;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


export const SwitchMenu: React.FC<Props> = ({button1Color, button2Color, path1, path2}) => {



    const history = useHistory();

    const EncryptionHandler = () => {
        history.push(path1);
    }

    const DecryptionHandler = () => {
        history.push(path2);
    }

    return (
        <Container>
            <NavButton1 button1Color={button1Color} onClick={EncryptionHandler} > <ButtonText>Encryption</ButtonText> </NavButton1>
            <NavButton2 button2Color={button2Color} onClick={DecryptionHandler} > <ButtonText>Decryption</ButtonText> </NavButton2>
        </Container>
    )
}
