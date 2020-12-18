import * as React from 'react'
import styled from "styled-components";

import { DataCard } from '../molecules/DataCard';
import { AppHeader } from '../molecules/AppHeader';
import { Animate } from '../molecules/Animate'
import { TextInputCard } from '../molecules/TextInputCard';
import { SwitchMenu } from '../molecules/SwitchMenu';
import { DecryptButton } from '../atoms/DecryptButton';
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

export const AESDecryption: React.FC<Props> = () => {

    const [inputText, setInputText] = React.useState("");
    const [secretKey, setSecretKey] = React.useState("");
    const [decryptedText, setDecryptedText] = React.useState("");
    const [decryptedChars, setDecryptedChars] = React.useState(0);

    let CryptoJS = require("crypto-js");

    const decrypt = () => {
        var bytes = CryptoJS.AES.decrypt(inputText, secretKey);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        setDecryptedText(originalText);
        setDecryptedChars(inputText.length)
    }

    const startDecryption = () => {
        decrypt();
    }

    return (
        <Container>
            <Animate index={1} >
                <AppHeader LogoValue="AES"/>
            </Animate>
            <Animate index={2} >
                <SwitchMenu path1="/AES" path2="/AESDecryption" button1Color="#2E2E2E" button2Color="#294AF1" />
            </Animate>
            <HorizontalFlexContainer>
                <DataContainer>
                    <Animate index={3} >
                        <TextInputCard maxLength={100} placeholder="Text to encrypt" inputText={setInputText} />
                    </Animate>
                    <Animate index={4} >
                        <KeyInputCard maxLength={1000} placeholder="Secret Key"  inputText={setSecretKey} />
                    </Animate>
                </DataContainer>
                <DataContainer>
                        <Animate index={5} >
                            <DataCard cardData={decryptedText} header="Decrypted text"/>
                        </Animate>
                        <Animate index={6} >
                            <DataCard cardData={decryptedChars} header="Decrypted Chars"/>  
                        </Animate>
                </DataContainer>  
            </HorizontalFlexContainer>
            <Animate index={7}>
                <ButtonContainer onClick={startDecryption} >
                    <DecryptButton>
                        <ButtonText>Decrypt!</ButtonText>
                    </DecryptButton>
                </ButtonContainer>
            </Animate>
        </Container>
    )
}
