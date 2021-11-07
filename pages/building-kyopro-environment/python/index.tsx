import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import OriginalResearchInline from '@/components/parts/wikipedia/OriginalResearchInline'
import When from '@/components/parts/wikipedia/When'

const Python: React.VFC = () => {
  return (
    <Layout title="競プロ環境構築#3 Python編">
      <h1>Pythonはいいぞ</h1>
      <p><b>Pythonをやりましょう。</b></p>
      <p>
        プログラミング初心者が一番最初に触るのに適している言語はPython…そんなわけ無いですね。JavaScriptだと思います(個人の感想です)。
        まあPython人気ですし。やりましょう。
      </p>
      <figure className="figureWithCaption">
        <Image
          src="/images/python-trends.png"
          width={721}
          height={501}
          title="Googleトレンド「プログラミング言語」関連トピックの人気順5位がPython"
          alt="Googleトレンド「プログラミング言語」関連トピックの人気順5位がPython"
        />
        <figcaption>
          図1: Googleトレンド「プログラミング言語」関連トピックの人気順5位がPython(2021年6月28日現在)
          <span className="phantom">←執筆をサボってたのがバレちゃう！</span>
        </figcaption>
      </figure>

      <h2>Pythonが初心者向けである理由</h2>
      <p><b>ググれ。</b>というのもなんなのでちょっとぐらい僕の見解を話します。</p>

      <h3>動的型付け言語である</h3>
      <p>言語の特性の話ですが、型を意識してプログラムを書くというのは知識なしでは難しいと思います。</p>
      <p>単にモノを作りたい、というだけであれば別に静的型付けに拘る必要はないですし、余計な難点が取り払われると考えることができます。</p>
      <p>
        <OriginalResearchInline date="2021年11月" certain>本物の初心者はエラーログを読めないことが多い</OriginalResearchInline>
        のでそっちのほうが楽です。
      </p>

      <h3>実はそんなに新しくない</h3>
      <p>
        Pythonはここ数年で<When date="2021年11月"/>急速に流行りだした言語ではありますが、Python 2.0(廃止済み)が2000年に、Python 3.0が2008年にリリースされています。
      </p>
      <p>故に、情報が割と多いです。調べたいことは割と調べられます。</p>
    </Layout>
  )
}

export default Python
