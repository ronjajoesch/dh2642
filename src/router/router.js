import Vue from "vue";
import Router from 'vue-router'
import SelectDish from '../components/selectDish/selectDish.vue'
import SideMenu from '../components/sideMenu/sideMenu.vue'
import Home from "../views/Home.vue";
import Overview from "../components/overview/overview.vue";
import SelectDishView from "../views/SelectDishView.vue"

import DinnerModel from '../data/model.js'

const model = new DinnerModel();


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/select",
        component: SelectDishView,
        props: {dinnerModel: model}
    }];


export default routes;