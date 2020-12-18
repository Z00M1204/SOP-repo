import { Controls } from '@lottiefiles/react-lottie-player';
import * as React from 'react'
import styled from "styled-components";

import SmallPattern from '../../Assets/SmallPattern.svg'

interface Props {

}

const Container = styled.div`
    display: flex;
    background-color: white;
    height: 100vh;
    width: 10vw;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const Header: React.FC<Props> = () => {

    return (
        <Container>
            <img alt="" src={SmallPattern} />
        </Container>
    )
}
