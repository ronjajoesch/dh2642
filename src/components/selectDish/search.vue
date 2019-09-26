<template>
    <div class="card bg-light card text-center margin">
        <div class="card-body padding">
            <form class="form-group margin" @submit.prevent="">
                <div class="row">
                    <div class="padding">
                        <input class="form-control" id="query">
                    </div>
                    <div class="padding">
                        <select id="type" class="custom-select" v-model.number="type">
                            <option>Starter</option>
                            <option>Main Course</option>
                            <option>Dessert</option>
                        </select>
                    </div>

                    <div class="padding">
                        <input class="btn btn-outline-dark" type="submit" value="Submit">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        query: "search",
        data(){
            return{
                type:null,
            }
        }
    }
</script>

<style scoped>
    .padding {
        padding: 5px;
    }
    .margin{
        margin:10px;
    }
    .row{
        margin: 0px;
    }
</style>