import { defineStore } from 'pinia'
import {useConfigStore} from './config'
import Parse from 'parse/dist/parse.min.js';


// const configStore = useConfigStore()

export const useNewsBlogsStore = defineStore('news_blogs', {
    state: () => {
        return {
            news_blogs: [],
            is_loading_news_blogs: false,
            has_reached_max : false,
            fetch_limit: 7,
            load_more: false,
            single_news_blog: null,
            configStore: useConfigStore()

        }

    },

    actions: {

        async getExe(){
            console.log("Inside here")
            this.debounce(async()=> await this.getNewsBlogs());
        },

        async getSingleNewsBlog(id){
            const news_blog = Parse.Object.extend("news_blog");
            const query = new Parse.Query(news_blog);
            const object = await query.get(id);
            let img_url = object.get('img_thumb') ? object.get('img_thumb').url() : 'https://gleichefoundation.org/public/img/logo.jpg'

            
            return {
                id: object.id,
                title: object.get('title'),
                content: object.get('content'),
                img_thumb: img_url
            }
        },


        async getNewsBlogs(limit) {

            if(this.has_reached_max) return

            if (this.news_blogs.length == 0) {

                this.is_loading_news_blogs = true
                this.news_blogs = []
                const fetch_limit = limit != null ? limit : this.configStore.fetch_limit
                const results = await this.fetchNewsBlogs(0, fetch_limit);
                this.news_blogs = results
                this.has_reached_max = results.length < this.fetch_limit ? true : false
                this.is_loading_news_blogs = false
                return
            }

            this.load_more = true
            const results = await this.fetchNewsBlogs(this.news_blogs.length);
            console.log(results.length)
            this.has_reached_max = results.length < this.fetch_limit ? true : false
            this.news_blogs = this.news_blogs.concat(results)  // or use spread operator
            this.load_more = false


        },

        async fetchNewsBlogs(startIndex = 0, limit = this.fetch_limit) {
            const news_blogs = Parse.Object.extend("news_blog");
            const query = new Parse.Query(news_blogs);
            query.limit(limit)
            query.skip(startIndex)
            let data = []
            const results = await query.find();

            for (let i = 0; i < results.length; i++) {
                const object = results[i];
                let img_url = object.get('img_thumb') ? object.get('img_thumb').url() : 'https://gleichefoundation.org/public/img/logo.jpg'

                data.push({
                    id: object.id,
                    title: object.get('title'),
                    content: object.get('content'),
                    img_thumb: img_url
                })
            }

            return data
        },


    },
    getters: {


    },
})

