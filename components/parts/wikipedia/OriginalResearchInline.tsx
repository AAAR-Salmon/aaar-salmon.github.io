import React from 'react'
import style from './StyleInline.module.sass'

type Props = {
  children: React.ReactNode
  date: string
  certain?: boolean
}

const OriginalResearchInline: React.VFC<Props> = ({ children, date, certain = false }) => {
  return (
    <>
      <span
        className={style.fixDomain}
        title={`この記述には「独自研究」が含まれているおそれがあります。（${date}）`}
      >
        {children}
      </span>
      <sup className={[style.sup, style.nowrap].join(' ')}>
        [
        <a
          href="https://ja.wikipedia.org/wiki/Wikipedia:%E7%8B%AC%E8%87%AA%E7%A0%94%E7%A9%B6%E3%81%AF%E8%BC%89%E3%81%9B%E3%81%AA%E3%81%84"
          title="Wikipedia:独自研究は載せない"
        >
          <span title={`この記述には「独自研究」が含まれているおそれがあります。（${date}）`}>
            独自研究{certain || <i>?</i>}
          </span>
        </a>
        ]
      </sup>
    </>
  )
}

export default OriginalResearchInline