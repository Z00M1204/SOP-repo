import * as React from 'react'
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../../state/store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2F3035;
    height: 25vh;
    border-radius: 22px;
    margin-top: 10px;
    margin-bottom: 35px;
`

const ChangeContainer = styled.div`
    display: flex;
    height: 75%;
`

const HeaderText = styled.span`
    font-family: 'open sans';
    font-size: 14px;
    color: white;
    margin-left: 34px;
    margin-top: 17px;

`

const PartContainer = styled.div`
    display: flex;
    width: 33%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ChangerText = styled.span`
    font-family: 'open sans';
    font-size: 45px;
    color: white;
`

export const AmountCard: React.FC<Props> = () => {

    const dispatch = useDispatch<Dispatch>()
    const testCounter = useSelector((state: RootState) => state.test)

    const handlePlus = () => {
        dispatch.test.plus()
    }

    const handleMinus = () => {
        testCounter.count > 0 ?
            dispatch.test.minus()
        :
        toast("Your amount of letter shifts cant be negative"); 
    }

    return (
        <Container>
            <HeaderText>Amount of letter shifts</HeaderText>
            <ChangeContainer>
                <PartContainer onClick={handleMinus} >
                    <ChangerText>-</ChangerText>
                </PartContainer>
                <PartContainer>
                    <ChangerText>{testCounter.count}</ChangerText>
                </PartContainer>
                <PartContainer onClick={handlePlus} >
                    <ChangerText>+</ChangerText>
                </PartContainer>
            </ChangeContainer>
            <ToastContainer />
        </Container>
    )
}
