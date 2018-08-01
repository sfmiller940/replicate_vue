<template>
  <div class="etf">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <div v-for="stock in stocks" :key="stock.id">
      <input type="checkbox" v-bind:id="'stock'+stock.id" v-bind:value="stock.id" v-model="checked">
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
      checked: []
    }
  },
  created () {
    console.log(this.$parent)
    var self = this
    this.$parent.axios.get('/api/etf/' + this.$parent.$route.params.id).then((response) => {
      console.log(response.data)
      self.stocks = response.data['etf'].stocks
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
