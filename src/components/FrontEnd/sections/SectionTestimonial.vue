<template>
    <div class="bg-gray-200   bg-no-repeat bg-cover bg-center bg-fixed relative bg-happy">
        <div class="bg-primary/30 pb-12">
            <div class=" container flex flex-col justify-center items-center ">

                <SectionTitleVue title="What People Say" subTitle="Testimonial" subTitleClass="text-primary"
                    titleClass="text-white"></SectionTitleVue>

                <div class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    <TestimonialCard v-for="(item, index) in testimonials" :item="item" :index="index"
                        :key="item.id" />
                </div>

                <!-- <div class="w-full">
                    <div class="swiper TestimonialSwiper">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-wrapper">
                            {% for item in testimonials %}
                            <div class="swiper-slide">

                                {% include 'frontend/components/testimonial_card.html' with item=item %}

                            </div>
                            {% endfor %}

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>


                </div> -->

            </div>
        </div>
    </div>
</template>

<script setup>
import SectionTitleVue from '../components/SectionTitle.vue';
import TestimonialCard from '../components/TestimonialCard.vue';
import {ref} from 'vue'

const testimonials = ref([
    {
        full_name: "Richard Afoudo",
        occupation: "Student",
        testimony: "I like the idea of spreading equal potentials. Thanks to Gleiche Foundation millions of hearts are being touched in Cameroon.",
        img_thumb: '/assets/images/gleichefoundationLogo.png',
    },
    {
        full_name: "James Milner",
        occupation: "Sales Director",
        testimony: "I like the idea of spreading equal potentials. Thanks to Gleiche Foundation millions of hearts are being touched in Cameroon.",
        img_thumb: '/assets/images/gleichefoundationLogo.png',
    },
    {
        full_name: "Cecile Nollino",
        occupation: "Travel Consultor",
        testimony: "I like the idea of spreading equal potentials. Thanks to Gleiche Foundation millions of hearts are being touched in Cameroon.",
        img_thumb: '/assets/images/gleichefoundationLogo.png',
    }
]);

</script>