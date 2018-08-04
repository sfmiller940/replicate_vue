<template>
  <div class="center">
    <div v-for="asset in assets" :key="asset.id">
      <input type="checkbox" :id="'asset'+asset.id" :value="asset.id" v-model="basket">
      <label v-bind:for="'asset'+asset.id">{{ asset.symbol }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'etf',
  data () {
    return {
      assets: [],
      basket: [],
      etf_id: this.$parent.$route.params.id,
      storj: {}
    }
  },
  created () {
    if (!localStorage.getItem('storj')) localStorage.setItem('storj', JSON.stringify({'assets': {}, 'baskets': {}}))
    this.storj = JSON.parse(localStorage.getItem('storj'))
    if (this.storj['assets'].hasOwnProperty(this.etf_id.toString())) this.assets = this.storj['assets'][this.etf_id]
    if (this.storj['baskets'].hasOwnProperty(this.etf_id.toString())) this.basket = this.storj['baskets'][this.etf_id]
    if (!(this.assets.length && this.basket.length)) {
      var self = this
      this.$parent.axios.get('/api/etf/' + this.etf_id).then((response) => {
        self.assets = response.data['etf'].basket
        self.basket = self.assets.map(asset => asset.id)
      })
    }
    console.log(this.storj)
  },
  beforeDestroy () {
    this.storj['assets'][this.etf_id] = this.assets
    this.storj['baskets'][this.etf_id] = this.basket
    localStorage.setItem('storj', JSON.stringify(this.storj))
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
