<template>
    <div class="h-96 bg-no-repeat bg-cover bg-center bg-fixed relative bg-happy"
        >
        <div class="absolute inset-0 bg-primary/30 flex flex-col gap-6 items-center justify-center">
            <div class="w-full md:w-6/12">
                <p class="text-white text-center font-patrick-hand text-3xl md:text-4xl lg:text-6xl" data-aos="flip-left"
                    data-aos-duration="2000">The Smallest Act of
                    Kindness is Worth More Than the Grandest Intention</p>
            </div>
            <div class="flex gap-2 md:gap-4">

                <LinkButton :to="{path: '/'}" text="Donate"></LinkButton>
                <LinkButton :to="{path: '/'}" text="Become a Volunteer" class="bg-secondary hover:bg-secondary-200"></LinkButton>

            </div>
        </div>
    </div>
</template>

<script setup>
import LinkButton from '../components/LinkButton.vue';
// loadingImage: require('../assets/images/client_logo_04.png')
</script>