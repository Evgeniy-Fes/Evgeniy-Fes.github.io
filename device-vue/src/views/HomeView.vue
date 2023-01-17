<template>
  <div class="home">
    <VSlider title="123" id="1">
      text
      <template #title="item">
        title {{ item.data }}
      </template>
      <template #subtitle>
        subtitle
      </template>
    </VSlider>
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
