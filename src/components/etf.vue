<template>
  <div class="hello">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <div v-for="etf in etfs" :key="etf.id">{{ etf.symbol }}</div>
  </div>
</template>

<script>
export default {
  name: 'etf',
  data () {
    return {
      etfs: []
    }
  },
  created () {
    console.log(this.$parent)
    var self = this
    this.$parent.axios.get('/api/etf').then((response) => {
      self.etfs = response.data['etfs']
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.hello img{
  transform: rotate(180deg);
}
</style>
