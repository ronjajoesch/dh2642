import Home from "../pages/Home.vue";
import SelectDishPage from "../pages/SelectDishPage.vue"
import OverViewPage from "../pages/OverviewPage.vue"

import DinnerModel from '../data/model.js'

let model = new DinnerModel();


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
    }
];


export default routes;