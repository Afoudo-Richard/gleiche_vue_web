<template>
    <div class="w-full lg:w-3/6 mx-auto py-6 md:py-8 flex flex-col items-center gap-6" >
        <div class="flex flex-col items-center gap-3">
            <span class="font-patrick-hand text-3xl md:text-4xl lg:text-5xl" :class="titleClass">{{ title }}</span>
            <div class="w-24 h-1 bg-primary rounded-md"></div>
        </div>
        <p v-if="subTitle !== ''" class="text-secondary text-center text-sm md:text-base lg:text-lg" :class="subTitleClass">
            {{ subTitle }} </p>

            <slot></slot>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: "Title"
    },
    subTitle: String,
    subTitleClass: String,
    titleClass: String,

})

</script>