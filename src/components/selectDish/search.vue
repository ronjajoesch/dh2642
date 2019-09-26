<template>
    <div class="center-block">
        <form class="form-group" @submit.prevent="">
            <div class="row margin">
                <div class="margin">
                    <input class="form-control" id="query">
                </div>
                <div class="margin">
                    <select id="type" class="custom-select">
                        <option value="Starter">Starter</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>

                <div class="margin">
                    <input class="btn btn-outline-dark" type="submit" value="Submit">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        query: "search"
    }
</script>

<style scoped>
    .margin {
        margin: 10px;
    }
</style>