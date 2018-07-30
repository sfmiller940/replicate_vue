<template>
  <header>
    <a>Login</a>
    <span class="coming">Coming Soon!</span>
  </header>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  text-align: right;
  margin: 1rem 1rem 5rem;
}
.coming{
  float: right;
  color: red;
  margin-left: 1rem;
}
</style>
