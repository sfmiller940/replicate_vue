<template>
  <div class="center">
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
  mounted () {
    var self = this
    this.$parent.axios.get('/api/etf').then((response) => {
      self.etfs = response.data
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
