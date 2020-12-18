import * as React from 'react'
import styled from "styled-components";

import { DataCard } from '../molecules/DataCard';
import { AppHeader } from '../molecules/AppHeader';
import { Animate } from '../molecules/Animate'
import { TextInputCard } from '../molecules/TextInputCard';
import { EncryptButton } from '../atoms/EncryptButton';
import { SwitchMenu } from '../molecules/SwitchMenu';
import { HorizontalFlexContainer } from '../atoms/HorizontalFlexContainer';
import { KeyInputCard } from '../molecules/KeyInputCard';

interface Props {

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #212121;
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 74px;
    width: calc(50vw - 102px);
`

const ButtonContainer = styled.div`
    margin-left: 74px;
    display: flex;
    cursor: pointer;
`

const ButtonText = styled.span`
    font-family: 'open sans';
    font-size: 22px;
    color: white;
    font-weight: 600;
`

export const AESEncryption: React.FC<Props> = () => {

    const [inputText, setInputText] = React.useState("");
    const [secretKey, setSecretKey] = React.useState("");
    const [encryptedText, setEncryptedText] = React.useState("");
    const [encryptedChars, setEncryptedChars] = React.useState(0);

    var CryptoJS = require("crypto-js");

    const encrypt = () => {
        let ciphertext = CryptoJS.AES.encrypt(inputText, secretKey).toString();
        setEncryptedText(ciphertext);
        setEncryptedChars(inputText.length)
    }

    const startEncryption = () => {
        encrypt();
    }

    return (
        <Container>
            <Animate index={1} >
                <AppHeader LogoValue="AES" />
            </Animate>
            <Animate index={2} >
                <SwitchMenu path1="/AES" path2="/AESDecryption" button1Color="#14A596" button2Color="#2E2E2E" />
            </Animate>
            <HorizontalFlexContainer>
                <DataContainer>
                    <Animate index={3} >
                        <TextInputCard maxLength={22} placeholder="Text to encrypt" inputText={setInputText} />
                    </Animate>
                    <Animate index={4} >
                        <KeyInputCard maxLength={1000} placeholder="Secret Key" inputText={setSecretKey} />
                    </Animate>
                </DataContainer>
                <DataContainer>
                    <Animate index={5} >
                        <DataCard cardData={encryptedText} header="Encrypted text" />
                    </Animate>
                    <Animate index={6} >
                        <DataCard cardData={encryptedChars} header="Encrypted Chars" />
                    </Animate>
                </DataContainer>
            </HorizontalFlexContainer>
            <Animate index={7}>
                <ButtonContainer onClick={startEncryption} >
                    <EncryptButton>
                        <ButtonText>Encrypt!</ButtonText>
                    </EncryptButton>
                </ButtonContainer>
            </Animate>
        </Container>
    )
}
