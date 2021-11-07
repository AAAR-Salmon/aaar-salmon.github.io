import React from 'react'
import style from './StyleInline.module.sass'

type Props = {
  date: string
  postText?: string
}

const OriginalResearchInline: React.VFC<Props> = ({ date, postText }) => {
  return (
    <sup className={[style.sup, style.nowrap].join(' ')}>
      [
      <a
        href="https://ja.wikipedia.org/wiki/Wikipedia:%E8%A8%80%E8%91%89%E3%82%92%E6%BF%81%E3%81%95%E3%81%AA%E3%81%84"
        title="Wikipedia:言葉を濁さない"
      >
        <span title={`この記述は言葉を濁しているか情報の出所を曖昧にしています。（${date}）`}>
          いつ{postText}<i>?</i>
        </span>
      </a>
      ]
    </sup>
  )
}

export default OriginalResearchInline
