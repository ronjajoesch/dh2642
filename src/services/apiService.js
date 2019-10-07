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

        if (dishType == null && query == null) {
            url = Config.API_BASE_URL + 'recipes/search';
        } else {
            console.log(dishType, query);
            //TODO fix dishType doesn't work
            url = Config.API_BASE_URL + 'recipes/search?type=' + dishType + "&query=" + query;

        }
        return axios.get(url, {headers: {'X-Mashape-Key': Config.API_KEY}})
            .catch(error => {
                throw new Error(`ApiService Error: ${error}`);
            });


    },

    getDish(id) {
        let url = Config.API_BASE_URL + 'recipes/' + id + '/information/';
        return axios.get(url, {headers: {'X-Mashape-Key': Config.API_KEY}})
            .catch(error => {
                throw new Error(`ApiService Error: ${error}`);
            });
    }

};

export default ApiService;

