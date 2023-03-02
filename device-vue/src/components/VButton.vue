<template>
  <button class="button" :style="{
    '--width': width,
    '--lineHeight': lineHeight,
  }">
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100px'
    },
    lineHeight: {
      type: String,
      default: '40px'
    },
  }
}
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  width: auto;
  font-weight: 800;
  font-size: 18px;
  line-height: var(--lineHeight);
  vertical-align: middle;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: $font-raleway;
  color: $color-text-main;
  padding: 0 10px;
  text-transform: uppercase;
  min-width: var(--width);
  position: relative;
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    height: 8px;
    width: 100%;
    background-color: $color-bg;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
  }

  &__text {
    position: relative;
    z-index: 1;
  }
}
</style>