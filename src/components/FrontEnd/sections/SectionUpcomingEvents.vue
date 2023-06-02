<template>

    <div class="bg-white pb-12">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="Upcoming Events"></SectionTitleVue>

            <div v-if="!is_loading_upcoming_events"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <UpcomingEventCard v-for="(item, index) in upcoming_events" :item="item" :index="index" :key="item.id" />
            </div>

            <div>
                <LinkButton :to="{ path: '/upcoming-events' }" text="See All" class="mt-3"></LinkButton>
            </div>


            <!-- {% if upcomming_events %}
            <div class="w-full flex flex-wrap">
                {% for item in upcomming_events %}
                {% include 'frontend/components/upcoming_event_item.html' with item=item %}
                {% endfor %}
            </div>

            <div class="mt-4">
                {% url 'upcoming_events' as action_url %}
                {% include 'frontend/components/link_button.html' with text="See All" link=action_url %}
            </div>
            {% else %}
            <div class="w-full">
                <div class="flex justify-center">
                    <h5 class="text-lg">
                        No Upcoming events
                    </h5>
                </div>
            </div>
            {% endif %} -->


        </div>
    </div>
</template>

<script setup>
import SectionTitleVue from '../components/SectionTitle.vue';
import UpcomingEventCard from '../components/UpcomingEventCard.vue';
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue'

import { storeToRefs } from 'pinia'
import { useUpcomingEvents } from '@/stores/upcoming_events'
import { onMounted } from 'vue';


const upcomingEventsStore = useUpcomingEvents()
const { upcoming_events, has_reached_max, is_loading_upcoming_events } = storeToRefs(upcomingEventsStore)
const { getUpcomingEvents } = upcomingEventsStore



onMounted(async () => {
    upcoming_events.value = []
    has_reached_max.value = false
    await getUpcomingEvents(2)
})


</script>