import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useConfigStore } from '@/stores/config'
import Parse from 'parse/dist/parse.min.js';




export const useVolunteerStore1 = defineStore('volunteers1', () => {

  const volunteers = ref([])
  const is_loading_volunteers = ref(false)
  const has_reached_max = ref(false)
  const fetch_limit = ref(7)
  const load_more = ref(false)
  const configStore = useConfigStore()



  const getVolunteers = async (limit = configStore.fetch_limit) => {


    if (has_reached_max.value) return


    if (volunteers.value.length == 0) {

      is_loading_volunteers.value = true
      volunteers.value = []
      const results = await fetchVolunteers(0, limit);
      volunteers.value = results
      has_reached_max.value = results.length < configStore.fetch_limit ? true : false
      is_loading_volunteers.value = false
      return
    }

    load_more.value = true
    const results = await fetchVolunteers(volunteers.value.length);
    console.log(results.length)
    has_reached_max.value = results.length < configStore.fetch_limit ? true : false
    volunteers.value = volunteers.value.concat(results)  // or use spread operator
    load_more.value = false
  }

  const fetchVolunteers = async (startIndex = 0, limit = configStore.fetch_limit) => {
    const volunteer = Parse.Object.extend("volunteers");
    const query = new Parse.Query(volunteer);
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
          full_name: object.get('full_name'),
          email: object.get('email'),
          img_thumb: img_url
        })
      }

      return data
    } catch (error) {
      console.log(error)
    }


  }


  return { volunteers, is_loading_volunteers, has_reached_max, fetch_limit, load_more, getVolunteers }
})