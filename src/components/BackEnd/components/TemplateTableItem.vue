<template>
    <tr :class="{ 'bg-gray-50': index / 2 != 0 }" class="hover:bg-primary-300 transition-all duration-100 group">
        <td class="flex items-center py-4">
            <div class="w-36 h-[5rem] rounded overflow-hidden ml-2">
                <img class=" w-full h-full object-cover" :src='item.image_thumbnail' alt="">
            </div>
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 group-hover:text-white">
            {{ item.name }}
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500 group-hover:text-white">
            Apr 23 ,2021
            {{ moment(item.create_at).format('DD MM YYYY h:mm:ss A') }}
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 group-hover:text-white">
            {{ item.price }}
        </td>
        <td>
            <div class="flex space-x-3">
                <LinkButton text="Edit" :to="{ name: 'thank-you' }">
                </LinkButton>
                <LinkButton text="Delete" :to="{ name: 'thank-you' }" class="bg-red-400">
                </LinkButton>
            </div>
            <!-- <div class="relative">
                <button @click="dropdownOpen = !dropdownOpen.value"
                    class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>

                 <div v-show="dropdownOpen" @click="dropdownOpen.value = false" class="fixed inset-0 h-full w-full z-10">
                    </div>

                <div v-show="dropdownOpen"
                    class="absolute right-0 bottom-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        your profile
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Your projects
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Help
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Settings
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Sign Out
                    </a>
                </div>
            </div> -->
        </td>
</tr>
</template>

<script setup>
import { ref } from 'vue';
import moment from 'moment'
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue';
const dropdownOpen = ref(false)

const props = defineProps({
    item: Object,
    index: Number
})

</script>