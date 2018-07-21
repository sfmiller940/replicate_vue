<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Brand name indices for less!</h2>
    <div v-for="etf in etfs" :key="etf.id">{{ etf.symbol }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      msg: 'MyFolio',
      etfs: []
    }
  },
  created () {
    var self = this
    axios.get('/api/etf').then((response) => {
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
</style>
