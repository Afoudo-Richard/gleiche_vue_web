<template>
    <div class="bg-white pb-12">
        <div class="container flex flex-col justify-center items-center ">

            <SectionTitleVue title="Our Sponsors" subTitle="Meet Our Sponsors"></SectionTitleVue>


            <!-- {% if sponsors %}
            <div class="w-full">
                <div class="swiper VolunteerSwiper">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-wrapper">

                        {% for item in sponsors %}
                        <div class="swiper-slide">
                            {% include 'frontend/components/sponsor_item.html' with item=item %}
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
                        No sponsors available yet
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
</script>