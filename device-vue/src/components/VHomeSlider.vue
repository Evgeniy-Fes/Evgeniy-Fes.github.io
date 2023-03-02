<template>
    <div class="slider container">
        <div class="slider-galery">
            <div class="slick-img">
                <VueSlickCarousel ref="slickImg" :arrow="true" :dots="false">
                    <template #default>
                        <div class="slick-img__card">
                            <img class="slick-img__img" src="@/assets/slider-1.svg" alt="Квадрокоптер">
                        </div>
                        <div class="slick-img__card">
                            <img class="slick-img__img" src="@/assets/slider-1.svg" alt="Квадрокоптер">
                        </div>
                        <div class="slick-img__card">
                            <img class="slick-img__img" src="@/assets/slider-1.svg" alt="Квадрокоптер">
                        </div>
                    </template>

                    <template #prevArrow>
                        <div class="slick-img__arrow slick-img__arrow_left"> &#8249; </div>
                    </template>
                    <template #nextArrow>
                        <div class="slick-img__arrow slick-img__arrow_right"> &#8250; </div>
                    </template>
                </VueSlickCarousel>
            </div>
            <div class="slick-menu">
                <VueSlickCarousel ref="slickMenu" :dots="true">
                    <div class="slick-carousel-description">
                        <p class="description-number">01</p>
                        <p class="description-main">Порхает как бабочка,<br>жалит как пчела!</p>
                        <p class="description-text">Этот обычный, на первый взгляд, квадрокоптер оснащен<br>
                            мощным лазером, замаскированным под стандартную камеру.
                        </p>
                        <div class="slider-decription__nav">
                            <VButton class="slick-menu__button" 
                            :width="buttonWidth" href="#">Подробнее</VButton>
                        </div>
                        <div class="description-block">
                            <ul class="block">
                                <li><span class="block-unit">800 м</span></li>
                                <li><span class="block-text">Дальность полета</span></li>
                            </ul>
                            <ul class="block">
                                <li><span class="block-unit">50 м</span></li>
                                <li><span class="block-text">Радиус поражения</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="slick-carousel-description">
                        <p class="description-number">02</p>
                        <p class="description-main">Порхает как бабочка,<br>жалит как пчела!</p>
                        <p class="description-text">Этот обычный, на первый взгляд, квадрокоптер оснащен<br>
                            мощным лазером, замаскированным под стандартную камеру.
                        </p>
                        <div class="slider-decription__nav">
                            <VButton class="slick-menu__button" :width="buttonWidth" href="#">Подробнее</VButton>
                        </div>
                        <div class="description-block">
                            <ul class="block">
                                <li><span class="block-unit">800 м</span></li>
                                <li><span class="block-text">Дальность полета</span></li>
                            </ul>
                            <ul class="block">
                                <li><span class="block-unit">50 м</span></li>
                                <li><span class="block-text">Радиус поражения</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="slick-carousel-description">
                        <p class="description-number">03</p>
                        <p class="description-main">Порхает как бабочка,<br>жалит как пчела!</p>
                        <p class="description-text">Этот обычный, на первый взгляд, квадрокоптер оснащен<br>
                            мощным лазером, замаскированным под стандартную камеру.
                        </p>
                        <div class="slider-decription__nav">
                            <VButton class="slick-menu__button" :width="buttonWidth" href="#">Подробнее</VButton>
                        </div>
                        <div class="description-block">
                            <ul class="block">
                                <li><span class="block-unit">800 м</span></li>
                                <li><span class="block-text">Дальность полета</span></li>
                            </ul>
                            <ul class="block">
                                <li><span class="block-unit">50 м</span></li>
                                <li><span class="block-text">Радиус поражения</span></li>
                            </ul>
                        </div>
                    </div>
                    <template #customPaging>
                        <div class="slick-menu__dot" />
                    </template>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import VButton from './VButton.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponent',
    props: {
        title: {
            type: String,
        },
    },
    mounted() {
        this.$refs.slickImg.asNavFor = this.$refs.slickMenu
        this.$refs.slickMenu.asNavFor = this.$refs.slickImg
    },
    methods: {
    },
    components: {
        VueSlickCarousel,
        VButton
    },
    data() {
        return {
            buttonWidth: '220px'
        }
    },
}
</script>

<style scoped lang="scss">
.slider {
    background: linear-gradient(to bottom, $color-bg 126px, transparent 126px);

    .slider-galery {
        display: flex;
        gap: 40px;
    }
}

.slick-img {
    max-width: 100%;
    width: 560px;


    &__img {
        pointer-events: none;
    }

    .slick-next:before,
    .slick-prev:before {
        display: none;
    }

    &__arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 70px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 777;

        &_left {
            left: 0;
        }

        &_right {
            right: 0;
        }
    }
}

.slick-menu {
    max-width: 100%;
    width: 560px;
    position: relative;

    &__dot {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 0;
        color: transparent;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }

    ::v-deep .slick-dots {
        position: absolute;
        width: auto;
        right: 0;
        bottom: 130px;
        display: flex !important;
        justify-content: center;
        align-items: center;
        gap: 20px;

        &>li {
            display: block;
            width: 12px;
            height: 12px;
            max-width: 12px;
            border-radius: 100%;
            border: 2px solid $color-text-main;

            &.slick-active {
                background-color: $color-text-main;
            }
        }
    }

    &__button {
        background: #ffffff;
        width: 220px;
    }

    .slider-decription {
        &__nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__dots {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }

        &__dot {
            width: 12px;
            height: 12px;
            border-radius: 100%;
            border: 2px solid $color-text-main;
            cursor: pointer;

            &.active {
                background-color: $color-text-main;
            }
        }
    }

    .slick-carousel-description {
        max-width: 560px;

        .description-number {
            height: 135px;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            font-family: $font-rubic;
            font-style: normal;
            font-weight: 700;
            font-size: 180px;
            line-height: 30px;
            color: $color-number;
            padding-right: 49px;
        }

        .description-main {
            font-family: $font-raleway;
            font-style: normal;
            font-weight: 800;
            font-size: 50px;
            line-height: 50px;
            color: $color-text-main;
            padding-right: 5px;
            padding-bottom: 29px;
            margin-top: -37px;
        }

        .description-text {
            font-family: $font-rubic;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            color: $color-text-desc;
            padding-bottom: 61px;
        }

        .description-block {
            display: flex;
            padding-top: 59px;

            .block {
                &-unit {
                    font-family: $font-rubic;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 36px;
                    line-height: 30px;
                    color: $color-text-main;
                    padding-right: 58px;
                    padding-bottom: 12px;
                }

                &-text {
                    font-family: $font-rubic;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 30px;
                    color: $color-text-desc;
                }
            }
        }
    }
}
</style>