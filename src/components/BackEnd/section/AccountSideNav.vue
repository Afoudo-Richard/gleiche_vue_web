<template>
    <aside id="sidebar"
        class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar">
        <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 bg-white divide-y space-y-1">
                    <ul class="space-y-2 pb-2">
                        <SideNavItemVue v-for="(item, index) in sideLinks" :=item :key="index">
                        </SideNavItemVue>
                    </ul>
                    <div class="space-y-2 pt-2">
                    </div>
                </div>
            </div>
        </div>
    </aside>
<div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
</template>

<script setup>
import SideNavItemVue from '@/components/BackEnd/components/SideNavItem.vue';

import { ref } from 'vue'

const sideLinks = ref([
    {
        to: '/account',
        text: 'Dashboard',
        icon: '<i class="fa-solid fa-file-contract"></i>'
    },
    {
        to: '/account/news-blogs',
        text: 'News&Blog',
        icon: '<i class="fa-solid fa-folder"></i>'
    },
    {
        to: '/account/templates',
        text: 'Categories',
        icon: '<i class="fa-solid fa-tag"></i>'
    },
    {
        to: '/account/settings',
        text: "FAQ's",
        icon: '<i class="fa-solid fa-circle-question"></i>'
    },
    {
        to: '/account/privacy_policy',
        text: 'Privacy Policy',
        icon: '<i class="fa-regular fa-handshake"></i>'
    },
    {
        to: '/account/settings',
        text: 'Settings',
        icon: '<i class="fa-solid fa-gears"></i>'
    },
    {
        to: '/account/templates',
        text: 'Users',
        icon: '<i class="fa-solid fa-users"></i>'
    }
])

</script>