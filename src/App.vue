<template>
  <div id="app">
    <Header />
    <Article />
    <Dish/>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import Article from './components/article/article.vue'
import Dish from './components/selectDish/dish.vue'

export default {
  name: 'app',
  components: {
    Header,
    Article,
    Dish,
  },
  data () {
    return {}
  }
}
</script>
