<template>
    <div class="hidden md:flex container justify-between items-center py-2 tracking-widest">
        <div class="flex gap-4">
            <span class=" text-gray-400 text-base">
                <a href="{% settings 'facebook_link' %}">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
            </span>

            <span class=" text-gray-400 text-base">
                <a href="{% settings 'youtube_link' %}">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </span>
            <span class=" text-gray-400 text-base">
                <a href="{% settings 'twitter_link' %}">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </span>
            <span class=" text-gray-400 text-base">
                <a href="{% settings 'instagram_link' %}">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </span>
        </div>

        <div>
            <LinkButton :to="{ path: '/' }" text="Donate"></LinkButton>
        </div>
    </div>

    <div>
        <div :class="{ 'fixed -top-72 left-0 right-0 transition duration-200 transform translate-y-72': showBar }"
            class="z-30 bg-white shadow-lg">
            <div
                class="container py-2 flex justify-between items-center font-patrick-hand  bg-white w-full border-t border-gray-200">
                <div class="w-10 h-10 lg:w-12 lg:h-12">
                    <img class="w-full h-auto" src="@/assets/images/gleichefoundationLogo.png" alt="">
                </div>

                <div class="hidden lg:block ">
                    <ul class="flex items-center gap-7">

                        <li v-for="(link, index) in nav_links" :key="index"
                            class=" relative border-b-2 border-white hover:border-primary transition-all">
                            <RouterLink v-if="!link.sub_links" :to="link.to">
                                <span class="text-lg xl:text-2xl">{{ link.text }}</span>
                            </RouterLink>
                            <span v-else @click="open = !open" ref="target"
                                class="text-lg xl:text-2xl flex items-center gap-2 cursor-pointer">
                                <span>{{ link.text }}</span>
                                <span class="transition-transform duration-200 transform text-sm"
                                    :class="{ 'rotate-180': open, 'rotate-0': !open }"><i
                                        class="fa-solid fa-chevron-down"></i></span>
                            </span>

                            <div v-if="link.sub_links" v-show="open"
                                class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                                <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                    <RouterLink v-for="(link, index) in link.sub_links" :key="index" :to="link.to">
                                        <span
                                            class="block px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                            {{ link.text }}
                                        </span>
                                    </RouterLink>

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="lg:hidden">
                    <span class="text-2xl cursor-pointer text-secondary" @click="open_side_nav = !open_side_nav">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                </div>


            </div>



        </div>

        <div class="fixed inset-0 bg-primary-300/40 z-50 flex justify-end transform translate-x-full transition-all"
            :class="{ 'translate-x-0': open_side_nav }">

            <div
                class="w-9/12 h-full bg-white rounded-tl-3xl border-l-4 border-secondary flex flex-col gap-2 font-patrick-hand px-5 pt-12">
                <div class="mb-5" @click="open_side_nav = false" >
                    <span class="text-2xl text-secondary">
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <a href="#" class="text-lg xl:text-2xl">Home</a>
                <a href="#" class="text-lg xl:text-2xl">About</a>
                <a href="#" class="text-lg xl:text-2xl">Donate</a>
                <div>
                    <a @click="openDropdown = !openDropdown" class="text-lg xl:text-2xl">
                        <span>upcoming events</span>
                        <span class="transition-transform duration-200 transform text-sm"
                            :class="{ 'rotate-180': openDropdown, 'rotate-0': !openDropdown }"><i
                                class="fa-solid fa-chevron-down"></i></span>
                        <div x-show="openDropdown" class="pl-6 flex flex-col" :class="{ 'hidden': openDropdown == false }">
                            <a href="#" class="text-lg xl:text-2xl">Home</a>
                            <a href="#" class="text-lg xl:text-2xl">About</a>
                            <a href="#" class="text-lg xl:text-2xl">Donate</a>
                        </div>
                    </a>
                </div>
                <a href="#" class="text-lg xl:text-2xl">Donate</a>
                
            </div>
        </div>

    </div>
</template>


<script setup>
import { onClickOutside } from '@vueuse/core'
import LinkButton from '../components/LinkButton.vue';
import { ref, onMounted } from 'vue'

const showBar = ref(false)
const open = ref(false)
const open_side_nav = ref(false)
const openDropdown = ref(false)
const target = ref(null)

onClickOutside(target, (event) => open.value=false)

const nav_links = ref([
    {
        to: '/',
        text: 'Home',
    },
    {
        to: '/about',
        text: 'About',
    },
    {
        to: '/news-blogs',
        text: 'News&Blog',
    },
    {
        to: '/contact',
        text: 'Contact',
    },
    {
        to: '/contact',
        text: 'More',
        sub_links: [
            {
                to: '/executives',
                text: 'Our Executives',
            },
            {
                to: '/volunteers',
                text: 'Our Volunteers',
            },
            {
                to: '/login',
                text: 'Be a Volunteer',
            },
            {
                to: '/login',
                text: 'Logout',
            },
            {
                to: '/login',
                text: 'Login',
            },
            {
                to: '/login',
                text: 'Dashboard',
            },
        ]
    },

])

function windowScroll() {
    window.addEventListener('scroll', (event) => {
        showBar.value = window.pageYOffset > 20 ? true : false
    });
}

onMounted(() => {
    windowScroll()
})
</script>