import {defineStore} from "pinia";
import axios from "axios";

export const useMeStore = defineStore('me', {
    state: () => ({
        me: []
    }),
    actions: {
        async getMe(){
            this.me  = await axios.get('https://jsonplaceholder.typicode.com/users')
            }
        }
    })