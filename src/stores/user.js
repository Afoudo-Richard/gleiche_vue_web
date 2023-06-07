import { defineStore } from 'pinia'
import Parse from 'parse/dist/parse.min.js';



export const useUserStore = defineStore('user', {
    state: () => {
        return {
            is_authenticated: false
        }

    },

    actions: {
        initializeUserStore() {
            // Parse.enableEncryptedUser();
            // Parse.secret = 'ArcTikq_User_Key';
            this.set_is_authenticated()
        },

        logOutUser(){
            Parse.User.logOut()
            this.is_authenticated = false
        },

        set_is_authenticated(){
            const currentUser = Parse.User.current();

            if (currentUser) {
                this.is_authenticated = true
            } else {
                this.is_authenticated = false
            }
        }

    },
})

