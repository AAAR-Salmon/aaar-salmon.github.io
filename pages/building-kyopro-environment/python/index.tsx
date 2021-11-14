import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import OriginalResearchInline from '@/components/parts/wikipedia/OriginalResearchInline'
import When from '@/components/parts/wikipedia/When'
import { Tweet } from 'react-twitter-widgets'
import CitationNeeded from '@/components/parts/wikipedia/CitationNeeded'

const Python: React.VFC = () => {
  return (
    <Layout title="競プロ環境構築#3 Python編">
      <article>
        <section>
          <h1>Pythonはいいぞ</h1>
          <p>
            <b>Pythonをやりましょう。</b>
          </p>
          <p>
            プログラミング初心者が一番最初に触るのに適している言語はPython…そんなわけ無いですね。JavaScriptだと思います(個人の感想です)。
          </p>
          <aside>
            <p>
              JavaScriptについては別の回でやります。
            </p>
          </aside>
          <p>
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
          <p>
            <b>ググれ。</b>というのもなんなのでちょっとぐらい僕の見解を話します。
          </p>

          <section>
            <h3>動的型付け言語である</h3>
            <p>
              言語の特性の話ですが、型を意識してプログラムを書くというのは知識なしでは難しいと思います。
            </p>
            <p>
              単にモノを作りたい、というだけであれば別に静的型付けに拘る必要はないですし、余計な難点が取り払われると考えることができます。
            </p>
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
              が、それは<strong>言語として</strong>の話であって<strong>処理系として</strong>の話でいうとPython 3がだいぶ早いです。
              <a href="https://github.com/golang/go/tree/go1">Go 1</a>は2012年3月28日、
              <a href="https://github.com/rust-lang/rust/tree/1.0.0">Rust 1.0.0</a>は2015年5月16日、
              <a href="https://github.com/JetBrains/kotlin/tree/build-1.0.0">Kotlin 1.0.0</a>は2016年2月15日です。
              対して<a href="https://github.com/python/cpython/tree/v3.0">CPython v3.0</a>は2008年12月4日です。
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

        <section>
          <h2>競プロにおいてPythonが微妙な点</h2>

          <section>
            <h3>遅い</h3>
            <p>
              最大の欠点と言っても過言ではない。そう、このCPythonというインタプリタは普通に使うと遅いです。
              それはもうとにかく遅い。
            </p>
            <Tweet tweetId="1325799278984404992"/>
            <p>
              上記tweetの一番右が多分CPython 3だと思いますが、AC者滅茶苦茶少ないですよね。なぜかと言えば普通に書くと遅いから。
            </p>
            <p>
              Python 3自体の使用者はかなり多いのですが（C++に次いで2番目<CitationNeeded date="2021年11月"/>）、
              ユーザーの大半は<a href="https://www.pypy.org/index.html">PyPy</a>というCPythonとは別のインタプリタを使っています。
              CPythonで動くコードをほとんどそのまんま動かせて、しかも早いのが素晴らしいところです。
              AtCoderで未だにPyPy 7.3.0（Python 3.6）が使われているのが玉に瑕ですが、次の言語アップデートを気長に待ちましょう。
            </p>
          </section>

          <section>
            <h3>Off-side Rule</h3>
            <p>
              <i>サッカーの話ではなくて。</i>
              ここでは、左端から離れる（off-side）規則のことです。インデントでブロックを表します。
              対になる概念はCurly-bracket programming（中括弧でブロックを表す）。
            </p>
            <p>
              Pythonという言語の設計思想は調べてもイマイチわかりませんが、
              一つ言えそうなことは「プログラムが動くためには、美しく有るべき（SHOULD）。」ということです。
              <i>動いてはならない（MUST NOT）、まで強くはないです。</i>
            </p>
            <aside>
              <p>
                ついでに、現在のPythonの言語仕様は
                PEP（Python Enhancement Proposal; Pythonをよりよくする提案）という提案を多数取り込むことで出来上がっています。
                マージされたPEPの中でも最も有名なのは
                <a href="https://github.com/python/peps/blob/master/pep-0008.txt">PEP8</a>
                でしょう。
                Pythonの生みの親であるGuido van Rossumを含む3人によって提案された、コードスタイルについての規則です。
                その中では、インデントの推奨サイズ（半角スペース4個、2個でも8個でも、タブスペースでもない）や1行の推奨最大文字数まで指定されています。
              </p>
            </aside>
            <p>
              それで、それの何が問題かと言えば、コードをコピペしたときにインデントが崩れたとして、それを自動で直すことができません。
              コピペライブラリを貼り付ける場合にわざわざインデントを手動で直さなければならず、不便きわまりありません。
              中括弧を使わなくともブロック末尾に<code>end</code>キーワードを置くRubyでは問題にならないのですが……
            </p>
          </section>
        </section>

        <section>
          <h2>本編</h2>
          <p>
            お待たせしました。環境構築について話していきます。
          </p>
          <p>
            例によって、<a href="https://oucrc.net/articles/e6vkrz4uqtt">#1 共通編</a>を前提としますが、
            使っているHeadless CMSサービスの都合上、
            <code>&lt;details&gt;</code><code>&lt;summary&gt;</code>要素とかidによるページ内リンクが使えずごちゃごちゃしているので、
            そのうち大幅改版してDockerfileでも作ることにします。乞うご期待。
          </p>
          <aside>
            <p>
              正規表現でうまいこと置換すれば任意のHTML要素を置けるとかそういうことを言わない。
            </p>
          </aside>
          <p>
            さて、Pythonの環境についてですが、一応CPythonとPyPy両方の説明をします。
            速度的にはPyPyのほうが手抜きして高速化できるのですが、AtCoderのPyPyではNumPy等の便利なライブラリが使用できません。
            CPythonで使えるライブラリは
            <a href="https://qiita.com/afoil/items/83507eb4d07abf117bb2">ここのQiita記事</a>
            に書いてありましたが、実際使えそうなのはNumPy、Numba、NetworkXぐらいでしょうか。SciPyも使える時があるのかな。
            私は標準ライブラリしか使わないので基本PyPyです。
          </p>

          <section>
            <h3>PyPy</h3>
            <p>
              UbuntuでPyPy3をインストールする方法は複数あります。
            </p>
            <ol>
              <li>aptを利用してUbuntu公式リポジトリのpypy3/focal 7.3.1+dfsg-4をインストールする</li>
              <li>公式で配布されているPyPy3 7.3.0のビルドをダウンロードする</li>
              <li><a href="https://pypy.org">pypy.org</a>からPyPy3 7.3.0のソースをダウンロードしてビルドする</li>
            </ol>
            <p>
              手っ取り早い1と2の方法を紹介します（PyPyは公式でも自分でビルドすることは推奨されていないので）。
            </p>

            <section>
              <h4>方法1 apt install</h4>
              <p>
                説明するまでもないような気がしますが。
              </p>
              <pre>
                <code className="language-sh">
                  {require('./install-pypy-apt.sh.txt')}
                </code>
              </pre>
              <p>
                はい。
              </p>
            </section>

            <section>
              <h4>方法2 ビルド済みのPyPyをダウンロード</h4>
              <p>
                これもtarをダウンロードしてきて展開して適切な場所に配置するだけです。簡単ですね。
              </p>
              <pre>
                <code className="language-sh">
                  {require('./install-pypy-tar.sh.txt')}
                </code>
              </pre>
            </section>
          </section>

          <section>
            <h3>CPython</h3>
            <p>
              AtCoderで2021年11月現在採用されているCPythonのバージョンは3.8.2です。
            </p>
            <ol>
              <li>aptを利用してUbuntu公式リポジトリのpython3/focal,now 3.8.2-0ubuntu2をインストールする</li>
              <li><a href="https://python.org">python.org</a>からPython 3.8.2のソースをダウンロードしてビルドする</li>
            </ol>
            <p>
              とまあPyPyと概ね同じですが、Linux向けビルド済みパッケージを公式が配布していないので、
              Ubuntuからの供給が絶たれれば自分でビルドする他なくなります。
            </p>

            <section>
              <h4>方法1 apt install</h4>
              <pre>
                <code className="language-sh">
                  {require('./install-cpython-apt.sh.txt')}
                </code>
              </pre>
              <p>
                はい。
              </p>
            </section>

            <section>
              <h4>方法2 ソースからビルドする</h4>
              <p>
                時間がかかるのであんまりしたくありませんが、一応。
              </p>
              <pre>
                <code className="language-sh">
                  {require('./install-cpython-source.sh.txt')}
                </code>
              </pre>
            </section>

            <section>
              <h4>ライブラリのインストール</h4>
              <p>
                CPythonはいくつかライブラリが入っているという話をしたので、一応入れておきましょう。
              </p>
              <pre>
                <code className="language-sh">
                  $ pip3 install networkx numba numpy scipy
                </code>
              </pre>
              <p>
                何も考えることはないですね。
              </p>
            </section>
          </section>
        </section>
      </article>
    </Layout>
  )
}

export default Python
