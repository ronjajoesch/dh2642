<template>
  <div id="app">
    <Header />
    <Article />
    <SelectDish/>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import Article from './components/article/article.vue'
import SelectDish from './components/selectDish/selectDish.vue'

export default {
  name: 'app',
  components: {
    Header,
    Article,
    SelectDish,
  },
  data () {
    return {}
  }
}
</script>
