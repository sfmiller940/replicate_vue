<template>
  <div id="app">
    <top></top>
    <router-view/>
  </div>
</template>

<script>
import top from './components/top'
export default {
  name: 'app',
  components: {
    'top': top
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
