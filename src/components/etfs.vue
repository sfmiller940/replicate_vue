<template>
  <div class="etfs">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <div v-for="etf in etfs" :key="etf.id">
      <router-link :to="{path: '/etf/' + etf.id}">
        {{ etf.symbol }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'etfs',
  data () {
    return {
      etfs: []
    }
  },
  created () {
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
.etfs{
  text-align: center;
}
.etfs img{
  transform: rotate(180deg);
}
</style>
