import * as React from 'react'
import styled from "styled-components";
import { CaesarDecryption } from '../../components/organisms/CaesarDecryption';

interface Props {

}

export const CaesarDecryptionPage: React.FC<Props> = () => {

    return (
    <>
        <CaesarDecryption />
    </>
    )
}
