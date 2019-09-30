<template>
    <div class="row">
        <SideMenu v-bind:dinner-model="model" class=" col-xs-12 col-sm-5 col-md-5 col-lg-4"/>
        <Details v-bind:dish-object="dishObject" class="col-xs-12 col-sm-7 col-md-7 col-lg-8"></Details>
    </div>
</template>

<script>
    import SideMenu from '../components/sideMenu/sideMenu.vue'
    import Details from "../components/details/details.vue";
    export default {
        name: "DetailsView",
        components: {
            Details,
            SideMenu,
        },
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                model: this.dinnerModel,
                dishObject: {}//this.route.params,
            }
        },
    }
</script>

<style scoped>

</style>