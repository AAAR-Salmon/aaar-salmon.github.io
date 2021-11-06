import React from 'react'
import style from './Header.module.sass'

export default function Header({ ...props }) {
  return (
    <div className={style.header} {...props}>
      記事ビューア
    </div>
  )
}