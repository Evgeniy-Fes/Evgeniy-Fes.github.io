<template>
    <div>
        <div class="delivery container">
            <div class="delivery-left">
                <ul class="delivery-left-list">
                    <li class="delivery-left-item" v-for="(item, idx) of deliveryData" :key="idx"
                        @click.prevent="changeCurrentTab(item)">
                        <VButton :class="['delivery-left-nav', { active: item.active }]" :width="buttonWidth" :href="`#${item.buttonId}`">
                            {{ item.title }}
                        </VButton>
                    </li>
                </ul>
            </div>
            <div class="delivery-right">
                <div :class="['delivery-right__tab-content', { active: item.active }]"
                    v-for="(item, idx) of deliveryData" :key="idx" :id="item.buttonId">
                    <div class="delivery-right-menu__wrapper">
                        <div class="delivery-right-menu">
                            <h3 class="delivery-right-main">{{ item.title }}</h3>
                            <p class="delivery-right-text" v-html="item.text" />
                        </div>
                        <div class="delivery-right-icon">
                            <img class="delivery-right-img" :src="getImgUrl(item.icon)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-bg"></div>
        </div>
        <div class="delivery-rare container">
            <div class="delivery-rare-car">
                <img class="delivery-rare-img" src="@/assets/car.svg">
            </div>
            <div class="delivery-rare-text">
                Доставим редкий товар под заказ
            </div>
            <div class="delivery-rare-icon">
                <p class="delivery-rare-border">i</p>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from './VButton.vue'

export default {
    comments: {
        VButton
    },
    data() {
        return {
            buttonWidth: '160px',
            deliveryData: [
                {
                    buttonId: 'delivery-info-1',
                    title: 'Доставка',
                    text: `Мы с удовольствием доставим ваш товар прямо
                                <br>к вашему подъезду совершенно бесплатно! Ведь
                                <br>мы неплохо заработаем, поднимая его на ваш этаж.`,
                    icon: 'people.svg',
                    active: true,
                },
                {
                    buttonId: 'delivery-info-2',
                    title: 'Гарантия',
                    text: `Мы с удовольствием доставим ваш товар прямо
                                <br>к вашему подъезду совершенно бесплатно! Ведь
                                <br>мы неплохо заработаем, поднимая его на ваш этаж.`,
                    icon: 'people.svg',
                    active: false,
                },
                {
                    buttonId: 'delivery-info-3',
                    title: 'Кредит',
                    text: `Мы с удовольствием доставим ваш товар прямо
                                <br>к вашему подъезду совершенно бесплатно! Ведь
                                <br>мы неплохо заработаем, поднимая его на ваш этаж.`,
                    icon: 'people.svg',
                    active: false,
                },
            ]
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('@/assets/' + pic)
        },
        changeCurrentTab(item) {
            this.deliveryData.forEach(el => {
                if (el.buttonId === item.buttonId) {
                    el.active = true
                } else {
                    el.active = false
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.delivery {
    width: 100%;
    height: 390px;
    display: flex;
    position: relative;

    &-bg {
        position: absolute;
        width: 100vw;
        height: 289px;
        background: #F0F0F0;
        z-index: -2;
        left: calc(-1*((100vw - 100%) / 2));
        top: 102px;
    }
}

.delivery-left {
    width: 280px;

    &-list {
        position: relative;
        padding-top: 73px;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    &-list::before {
        position: absolute;
        content: "";
        top: 5px;
        right: 0px;
        width: 7px;
        height: 319px;
        background-color: $color-text-main;
    }

    &-item {
        width: 100%;
    }

    &-nav {
        @include button-main(160px, 40px);

        height: 40px;

        &:hover,
        &.active {
            color: $color-bg;
            background: $color-text-main;
            width: 100%;
            text-align: left;
            padding-left: 15px;
        }
    }
}

.delivery-right {
    width: 880px;
    padding-left: 116px;

    &__tab-content {
        display: none;

        &.active {
            display: block;
        }
    }

    &-menu {
        width: 680px;

        &__wrapper {
            display: flex;
        }
    }

    &-main {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 50px;
        color: $color-text-main;
        padding-top: 73px;
        padding-bottom: 34px;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-desc;
    }

    &-icon {
        width: 200px;
    }

    &-img {
        padding-top: 77px;
        padding-right: 63px;
    }
}


.delivery-rare {
    display: flex;
    width: 1160px;
    height: 100px;
    background: #F0F0F0;
    margin-top: 70px;
    margin-bottom: 70px;

    &-car {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 125px;
        background-color: $color-bg;
    }

    &-text {
        width: 910px;
        height: 20px;
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
        padding-top: 40px;
    }

    &-icon {
        width: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &-border {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        background: rgba(220, 220, 220, 0.5);
        padding-top: 13px;
    }
}
</style>