<template>
    <div class="container py-6 md:py-3 flex flex-col gap-4 min-h-screen">
        <SectionTitleVue title="Upcoming Events"></SectionTitleVue>

        <div class="mb-8">

            <div v-if="!is_loading_upcoming_events"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2">

                <UpcomingEventCard v-for="(item, index) in upcoming_events" :item="item" :index="index"
                    :key="item.id" />
            </div>

            <div v-else class="w-full gap-5 grid grid-cols-1 md:grid-cols-2">
                <el-skeleton v-for="i in 6" style="width: 100%" :loading="true" animated>
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

            <div v-if="load_more" class="mt-7 flex justify-center">
                <pulse-loader :loading="is_loading" :color="configStore.primaryColor" :size="size"></pulse-loader>
            </div>


            <div v-if="!is_loading_news_blogs">
                <div v-if="!has_reached_max" class="mt-10 flex justify-center">
                    <LinkButton :is_link="false" text="Load More" @click="loadMore"></LinkButton>

                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import SectionTitleVue from '@/components/FrontEnd/components/SectionTitle.vue';
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue';
import UpcomingEventCard from '@/components/FrontEnd/components/UpcomingEventCard.vue';
import VolunteerCard from '@/components/FrontEnd/components/VolunteerCard.vue';

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useConfigStore } from '@/stores/config'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUpcomingEvents } from '@/stores/upcoming_events'




import { ref, watch, onMounted, onUnmounted, onBeforeMount } from 'vue'


const route = useRoute()
const router = useRouter()


const configStore = useConfigStore()
const upcomingEventsStore = useUpcomingEvents()
const { upcoming_events, has_reached_max, is_loading_upcoming_events } = storeToRefs(upcomingEventsStore)
const { getUpcomingEvents } = upcomingEventsStore


const loadMore = async () => {
    await getUpcomingEvents()
}

onMounted(async () => {
    upcoming_events.value = []
    has_reached_max.value = false
    await getUpcomingEvents()

})


</script>