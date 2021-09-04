<template>
  <div class="relative flex flex-col h-screen">
    <Header />
    <Nuxt class="container max-w-screen-xl flex-grow p-4 mx-auto" />
    <Footer />
  </div>
</template>

<script lang="ts">

</script>

<!--suppress CssInvalidAtRule -->
<style>
h1 {
  @apply text-2xl w-full mt-4 border-current border-b-2;
}

h2 {
  @apply text-2xl w-full mt-4;
}
</style>
