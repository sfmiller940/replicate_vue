<template>
  <div class="etf">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <div v-for="stock in stocks" :key="stock.id">
      <input type="checkbox" :id="'stock'+stock.id" :value="stock.id" v-model="basket">
      <label v-bind:for="'stock'+stock.id">{{ stock.symbol }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'etf',
  data () {
    return {
      stocks: [],
      basket: []
    }
  },
  created () {
    var self = this
    this.$parent.axios.get('/api/etf/' + this.$parent.$route.params.id).then((response) => {
      self.stocks = response.data['etf'].stocks
      self.basket = self.stocks.map(stock => stock.id)
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.etf{
  text-align: center;
}
.etf img{
  transform: rotate(180deg);
}
</style>
