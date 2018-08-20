<template>
  <div class="center">
    <div v-for="asset in assets" :key="asset.id">
      <input type="checkbox" :id="'asset'+asset.id" :value="asset.id" v-model="basket">
      <label v-bind:for="'asset'+asset.id">{{ asset.symbol }}</label>
    </div>
    <router-link :to="{path: '/etf/' + etf_id + '/replicate'}">
      Replicate
    </router-link>
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
      sesh: {}
    }
  },
  mounted () {
    if (!sessionStorage.getItem('sesh')) sessionStorage.setItem('sesh', JSON.stringify({'assets': {}, 'baskets': {}}))
    this.sesh = JSON.parse(sessionStorage.getItem('sesh'))
    if (this.sesh['assets'].hasOwnProperty(this.etf_id)) this.assets = this.sesh['assets'][this.etf_id]
    if (this.sesh['baskets'].hasOwnProperty(this.etf_id)) this.basket = this.sesh['baskets'][this.etf_id]
    if (!(this.assets.length && this.basket.length)) {
      var self = this
      this.$parent.axios.get('/api/etf/' + this.etf_id).then((response) => {
        self.assets = response.data.basket
        self.basket = self.assets.map(asset => asset.id)
      })
    }
  },
  beforeDestroy () {
    this.sesh['assets'][this.etf_id] = this.assets
    this.sesh['baskets'][this.etf_id] = this.basket
    sessionStorage.setItem('sesh', JSON.stringify(this.sesh))
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
