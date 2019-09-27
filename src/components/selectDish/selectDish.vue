<template>
    <div>
        <SearchBar/>
        <div class="row">
            <Dish v-for="(dish) in dishes" v-bind:dish-object="dish"></Dish>
        </div>

    </div>
</template>

<script>
    import Dish from './dish.vue'
    import SearchBar from './search.vue'
    import axios from 'axios'
    import ApiService from "../../services/apiService";

    export default {
        components: {Dish, SearchBar},
        name: "selectDish",

        data() {
            return {
                dishes : []
            }
        },
        methods:{

        },
        mounted(){
            ApiService.getAllDishes().then(response =>{
                this.dishes=response.data.results
            });
        }
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }
</style>