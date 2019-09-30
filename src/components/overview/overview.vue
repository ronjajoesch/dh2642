<template>
    <div class="margin">
        <p class="heading">Your dinner plans look amazing.</p>
        <p>The courses are customized for {{getNumberOfGuests()}} people.</p>
        <p>You will be eating the following:</p>
        <div class="row">
            <Dish v-for="(dish) in (this.dinnerModel.getFullMenu())" v-bind:dish-object="dish"
                  v-bind:dinnerModel="dinnerModel"></Dish>
        </div>
        <div id="total">
            <b>Total Price: {{this.dinnerModel.getTotalMenuPrice()}}</b>
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
    .margin {
        margin: 15px;
    }

    #total {
        margin-top: 20px;
    }

    .heading{
        font-size: 1.25rem;
    }
</style>