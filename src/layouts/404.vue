<template>
  <main class="flex flex-col w100p h100vh justify-center items-center text-xl space-y-4">
    <p class="i-carbon-warning" />

    <router-view />

    <div class="inline-flex flex-row space-x-4">
      <b-button @click="$router.back()">
        뒤로가기
      </b-button>

      <b-button theme="primary" @click="$router.push('/')">
        메인페이지로
      </b-button>
    </div>
  </main>
</template>
