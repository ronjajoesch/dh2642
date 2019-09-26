<template>
    <div id="app">
        <Header/>
        <Article/>
        <div class="row">
            <SideMenu class=" col-xs-12 col-sm-5 col-md-5 col-lg-4"/>
            <SelectDish class="col-xs-12 col-sm-7 col-md-7 col-lg-8"/>
        </div>

    </div>
</template>

<script>
    import Header from './components/header/header.vue'
    import Article from './components/article/article.vue'
    import SelectDish from './components/selectDish/selectDish.vue'
    import SideMenu from './components/sideMenu/sideMenu.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Article,
            SelectDish,
            SideMenu,
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }
</style>