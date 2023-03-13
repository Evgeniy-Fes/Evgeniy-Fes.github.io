<template>
    <form class="catalog-form" @submit="onSubmit">
        <div class="catalog-form__title">Фильтр:</div>
        <div class="catalog-form__line"></div>
        <div class="catalog-form__text">Стоимость</div>
        <div class="catalog-form__range">
            <VRange 
            v-model="value"/>
        </div>
        <div class="catalog-form__line"></div>
        <div class="catalog-form__text">Цвет</div>
        <div class="catalog-form__checkbox">
            <div class="checkbox-wrapper">
                <VCheckbox v-for="item in checkboxes" 
                :key="item.id" 
                :label="item.label" 
                :value="item.id"
                v-model="item.checked" />
            </div>
        </div>
        <div class="catalog-form__line"></div>
        <div class="catalog-form__text">Bluetooth</div>
        <div class="catalog-form__radio">
            <div class="radio-wrapper">
                <VRadio v-for="item in radios" 
                :key="item.id" 
                :label="item.label" 
                :value="item.id" 
                :name="item.name"
                v-model="item.checked" />
            </div>
        </div>
        <div class="catalog-form__nav">
            <VButton class="catalog-form__button" 
            :width="buttonWidth" 
            type="submit"> Показать </VButton>
        </div>
    </form>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VRange from "@/components/VRange.vue";
import VRadio from "@/components/VRadio.vue";
import VCheckbox from "@/components/VCheckbox.vue";

export default {
    data() {
        return {
            buttonWidth: '210px',
            radios: [
                {
                    label: 'Есть',
                    id: 1,
                    checked: false,
                    name: 'choise',
                },
                {
                    label: 'Нет',
                    id: 2,
                    checked: true,
                    name: 'choise',
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
        VRange,
        VRadio,
        VCheckbox
    },
}
</script>

<style scoped lang="scss">
.catalog-form {
    padding-top: 25px;
    padding-left: 60px;
    width: 320px;

    &__title {
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

    &__text {
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

    &__line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        border: 1px solid #000000;
    }

    &__checkbox {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding-bottom: 30px;
    }

    &__radio {
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