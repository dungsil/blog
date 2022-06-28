<script lang="ts" setup>
import type { PropType } from 'vue-demi'
import { useTheme } from '~/composables/ui'

import type { UITheme } from '~/types'

const props = defineProps({
  theme: String as PropType<UITheme>,
})

const themeClasses = useTheme(props.theme)
</script>

<template>
  <button class="b-button" :class="themeClasses">
    <slot />
  </button>
</template>
