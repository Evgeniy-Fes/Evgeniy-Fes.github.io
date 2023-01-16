<template>
  <div id="app">
    <div class="container">
    <VHeader :user="{
      name: 'Евгений Фесюк'
    }"
    />
    
    <router-view/>

  </div>
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
.container {
    max-width: 1160px;
    margin: 0 auto;
}
</style>
