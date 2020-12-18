import * as React from 'react'
import styled from "styled-components";

interface Props {
    inputText: any,
    placeholder: string,
    maxLength: number,
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2F3035;
    height: 25vh;
    border-radius: 22px;
    margin-top: 10px;
    margin-bottom: 35px;
`

const TextInput = styled.input`
    border: none;
    outline: none;
    align-self: flex-start;
    width: 57vw;
    background-color: transparent;
    color: white;
    text-align: left;
    font-size: 15px;
    font-weight: 500;
    padding-left: 29px;
    padding-top: 25px;
    resize: none;
    font-family: 'open sans';
`

export const TextInputCard: React.FC<Props> = ({inputText, placeholder, maxLength}) => {   

    return (
        <Container>
            <TextInput maxLength={maxLength} placeholder={placeholder} onChange={(e: any) => inputText(e.target.value) } />
        </Container>
    )
}
