import React, { ReactNode } from 'react'
import style from './Layout.module.sass'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

export default function Layout({ children, ...props }: Props) {
  return (
    <div className={style.layout} {...props}>
      <Header/>
      <div className={style.main}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}