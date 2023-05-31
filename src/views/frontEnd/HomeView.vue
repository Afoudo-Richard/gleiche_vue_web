

<template>
  <!-- <SectionHero></SectionHero> -->
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
// import SectionHero from '@/components/FrontEnd/sections/SectionHero.vue';
import SectionWhoAreWeVue from '@/components/FrontEnd/sections/SectionWhoAreWe.vue';
import SectionWhatWeDoVue from '@/components/FrontEnd/sections/SectionWhatWeDo.vue';
import SectionDonationBanner from '@/components/FrontEnd/sections/SectionDonationBanner.vue';
import SectionVolunteersVue from '@/components/FrontEnd/sections/SectionVolunteers.vue';
import SectionTestimonialVue from '@/components/FrontEnd/sections/SectionTestimonial.vue';
import SectionNewsBlogVue from '@/components/FrontEnd/sections/SectionNewsBlog.vue';
import SectionUpcomingEvents from '@/components/FrontEnd/sections/SectionUpcomingEvents.vue';
import SectionContactUs from '@/components/FrontEnd/sections/SectionContactUs.vue';
import SectionSponsorsVue from '@/components/FrontEnd/sections/SectionSponsors.vue';


import { onBeforeMount, onMounted, watch } from 'vue';
import { useVolunteerStore } from '@/stores/volunteers'
import { useNewsBlogsStore } from '@/stores/news_blogs'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()




const volunteersStore = useVolunteerStore()
const newsBlogStore = useNewsBlogsStore()

// watch(
//     () => route.name,
//     async (name) => {
//         console.log('inside home watcher --------------')
//         console.log(name)
//         if (name === 'home') {
//             await volunteersStore.getVolunteers(3);

//         }

//     }
// )

watch(
  route,
  async (name) => {
    console.log('inside home watcher --------------')
    console.log(name)

    // await volunteersStore.getVolunteers(3);

  }
)

onBeforeMount(async () => {
  // await volunteersStore.getVolunteers(3)
  // await newsBlogStore.getNewsBlogs()

})


</script>
