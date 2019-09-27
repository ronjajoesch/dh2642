import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Config from "./config";


const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
    },


    getAllDishes(dishType, query) {
        let url;
        if (dishType == null || query == null) {
            url = Config.API_BASE_URL + 'recipes/search';
        } else {
            url = Config.API_BASE_URL + 'recipes/search' + dishType + "&query=" + query;
        }
        return axios.get(url, {headers: {'X-Mashape-Key': Config.API_KEY}})
            .catch(error => {
                throw new Error(`ApiService Error: ${error}`);
            });


    },

};

export default ApiService;

