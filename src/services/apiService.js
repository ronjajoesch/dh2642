import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Config from "./config";


const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
  },


  getAllDishes(){
    return axios.get(Config.API_BASE_URL+'recipes/search',{headers:{'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
        .catch(error => {
          throw new Error(`ApiService Error: ${error}`);
        });

  },

};

export default ApiService;

