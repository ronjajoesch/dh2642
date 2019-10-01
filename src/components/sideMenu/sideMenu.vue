<template>
    <div class="box center-block card table-responsive">
        <div>
            <div class="row margin">
                <div class="margin">
                    <label for="nGuests"># Guests:</label>
                </div>
                <div>
                    <select id="nGuests" class="custom-select" @change="onChange($event)">
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
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="dish in this.dinnerModel.getFullMenu()">
                <td>{{dish.title}}</td>
                <td>{{getPriceOfDish(dish)}}</td>
                <td><ion-icon name="remove-circle" v-on:click="removeDish(dish)"></ion-icon></td>
            </tr>
            <tr>
                <td><b>Total</b></td>
                <td><b>{{getTotal()}}</b></td>
                <td></td>
            </tr>
            </tbody>
        </table>
        <button class="btn btn-outline-dark btn-sm" @click="$router.push('confirmation')">confirm dinner</button>
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
            }
        },
        methods: {
            getPriceOfDish(dish) {
                return this.dinnerModel.getDishPriceForNGuests(dish);
            },
            getTotal() {
                //TODO fix price -> maybe save real dish in menu
                    return this.dinnerModel.getTotalMenuPrice();
            },
            onChange(event){
                this.dinnerModel.setNumberOfGuests(event.target.value);
            },
            removeDish(dish){
                this.dinnerModel.removeDishFromMenu(dish);
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