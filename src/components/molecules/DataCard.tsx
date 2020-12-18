import * as React from 'react'
import styled from "styled-components";

interface Props {
    header: any,
    cardData: any, 
}


const HeaderText = styled.span`
    font-family: 'open sans';
    font-size: 14px;
    color: white;
`

const DataText = styled.span`
    font-family: 'open sans';
    font-size: 15px;    
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    display: inline-block;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #2F3035;
    height: 25vh;
    border-radius: 22px;
    margin-top: 10px;
    margin-bottom: 35px;
`

export const DataCard: React.FC<Props> = ({header, cardData}) => {
    return (
        <Container>
            <HeaderText>{header}</HeaderText>
            <DataText>{cardData}</DataText>
        </Container>
    )
}
