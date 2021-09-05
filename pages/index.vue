<template>
  <div>
    <section class="hidden md:block">
      <div class="flex flex-row">
        <picture>
          <!--suppress HtmlUnknownTarget -->
          <source srcset="@/assets/images/salmon-logo.svg" type="image/svg+xml">
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
          <NuxtLink to="profile">プロフィール</NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>

</style>
