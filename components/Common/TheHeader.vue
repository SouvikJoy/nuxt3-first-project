<template>
  <header :class="headerClass">
    <div class="header-wrapper">
      <div class="header-left">
        {{ headerTitle }}
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import DarkToggle from '~/components/DarkToggle.vue'

export default {
  components: { DarkToggle },
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    headerClass: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
