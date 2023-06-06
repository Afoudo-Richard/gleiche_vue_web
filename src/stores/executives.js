import { defineStore } from 'pinia'
import { useConfigStore } from './config'
import Parse from 'parse/dist/parse.min.js';


// const configStore = useConfigStore()

export const useExecutivesStore = defineStore('executives', {
    state: () => {
        return {
            executives: [],
            single_executive: {},
            is_loading_executives: false,
            is_loading_single_executive: false,
            has_reached_max: false,
            fetch_limit: 7,
            load_more: false,
            configStore: useConfigStore()

        }

    },

    actions: {

        async getSingleExecutive(id) {
            this.is_loading_single_executive = true
            try {
                const executive = Parse.Object.extend("executives");
                const query = new Parse.Query(executive);
                const object = await query.get(id);
                let img_url = object.get('img_thumb') ? object.get('img_thumb').url() : 'https://gleichefoundation.org/public/img/logo.jpg'


                this.single_executive = {
                    id: object.id,
                    full_name: object.get('full_name'),
                    bio: object.get('bio'),
                    position: object.get('position'),
                    email: object.get('email'),
                    img_thumb: img_url
                }
            } catch (error) {
                console.log(error.message)
            }

            this.is_loading_single_executive = false

        },

        async getExe() {
            console.log("Inside here")
            this.debounce(async () => await this.getExecutives());
        },


        async getExecutives() {

            if (this.has_reached_max) return

            if (this.executives.length == 0) {

                this.is_loading_executives = true
                this.executives = []
                const results = await this.fetchExecutives();
                this.executives = results
                this.has_reached_max = results.length < this.fetch_limit ? true : false
                this.is_loading_executives = false
                return
            }

            this.load_more = true
            const results = await this.fetchExecutives(this.executives.length);
            console.log(results.length)
            this.has_reached_max = results.length < this.fetch_limit ? true : false
            this.executives = this.executives.concat(results)  // or use spread operator
            this.load_more = false


            // ===========


        },

        async fetchExecutives(startIndex = 0, limit = this.fetch_limit) {
            const executives = Parse.Object.extend("executives");
            const query = new Parse.Query(executives);
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
                    bio: object.get('bio'),
                    position: object.get('position'),
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

