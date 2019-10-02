<template>
    <div class="margin">
        <p class="heading">Here are the instructions for your meals intended for <strong>{{this.dinnerModel.nGuest}}</strong> people:</p>
        <div class="card bg-light card text-center" v-for="item in this.dinnerModel.menu" :key="item">
            <br/>
            <h3>{{item.title}}</h3>
            <img :src="item.image" height="250" width="250"></img><br/>
            <br/>
            <h7>{{item.instructions}}</h7>
        </div>
    </div>
</template>

<script>

    export default {
        name: "instructions",
        props: {
            dinnerModel: {
                type: Object,
                required: true,
            },
        }
    }
</script>

<style scoped>
    .margin {
        margin: 15px;
    }
    .heading{
        font-size: 1.25rem;
    }
</style>