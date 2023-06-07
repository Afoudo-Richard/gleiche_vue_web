<template>

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden"><img class="rounded-full w-full h-full object-cover" :src="item.img_thumb"
                            width="40" height="40" alt="Mirko Fisuk"></div>
                    <div class="font-medium text-gray-800">{{ item.title }}</div>
                </div>
            </th>

            <td class="px-6 py-4 text-right">
                <div class="  flex items-center gap-5">
                    <span class="text-gray-500 text-lg cursor-pointer">
                        <i class="fa-solid fa-pencil"></i>
                    </span>
                    <span class="text-gray-500 text-lg cursor-pointer">
                        <i class="fa-solid fa-bullhorn"></i>
                    </span>
                    <span class=" text-lg cursor-pointer text-red-500">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </div>
            </td>
        </tr>

        
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