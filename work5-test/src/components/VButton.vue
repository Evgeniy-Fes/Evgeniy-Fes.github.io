<template>
    <button type="button" :class="['btn', 'button', `button-${type}`]" :style="{
        '--width': width,
    }">
        <span class="button__icon" v-if="$slots.icon">
            <slot name="icon" />
        </span>
        <span class="button__text">
            <slot />
        </span>
    </button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        // типы кнопки success, cancel
        type: {
            type: String,
            default: 'success'
        },
        width: {
            type: String,
            default: 'auto'
        },
    }
}
</script>

<style lang="scss">
.button{
    background-color: var(--background);
    font-weight: 400;
    font-size: 12px;
    height: 36px;
    width: var(--width);
    border: none;
    color: $color-text-light;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    &__icon{
        display: flex;
        justify-content: center;
        align-items: center;
        color: $color-text-light;
        margin-right: 14px;
        font-size: 20px;
    }
}
.button-success{
    background-color: $color-success;

    &:hover,
    &:active{
        opacity: .9;
        color: $color-text-light !important;
        background-color: $color-success !important;
        border: none;
    }
}
.button-cancel{
    background-color: $color-gray;

    &:hover,
    &:active{
        opacity: .9;
        color: $color-text-light !important;
        background-color: $color-gray !important;
        border: none;
    }
}
</style>