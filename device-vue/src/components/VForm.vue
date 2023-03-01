<template>
    <form class="filter" @submit="onSubmit">
        <div class="filter-title">Фильтр:</div>
        <div class="filter-line"></div>
        <div class="filter-text">Стоимость</div>
        <div class="filter-range">
            <VFormRange />
        </div>
        <div class="filter-line"></div>
        <div class="filter-text">Цвет</div>
        <div class="filter-checkbox">
            <div class="checkbox-wrapper">
                <VCheckbox v-for="item in checkboxes" :key="item.id" :label="item.label" :value="item.id"
                    v-model="item.checked" />
            </div>
        </div>
        <div class="filter-line"></div>
        <div class="filter-text">Bluetooth</div>
        <div class="filter-radio">
            <div class="radio-wrapper">
                <VRadio v-for="item in radio" :key="item.id" :label="item.label" :value="item.id" v-model="item.checked" />
            </div>
        </div>
        <div class="filter-nav">
            <VButton class="filter__button" :width="buttonWidth" type="submit">Показать</VButton>
        </div>
    </form>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VFormRange from "@/components/VFormRange.vue";
import VRadio from "@/components/VRadio.vue";
import VCheckbox from "@/components/VCheckbox.vue";

export default {
    data() {
        return {
            buttonWidth: '210px',
            radio: [
                {
                    label: 'Есть',
                    id: 1,
                    checked: false,
                },
                {
                    label: 'Нет',
                    id: 2,
                    checked: true,
                },
            ],
            checkboxes: [
                {
                    label: 'Белый',
                    id: 1,
                    checked: false,
                },
                {
                    label: 'Черный',
                    id: 2,
                    checked: true,
                },
                {
                    label: 'Синий',
                    id: 3,
                    checked: false,
                },
                {
                    label: 'Красный',
                    id: 4,
                    checked: true,
                },
                {
                    label: 'Розовый',
                    id: 5,
                    checked: false,
                },
            ],
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            console.log('onSubmit', e)
        },
        updateInput(e) {
            this.inputText = e.target.value
        },
    },
    components: {
        VButton,
        VFormRange,
        VRadio,
        VCheckbox
    },
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
.checkbox-wrapper{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 17px;
    flex-direction: column;
}

.radio-wrapper{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column;
}
</style>