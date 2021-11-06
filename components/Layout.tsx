import React from 'react'
import Head from 'next/head'
import style from './Layout.module.sass'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  title?: string
}

const Layout: React.VFC<Props> = ({ children, title, ...props }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"/>
        <title>{title ?? '記事ビューア'}</title>
      </Head>
      <div className={style.layout} {...props}>
        <Header/>
        <div className={style.container}>
          <div className={style.main}>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
