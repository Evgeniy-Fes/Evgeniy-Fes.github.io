<template>
    <div class="button">
        <button type="button" class="btn" :style="{
            '--background': color
        }" >
            <span class="button__text">
            <slot />
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        color: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss"></style>