import React from 'react'
import style from './StyleInline.module.sass'

type Props = {
  date: string
}

const CitationNeeded: React.VFC<Props> = ({ date }) => {
  return (
    <sup className={[style.sup, style.nowrap].join(' ')}>
      [
      <a
        href="https://ja.wikipedia.org/wiki/Wikipedia:%E3%80%8C%E8%A6%81%E5%87%BA%E5%85%B8%E3%80%8D%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%95%E3%82%8C%E3%81%9F%E6%96%B9%E3%81%B8"
        title="Wikipedia:「要出典」をクリックされた方へ"
      >
        <span title={`この記述には信頼できる情報源の提示が求められています。（${date}）`}>
          要出典
        </span>
      </a>
      ]
    </sup>
  )
}

export default CitationNeeded
