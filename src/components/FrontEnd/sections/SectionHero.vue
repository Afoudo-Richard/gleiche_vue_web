<template>
    <div>
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
            <SplideSlide>
                <img src="@image1.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img src="image2.jpg" alt="Sample 2">
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref } from 'vue'

const slides = ref([{
    name: 'Slide name 1'
}, {
    name: 'Slide name 2'
}, {
    name: 'Slide name 3'
}, {
    name: 'Slide name 4'
}, {
    name: 'Slide name 5'
}, {
    name: 'Slide name 6'
}, {
    name: 'Slide name 7'
}]);

</script>