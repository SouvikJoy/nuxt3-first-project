<template>
  <div id="App">
    <TheHeader :header-title="'Portfolio'" :header-class="'gray'" />

    <main>
      <NuxtPage />
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script lang="ts">
import TheHeader from '~/components/Common/TheHeader'
import TheFooter from '~/components/Common/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
@import '~/assets/sass/main.scss'
</style>
