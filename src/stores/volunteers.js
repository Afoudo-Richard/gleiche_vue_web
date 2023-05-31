import { defineStore } from 'pinia'
import {useConfigStore} from './config'
import Parse from 'parse/dist/parse.min.js';


// const configStore = useConfigStore()

export const useVolunteerStore = defineStore('volunteer', {
    state: () => {
        return {
            volunteers: [],
            is_loading_volunteer: false,
            has_reached_max : false,
            fetch_limit: 7,
            load_more: false,
            configStore: useConfigStore()

        }

    },

    actions: {

        async getVolunteers(limit = this.configStore.fetch_limit) {

            // if (typeof limit !== undefined) {
            //     console.log(typeof limit)
            //     console.log("((((((( when limit is given and not 0 ))))))))))))")
            //     this.is_loading_volunteer = true
            //     this.volunteers = []
            //     const results = await this.fetchVolunteers(0, limit);
            //     this.volunteers = results
            //     this.has_reached_max = results.length < this.configStore.fetch_limit ? true : false
            //     this.is_loading_volunteer = false
            //     return
            // }

            if(this.has_reached_max) return

            if (this.volunteers.length == 0) {
                console.log("((((((( when volunteer is 0 ))))))))))))")
                this.is_loading_volunteer = true
                this.volunteers = []
                const results = await this.fetchVolunteers(0,limit);
                this.volunteers = results
                this.has_reached_max = results.length < this.configStore.fetch_limit ? true : false
                this.is_loading_volunteer = false
                return
            }

            console.log("((((((( when volunteer is not 0 ))))))))))))")

            this.load_more = true
            const results = await this.fetchVolunteers(this.volunteers.length);
            console.log(results.length)
            this.has_reached_max = results.length < this.configStore.fetch_limit ? true : false
            this.volunteers = this.volunteers.concat(results)  // or use spread operator
            this.load_more = false
        },

        async fetchVolunteers(startIndex = 0, limit = this.configStore.fetch_limit) {
            const volunteer = Parse.Object.extend("volunteers");
            const query = new Parse.Query(volunteer);
            query.limit(limit)
            query.skip(startIndex)
            let data = []
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
        },


    },
    getters: {


    },
})

