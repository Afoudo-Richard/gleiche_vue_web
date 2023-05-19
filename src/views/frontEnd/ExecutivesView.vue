<template>
    <div class="container py-6 md:py-12 flex flex-col gap-4">
        <SectionTitleVue title="Executives"></SectionTitleVue>
        <div class="py-12">
            <!-- {{ forloop.counter }} -->


            <div v-if="!executivesStore.is_loading_executives"
                class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <ExecutiveCard v-for="(item, index) in executivesStore.executives" :item="item" :index="index"
                    :key="item.id" />
            </div>

            <div v-else class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <el-skeleton v-for="i in 3" style="width: 100%" :loading="loading" animated>
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 100%; height: 240px" />
                        <div style="padding: 14px">
                            <el-skeleton-item variant="h3" style="width: 50%" />
                            <div
                                style="display: flex; align-items: center;justify-items: space-between; margin-top: 16px; height: 16px;">
                                <el-skeleton-item variant="text" style="margin-right: 16px" />
                                <el-skeleton-item variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>

                </el-skeleton>
            </div>

            <div v-if="executivesStore.load_more" class="mt-7 flex justify-center">
                <pulse-loader :loading="is_loading" :color="configStore.primaryColor" :size="size"></pulse-loader>
            </div>

        </div>
    </div>
</template>
    
<script setup>
import SectionTitleVue from '../../components/components/SectionTitle.vue';
import ExecutiveCard from '../../components/components/ExecutiveCard.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


import { useExecutivesStore } from '@/stores/executives'
import { useConfigStore } from '@/stores/config'


import { ref, onMounted } from 'vue'




const executivesStore = useExecutivesStore()
const configStore = useConfigStore()


window.onscroll = () => {

};

const windowScroll = async () => {
    window.addEventListener('scroll', async (event) => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= (0.8 * document.documentElement.offsetHeight);

        console.log(document.documentElement.scrollTop + window.innerHeight);
        console.log("===============================><=================")
        console.log(document.documentElement.offsetHeight)
        console.log("end")
        if (bottomOfWindow) {
            await executivesStore.getExe();
        }
    });
}

onMounted(async () => {
    windowScroll()    

})

</script>