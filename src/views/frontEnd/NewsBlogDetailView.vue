<template>
    <div v-if="is_loading_single_news_blog" class="container py-10 mb-20">
        <el-skeleton style="width: 100%" animated>
            <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 400px" />
            </template>
        </el-skeleton>
    </div>
    <div v-else>
        <PageBanner :title="single_news_blog.title"></PageBanner>
        <div class="bg-gray-200">
            <div class="container py-6 md:py-12 flex flex-col gap-4 ">

                <div class="py-12">
                    <div class="h-screen bg-white p-2 md:py-24 md:px-20">
                        {{ single_news_blog.content }}

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import PageBanner from '@/components/FrontEnd/components/PageBanner.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch, onMounted, onUnmounted, onBeforeMount } from 'vue'
import { useNewsBlogsStore } from '@/stores/news_blogs'
import { storeToRefs } from 'pinia'



const route = useRoute()
const newsBlogStore = useNewsBlogsStore()
const { single_news_blog, is_loading_single_news_blog } = storeToRefs(newsBlogStore)
const { getSingleNewsBlog } = newsBlogStore



onMounted(async () => {
    document.title = `Gleiche foundation | ${route.params.title}`

    await getSingleNewsBlog(route.params.id)
})



</script>