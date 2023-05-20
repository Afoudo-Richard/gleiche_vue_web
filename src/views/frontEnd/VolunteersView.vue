<template>
    <div class="container py-6 md:py-3 flex flex-col gap-4 min-h-screen">
        <SectionTitleVue title="Volunteers"></SectionTitleVue>

        <div class="mb-8">
            <div>{{ volunteersStore.has_reached_max }}</div>


            <div v-if="!volunteersStore.is_loading_volunteer"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <VolunteerCard v-for="(item, index) in volunteersStore.volunteers" :item="item" :index="index"
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

            <div v-if="volunteersStore.load_more" class="mt-7 flex justify-center">
                <pulse-loader :loading="is_loading" :color="configStore.primaryColor" :size="size"></pulse-loader>
            </div>


           <div v-if="!volunteersStore.is_loading_executives">
            <div v-if="!volunteersStore.has_reached_max" class="mt-10 flex justify-center">
                <LinkButton  :is_link="false" text="Load More" @click="loadMore"></LinkButton>

            </div>
           </div>
        </div>
    </div>
</template>
    
<script setup>
import SectionTitleVue from '@/components/FrontEnd/components/SectionTitle.vue';
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue';
import VolunteerCard from '@/components/FrontEnd/components/VolunteerCard.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


import { useVolunteerStore } from '@/stores/volunteers'

import { useConfigStore } from '@/stores/config'


import { ref, onMounted, onUnmounted } from 'vue'




const volunteersStore = useVolunteerStore()

const configStore = useConfigStore()

const loadMore = async ()=> {
    await volunteersStore.getVolunteers()
}


onMounted(async () => {
    await volunteersStore.getVolunteers()
})


</script>