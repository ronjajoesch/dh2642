<template>
    <div class="dishBox card text-center">

            <img :src="imgSource" v-on:click="router.push({ name: 'details', params: { dish: dish } })"
                 class="img-fluid card-img-top">
        <div class="card-body">
            <div class="autoText">{{imgTitle}}</div>
            <div v-if="loading" class="spinner-border">

            </div>
            <div v-if="!loading">
                <button class="btn btn-outline-dark btn-sm" v-on:click="addDish">add</button>
            </div>

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
                dish: this.dishObject,
                router: this.$router,
                loading: false,
            }

        },

        methods: {
            addDish() {
                this.loading = true;
                this.$emit("addButton", this.dishObject.id);
                setTimeout(()=>{
                    this.loading=false;
                },1000);
            }
        },
        computed: {
            imgSource() {
                return "https://spoonacular.com/recipeImages/" + this.dishObject.image;
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