import * as React from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../../state/store'

import { DataCard } from '../molecules/DataCard';
import { AppHeader } from '../molecules/AppHeader';
import { Animate } from '../molecules/Animate'
import { TextInputCard } from '../molecules/TextInputCard';
import { EncryptButton } from '../atoms/EncryptButton';
import { SwitchMenu } from '../molecules/SwitchMenu';
import { DecryptButton } from '../atoms/DecryptButton';
import { KeyInputCard } from '../molecules/KeyInputCard';

interface Props {

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #212121;
`

const BodyContainer = styled.div`
    display: flex;
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

export const VigenereDecryption: React.FC<Props> = () => {

    const [inputText, setInputText] = React.useState("");
    const [key, setKey] = React.useState("");

    const [decryptedText, setDecryptedText] = React.useState("");
    const [decryptedChars, setDecryptedChars] = React.useState(0);

    const decrypt = () => {

        let startString = inputText.toUpperCase();
        let encryptionKey = key.toUpperCase();
        let endString = "";

        for(let i = 0, f = 0; i < startString.length; i++) {
            let positionLetter = startString[i].charCodeAt(0);
            let conv = (((positionLetter + 65) - (encryptionKey[f%encryptionKey.length].charCodeAt(0) - 65)) % 26) + 65;
            if (positionLetter == 32) {
                endString += " ";
            } else {
                endString += String.fromCharCode(conv);
                f++;
            } 
        }   
        
        setDecryptedChars(endString.length);
        setDecryptedText(endString.toLocaleLowerCase());

    }

    const startDecryption = () => {
        decrypt();
    }

    return (
        <Container>
            <Animate index={1} >
                <AppHeader LogoValue="Vigenere"/>
            </Animate>
            <Animate index={2} >
                <SwitchMenu path1="/vigenere" path2="/vigenereDecryption" button1Color="#2E2E2E" button2Color="#294AF1" />
            </Animate>
            <BodyContainer>
                <DataContainer>
                    <Animate index={3} >
                        <TextInputCard maxLength={22} placeholder="Text to encrypt" inputText={setInputText} />
                    </Animate>
                    <Animate index={4} >
                        <KeyInputCard maxLength={1000} placeholder="Key"  inputText={setKey} />
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
            </BodyContainer>
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
