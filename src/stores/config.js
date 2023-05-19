import { defineStore } from 'pinia'




export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            primaryColor: '#2E3192'
        }

    },

    actions: {
         debounce(func, timeout = 500){
            let timer;
            return (...args) => {
              clearTimeout(timer);
              timer = setTimeout(() => { func.apply(this, args); }, timeout);
            };
          }

    },

    getters: {


    },
})

