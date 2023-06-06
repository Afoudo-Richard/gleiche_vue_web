<template>
    <div>
        <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
            <div class="p-5">
                <h5 class="font-semibold text-base md:text-lg">View Savers In Deworm Program</h5>
                <p class="text-medium mb-3 text-gray-700">Well, aren't you going up to the lake tonight, you've been
                    planning it for two weeks.</p>
                <div class="flex justify-between gap-10 mb-5">
                    <div class="flex flex-col gap-1">
                        <h5 class="text-primary font-semibold">$60,000</h5>
                        <span class="text-xs md:text-sm">Goal</span>
                    </div>

                    <div class="flex flex-col gap-1">
                        <h5 class="text-primary font-semibold">$3,000</h5>
                        <span class="text-xs md:text-sm">Raised</span>
                    </div>
                </div>
                <button
                    class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Donate</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue'
const props = defineProps({
    item: Object
})
</script>