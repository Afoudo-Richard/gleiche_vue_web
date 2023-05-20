<template>
    <div v-if="is_link === false">
        <span class="button" :class="class">
            {{ text }}
        </span>
    </div>
    <RouterLink v-else :to="to">
        <span class="button" :class="class">
            {{ text }}
        </span>
    </RouterLink>
</template>

<script setup>

const props = defineProps({
    to: Object,
    text: String,
    class: String,
    is_link: {
        type: Boolean,
        default: true
    }
})

</script>