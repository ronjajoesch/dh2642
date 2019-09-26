<template>
    <div class="dishBox card text-center">
        <img :src="imgSource" class="img-fluid card-img-top">
        <div class="card-body">
            <div class="autoText">{{imgTitle}}</div>
            <button class="btn btn-outline-dark btn-sm">{{buttonText}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dish",

        props: {
            dishObject: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                buttonText: "add"
            }

        },

        methods: {},
        computed: {
            imgSource() {
                return this.dishObject.image;
            },
            imgTitle() {
                return this.dishObject.title;
            }
        }
    }
</script>

<style scoped>
    .dishBox {
        max-width: 250px;
        max-height: 250px;
        margin: 10px;
    }

    .card-body {
        padding: 5px;
    }

</style>