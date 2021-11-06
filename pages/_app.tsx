import React from 'react'
import '@/styles/global.sass'
import Head from 'next/head'
import { AppProps } from 'next/app'

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"/>
        <title>{pageProps.title ?? '記事ビューア'}</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default App
