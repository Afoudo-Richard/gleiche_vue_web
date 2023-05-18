<template>
    <div class="bg-white pb-12 bg-gradient-to-r from-white to-primary-100">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="Our Volunteer" subTitle="Meet Our Volunteers"></SectionTitleVue>

            <div v-if="!appStore.is_loading_volunteer"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <VolunteerCard v-for="(item, index) in appStore.volunteers" :item="item" :index="index" :key="item.id" />
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
import SectionTitleVue from '../components/SectionTitle.vue';
import VolunteerCard from '../components/VolunteerCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import {useAppStore} from '@/stores/app'

const appStore = useAppStore()
</script>