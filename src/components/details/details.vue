<template>
    <div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <br/>
            <h4>{{this.dishObject.title}}</h4>
            <br/>
             <img :src="imgSource" height="450" width="450"></img>
             <br/>
             <br/>
             <h5 style="font-weight:bold">Instructions</h5>
             <h6>{{this.insturctions}}</h6>
            <!-- Start Table-->
            <table border="1|0" style="width:-webkit-fill-available">
                <thead>
                    <tr style="background-color:gainsboro">
                    <th>Ingredient Name</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody v-for="item in ingredients" :key="item">
                    <tr>
                    <td> 
                        {{item.name}}
                    </td>
                    <td>
                        {{item.amount}} {{item.unit}}
                    </td>
                    </tr>
               </tbody>
            </table>
<!-- end table -->
        </div>
    </div>
</template>

<script>
import ApiService from '../../services/apiService';
    export default {
        name: "details",
        props: {
            insturctions : String,
            ingredients : []
        },
        data() {
            return {
                dishObject: this.$route.params.dish
                }
        },
        methods: {
            getDishData(){
                ApiService.getDish(this.dishObject.id).then(response => {
                this.insturctions = response.data.instructions;
                this.ingredients = response.data.extendedIngredients;
                })
            }
        },
        computed: {
            imgSource() {
                return "https://spoonacular.com/recipeImages/"+this.dishObject.image;
            }
        },
        mounted(){
            this.getDishData();
        }

    }
</script>

<style scoped>

</style>
