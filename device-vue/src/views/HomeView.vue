<template>
  <div class="home">
    <VSlider />
    <VCategoryList />
    <VDelivery />
    <VAbout />
  </div>
</template>

<script>
import VSlider from '@/components/VSlider.vue'
import VCategoryList from '@/components/VCategoryList.vue';
import VDelivery from '@/components/VDelivery.vue';
import VAbout from '@/components/VAbout.vue'
export default {

  components: {
    VSlider,
    VCategoryList,
    VDelivery,
    VAbout
  }
}
</script>
