<template>
  <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
    <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" :src="item.img_thumb" alt="product designer">
    <h1 class="text-lg text-gray-700"> {{ item.full_name || 'Gleiche Member' }} </h1>
    <h3 class="text-sm text-gray-400 "> {{ item.position }} </h3>
    <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. </p>
    <LinkButton :to="{ name: 'executive_detail', params: { id: item.id, } }" text="Read More" class="mt-3"></LinkButton>

  </div>
</template>

<script setup>
import moment from 'moment'
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue'

const props = defineProps({
  item: Object
})

</script>