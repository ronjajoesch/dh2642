<template>
    <div>
        {{this.dishObject}}
    </div>
</template>

<script>
    export default {
        name: "details",
        props: {

        },
        data() {
            return {
                dishObject: this.$route.params.dish,
            }
        },
    }
</script>

<style scoped>

</style>