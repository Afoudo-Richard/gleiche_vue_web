<template>
    <div class="mb-4 flex items-center justify-between">
        <div>
            <h3 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{{ title }}</h3>
            <span class="text-base font-normal text-gray-500">{{ subTitle }}</span>
        </div>

        <slot></slot>
</div>
</template>

<script setup>
const props = defineProps({
    title: String,
    subTitle : String,
})
</script>