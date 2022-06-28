<script lang="ts" setup>
import type { PropType } from 'vue-demi'

defineProps({
  icon: {
    type: String,
    required: true,
  },
  // anchor tag
  href: {
    type: String,
  },
  target: {
    type: String as PropType<'_blank' | '_self'>,
    default: '_blank',
  },
})
</script>

<template>
  <a v-if="href" :href="href" :target="target" class="b-icon">
    <span :class="icon" aria-hidden="true" class="inline-block" tabindex="-1" />
  </a>
  <button v-else class="b-icon">
    <span :class="icon" aria-hidden="true" class="inline-block" tabindex="-1" />
  </button>
</template>

<style scoped>
.b-icon:where(:hover, :focus, :active)::after {
  @apply absolute top-full left-0 mt1 p2 rounded ui--primary typo-ui text-center;

  margin-left: -100%;
  content: attr(title);
  word-break: keep-all;
  text-decoration: none;
}
</style>
