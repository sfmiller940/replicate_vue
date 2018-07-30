<template>
  <header>
    <div class="user">
      <router-link to="/">Login</router-link>
      <span class="coming">Coming Soon!</span>
    </div>
    <div class="logo">
      <router-link to="/">Home</router-link>
    </div>
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
  float: left;
  width: 100%;
  padding: 1rem 1rem 5rem;
}
.user{
  float: right;
}
.coming{
  float: right;
  color: red;
  margin-left: 1rem;
}
.logo{
  float: left;
}
</style>
