<template>
  <div class="index">
    <div class="theme">
      <DarkToggle />
    </div>
    <LandingView />
    <FirstScrollView />
  </div>
</template>

<script setup lang="ts">
import LandingView from '~/components/Views/LandingView.vue'
import FirstScrollView from '~/components/Views/FirstScrollView.vue'
import DarkToggle from '~/components/DarkToggle.vue'
</script>

<style>

</style>
