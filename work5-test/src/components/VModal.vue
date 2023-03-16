<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div :class="['modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable', 'store-modal', { 'fixed': usePos }]"
            :style="{
                '--pos-left': posLeft + 'px',
                '--pos-top': posTop + 'px',
            }">
            <div class="modal-content store-modal-wrapper">
                <div class="modal-body store-modal-body">
                    <div class="store-modal-body__header">
                        <h1 class="modal-title fs-5 store-modal-title" id="exampleModalLabel">Создать магазин</h1>
                        <button type="button" class="store-modal__icon icon-cross" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="store-modal-body__content">
                        <div class="store-modal-selects">
                            <div class="store-modal-select">
                                <div class="store-modal-subtitle">Шаблон</div>
                                <select class="form-select store-modal-select store-modal-select__text"
                                    aria-label="Пример выбора по умолчанию">
                                    <option selected>Стандартный</option>
                                    <option value="1">Один</option>
                                    <option value="2">Два</option>
                                    <option value="3">Три</option>
                                </select>
                            </div>
                            <div class="store-modal-select">
                                <div class="store-modal-subtitle">Цветовая схема</div>
                                <select class="form-select store-modal-select store-modal-select__text"
                                    aria-label="Пример выбора по умолчанию">
                                    <option selected>Классическая</option>
                                    <option value="1">Один</option>
                                    <option value="2">Два</option>
                                    <option value="3">Три</option>
                                </select>
                            </div>
                        </div>
                        <div class="store-modal-domen">
                            <div class="store-modal-subtitle">Домен</div>
                        </div>
                        <div class="input-group mb-3 store-modal-input">
                            <input type="text" class="form-control store-modal-input__text"
                                placeholder="Например: ivangrozniy" aria-label="Example text with button addon"
                                aria-describedby="button-addon1">
                            <button class="btn btn-outline-secondary store-modal-input__button" type="button"
                                id="button-addon1">.work5.ru</button>
                        </div>
                        <div class="store-modal-subtext">
                            <img class="store-modal-subtext__img" src="@/assets/warning.svg">
                            <p class="store-modal-subtext__text">В названии домена разрешены латиница и “-”, запрещается
                                использовать
                                <br> словосочетание Work 5. После создания магазина Вы сможете прикрутить свой
                                <br> домен (например ivangrozniy.ru). Подробнее по <a href="#" target="_blank">ссылке</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer store-modal-footer">
                    <VButton class="store-modal-footer__button" type="cancel" data-bs-dismiss="modal">Отмена</VButton>
                    <VButton class="store-modal-footer__button">Создать</VButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from './VButton.vue';

export default {
    name: 'VModal',
    props: {
        id: {
            type: String,
            required: true,
        },
        posLeft: {
            type: Number,
            default: 0,
        },
        posTop: {
            type: Number,
            default: 0,
        },
        usePos: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {

        }
    },
    components: {
        VButton,
    }
}
</script>

<style lang="scss">
@media all and (min-width: 937px) {
    .modal-backdrop.show {
        opacity: 0;
    }
}

.store-modal {
    @media all and (min-width: 576px) {
        max-width: 617px;
        width: 100%;
    }

    @media all and (min-width: 937px) {
        &.fixed {
            position: fixed;
            left: var(--pos-left);
            top: var(--pos-top);
            margin: 19px 0 0 0 !important;
            min-height: 1px;
            height: auto;
        }
    }

    &-body {
        padding: 30px 20px 0 30px;


        &__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 44px;
        }

        &__content {}
    }

    &-input {

        &__text {
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: $color-text-menu;
            background: $color-placeholder;
            border-radius: 4px;
            border: none;
        }

        &__button {
            background: $color-active;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: $color-text-light;
            width: 151px;
            border-radius: 4px !important;

            &:hover,
            &:active {
                background: $color-active !important;
            }



            @media all and (max-width: 575px) {
                width: 35%;
            }
        }
    }

    &-subtext {
        display: flex;
        align-items: center;
        gap: 20px;

        &__text {
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            color: $color-text-menu;
            margin-bottom: 0;
        }
    }

    &-footer {
        border: none;
        padding: 44px 32px 35px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        flex-wrap: nowrap;

        &__button {
            max-width: 151px;
            width: 100%;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: $color-text-light;
        }
    }

    &__icon {
        padding: 0;
        width: 17px;
        height: 17px;
        border: 1px solid $color-close;
        border-radius: 100%;
        font-size: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background: transparent;
    }

    &-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 21px;
        color: $color-text-secondary;

        @media all and (max-width: 575px) {
            margin-bottom: 16px;
        }
    }

    &-subtitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: $color-text-secondary;
        padding: 0 0 5px 1px;
    }

    &-wrapper {
        width: 100%;
        background: $color-text-light;
        box-shadow: 0px 30px 38px rgba(37, 37, 37, 0.1);
        border: none;
    }

    &-selects {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
        gap: 32px;

        @media all and (max-width: 575px) {
            gap: 16px;
            margin-bottom: 16px;
        }
    }

    &-select {
        width: 240px;

        @media all and (max-width: 575px) {
            width: 100%;
        }

        &__text {
            font-weight: 400;
            font-size: 12px;
            line-height: 21px;
            color: $color-text-select;
        }

    }
}</style>