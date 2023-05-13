<template>
   <SectionNavBarVue></SectionNavBarVue>

    <RouterView />

    <SectionFooter></SectionFooter>
    
</template>


<script setup>

import SectionNavBarVue from '@/components/sections/SectionNavBar.vue';
import SectionFooter from '@/components/sections/SectionFooter.vue';
</script>