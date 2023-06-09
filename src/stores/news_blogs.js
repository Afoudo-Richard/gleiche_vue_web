import { defineStore } from 'pinia'
import { useConfigStore } from './config'
import { ref } from 'vue'

import Parse from 'parse/dist/parse.min.js';

export const useNewsBlogsStore = defineStore('news_blogs', () => {

    const news_blogs = ref([])
    const is_loading_news_blogs = ref(false)
    const is_loading_single_news_blog = ref(false)
    const has_reached_max = ref(false)
    const load_more = ref(false)
    const single_news_blog = ref({})
    const configStore = useConfigStore()


    const getSingleNewsBlog = async (id) => {
        is_loading_single_news_blog.value = true
        try {
            const news_blog = Parse.Object.extend("news_blog");
            const query = new Parse.Query(news_blog);
            const object = await query.get(id);
            let img_url = object.get('img_thumb') ? object.get('img_thumb').url() : 'https://gleichefoundation.org/public/img/logo.jpg'


            single_news_blog.value = {
                id: object.id,
                title: object.get('title'),
                content: object.get('content'),
                img_thumb: img_url
            }
        } catch (error) {
            console.log(error.message)
        }

        is_loading_single_news_blog.value = false

    }



    const getNewsBlogs = async (limit = configStore.fetch_limit) => {


        if (has_reached_max.value) return


        if (news_blogs.value.length == 0) {

            is_loading_news_blogs.value = true
            news_blogs.value = []
            const results = await fetchNewsBlogs(0, limit);
            news_blogs.value = results
            has_reached_max.value = results.length < configStore.fetch_limit ? true : false
            is_loading_news_blogs.value = false
            return
        }

        load_more.value = true
        const results = await fetchNewsBlogs(news_blogs.value.length);
        console.log(results.length)
        has_reached_max.value = results.length < configStore.fetch_limit ? true : false
        news_blogs.value = news_blogs.value.concat(results)  // or use spread operator
        load_more.value = false
    }

    const fetchNewsBlogs = async (startIndex = 0, limit = configStore.fetch_limit) => {
        const news_blogs = Parse.Object.extend("news_blog");
        const query = new Parse.Query(news_blogs);
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
                    content: object.get('content'),
                    img_thumb: img_url
                })
            }

            return data
        } catch (error) {
            console.log(error)
        }


    }


    return { news_blogs, is_loading_news_blogs, is_loading_single_news_blog, has_reached_max, load_more, single_news_blog, getSingleNewsBlog, getNewsBlogs }
})



