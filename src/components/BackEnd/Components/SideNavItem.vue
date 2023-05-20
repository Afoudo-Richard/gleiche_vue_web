<template>
    <li>
        <RouterLink :to="to">
            <div class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                :class="class">
                <span v-html="icon"
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"></span>
                <span class="ml-3 flex-1 whitespace-nowrap">{{ text }}</span>
                <span v-if="has_info"
                    class="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">{{
                        info_data }}</span>
            </div>
        </RouterLink>

</li>
</template>

<script setup>

const props = defineProps({
    to: Object,
    text: String,
    class: String,
    icon: String,
    has_info: {
        type: Boolean,
        default: false
    },
    info_data: String
})


</script>