<template>
    <div class="product-card1">
        <img class="product-card1__img" :src="imgSrc">
        <div class="product-card1__subtitle">
            <p class="product-card1__text">{{ name }}</p>
            <p class="product-card1__price">{{ price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped lang="scss">
.product-card1 {
    width: 360px;
    height: 452px;

    &__img {
        width: 360px;
        height: 380px;
        margin-bottom: 32px;
    }

    &__subtitle {
        display: flex;
        justify-content: space-between;
    }

    &__text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: $color-text-main;
    }

    &__price {
        width: 80px;
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        text-align: right;
        color: $color-text-desc;
    }
}
</style>