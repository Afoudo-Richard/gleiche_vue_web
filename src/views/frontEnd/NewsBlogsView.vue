<template>
    <div class="container py-6 md:py-3 flex flex-col gap-4 min-h-screen">
        <SectionTitleVue title="News & Blog"></SectionTitleVue>

        <div class="mb-8">


            <div v-if="!newsBlogStore.is_loading_news_blogs"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <NewsCard v-for="(item, index) in newsBlogStore.news_blogs" :item="item" :index="index"
                    :key="item.id" />
            </div>

            <div v-else class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <el-skeleton v-for="i in 6" style="width: 100%" :loading="loading" animated>
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 100%; height: 240px" />
                        <div style="padding: 14px">
                            <el-skeleton-item variant="h3" style="width: 50%" />
                            <div
                                style="display: flex; align-items: center;justify-items: space-between; margin-top: 16px; height: 16px;">
                                <el-skeleton-item variant="text" style="margin-right: 16px" />
                                <el-skeleton-item variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>

                </el-skeleton>
            </div>

            <div v-if="newsBlogStore.load_more" class="mt-7 flex justify-center">
                <pulse-loader :loading="is_loading" :color="configStore.primaryColor" :size="size"></pulse-loader>
            </div>


            <div v-if="!newsBlogStore.is_loading_news_blogs">
                <div v-if="!newsBlogStore.has_reached_max" class="mt-10 flex justify-center">
                    <LinkButton :is_link="false" text="Load More" @click="loadMore"></LinkButton>

                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import SectionTitleVue from '@/components/FrontEnd/components/SectionTitle.vue';
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue';
import NewsCard from '@/components/FrontEnd/components/NewsCard.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useNewsBlogsStore } from '@/stores/news_blogs'
import { useConfigStore } from '@/stores/config'
import { useDebounceFn } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'


import { ref, watch, onMounted, onUnmounted, onBeforeMount } from 'vue'


const route = useRoute()
const router = useRouter()

const  newsBlogStore = useNewsBlogsStore()
const configStore = useConfigStore()


router.beforeEnter = (to, from)=>{
    console.log("before enter")
    return true
}


// watch(
//     () => route.path,
//     async (name) => {
//         console.log('inside watcher --------------')
//         console.log(name)
//         if (name === '/executives') {
//             await executivesStore.getExecutives();

//         }
        
//     }
// )

const loadMore = async () => {
    // await executivesStore.getExecutives()
}

const debouncedFn = useDebounceFn(async () => {
    await newsBlogStore.getNewsBlogs();
}, 300)


const handleScroll = async () => {
    let hasReachedMaxScrollExtent = document.documentElement.scrollTop + window.innerHeight >= (0.6 * document.documentElement.offsetHeight);
    // let hasReachedMaxScrollExtent = document.documentElement.scrollTop + document.documentElement.clientHeight >= (0.65 * document.documentElement.offsetHeight);
    if (hasReachedMaxScrollExtent) {
        debouncedFn()
        // configStore.debounce(await executivesStore.getExecutives())
        // await executivesStore.getExecutives(); 
    }
}


onBeforeMount(async () => {
    await newsBlogStore.getNewsBlogs();
})

onMounted(async () => {
    window.addEventListener("scroll", handleScroll)
    // await executivesStore.getExecutives()

})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

</script>