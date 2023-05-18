import { defineStore } from 'pinia'
import Parse from 'parse/dist/parse.min.js';



export const useAppStore = defineStore('app', {
    state: () => {
        return {

            categories: [],
            news_blog: [],
            volunteers: [],
            upcoming_events: [],
            configs: {},
            detailed_configs: {},
            is_loading_categories: false,
            is_news_blog_loading: false,
            is_loading_config: false,
            is_loading_volunteer: false,
            is_loading_upcoming_event: false,


        }

    },

    actions: {

        async getAllCategories() {
            this.is_loading_categories = true
            this.categories = []
            const Category = Parse.Object.extend("Category");
            const query = new Parse.Query(Category);
            const results = await query.find();
            // alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values

            this.categories.push(...results)
            this.is_loading_categories = false

        },

        async getNewsBlog() {
            this.is_loading_technologies = true
            this.news_blog = []
            const news_blog = Parse.Object.extend("news_blog");
            const query = new Parse.Query(news_blog);
            const results = await query.find();
            // alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values

            // this.news_blog.push(...results)
            this.is_news_blog_loading = false

            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                this.news_blog.push({
                    id: object.id,
                    title: object.get('title'),
                    content: object.get('content'),
                    img_thumb: object.get('img_thumb').url()
                })
            }
        },

        async getVolunteers() {
            this.is_loading_volunteer = true
            this.volunteers = []
            const voluteers = Parse.Object.extend("volunteers");
            const query = new Parse.Query(voluteers);
            const results = await query.find();
            this.is_loading_volunteer = false

            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                this.volunteers.push({
                    id: object.id,
                    full_name: object.get('full_name'),
                    email: object.get('email'),
                    img_thumb: object.get('img_thumb').url()
                })
            }
        },

        async getUpcomingEvents() {
            this.is_loading_upcoming_event = true
            this.upcoming_events = []
            const upcoming_event = Parse.Object.extend("upcoming_events");
            const query = new Parse.Query(upcoming_event);
            const results = await query.find();
            this.is_loading_upcoming_event = false

            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                this.upcoming_events.push({
                    id: object.id,
                    title: object.get('title'),
                    description: object.get('description'),
                    date_time: object.get('date_time'),
                    img_thumb: object.get('img_thumb').url()
                })
            }
        },



        async getAllConfigs() {

            this.is_loading_config = true

            try {
                const config = await Parse.Config.get();
                console.log(config);
                this.configs = config;
            } catch (error) {
                console.log("Error fetching config");
            }

            this.is_loading_config = false
        },

    },
    getters: {
        getObjectFormOfCategories(state) {
            let new_categories = []

            for (let i = 0; i < state.categories; i++) {
                const object = state.categories[i];
                // new_categories.push({
                //     id: object.id,
                //     name: object.get('name')
                // })

                new_categories.push({
                    id: 1,
                    name: 'tesint'
                })
            }

            return state.categories.map((object) => {
                return {
                    id: object.id,
                    name: object.get('name')
                }
            })

        },

    },
})

