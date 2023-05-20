<template>
   <SectionNavBarVue></SectionNavBarVue>

    <RouterView />

    <SectionFooter></SectionFooter>
    
</template>


<script setup>

import SectionNavBarVue from '@/components/FrontEnd/sections/SectionNavBar.vue';
import SectionFooter from '@/components/FrontEnd/sections/SectionFooter.vue';
</script>