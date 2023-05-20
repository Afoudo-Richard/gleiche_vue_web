

<template>
  <SectionWhoAreWeVue></SectionWhoAreWeVue>
  <SectionWhatWeDoVue></SectionWhatWeDoVue>
  <SectionDonationBanner></SectionDonationBanner>
  <SectionVolunteersVue></SectionVolunteersVue>
  <SectionTestimonialVue></SectionTestimonialVue>
  <SectionNewsBlogVue></SectionNewsBlogVue>
  <SectionUpcomingEvents></SectionUpcomingEvents>
  <SectionContactUs></SectionContactUs>
  <SectionSponsorsVue></SectionSponsorsVue>
</template>

<script setup>
import SectionWhoAreWeVue from '@/components/FrontEnd/sections/SectionWhoAreWe.vue';
import SectionWhatWeDoVue from '@/components/FrontEnd/sections/SectionWhatWeDo.vue';
import SectionDonationBanner from '@/components/FrontEnd/sections/SectionDonationBanner.vue';
import SectionVolunteersVue from '@/components/FrontEnd/sections/SectionVolunteers.vue';
import SectionTestimonialVue from '@/components/FrontEnd/sections/SectionTestimonial.vue';
import SectionNewsBlogVue from '@/components/FrontEnd/sections/SectionNewsBlog.vue';
import SectionUpcomingEvents from '@/components/FrontEnd/sections/SectionUpcomingEvents.vue';
import SectionContactUs from '@/components/FrontEnd/sections/SectionContactUs.vue';
import SectionSponsorsVue from '@/components/FrontEnd/sections/SectionSponsors.vue';


import { onBeforeMount,onMounted } from 'vue';
import { useVolunteerStore } from '@/stores/volunteers'


const volunteersStore = useVolunteerStore()

onMounted(async () => {
    await volunteersStore.getVolunteers(3)
})


</script>
