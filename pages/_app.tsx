import React from 'react'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import { ColorThemeProvider } from '../lib/ColorThemeContext'

import '../static/globals.scss'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <ColorThemeProvider>
                <RecoilRoot>
                    <Component {...pageProps} />
                </RecoilRoot>
            </ColorThemeProvider>
        </>
    )
}

export default MyApp
