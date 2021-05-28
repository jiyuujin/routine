import React from 'react'
import Head from 'next/head'

const SEO = () => {
    return (
        <>
            <Head>
                <title>Routine | Daily</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="description"
                    content="はてぶなどで注目を浴びたニュースをまとめています"
                    key="description"
                />
                <meta
                    property="twitter:title"
                    content="Routine | Daily"
                    key="twitter:title"
                />
                <meta
                    property="twitter:description"
                    content="はてぶなどで注目を浴びたニュースをまとめています"
                    key="twitter:description"
                />
                <meta
                    property="twitter:card"
                    content="summary"
                    key="twitter:card"
                />
                <meta
                    property="twitter:site"
                    content="@jiyuujinlab"
                    key="twitter:site"
                />
                <meta
                    property="og:site_name"
                    content="summary"
                    key="og:site_name"
                />
                <meta property="og:type" content="website" key="og:type" />
                <meta
                    property="og:title"
                    content="Routine | Daily"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="はてぶなどで注目を浴びたニュースをまとめています"
                    key="og:description"
                />
            </Head>
        </>
    )
}

export default SEO
