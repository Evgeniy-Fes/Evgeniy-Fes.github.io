<template>
    <div class="menu">
        <div class="catalog">
            <div class="catalog__title">Сортировка:</div>
            <div class="catalog__inset">
                <div class="catalog__text">Популярные</div>
                <img class="catalog__arrows" src="@/assets/CatalogMenuArrovs.svg">
            </div>
            <div class="catalog__arrows">
                <img class="catalog__arrows-up" src="@/assets/UpArrow.svg">
                <img class="catalog__arrows-down" src="@/assets/DownArrow.svg">
            </div>
        </div>
        <div class="catalog-product">
            <VProductCard1
            v-for="product in products"
            :key="product.id"
            :imgSrc="product.imgSrc"
            :name="product.name"
            :price="product.price"
            />
            <VProductCard2>
                <!-- <template v-slot="slotProps">
                    <p>{{ slotProps.item }}</p>
                </template> -->
            </VProductCard2>
        </div>
        <div class="catalog-loader">
            <a class="catalog-loader__nav">Загрузить еще</a>
        </div>
        <div class="catalog-scroll">
            <div class="catalog-scroll__buttom">
                <a class="catalog-scroll__backward">назад</a>
            </div>
            <div class="catalog-scroll__pages">
                <a class="catalog-scroll__number">1 2 3 ... 15</a>
            </div>
            <div class="catalog-scroll__buttom">
                <router-link to="/123" class="catalog-scroll__forward">вперёд</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import VProductCard1 from '@/components/VProductCard1.vue';
import VProductCard2 from '@/components/VProductCard2.vue';

export default {
    data() {
        return {
            products: [
                {
                    imgSrc: "product-1.jpg",
                    name: "Любительская селфи-палка",
                    price: "500 ₽",
                    id: "card1"
                },
                {
                    imgSrc: "product-2.jpg",
                    name: "Профессиональная селфи-палка",
                    price: "1500 ₽",
                    id: "card2"
                },
                {
                    imgSrc: "product-3.jpg",
                    name: "Непотопляемая селфи-палка",
                    price: "2500 ₽",
                    id: "card3"
                },
                {
                    imgSrc: "product-4.jpg",
                    name: "Селфи-палка «Следуй за мной»",
                    price: "1500 ₽",
                    id: "card4"
                }
            ]
        }
    },
    components: {
        VProductCard1,
        VProductCard2
    }
}
</script>

<style scoped lang="scss">
.menu {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    gap: 44px;
    width: 840px;
}

.catalog {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #F0F0F0;
    padding: 25px 40px;
    gap: 200px;

    &__title {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
    }

    &__inset {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    &__text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-main;
    }

    &__arrows {
        display: flex;
        align-items: center;
        gap: 20px;
    }
}

.catalog-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 40px;
    padding-top: 30px;
    gap: 44px 40px;
}

.catalog-loader {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 39px;
    margin: 0 auto;
    width: 760px;
    height: 55px;
    border: 3px solid #E5E5E5;

    &__nav {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
        cursor: pointer;
    }
}

.catalog-scroll {
    width: 760px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 145.5px;
    margin: 0 auto;
    background: #EBEBEB;

    &__buttom {
        padding: 25px;
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
        cursor: pointer;
    }

    &__pages {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: $color-text-desc;
        opacity: 0.3;
    }
}
</style>