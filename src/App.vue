
<template>
  <div class="font-poppins">
    <RouterView />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'


// const cartStore = useCartStore()
const userStore = useUserStore()
const appStore = useAppStore()

onBeforeMount(async () => {
  // cartStore.initializeStore()
  userStore.initializeUserStore()
 await appStore.getNewsBlog()
  // appStore.getAllTechnologies()

})
</script>