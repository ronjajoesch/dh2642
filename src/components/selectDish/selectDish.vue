<template>
    <div>
        <SearchBar/>
        <div class="row">
            <Dish v-for="(dish) in dishes" v-bind:key=dish v-bind:dish-object="dish"></Dish>
        </div>

    </div>
</template>

<script>
    import Dish from './dish.vue'
    import SearchBar from './search.vue'
    import axios from 'axios'
    // import Config from '../../config'

    export default {
        components: {Dish, SearchBar},
        name: "selectDish",

        data() {
            return {
                //TODO API CALL
                dishes : []
            }
        },
        mounted(){

        axios.get('http://sunset.nada.kth.se:8080/iprog/group/15/'+'recipes/search',{method : 'GET',headers:{'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
        .then(response =>{
            console.log(response);
            this.dishes=response.data.results
            })
        }
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }
</style>