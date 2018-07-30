<template>
  <div class="hello">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Brand name indices for less!</h2>
    <button>Replicate ETF</button>
    <div v-for="etf in etfs" :key="etf.id">{{ etf.symbol }}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'MyFolio',
      etfs: []
    }
  },
  created () {
    console.log(this.$parent)
    var self = this
    this.$parent.axios.get('/api/etf').then((response) => {
      self.etfs = response.data['etfs']
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello img{
  transform: rotate(180deg);
}
</style>
