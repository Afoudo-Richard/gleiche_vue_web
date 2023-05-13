<template>
    <a href="{% url 'read_news_blog' item.id item.slug %}">
    <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-5">

        <img class="rounded-t-lg w-full" src="/static/images/{{item.image.url}}" alt="">

        <div class="p-5">

            <h5 class="text-gray-900 font-semibold  md:font-bold text-sm lg:text-sm tracking-tight mb-2 overflow-ellipsis overflow-hidden"
                style="display: -webkit-box; -webkit-line-clamp: 1;line-clamp: 1; -webkit-box-orient: vertical;">
                {{item.title}}
            </h5>

            <p class="font-normal text-gray-700 mb-3 text-xs">Here are the biggest enterprise
                technology
                acquisitions of 2021 so far, in reverse chronological order.</p>

            <a href="{% url 'read_news_blog' item.id item.slug %}"
                class="inline-block px-4 py-1.5 bg-primary hover:bg-primary-200 hover:shadow-2xl transition-all rounded-md text-white text-sm">
                Read More
            </a>
        </div>
    </div>
</a>
</template>

<script setup>
const props = defineProps({
    item: Object
})

</script>