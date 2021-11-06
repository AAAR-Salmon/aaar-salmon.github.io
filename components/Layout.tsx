import React from 'react'
import style from './Layout.module.sass'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children, ...props }) => {
  return (
    <div className={style.layout} {...props}>
      <Header/>
      <div className={style.container}>
        <div className={style.main}>
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
