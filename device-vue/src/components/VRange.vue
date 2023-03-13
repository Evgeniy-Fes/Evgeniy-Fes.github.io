<template>
   <div class="range_container">
      <vue-slider v-model="value" 
      :order="false" 
      :enable-cross="false" 
      :min="0" 
      :max="10000" 
      :interval="10" >
      </vue-slider>
      <div>value: {{ value }}</div>
   </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
require('vue-slider-component/theme/default.css')

export default {
   data: function () {
      return {
         value: [0, 5000],
      }
   },
   components: {
      VueSlider
   }
}
</script>

<style scoped lang="scss">
// .range_container {
//    display: flex;
//    flex-direction: column;
//    width: 76%;
// }

// .sliders_control {
//    position: relative;
//    min-height: 15px;
// }


// input[type=range]::-webkit-slider-thumb {
//    -webkit-appearance: none;
//    pointer-events: all;
//    width: 18px;
//    height: 18px;
//    background-color: #ffffff;
//    border-color: black;
//    border-radius: 50%;
//    box-shadow: 0 0 0 1px #000000;
//    cursor: pointer;
// }


// input[type=range]::-webkit-slider-thumb:hover {
//    background: #000000;
// }

// input[type=range]::-webkit-slider-thumb:active {
//    box-shadow: inset 0 0 3px #6caae8, 0 0 9px #6caae8;
//    -webkit-box-shadow: inset 0 0 3px #6caae8, 0 0 9px #6caae8;
// }

// input[type="range"] {
//    -webkit-appearance: none;
//    appearance: none;
//    height: 2px;
//    width: 100%;
//    position: absolute;
//    background-color: black;
//    pointer-events: none;
// }

// #fromSlider {
//    height: 0;
//    z-index: 1;
// }
</style>
