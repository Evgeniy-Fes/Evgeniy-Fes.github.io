<template>
    <form class="filter" @submit="onSubmit">
        <div class="filter-title">Фильтр:</div>
        <div class="filter-line"></div>
        <div class="filter-text">Стоимость</div>
        <div class="filter-range">
            <VRange />
        </div>
        <div class="filter-line"></div>
        <div class="filter-text">Цвет</div>
        <div class="filter-checkbox">
            <VCheckbox />
        </div>
        <div class="filter-line"></div>
        <div class="filter-text">Bluetooth</div>
        <div class="filter-radio">
            <VRadio />
        </div>
        <div class="filter-nav">
            <VButton class="filter__button" :width="buttonWidth" type="submit">Показать</VButton>
        </div>
    </form>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VCheckbox from "@/components/VCheckbox.vue";
import VRadio from "@/components/VRadio.vue";
import VRange from "@/components/VRange.vue";

export default {
    components: {
        VButton,
        VCheckbox,
        VRadio,
        VRange
    },
    data() {
        return {
            buttonWidth: '210px'
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            console.log('onSubmit',e)
        }
    }
}
</script>

<style scoped lang="scss">
.filter {
    padding-top: 25px;
    padding-left: 60px;
    width: 320px;

    &-title {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
        padding-bottom: 60px;
        line-height: 30px;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: $color-text-main;
        padding-top: 12px;
        padding-bottom: 20px;
    }

    &-line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        border: 1px solid #000000;
    }

    &-checkbox {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding-bottom: 30px;
    }

    &-radio {
        display: flex;
        flex-direction: column;
        gap: 21px;
        padding-bottom: 46px;
    }
}
</style>