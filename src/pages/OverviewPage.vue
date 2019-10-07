<template>
    <overview v-bind:dinner-model="dinnerModel"/>
</template>

<script>
    import Overview from "../components/overview/overview.vue";

    export default {
        name: "OverviewView",
        components: {Overview},
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        },

    }
</script>

<style scoped>

</style>