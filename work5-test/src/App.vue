<template>
  <div id="app">
    <div class="container-fluid content">
      <div class="row flex-nowrap">
        <VSidebar />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js"
import VSidebar from './components/VSidebar.vue';

export default {
  components: {
    VSidebar,
  }
}
</script>
<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";

.content{
  background-color: $color-bg;
}
</style>
