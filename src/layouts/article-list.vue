<template>
  <div class="flex flex-col w-full min-h-screen">
    <app-header />

    <main class="flex-grow">
      <router-view />
    </main>

    <app-footer />
  </div>
</template>
