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
      user: {}
    }
  },
  created () {
    if (!localStorage.getItem('user')) localStorage.setItem('user', JSON.stringify({'assets': {}, 'baskets': {}}))
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user['assets'].hasOwnProperty(this.etf_id.toString())) this.assets = this.user['assets'][this.etf_id]
    if (this.user['baskets'].hasOwnProperty(this.etf_id.toString())) this.basket = this.user['baskets'][this.etf_id]
    if (!(this.assets && this.basket)) {
      var self = this
      this.$parent.axios.get('/api/etf/' + this.etf_id).then((response) => {
        self.assets = response.data['etf'].basket
        self.basket = self.assets.map(asset => asset.id)
      })
    }
  },
  beforeDestroy () {
    this.user['assets'][this.etf_id] = this.assets
    this.user['baskets'][this.etf_id] = this.basket
    localStorage.setItem('user', JSON.stringify(this.user))
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
