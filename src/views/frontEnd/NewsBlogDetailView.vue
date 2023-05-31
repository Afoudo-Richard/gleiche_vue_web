<template>
    <div v-if="is_loading" class="container py-10 mb-20">
        <el-skeleton style="width: 100%" animated>
            <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 400px" />
            </template>
        </el-skeleton>
    </div>
    <div v-else>
        <PageBanner :title="result.title"></PageBanner>
        <div class="bg-gray-200">
            <div class="container py-6 md:py-12 flex flex-col gap-4 ">

                <div class="py-12">
                    <div class="h-screen bg-white py-24 px-20">
                        {{ result.content }}

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



const route = useRoute()
const newsBlogStore = useNewsBlogsStore()
const is_loading = ref(false)
const result = ref({})


const getSingleNews = async () => {
    is_loading.value = true
    result.value = await newsBlogStore.getSingleNewsBlog(route.params.id)
    is_loading.value = false
}

onMounted(async () => {
    document.title = `Gleiche foundation | ${route.params.title}`

    await getSingleNews()
})



</script>