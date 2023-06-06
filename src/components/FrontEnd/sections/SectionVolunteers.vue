<template>
    <div class="bg-white pb-12 bg-gradient-to-r from-white to-primary-100">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="Our Volunteer" subTitle="Meet Our Volunteers"></SectionTitleVue>

            <!-- <div v-if="!is_loading_volunteers" class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <VolunteerCard v-for="(item, index) in volunteers" :item="item" :index="index" :key="item.id" />
            </div> -->

            <div v-if="!is_loading_volunteers" class="w-full relative">
                <span @click="splide.go('-1')" class="absolute left-0 top-2/4 z-20 text-2xl md:text-3xl lg:text-5xl text-primary cursor-pointer">
                    <i class="fa-solid fa-chevron-left"></i>
                </span>
                <span @click="splide.go('+1')" class="absolute right-0 top-2/4 z-20 text-2xl md:text-3xl lg:text-5xl text-primary cursor-pointer">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
                <Splide class="p-0" ref="splide" :options="{
                    type: 'loop',
                    // drag   : 'free',
                    perPage: 1,
                    // focus  : 'center',
                    arrows: false,
                    gap: 12,
                    // autoScroll: {
                    //     speed: 1,
                    // },
                    pagination: false,
                    mediaQuery: 'min',
                    breakpoints: {
                        768: {
                            perPage: 2,
                        },
                        976: {
                            perPage: 3,
                        },
                    },


                }" aria-label="My Favorite Images">
                    <SplideSlide v-for="( item, index ) in  volunteers">
                        <VolunteerCard  :item="item" :index="index" :key="item.id" />
                    </SplideSlide>
                </Splide>
            </div>

            <div>
                <LinkButton :to="{ path: '/volunteers' }" text="See All" class="mt-3"></LinkButton>

            </div>


            <!-- <swiper :slidesPerView="1" :spaceBetween="3" :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }" :pagination="{ clickable: true }" :modules="[Pagination]">
                <swiper-slide v-for="(i, index) in 5">
                    <div class="w-60 h-60 bg-primary-50 ">
                        Hello world {{ i }}
                    </div>
                </swiper-slide>

            </swiper> -->


            <!-- {% if volunteers %}
            <div class="w-full">
                <div class="swiper VolunteerSwiper">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-wrapper">

                        {% for item in volunteers %}
                        <div class="swiper-slide">
                            <VolunteerCard></VolunteerCard>
                        </div>
                        {% endfor %}

                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            {% else %}
            <div class="w-full">
                <div class="flex justify-center">
                    <h5 class="text-lg">
                        No Volunteers available
                    </h5>
                </div>
            </div>
            {% endif %} -->



        </div>
    </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import SectionTitleVue from '../components/SectionTitle.vue';
import VolunteerCard from '../components/VolunteerCard.vue';
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue'
import { onBeforeMount, onMounted, watch, ref } from 'vue';

const splide = ref();


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { storeToRefs } from 'pinia'



import { useVolunteerStore1 } from '@/stores/volunteers1'


const volunteersStore1 = useVolunteerStore1()

// const is_loading_volunteers = ref(false)
// const volunteers = ref([])


const { volunteers, is_loading_volunteers, has_reached_max, load_more } = storeToRefs(volunteersStore1)
const { getVolunteers } = volunteersStore1


onMounted(async () => {
    volunteers.value = []
    has_reached_max.value = false
    await getVolunteers(6)
})

</script>