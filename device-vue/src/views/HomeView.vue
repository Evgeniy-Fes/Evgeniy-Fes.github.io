<template>
  <div class="home">
    <VHomeSlider />
    <VHomeCategoryList />
    <VHomeDelivery />
    <VHomeAbout />
  </div>
</template>

<script>
import VHomeSlider from '@/components/VHomeSlider.vue'
import VHomeCategoryList from '@/components/VHomeCategoryList.vue';
import VHomeDelivery from '@/components/VHomeDelivery.vue';
import VHomeAbout from '@/components/VHomeAbout.vue'
export default {

  components: {
    VHomeSlider,
    VHomeCategoryList,
    VHomeDelivery,
    VHomeAbout
  }
}
</script>
