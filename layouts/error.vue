<template>
  <div class="flex flex-col items-center justify-center">
    <picture>
      <!--suppress HtmlUnknownTarget -->
      <source srcset="@/assets/images/error.svg" type="image/svg+xml">
      <img src="@/assets/images/error.png" alt="エラー" class="h-60 w-60">
    </picture>
    <div class="text-gray-600 text-xl">
      {{ error.statusCode }}: {{ error.message }}
    </div>
    <div class="text-lg">
      <NuxtLink to="/">
        ホーム
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
