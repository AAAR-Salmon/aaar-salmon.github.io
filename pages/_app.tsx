import React from 'react'
import '@/styles/global.sass'
import { AppProps } from 'next/app'

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps}/>
}

export default App
