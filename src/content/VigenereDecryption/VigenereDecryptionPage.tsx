import * as React from 'react'
import styled from 'styled-components'
import { VigenereDecryption } from '../../components/organisms/VigenereDecryption'

interface Props {

}

export const VigenereDecryptionPage: React.FC<Props> = () => {
    
    return (
        <>
            <VigenereDecryption />
        </>
    )
}
