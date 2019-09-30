<template>
    <div class="home img-fluid rounded ">
        <!--<img src="/src/assets/brooke-lark-08bOYnH_r_E-unsplash.jpg" class="img-fluid rounded mx-auto" "> -->
        <div id="rightDiv" class="col-md-6 col-xl-5 mt-xl-5 float-right">
            <h4>Welcome </h4>
            <p>This is our amazing Dinner Planner. You can create your the dinner of your dreams. </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    img {
        max-height: 600px;
    }

    .home {
        background: url('/src/assets/brooke-lark-08bOYnH_r_E-unsplash.jpg') no-repeat;
        background-size: cover;
        height: 500px;
    }

    #rightDiv {
        height: inherit;
        margin-top: 50px;
        margin-right: 50px;
    }

</style>