import style from './Layout.module.sass'
import {ReactNode} from "react";

type Props = {
  children: ReactNode
}

export default function Layout({ children, ...props }: Props) {
  return (
    <div className={style.layout} {...props}>
      <header>ヘッダー</header>
      <div className={style.main}>
        {children}
      </div>
      <footer>フッター</footer>
    </div>
  )
}