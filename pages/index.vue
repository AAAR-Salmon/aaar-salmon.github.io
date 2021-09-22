<template>
  <div>
    <section class="hidden md:block">
      <div class="flex flex-row">
        <picture>
          <!--suppress HtmlUnknownTarget -->
          <source srcset="@/assets/images/salmon-logo.svg" type="image/svg+xml">
          <!--suppress HtmlUnknownTarget -->
          <source srcset="@/assets/images/salmon-logo.webp" type="image/webp">
          <img src="@/assets/images/salmon-logo.png" alt="ページロゴ" class="w-40 h-40">
        </picture>
        <div class="flex-grow">
          <h1>AAAR Salmon</h1>
          <p>しがない学生、終に鮭のホームページです</p>
        </div>
      </div>
    </section>

    <section>
      <h2>ページ一覧</h2>
      <ul class="px-4">
        <li>
          <NuxtLink to="profile" append>
            プロフィール
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="orientation-2021" append>
            2021年度 OUCRC新歓
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>

</style>
