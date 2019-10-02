<template>
    <Instructions v-bind:dinner-model="dinnerModel"></Instructions>
</template>

<script>
    import Instructions from "../components/instructions/instructions.vue";

    export default {
        name: "InstructionPage",
        components: {Instructions},
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        },
        methods: {
            getNumberOfGuests() {
                return this.dinnerModel.getNumberOfGuests();
            }
        }
    }
</script>

<style scoped>

</style>