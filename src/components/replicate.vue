<template>
  <div class="center">
    response here
  </div>
</template>

<script>
export default {
  name: 'replicate',
  data () {
    return {
      basket: [],
      etf_id: this.$parent.$route.params.id,
      sesh: {}
    }
  },
  mounted () {
    if (!sessionStorage.getItem('sesh')) {
      this.$parent.$router.push('/etf/' + this.etf_id)
      return
    }
    this.sesh = JSON.parse(sessionStorage.getItem('sesh'))
    if (!this.sesh['baskets'].hasOwnProperty(this.etf_id)) {
      this.$parent.$router.push('/etf/' + this.etf_id)
      return
    }
    this.basket = this.sesh['baskets'][this.etf_id]
    this.$parent.axios
      .post('/api/replicate', {basket: this.basket.concat([parseInt(this.etf_id)])})
      .then((response) => {
        console.log(response)
      })
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
