<script lang="ts" setup>
import { useTheme } from '~/composables/ui'

import type { PropType } from 'vue-demi'
import type { UITheme } from '~/types'

const props = defineProps({
  theme: String as PropType<UITheme>
})

const themeClasses = useTheme(props.theme)
</script>

<template>
  <button class="b-button" :class="themeClasses">
    <slot />
  </button>
</template>
