import { defineStore } from 'pinia'
import { useConfigStore } from './config'
import { ref } from 'vue'

import Parse from 'parse/dist/parse.min.js';

export const useUpcomingEvents = defineStore('UpcomingEvents', () => {

    const upcoming_events = ref([])
    const is_loading_upcoming_events = ref(false)
    const is_loading_single_upcoming_event = ref(false)
    const has_reached_max = ref(false)
    const load_more = ref(false)
    const single_upcoming_event = ref({})
    const configStore = useConfigStore()


    const getSingleUpcomingEvent = async (id) => {
        is_loading_single_upcoming_event.value = true
        try {
            const upcoming_event = Parse.Object.extend("upcoming_events");
            const query = new Parse.Query(upcoming_event);
            const object = await query.get(id);
            let img_url = object.get('img_thumb') ? object.get('img_thumb').url() : 'https://gleichefoundation.org/public/img/logo.jpg'


            single_upcoming_event.value = {
                id: object.id,
                title: object.get('title'),
                description: object.get('description'),
                date_time: object.get('date_time'),
                img_thumb: img_url
            }
        } catch (error) {
            console.log(error.message)
        }

        is_loading_single_upcoming_event.value = false

    }



    const getUpcomingEvents = async (limit = configStore.fetch_limit) => {


        if (has_reached_max.value) return


        if (upcoming_events.value.length == 0) {

            is_loading_upcoming_events.value = true
            upcoming_events.value = []
            const results = await fetchUpcomingEvent(0, limit);
            upcoming_events.value = results
            has_reached_max.value = results.length < configStore.fetch_limit ? true : false
            is_loading_upcoming_events.value = false
            return
        }

        load_more.value = true
        const results = await fetchUpcomingEvent(upcoming_events.value.length);
        console.log(results.length)
        has_reached_max.value = results.length < configStore.fetch_limit ? true : false
        upcoming_events.value = upcoming_events.value.concat(results)  // or use spread operator
        load_more.value = false
    }

    const fetchUpcomingEvent = async (startIndex = 0, limit = configStore.fetch_limit) => {
        const upcoming_events = Parse.Object.extend("upcoming_events");
        const query = new Parse.Query(upcoming_events);
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
                    title: object.get('title'),
                    description: object.get('description'),
                    date_time: object.get('date_time'),
                    img_thumb: img_url
                })
            }

            return data
        } catch (error) {
            console.log(error)
        }


    }


    return { upcoming_events, is_loading_upcoming_events, is_loading_single_upcoming_event, has_reached_max, load_more, single_upcoming_event, getSingleUpcomingEvent, getUpcomingEvents }
})



