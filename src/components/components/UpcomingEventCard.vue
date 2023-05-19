<template>


            <div class="flex flex-col w-full md:flex-row bg-indigo-300">
                <div
                    class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <div class="md:text-3xl">{{ item.date_time.getFullYear() }}</div> <!-- year -->
                    <div class="md:text-3xl">{{ item.date_time.getMonth() }}</div> <!-- month -->
                    <div class="md:text-3xl">{{ item.date_time.getDate() }}</div> <!-- second -->
                    <div class="md:text-xl">{{ item.date_time.getHours() }}: {{ item.date_time.getMinutes() }}</div> 
                </div>
                <div class="p-4 font-normal text-gray-800 md:w-3/4">
                    <h1 class="mb-2 text-xl md:text-2xl font-bold leading-none tracking-tight text-gray-800">
                        {{ item.title }}</h1>
                    <p class="leading-normal text-sm md:text-base">{{ item.description }}</p>
                    <!-- <div class="flex flex-row items-center mt-4 text-gray-700">
                    <div class="w-1/2">
                        Mercedes-Benz Superdome
                    </div>
                    <div class="w-1/2 flex justify-end">
                        <img src="https://collegefootballplayoff.com/images/section_logo.png" alt=""
                            class="w-8">
                    </div>
                </div> -->
                </div>
            </div>

    
</template>

<script setup>
import moment from 'moment'

const props = defineProps({
    item: Object
})

</script>