<template>
    <div
        class="flex flex-col items-center p-2 md:p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-secondary rounded-xl">
        <img class="object-cover w-24 h-24 md:w-44 md:h-44  rounded-full ring-4 ring-gray-300 group-hover:ring-primary"
             :src='item.img_thumb' alt="">

        <h1 class="mt-4 text-sm md:text-lg  font-semibold text-gray-700 capitalize group-hover:text-white text-center">
            {{ item.full_name }}</h1>

        <!-- <p class="mt-2 text-sm md:text-base text-gray-500 capitalize dark:text-gray-300 group-hover:text-primary">
            Volunteer</p> -->

        <!-- <div class="flex mt-3 -mx-2">
        <a href="#"
            class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Reddit">
            <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#"
            class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Reddit">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#"
            class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Reddit">
            <i class="fa-brands fa-facebook-f"></i>
        </a>
    </div> -->
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})




</script>