<template>
    <div>
        <Header></Header>
        <HomeSite></HomeSite>
    </div>

</template>

<script>
    import HomeSite from "../components/home/home.vue";

    export default {
        name: "Home",
        components: {
            HomeSite,
        },
    }
</script>

<style scoped>

</style>