import * as React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'

import { DataCard } from '../molecules/DataCard';
import { AppHeader } from '../molecules/AppHeader';
import { Animate } from '../molecules/Animate'
import { TextInputCard } from '../molecules/TextInputCard';
import { AmountCard } from '../molecules/AmountCard';
import { EncryptButton } from '../atoms/EncryptButton';
import { SwitchMenu } from '../molecules/SwitchMenu';
import { VerticalFlexContainer } from '../atoms/VerticalFlexContainer';
import { ValiditiyCheck } from '../../utils/ValidityCheck';





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

export const CaesarEncryption: React.FC<Props> = () => {

    const [inputText, setInputText] = React.useState("");
    const [encryptedText, setEncryptedText] = React.useState("");
    const [encryptedChars, setEncryptedChars] = React.useState(0);

    const testCounter = useSelector((state: RootState) => state.test)

    let endString = "";

    const encrypt = (e: number) => {

        let startString = inputText.toUpperCase();

        endString = "";

        for (let i = 0; i < startString.length; i++) {
            let asciiNumber = startString[i].charCodeAt(0);

            if (asciiNumber == 32) {
                endString += " ";
            }

            if ((asciiNumber + e) > 90) {
                asciiNumber = 64 + (90 - (asciiNumber + e)) * -1;
                endString += String.fromCharCode(asciiNumber);
            } else if (asciiNumber >= 65 && asciiNumber <= 90) {
                endString += String.fromCharCode(asciiNumber + e);
            }
        }
        setEncryptedChars(endString.length);
        setEncryptedText(endString.toLocaleLowerCase());

        if (ValiditiyCheck(endString) === false) {
            setEncryptedText("Invalid input, your input can only be letters")

        }

    }

    const startEncryption = () => {
        encrypt(testCounter.count);
    }

    return (
        <Container>
            <Animate index={1} >
                <AppHeader LogoValue="Ceasar" />
            </Animate>
            <VerticalFlexContainer>
                <Animate index={2} >
                    <SwitchMenu path1="/ceasar" path2="/ceasarDecryption" button1Color="#14A596" button2Color="#2E2E2E" />
                </Animate>
                <BodyContainer>
                    <DataContainer>
                        <Animate index={3} >
                            <TextInputCard maxLength={22} placeholder="Text to encrypt" inputText={setInputText} />
                        </Animate>
                        <Animate index={4} >
                            <AmountCard />
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
                </BodyContainer>
                <Animate index={7}>
                    <ButtonContainer onClick={startEncryption} >
                        <EncryptButton>
                            <ButtonText>Encrypt!</ButtonText>
                        </EncryptButton>
                    </ButtonContainer>
                </Animate>
            </VerticalFlexContainer>
        </Container>
    )
}
