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
body,html{
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
}
a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>
