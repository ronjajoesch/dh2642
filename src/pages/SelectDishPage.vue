<template>
    <div>
        <div class="row">
            <SideMenu v-bind:dinner-model="model" class=" col-xs-12 col-sm-5 col-md-5 col-lg-4"/>
            <SelectDish v-bind:dinner-model="model" class="col-xs-12 col-sm-7 col-md-7 col-lg-8"/>
        </div>

    </div>
</template>

<script>
    import SelectDish from '../components/selectDish/selectDish.vue'
    import SideMenu from '../components/sideMenu/sideMenu.vue'

    export default {
        name: 'SelectDishView',
        components: {
            SelectDish,
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
            }
        },
        methods:{
            test(){

            }
        }
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }

    .margin {
        margin: 20px;
    }
</style>