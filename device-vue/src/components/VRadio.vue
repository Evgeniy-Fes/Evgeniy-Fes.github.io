<template>
    <label class="radio-label">
        <input type="radio" class="real-radio" 
        :name="name" 
        :checked="checked" 
        :value="value" 
        @change="updateInput">
        <span class="custom-radio" />
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
        name: {
            type: String,
            required: true,
        },
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
    methods: {
        updateInput(e) {
            let isChecked = e.target.checked
            this.$emit('change', isChecked)
        }
    }
}
</script>

<style scoped lang="scss">
.radio-label {
    cursor: pointer;
    font-family: $font-rubic;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}

.real-radio {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1;
}

.custom-radio {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 2px solid black;
    border-radius: 50%;
    vertical-align: text-top;
    margin-right: 5px;
}

.custom-radio::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #000000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in;
}

.real-radio:checked+.custom-radio::before {
    transform: translate(-50%, -50%) scale(1);
}
</style>