import { defineStore } from 'pinia'
import {useConfigStore} from './config'
import Parse from 'parse/dist/parse.min.js';


// const configStore = useConfigStore()

export const useExecutivesStore = defineStore('executives', {
    state: () => {
        return {
            executives: [],
            is_loading_executives: false,
            has_reached_max : false,
            fetch_limit: 5,
            load_more: false,
            configStore: useConfigStore()

        }

    },

    actions: {

        async getExe(){
            console.log("Inside here")
            this.configStore.debounce(()=>this.getExecutives());
        },


        async getExecutives() {

            // ==============

            if(this.has_reached_max) return

            if (this.executives.length == 0) {

                this.is_loading_executives = true
                this.executives = []
                const results = await this.fetchExecutives();
                this.executives = results
                this.has_reached_max = results.length < this.fetch_limit
                this.is_loading_executives = false
                return
            }

            this.load_more = true
            const results = await this.fetchExecutives(this.executives.length);
            this.has_reached_max = results.length < this.fetch_limit
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

