<template>
    <div class="bg-white rounded-lg p-6">
        <div class="flex items-center space-x-3 mb-4">
            <div class="h-20 w-20 bg-gleiche bg-contain">

            </div>
            <!-- <img class="h-20 w-20 object-cover object-center rounded-full" :src="item.img_thumb"
                alt="photo"> -->
            <div>
                <p class="text-base md:text-lg text-gray-700 font-normal mb-1">{{ item.fullname }}</p>
                <p class="text-sm xl:text-base text-primary font-normal">{{ item.occupation }}
                </p>
            </div>
        </div>
        <div>
            <p class="text-gray-400 leading-loose font-normal text-sm md:text-base">{{ item.testimony }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})

</script>