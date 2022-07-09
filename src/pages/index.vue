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
  <div class="container mx4 md:mx-auto">
    <h2 class="mb-8 font-medium text-xl">
      최근 글
    </h2>

    <!-- 게시글 목록 -->
    <div class="space-y-8">
      <div v-for="path in paths" :key="path" class="cursor-pointer" @click="onClickArticle(path)">
        <h3 class="m0 font-900 text-4xl hover:underline">
          {{ articles[path].title }}
        </h3>
        <p class="text-gray-300">
          {{ articles[path].description ?? '' }}
        </p>

        <!-- 태그 목록 -->
        <div class="flex mt4 font-light text-sm">
          <span
            v-for="tag in articles[path].tags" :key="tag"
            class="ml2 first:ml0 px2 py1 border-1 rounded-xl"
          >
            {{ tag }}
          </span>

          <span class="inline-block ml-auto text-gray-200">{{ articles[path].since }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: article-list
</route>
