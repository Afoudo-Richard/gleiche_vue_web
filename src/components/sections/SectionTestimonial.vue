<template>
    <div class="bg-gray-200   bg-no-repeat bg-cover bg-center bg-fixed relative bg-happy">
        <div class="bg-primary/30 pb-12">
            <div class=" container flex flex-col justify-center items-center ">

                <SectionTitleVue title="What People Say" subTitle="Testimonial" subTitleClass="text-primary" titleClass="text-white"></SectionTitleVue>

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
</script>