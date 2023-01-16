<template>
    <div class="slider">
        <div class="slider-galery">
            <div class="slick-img">
                <VueSlickCarouselImg>
                    <div class="carousel-card">
                        <img class="foto-description" src="@/assets/slider-1.svg" alt="Квадрокоптер">
                    </div>
                    <div class="carousel-card">
                        <img class="foto-description" src="@/assets/slider-1.svg" alt="Квадрокоптер">
                    </div>
                    <div class="carousel-card">
                        <img class="foto-description" src="@/assets/slider-1.svg" alt="Квадрокоптер">
                    </div>
                </VueSlickCarouselImg>
            </div>
            <div class="slick-menu">
                <VueSlickCarouselMenu>
                    <div class="slick-carousel-description">
                        <p class="description-number">01</p>
                        <p class="description-main">Порхает как бабочка,<br>жалит как пчела!</p>
                        <p class="description-text">Этот обычный, на первый взгляд, квадрокоптер оснащен<br>
                            мощным лазером, замаскированным под стандартную камеру.
                        </p>
                        <div class="slider-decription__nav">
                            <a class="slick-menu__button" href="#">Подробнее</a>
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
                            <a class="slick-menu__button" href="#">Подробнее</a>
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
                            <a class="slick-menu__button" href="#">Подробнее</a>
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
                </VueSlickCarouselMenu>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarouselImg from 'vue-slick-carousel'
import VueSlickCarouselMenu from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponent',
    components: {
        VueSlickCarouselImg,
        VueSlickCarouselMenu
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

    .foto-wrapper {
        max-width: 560px;
        max-height: 560px;
        position: relative;

        .foto-description {
            object-fit: cover;
        }
    }

    .slick {
        &-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: black;
            font-size: 70px;
            cursor: pointer;
        }

        &__prev {
            left: 0;
        }

        &__next {
            right: 0;
        }

    }
}

.slick-menu {
    max-width: 100%;
    width: 560px;

    & .slick-menu-dots {
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

            &>button {
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
        }
    }

    &__button {
        @include button-main(210px);
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
            justify-content: end;
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