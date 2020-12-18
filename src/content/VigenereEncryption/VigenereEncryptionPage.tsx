import * as React from 'react'
import styled from 'styled-components'
import { VigenereEncryption } from '../../components/organisms/VigenereEncryption'

interface Props {

}

export const VigenereEncryptionPage: React.FC<Props> = () => {
    
    return (
        <>
            <VigenereEncryption />
        </>
    )
}
