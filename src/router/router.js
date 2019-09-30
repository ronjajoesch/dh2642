import Home from "../pages/Home.vue";
import SelectDishPage from "../pages/SelectDishPage.vue"
import OverViewPage from "../pages/OverviewPage.vue"
import InstructionPage from "../pages/InstructionPage.vue";
import DetailsView from "../pages/DetailsView.vue";
import DinnerModel from '../data/model.js'
import Vue from "vue";
import VueRouter from 'vue-router';

let model = new DinnerModel();


Vue.use(VueRouter);


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/select",
        component: SelectDishPage,
        props: {dinnerModel: model}
    },
    {
        path: "/confirmation",
        component: OverViewPage,
        props: {dinnerModel: model}
    },
    {
        path: "/instructions",
        component: InstructionPage,
        props: {dinnerModel: model}
    },
    {
        path: '/details',
        name:'details',
        component: DetailsView,
        props: {dinnerModel: model}
    },
];

const router = new VueRouter({routes});
export default router;