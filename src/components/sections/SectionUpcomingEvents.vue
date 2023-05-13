<template>

    <div class="bg-white pb-12">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="Upcoming Events"></SectionTitleVue>


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

</script>