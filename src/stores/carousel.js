import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useConfigStore } from '@/stores/config'
import Parse from 'parse/dist/parse.min.js';




export const useCarouselStore = defineStore('carousel', () => {

  const carousels = ref([])
  const is_loading_carousels = ref(false)
  const has_reached_max = ref(false)
  const load_more = ref(false)
  const configStore = useConfigStore()



  const getCarousels = async (limit = configStore.fetch_limit) => {


    if (has_reached_max.value) return


    if (carousels.value.length == 0) {

      is_loading_carousels.value = true
      carousels.value = []
      const results = await fetchCarousels(0, limit);
      carousels.value = results
      has_reached_max.value = results.length < configStore.fetch_limit ? true : false
      is_loading_carousels.value = false
      return
    }

    load_more.value = true
    const results = await fetchVolunteers(carousels.value.length);
    console.log(results.length)
    has_reached_max.value = results.length < configStore.fetch_limit ? true : false
    carousels.value = carousels.value.concat(results)  // or use spread operator
    load_more.value = false
  }

  const fetchCarousels = async (startIndex = 0, limit = configStore.fetch_limit) => {
    const carousel = Parse.Object.extend("Carousel");
    const query = new Parse.Query(carousel);
    query.limit(limit)
    query.skip(startIndex)
    let data = []

    try {
      const results = await query.find();

      for (let i = 0; i < results.length; i++) {
        const object = results[i];
        let img_url = object.get('img_thumb') ? object.get('img_thumb').url() : 'https://gleichefoundation.org/public/img/logo.jpg'

        data.push({
          id: object.id,
          full_name: object.get('title'),
          img_thumb: img_url
        })
      }

      return data
    } catch (error) {
      console.log(error)
    }
  }

  return { carousels, is_loading_carousels, has_reached_max, load_more, getCarousels }
})