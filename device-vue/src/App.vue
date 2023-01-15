<template>
  <div id="app">
    <VHeader :user="{
      name: 'Евгений Фесюк'
    }"
    />
    
    <router-view/>

    <VFooter />
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import VFooter from './components/VFooter.vue';
export default {
  components: {
    VHeader,
    VFooter,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
