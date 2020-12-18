import * as React from 'react'
import styled from 'styled-components'
import { AESDecryption } from '../../components/organisms/AESDecryption'



interface Props {

}


export const AESDecryptionPage: React.FC<Props> = () => {

    return (
        <>
            <AESDecryption/>
        </>
    )
}
