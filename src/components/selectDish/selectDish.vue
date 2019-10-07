<template>
    <div>
        <SearchBar v-on:submitButton="newSearch"/>
        <div v-if="loading" class="spinner-border">
        </div>
        <div class="row" v-if="!loading">
            <Dish v-for="(dish) in dishes" v-bind:dish-object="dish" v-on:addButton="addDish" :key="dish"></Dish>
        </div>

    </div>
</template>

<script>
    import Dish from './dish.vue'
    import SearchBar from './search.vue'
    import ApiService from "../../services/apiService";

    export default {
        components: {Dish, SearchBar},
        name: "selectDish",
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                dishes: [],
                dishType: null,
                query: null,
                loading: false,
            }
        },
        methods: {
            newSearch(message) {
                this.dishType = message[0].dishType;
                this.query = message[0].query;
                this.searchDishes();
            },
            searchDishes() {
                this.loading = true;
                ApiService.getAllDishes(this.dishType, this.query).then(response => {
                    this.dishes = response.data.results;
                    this.loading = false;
                });
            },
            addDish(id) {
                ApiService.getDish(id).then(response => {
                        this.dinnerModel.addDishToMenu(response.data);
                    }
                );

            },
        },
        // mounted() {
        //     this.searchDishes();
        // },
        // We search for dishes at Render instead of mounted to avoid displaying wrong dishes after search
        render(){
            this.searchDishes();
        }
        
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }
</style>