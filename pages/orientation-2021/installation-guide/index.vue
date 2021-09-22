<template>
  <div>
    <h1>開発環境構築ガイダンス</h1>

    <section>
      <p>
        何をインストールしたらいいかは最低限書いてあります。
        公式ドキュメントを読んでもインストール手順がわからなかったらTwitterででも訊いてください。
      </p>
    </section>

    <section>
      <ul class="px-4">
        <li>
          <NuxtLink to="c-language" append>
            C言語
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="python" append>
            Python
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: '開発環境構築ガイダンス'
  }
}
</script>

<style scoped>

</style>
