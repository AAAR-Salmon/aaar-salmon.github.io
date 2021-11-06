import React from 'react'
import style from './Footer.module.sass'

export default function Footer({ ...props }) {
  return (
    <div className={style.footer} {...props}>
      フッター
    </div>
  )
}