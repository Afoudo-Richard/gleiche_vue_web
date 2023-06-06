<template>
    <div class="min-h-[30rem] md:min-h-[50rem] bg-gray-200">
        <div v-if="is_loading_single_upcoming_event" class="container py-10 mb-20">
            <el-skeleton style="width: 100%" animated>
                <template #template>
                    <el-skeleton-item variant="image" style="width: 100%; height: 400px" />
                </template>
            </el-skeleton>
        </div>
        <div v-else>
            <div>
                <div class="container py-6 md:py-12 flex flex-col gap-4 ">
                    <div class="flex">
                        <div class="w-full md:w-5/12">
                            <div class="w-full h-96 bg-red-500 rounded-lg">

                            </div>
                        </div>

                        <div class="w-full md:w-7/12 md:pl-6">
                            <h1 class="mb-2 text-xl md:text-2xl font-bold leading-none tracking-tight text-gray-800">
                                {{ single_upcoming_event.title }}</h1>
                            <p class="leading-normal text-sm md:text-base">{{ single_upcoming_event.description }} Lorem
                                ipsum
                                dolor sit amet consectetur adipisicing elit. Ea nostrum exercitationem magni soluta sed
                                beatae
                                quis ipsum velit saepe! Aliquid placeat suscipit ea quibusdam laborum consequuntur quos,
                                quae
                                soluta autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel tempora
                                ipsa tempore ad debitis, odio, nam illum nemo asperiores ea, quasi aspernatur magnam iure ab
                                laboriosam ipsam eos impedit eveniet nesciunt possimus. Deserunt, necessitatibus tempore!
                                Quisquam, cumque reprehenderit. Doloremque eos quidem eius repudiandae optio veritatis eum
                                molestiae animi incidunt.</p>
                        </div>
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
import { useUpcomingEvents } from '@/stores/upcoming_events'
import { storeToRefs } from 'pinia'



const route = useRoute()
const upcomingEventStore = useUpcomingEvents()
const { single_upcoming_event, is_loading_single_upcoming_event } = storeToRefs(upcomingEventStore)
const { getSingleUpcomingEvent } = upcomingEventStore



onMounted(async () => {
    document.title = `Gleiche foundation | ${route.params.title}`

    await getSingleUpcomingEvent(route.params.id)

    console.log(single_upcoming_event.value.title)
})



</script>