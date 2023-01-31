<template>
    <form class="filter" @submit="onSubmit">
        <div class="filter-title">Фильтр:</div>
        <div class="filter-line"></div>
        <div class="filter-text">Стоимость</div>
        <div class="filter-form">
            <input type="range" class="min" min="0" max="1000" value="300" step="10">
            <input type="range" class="max" min="0" max="1000" value="700" step="10">
        </div>
        <div class="filter-line"></div>
        <div class="filter-text">Цвет</div>
        <div class="filter-checkbox">
            <div>
                <input type="checkbox" id="black" name="interest" value="black" checked />
                <label for="black">Черный</label>
            </div>
            <div>
                <input type="checkbox" id="white" name="interest" value="white" checked />
                <label for="white">Белый</label>
            </div>
            <div>
                <input type="checkbox" id="blue" name="interest" value="blue" />
                <label for="blue">Синий</label>
            </div>
            <div>
                <input type="checkbox" id="red" name="interest" value="red" />
                <label for="red">Красный</label>
            </div>
            <div>
                <input type="checkbox" id="pink" name="interest" value="pink" />
                <label for="pink">Розовый</label>
            </div>
        </div>
        <div class="filter-text">Bluetooth</div>
        <div class="filter-radio">
            <div class="filter-radio-wrapper">
                <input type="radio" id="Choice1" name="choice" value="yes" checked>
                <label for="Choice1">Есть</label>
            </div>
            <div class="filter-radio-wrapper">
                <input type="radio" id="Choice2" name="choice" value="no">
                <label for="Choice2">Нет</label>
            </div>
        </div>
        <div class="filter-nav">
            <VMainButton class="filter__button" :width="buttonWidth" type="submit">Показать</VMainButton>
        </div>
    </form>
</template>

<script>
import VMainButton from "@/components/VMainButton.vue";

export default {
    components: {
        VMainButton,
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