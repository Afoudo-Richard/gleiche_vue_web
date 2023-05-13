<template>
    <div class="bg-gray-200 pb-12">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="News & Blog"></SectionTitleVue>
            <!-- {% if news_blogs %}
            <div class="w-full flex flex-wrap">
                {% for item in news_blogs %}
                <div class="w-full lg:w-4/12 px-0 lg:px-3">
                    {% include 'frontend/components/news_item.html' with item=item %}
                </div>
                {% endfor %}

            </div>

            <div class="mt-4">
                {% url 'news_blog' as action_url %}
                {% include 'frontend/components/link_button.html' with text="See All" link=action_url %}
            </div>
            {% else %}
            <div class="w-full">
                <div class="flex justify-center">
                    <h5 class="text-lg">
                        No News posted
                    </h5>
                </div>
            </div>
            {% endif %} -->


        </div>
    </div>
</template>

<script setup>
import SectionTitleVue from '../components/SectionTitle.vue';
import NewsCard from '../components/NewsCard.vue';
</script>