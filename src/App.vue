
<template>
  <div class="font-poppins">
    <RouterView />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'
import { useExecutivesStore } from '@/stores/executives'



// const cartStore = useCartStore()
const userStore = useUserStore()
const appStore = useAppStore()
const executivesStore = useExecutivesStore()


onBeforeMount(async () => {
  userStore.initializeUserStore()
  await appStore.getNewsBlog()
  await appStore.getUpcomingEvents()
  // await executivesStore.getExecutives()

})
</script>