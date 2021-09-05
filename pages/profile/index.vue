<template>
  <div>
    <h1>プロフィール</h1>

    <section>
      <h2>概略</h2>
      <table class="table-border-single">
        <tbody>
          <tr>
            <td>名前</td>
            <td>終に鮭（しまい―しゃけ）</td>
          </tr>
          <tr>
            <td>出身</td>
            <td>兵庫県 阪神地域</td>
          </tr>
          <tr>
            <td>主な使用言語</td>
            <td>C++，Python，JavaScript</td>
          </tr>
          <tr>
            <td>趣味</td>
            <td>競プロ，ゲーム制作</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>所属など</h2>
      <p>
        （2021年9月現在）学部2年。岡山大学工学部情報系学科在籍。
        同大学の<a href="https://twitter.com/oucrc">電子計算機研究会（OUCRC）</a>に所属。
      </p>
    </section>

    <section>
      <h2>競プロについて</h2>
      <p>
        競プロer。しかし最近は全然問題を解いていない。
        最短経路はまだ覚えてて安心したが、フローとかFFTは未履修。現時点では水色。
      </p>
    </section>

    <section>
      <h2>ゲーム制作について</h2>
      <p>
        Unityでゲーム制作を始めた。神クラス職人。<a href="https://scrapbox.io/unity-game-dev-guild-pr/Unity%E3%82%B2%E3%83%BC%E3%83%A0%E9%96%8B%E7%99%BA%E8%80%85%E3%82%AE%E3%83%AB%E3%83%89">Unityゲーム開発者ギルド</a>メンバー。
        処女作、オンライン対戦対応ボードサイズ可変リバーシ
        『<a href="https://unityroom.com/games/scalable-reversi">大は小を兼ねる クソデカリバーシ</a>』を作って、
        調子に乗ってu1wに出ようとしている（これがDeployされる頃には既に始まってるかも）。
      </p>
    </section>

    <section>
      <h2>Pとして</h2>
      <p>
        アイマスP。2020年の初夏にシャニマスを始め（最初のイベントがくもりガラスの銀曜日だった）て以来、
        デレステ（ヒーローヴァーサスレイナンジョーから）、
        ミリシタ（ミリコレ（202009）から、といいつつ次に参加したイベントはBlack★Party。サボるな。）もプレイしている。
        モバマスも総選挙前に始めようとしたがゲームシステムがよくわからずプレイしていない。
        担当アイドルは輿水幸子、五十嵐響子、真壁瑞希、樋口円香。
      </p>
    </section>

    <section>
      <h2>リンク</h2>
      <ul class="px-4">
        <li>Twitter: <a href="https://twitter.com/AAAR_Salmon">@AAAR_Salmon</a></li>
        <li>YouTube: <a href="https://www.youtube.com/channel/UChDiKKeJIjQM2O60KFidx9Q">終に鮭</a></li>
        <li>GitHub: <a href="https://github.com/AAAR-Salmon">Salmon</a></li>
        <li>AtCoder: <a href="https://atcoder.jp/users/AAAR_Salmon">AAAR_Salmon</a></li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  head: {
    title: 'プロフィール'
  }
}
</script>

<!--suppress CssInvalidAtRule -->
<style scoped lang="scss">
.table-border-single {
  @apply border border-black border-collapse;
  & th, & td {
    @apply border border-black p-2;
  }
}
</style>
