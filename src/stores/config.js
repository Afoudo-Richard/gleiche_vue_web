import { defineStore } from 'pinia'




export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            primaryColor: '#2E3192', 
            fetch_limit: 10,
        }

    },

    actions: {
        //  debounce(func, timeout = 500){
        //     let timer;
        //     return (...args) => {
        //       clearTimeout(timer);
        //       timer = setTimeout(() => { func.apply(this, args); }, timeout);
        //     };
        //   },
         async debounce(cb, delay = 3000) {
            let timeout
          
            return (...args) => {
              clearTimeout(timeout)
              timeout = setTimeout(() => {
                cb(...args)
              }, delay)
            }
          },

    },

    getters: {


    },
})

