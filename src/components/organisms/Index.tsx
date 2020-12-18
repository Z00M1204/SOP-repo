import * as React from 'react'
import styled from 'styled-components'

import bgImg from '../../Assets/IndexBgImg.png'
import { IndexBody } from '../../components/molecules/IndexBody'
import { Animate } from '../../components/molecules/Animate'
import { Header } from '../molecules/Header'

interface Props {

}

const Container = styled.div`
    display: flex;
    background-color: #F8F9FE;
    width: 100vw;
    height: 100vh;
`

export const Index: React.FC<Props> = () => {
    return (
        <Container>
            <IndexBody />
        </Container>
    )
}
