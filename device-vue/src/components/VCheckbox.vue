<template>
  <label class="checkbox-label">
    <input type="checkbox" class="real-checkbox" :checked="checked" :value="value" @change="updateInput">
    <span class="custom-checkbox" />
    {{ label }}
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    value: {
      type: Number,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: ''
    },
  },
  // computed: {
  //   value: {
  //     get() {
  //       return this.$props.modelValue
  //     },
  //     set(val) {
  //       this.$emit('update:modelValue', val)
  //     }
  //   }
  // },
  mounted() {
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    updateInput(e) {
      let isChecked = e.target.checked
      this.$emit('change', isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-label{
  cursor: pointer;
  font-family: $font-rubic;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
}
.real-checkbox {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
}

.real-checkbox:focus + .custom-checkbox {
    box-shadow: 0px 0px 0px 1px #000000, 0px 0px 10px #000000;
}

.custom-checkbox {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 2px solid #302d2d;
    border-radius: 4px;
    vertical-align: sub;
    margin-right: 5px;
}

.custom-checkbox::before {
    content: '';

    display: inline-block;
    width: 10px;
    height: 10px;

    background-image: url(@/assets/VectorCheckbox.svg);
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    margin-top: 1px;
    transition: 0.2s ease-in;
}

.real-checkbox:checked + .custom-checkbox::before {
    transform: translate(-50%, -50%) scale(1);
}
</style>