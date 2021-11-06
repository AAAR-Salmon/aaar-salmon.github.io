import React from 'react'
import style from './Layout.module.sass'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({ children, ...props }) => {
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
