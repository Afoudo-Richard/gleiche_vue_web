import { defineStore } from 'pinia'




export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            primaryColor: '#2E3192', 
            fetch_limit: 7,
        }

    },

    actions: {


    },

    getters: {


    },
})

