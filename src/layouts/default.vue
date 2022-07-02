<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col w-full min-h-screen">
    <app-header />

    <!-- FIXME: 다하구 제거하기 -->
    <p class="text-center text-sm text-gray-400">
      <span class="inline-block i-carbon:information" />
      이 화면은 현재 제작 중입니다. 정상적으로 표시되지 않을 수 있습니다.
    </p>

    <div class="flex-grow">
      <main class="container mx-auto mt-4 text-left">
        <router-view />
      </main>
    </div>

    <app-footer />
  </div>
</template>

<style>
.prose a {
  font-weight: 700;
  text-decoration: underline;
}

.prose a[href^="#"] {
  text-decoration: dotted underline;
}
</style>
