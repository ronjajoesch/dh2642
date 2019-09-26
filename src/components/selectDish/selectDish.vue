<template>
    <div>
        <SearchBar/>
    </div>
</template>

<script>
    import Dish from './dish.vue'
    import SearchBar from './search.vue'
    export default {
        components: { Dish, SearchBar },
        name: "selectDish"
    }
</script>


<style scoped>

</style>