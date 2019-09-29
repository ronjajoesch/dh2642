<template>
    <div class="dishBox card text-center">
        <img :src="imgSource" class="img-fluid card-img-top">
        <div class="card-body">
            <div class="autoText">{{imgTitle}}</div>
        </div>
        <div class="autoText card-body">{{dishPrice}}</div>
    </div>
</template>

<script>
    export default {
        name: "dish",

        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
            dishObject: {
                type: Object,
                required: true
            }
        },

        data() {
            return {}

        },

        methods: {},
        computed: {
            imgSource() {
                return this.dishObject.image;
            },
            imgTitle() {
                return this.dishObject.title;
            },
            dishPrice() {
                return this.dinnerModel.getDishPriceForNGuests(this.dishObject)+" SEK";
            }
        }
    }
</script>

<style scoped>
    .dishBox {
        max-width: 250px;
        margin: 10px;
    }

    .card-body {
        padding: 5px;
    }

    img {
        max-width: 250px;
        max-height: 200px;
    }

</style>