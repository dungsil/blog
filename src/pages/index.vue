<script lang="ts" setup>
const router = useRouter()

const articles = import.meta.globEager('./**/*.md')
const paths = Object.keys(articles)

function onClickArticle(title: string) {
  let path = title.replace(/\.md$/, '')
  path = path.replace(/^\./, '')

  router.push(path)
}
</script>

<template>
  <div class="container mx-auto">
    <h2 class="mb-8 font-medium text-xl">
      최근 글
    </h2>

    <!-- 게시글 목록 -->
    <div v-for="path in paths" class="cursor-pointer" @click="onClickArticle(path)">
      <h3 class="font-800 text-4xl hover:underline">
        {{ articles[path].title }}
      </h3>
      <p class="text-gray-300">
        {{ articles[path].description ?? '' }}
      </p>

      <!-- 태그 목록 -->
      <div class="mt4 space-x-2">
        <span v-for="tag in articles[path].tags" class="px2 py1 border-1 rounded-xl font-light text-sm">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: article-list
</route>
