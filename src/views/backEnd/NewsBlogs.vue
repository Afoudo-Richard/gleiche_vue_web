<template>
    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 relative">

        <div v-if="show_cover_loading"
            class="absolute inset-0 z-50 bg-black/25 w-full h-full flex justify-center items-center">
            <pulse-loader :color="configStore.primaryColor"></pulse-loader>
        </div>

        <SectionTitle title="News & Blogs">

            <LinkButton text="Create New" :to="{ path: '/account/add-template' }">
            </LinkButton>

        </SectionTitle>
        <div class="flex flex-col mt-8">

            <div v-if="is_loading_news_blogs" class="flex justify-center">
                <pulse-loader :color="configStore.primaryColor"></pulse-loader>
            </div>
            <div v-else>
                <div v-if="has_connection_error" class="flex justify-center">
                    <LinkButton :is_link="false" text="Refresh" @click="getNewsBlogs">
                    </LinkButton>
                </div>
                <div v-else class="overflow-x-auto rounded-lg">
                    <!-- <div class="align-middle inline-block min-w-full">
                        <div class="shadow sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th
                                            class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th
                                            class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Create At
                                        </th>
                                        <th
                                            class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th
                                            class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    <TemplateTableItem v-for="(item, index) in templates" :item="item" :index="index"
                                        :key="index"></TemplateTableItem>

                                </tbody>
                            </table>
                        </div>
                    </div> -->

                    <!-- <div>
                        <div class="flex items-center justify-center gap-5 my-5">
                            <div class="flex items-center">
                                <span>search field:</span>
                                <select class="input" v-model="searchField">
                                    <option>name</option>
                                    <option>price</option>
                                </select>
                            </div>



                            <div class="flex items-center">
                                <span>search value: </span>
                                <input type="text" class="input" v-model="searchValue">
                            </div>
                        </div>
                        <EasyDataTable :headers="headers" :items="templates" alternating show-index
                            :search-field="searchField" :search-value="searchValue">
                            <template #item-image_thumbnail="{ image_thumbnail }">
                                <div class="w-36 h-[5rem] rounded overflow-hidden ml-2 my-2">
                                    <img class=" w-full h-full object-cover" :src="image_thumbnail" alt="">
                                </div>
                            </template>

                            <template #item-created_at="{ created_at }">
                                {{ moment(created_at).format('DD/MM/YYYY h:mm a') }}
                            </template>

                            <template #item-operation="item">

                                <div class="flex gap-5 cursor-pointer">
                                    <span @click="deleteTemplate(item)" class="text-red-500 text-xl"><i
                                            class="fa-sharp fa-solid fa-trash"></i></span>
                                    <RouterLink :to="{ name: 'edit-template', params: { id: item.id } }">
                                        <span class="text-blue-500 text-xl"><i class="fa-solid fa-pen-to-square"></i></span>
                                    </RouterLink>


                                    <img src="./images/delete.png" class="operation-icon"  />
                                    <img src="./images/edit.png" class="operation-icon" @click="editItem(item)" />
                                </div>
                            </template>
                        </EasyDataTable>

                    </div> -->

                    <div class="">
                        <!-- <div class="flex justify-center">
                            <div class="w-full md:w-7/12">
                                <input type="text" class="input" placeholder="Search...">
                            </div>
                        </div> -->

                        <div class="mt-3 md:mt-5">
                            <!-- <div v-if="isGrid" class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <NewsCard v-for="(item, index) in news_blogs" :item="item" :index="index" :key="item.id" />
                            </div>

                            <div v-else class="flex flex-col gap-3">
                                <NewsCardList v-for="(item, index) in news_blogs" :item="item" :index="index"
                                    :key="item.id" />
                            </div> -->

                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <div class="p-4">
                                    <label for="table-search" class="sr-only">Search</label>
                                    <div class="relative mt-1">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" id="table-search"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Search for items">
                                    </div>
                                </div>
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input id="checkbox-all-search" type="checkbox"
                                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Title
                                            </th>


                                            <th scope="col" class="px-6 py-3">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <NewsCardTableItem v-for="(item, index) in news_blogs" :item="item" :index="index"
                                            :key="item.id" />

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Parse from 'parse/dist/parse.min.js';
import SectionTitle from '@/components/BackEnd/components/SectionTitle.vue';
import LinkButton from '@/components/FrontEnd/components/LinkButton.vue';
import TemplateTableItem from '@/components/BackEnd/components/TemplateTableItem.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { ref, computed, onMounted } from 'vue';
import { useConfigStore } from '@/stores/config'
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'
import moment from 'moment'
import { storeToRefs } from 'pinia'
import { useNewsBlogsStore } from '@/stores/news_blogs'
import NewsCard from '@/components/FrontEnd/components/NewsCard.vue';
import NewsCardList from '@/components/FrontEnd/components/NewsCardList.vue';
import NewsCardTableItem from '@/components/FrontEnd/components/NewsCardTableItem.vue';



const newsBlogStore = useNewsBlogsStore()
const { news_blogs, is_loading_news_blogs, has_reached_max } = storeToRefs(newsBlogStore)
const { getNewsBlogs } = newsBlogStore




const configStore = useConfigStore()

const is_loading = ref(false)
const show_cover_loading = ref(false)
const has_connection_error = ref(false)
const templates = ref([])
const templatesAsObjects = ref([])
const searchField = ref("name");
const searchValue = ref("");
const isGrid = ref(true)

const headers = ref([
    { text: "Image", value: "image_thumbnail" },
    { text: "Name", value: "name", sortable: true },
    { text: "Create At", value: "created_at" },
    { text: "Price", value: "price", sortable: true },
    { text: "Operation", value: "operation" },
])


function deleteTemplate(template) {

    ElMessageBox.confirm(
        'Are you sure you want delete template?',
        'Warning',
        {
            confirmButtonText: 'Proceed',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(() => {

            const templateObject = templatesAsObjects.value.filter((i) => {
                return i.id === template.id
            })
            show_cover_loading.value = true
            templateObject[0].destroy().then((myObject) => {
                ElNotification({
                    title: 'Success',
                    message: 'Template deleted : ' + myObject.id,
                    type: 'success',
                })
                show_cover_loading.value = false
                getAllTemplates()
            }, (error) => {
                // The delete failed.
                // error is a Parse.Error with an error code and message.
                ElNotification({
                    title: 'Error',
                    message: 'An Error occured while trying to delete data : ' + error.code,
                    type: 'error',
                })
                show_cover_loading.value = false
            });

        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })


}

function editTemplate(item) {

}





onMounted(() => {
    document.title = "Account | Templates"
    getNewsBlogs()
})


</script>