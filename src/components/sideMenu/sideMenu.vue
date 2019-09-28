<template>
    <div class="box center-block card table-responsive">
        <div>
            <div class="row margin">
                <div class="margin">
                    <label for="nGuests"># Guests:</label>
                </div>
                <div>
                    <select id="nGuests" class="custom-select" v-model.number="nGuests">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Dish</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="dish in menu">
                <td>{{dish.title}}</td>
                <td>{{getPriceOfDish(dish)}}</td>
            </tr>
            <tr>
                <td><b>Total</b></td>
                <td><b>{{getTotal()}}</b></td>
            </tr>
            </tbody>
        </table>
        <button class="btn btn-outline-dark btn-sm">confirm dinner</button>
    </div>
</template>

<script>
    import ApiService from "../../services/apiService";

    export default {
        name: "sideMenu",
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                menu: this.dinnerModel.getFullMenu(),
                nGuests: this.dinnerModel.getNumberOfGuests(),
            }
        },
        methods: {
            getPriceOfDish(dish) {
                return this.dinnerModel.getDishPriceForNGuests(dish);
            },
            getTotal() {
                //TODO fix price -> maybe save real dish in menu
                if (this.menu != null) {
                    return this.menu.reduce((acc, dish2) => (acc + dish2.pricePerServing) * this.nGuests, 0);
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        padding: 10px;
    }

    .table {
        margin-top: 10px;
    }

    .row {
        margin: 0px;
    }

    .margin {
        margin: 5px;
    }
</style>