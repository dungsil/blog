<script lang="ts" setup>

const color = useColorMode({
  storageKey: 'color-mode',
  selector: 'html',
  attribute: 'data-color-mode'
})
</script>

<template>
  <b-icon-button v-if="color === 'light'" icon="i-carbon:moon" title="어두운 테마로 변경" @click="color = 'dark'" />
  <b-icon-button v-if="color === 'dark'" icon="i-carbon:sun" title="밝은 테마로 변경" @click="color = 'light'" />
</template>
