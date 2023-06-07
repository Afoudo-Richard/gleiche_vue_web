<template>
  <PageBanner title="About"></PageBanner>

  <div class="bg-gray-200">
    <div class="container py-6 md:py-12 flex flex-col gap-4">

      <div class="flex justify-center">
        <div class="w-full lg:w-9/12">
          <div class="min-h-[400px] bg-white px-5 py-3 md:px-12 md:py-10  ">
            <div class="reset-this" v-html="about_us"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import PageBanner from '@/components/FrontEnd/components/PageBanner.vue'
const about_us = ref('<div> Hi this is gleiche foundation </div>')
</script>
