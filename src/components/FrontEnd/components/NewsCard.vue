<template>
    <RouterLink :to="{ name: 'news_details', params:{id: item.id, title:joinTitle(item.title)} }">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-5">

            <div class="w-full h-[13rem] overflow-hidden">
                <img class="rounded-t-lg w-full h-full object-cover" :src='item.img_thumb' alt="">

            </div>

            <div class="p-5">

                <h5 class="text-gray-900 font-semibold  md:font-bold text-sm lg:text-sm tracking-tight mb-2 overflow-ellipsis overflow-hidden"
                    style="display: -webkit-box; -webkit-line-clamp: 1;line-clamp: 1; -webkit-box-orient: vertical;">
                    {{ item.title }}
                </h5>

                <p class="font-normal text-gray-700 mb-3 text-xs">{{ item.title }}</p>


                <LinkButton :to="{ name: 'news_details', params:{id: item.id, title:joinTitle(item.title)} }" text="Read More" class="mt-3"></LinkButton>

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

const joinTitle = (title)=>{
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