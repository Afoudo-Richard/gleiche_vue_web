<template>
    <RouterLink :to="{ name: 'news_details', params: { id: item.id, title: joinTitle(item.title) } }">
        <div class="flex items-center">
            <div class=" w-[10rem] h-[6rem] overflow-hidden">
                <img class="rounded-lg w-full h-full object-cover" :src='item.img_thumb' alt="">
            </div>

            <p class="ml-3 font-normal text-gray-700 mb-3 text-xs">{{ item.title }}</p>

            <div class="ml-5  flex items-center gap-3">
                <span class="text-gray-500 text-xl cursor-pointer" >
                    <i class="fa-solid fa-pencil"></i>
                </span>
                <span class="text-gray-500 text-xl cursor-pointer" >
                    <i class="fa-solid fa-bullhorn"></i>
                </span>
                <span class=" text-xl cursor-pointer text-red-500" >
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>


        </div>
    </RouterLink>
</template>

<script setup>
import { computed } from 'vue'

import LinkButton from '@/components/FrontEnd/components/LinkButton.vue'
const props = defineProps({
    item: Object
})

const joinTitle = (title) => {
    return title.split(" ").join("-")
}

// const title = computed({
//   // getter
//   get() {
//     return item.title.split("").join("-")
//   },
//   // setter
// //   set(newValue) {
// //     // Note: we are using destructuring assignment syntax here.
// //     [firstName.value, lastName.value] = newValue.split(' ')
// //   }
// })

</script>