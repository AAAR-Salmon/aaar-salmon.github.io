import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import OriginalResearchInline from '@/components/parts/wikipedia/OriginalResearchInline'
import When from '@/components/parts/wikipedia/When'

const Python: React.VFC = () => {
  return (
    <Layout title="競プロ環境構築#3 Python編">
      <article>
        <section>
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
              図1:
              <a href="https://trends.google.com/trends/explore?q=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E&geo=JP">
                Googleトレンド「プログラミング言語」
              </a>
              関連トピックの人気順5位がPython(2021年6月28日現在)
              <span className="phantom">←執筆をサボってたのがバレちゃう！</span>
            </figcaption>
          </figure>
        </section>

        <section>
          <h2>Pythonが初心者向けである理由</h2>
          <p><b>ググれ。</b>というのもなんなのでちょっとぐらい僕の見解を話します。</p>

          <section>
            <h3>動的型付け言語である</h3>
            <p>言語の特性の話ですが、型を意識してプログラムを書くというのは知識なしでは難しいと思います。</p>
            <p>単にモノを作りたい、というだけであれば別に静的型付けに拘る必要はないですし、余計な難点が取り払われると考えることができます。</p>
            <p>
              <OriginalResearchInline date="2021年11月" certain>本物の初心者はエラーログを読めないことが多い</OriginalResearchInline>
              のでそっちのほうが楽です。
            </p>
          </section>

          <section>
            <h3>実はそんなに新しくない</h3>
            <p>
              Pythonはここ数年で<When date="2021年11月"/>
              急速に流行りだした言語ではありますが、Python 2.0(廃止済み)が2000年に、Python 3.0が2008年にリリースされています。
            </p>
            <p>
              …いや言うて新しいやん、Go,Rust,Kotlinあたりと同じぐらいの時期やん、と思われるかもしれません。
              が、それは<strong>言語として</strong>の話であって<strong>処理系として</strong>の話でいうとPython3がだいぶ早いです。
              Go 1は2012年3月28日、Rust 1.0.0は2015年5月16日、Kotlin 1.0.0は2016年2月15日です。対してCPython v3.0は2008年12月4日です。
              まあ大幅な仕様変更が有ったとは言え、随分前からv2.xの処理系は有ったわけですから当然っちゃ当然ですね。
            </p>
            <aside>
              <p>
                余談ですが、<s>今は見る影もない</s>
                <a href="https://github.com/python/cpython/releases/tag/v1.0.1">CPython v1.0.1</a>
                は1994年2月16日にリリースされました。Gitが生まれたのが2005年といえば相当昔なのがわかると思います。
              </p>
            </aside>
            <p>
              利用者が多いという点も、情報が多いことに寄与していると思われます。
              公式リファレンスも充実しています（もっとも、競プロだから公式リファレンスと多少のモジュールだけ見てれば十分という話ですが）。
            </p>
          </section>
        </section>
      </article>
    </Layout>
  )
}

export default Python
