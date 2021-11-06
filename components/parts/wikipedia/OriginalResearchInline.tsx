import React from 'react'
import style from './StyleInline.module.sass'
import classNames from 'classnames'

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
      <sup className={classNames(style.sup, style.nowrap)}>
        [
        <a
          href="https://ja.wikipedia.org/wiki/Template:%E7%8B%AC%E8%87%AA%E7%A0%94%E7%A9%B6%E7%AF%84%E5%9B%B2"
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