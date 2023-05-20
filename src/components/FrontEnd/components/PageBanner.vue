<template>
    <div class="h-96 bg-no-repeat bg-cover bg-center bg-fixed relative bg-happy">
        <div class="absolute inset-0 bg-black/40 flex flex-col gap-6 items-center justify-center">
            <div class="flex flex-col items-center gap-3">
                <span
                    class="font-patrick-hand text-3xl md:text-4xl lg:text-5xl text-white text-center">{{ title }}</span>
                <div class="w-24 h-1 bg-primary rounded-md"></div>
            </div>
        </div>

    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: "Title"
    },
})

</script>