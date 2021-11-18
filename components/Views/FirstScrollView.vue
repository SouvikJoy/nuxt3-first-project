<template>
  <div>
    <TheHeader :header-title="'About me'" :header-class="'sky-blue'" />
    <div class="first-scroll">
      <div class="fs-left">
        <img src="~/assets/image.jpg" alt="">
      </div>
      <div class="fs-right">
        <h1 class="about">
          About Me
        </h1>
        <h2 class="about-designation">
          A Prolific, Energetic, Self-motivated and Imaginative "UI/UX Designer & Frontend Web Developer"
        </h2>
        <p class="about-description">
          Able to work alongside other talented IT professionals in developing & customizing Web-Apps to the very highest standards.
        </p>
        <div>
          <ul class="lang-list">
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import TheHeader from '~/components/Common/TheHeader.vue'
</script>

<style lang="scss">

</style>
