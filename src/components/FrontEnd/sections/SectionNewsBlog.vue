<template>
    <div class="bg-gray-200 pb-12">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="News & Blog"></SectionTitleVue>

            <div v-if="!newsBlogStore.is_loading_news_blogs"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <NewsCard v-for="(item, index) in newsBlogStore.news_blogs" :item="item" :index="index" :key="item.id" />
            </div>

            <div v-else class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <el-skeleton v-for="i in 3" style="width: 100%" :loading="loading" animated>
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

            <div class="mt-4">
                <LinkButton text="See All" :to="{ path: '/news-blogs' }"></LinkButton>
            </div>


        </div>
    </div>
</template>

<script setup>
import SectionTitleVue from '../components/SectionTitle.vue';
import NewsCard from '../components/NewsCard.vue';
import LinkButton from '../components/LinkButton.vue';

import {useAppStore} from '@/stores/app'
import { useNewsBlogsStore } from '@/stores/news_blogs'


const appStore = useAppStore()
const  newsBlogStore = useNewsBlogsStore()



</script>