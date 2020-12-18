import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom'
import { AESDecryptionPage } from './AESDecryption/AESDecryptionPage'
import { AESEncryptionPage } from './AESEncryption/AESEncryptionPage'
import { CaesarDecryptionPage } from './CaesarDecryption/CaesarDecryptionPage'
import { CaesarEncryptionPage } from './CaesarEncryption/CaesarEncryptionPage'

import { IndexPage } from './Index/IndexPage'
import { SHAPage } from './SHA/SHAPage'
import { VigenereDecryptionPage } from './VigenereDecryption/VigenereDecryptionPage'
import { VigenereEncryptionPage} from './VigenereEncryption/VigenereEncryptionPage'

export default function RootRouter() {
    return (
        <Router>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <IndexPage/>
                </Route>

                <Route exact path="/Ceasar">
                    <CaesarEncryptionPage/>
                </Route>

                <Route exact path="/CeasarDecryption">
                    <CaesarDecryptionPage/>
                </Route>

                <Route exact path="/AES">
                    <AESEncryptionPage/>
                </Route>

                <Route exact path="/AESDecryption">
                    <AESDecryptionPage/>
                </Route>

                <Route exact path="/Vigenere">
                    <VigenereEncryptionPage/>
                </Route>

                <Route exact path="/VigenereDecryption">
                    <VigenereDecryptionPage />
                </Route>

            </Switch>
        </Router>
    )
}
