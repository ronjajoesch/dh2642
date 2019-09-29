<template>
    <div>
        <h3>Your dinner plans look amazing.</h3>
        <p>The courses are customized for {{getNumberOfGuests()}} people.</p>
        <p>You will be eating the following:</p>
        <div class="row">
            <Dish v-for="(dish) in (this.dinnerModel.getFullMenu())" v-bind:dish-object="dish" v-bind:dinnerModel="dinnerModel"></Dish>
        </div>
    </div>
</template>

<script>
    import Dish from './dish.vue'

    export default {
        components: {Dish},
        name: "overview",
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        },
        methods: {
            getNumberOfGuests() {
                return this.dinnerModel.getNumberOfGuests();
            }
        }
    }
</script>

<style scoped>

</style>