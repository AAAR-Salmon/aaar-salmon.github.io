import React from 'react'
import style from './Header.module.sass'

export default function Header({ ...props }) {
  return (
    <p className={style.header} {...props}>
      AAAR Salmon
    </p>
  )
}