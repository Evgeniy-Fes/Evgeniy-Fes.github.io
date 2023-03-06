<template>
   <div class="range_container">
      <form class="sliders_control">
         <input id="fromSlider" type="range" step="1" value="20" min="0" max="100" />
         <input id="toSlider" type="range" step="1" value="90" min="0" max="100" />
      </form>
      <div class="range-text">
         <div class="text">от 0</div>
         <div class="text">до 10000</div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         minPrice: 0,
         maxPrice: 10000
      }
   }
}
</script>

<style scoped lang="scss">
.range_container {
   display: flex;
   flex-direction: column;
   width: 76%;
}

.sliders_control {
   position: relative;
   min-height: 15px;
}


input[type=range]::-webkit-slider-thumb {
   -webkit-appearance: none;
   pointer-events: all;
   width: 18px;
   height: 18px;
   background-color: #ffffff;
   border-color: black;
   border-radius: 50%;
   box-shadow: 0 0 0 1px #000000;
   cursor: pointer;
}


input[type=range]::-webkit-slider-thumb:hover {
   background: #000000;
}

input[type=range]::-webkit-slider-thumb:active {
   box-shadow: inset 0 0 3px #6caae8, 0 0 9px #6caae8;
   -webkit-box-shadow: inset 0 0 3px #6caae8, 0 0 9px #6caae8;
}

input[type="range"] {
   -webkit-appearance: none;
   appearance: none;
   height: 2px;
   width: 100%;
   position: absolute;
   background-color: black;
   pointer-events: none;
}

#fromSlider {
   height: 0;
   z-index: 1;
}

.range-text {
   display: flex;
   justify-content: space-between;
   padding-bottom: 35px;
}

.text {
   font-family: $font-rubic;
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 18px;
   text-align: center;
   color: #000000;
   opacity: 0.3;
}
</style>
