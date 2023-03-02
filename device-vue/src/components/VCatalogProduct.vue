<template>
    <div class="menu">
        <div class="catalog">
            <div class="catalog-title">Сортировка:</div>
            <div class="catalog-inset">
                <div class="catalog-text">Популярные</div>
                <img class="catalog-arrows" src="@/assets/CatalogMenuArrovs.svg">
            </div>
            <div class="catalog-arrows">
                <img class="catalog-up" src="@/assets/UpArrow.svg">
                <img class="catalog-down" src="@/assets/DownArrow.svg">
            </div>
        </div>
        <div class="menu-product">
            <div class="menu-product-wrapper">
                <img class="menu-product-img" src="@/assets/product-1.jpg">
                <div class="menu-product-subtitle">
                    <div class="menu-product-text">Любительская <br>селфи-палка</div>
                    <div class="menu-product-price">500 ₽</div>
                </div>
            </div>
            <div class="menu-product-wrapper">
                <img class="menu-product-img" src="@/assets/product-2.jpg">
                <div class="menu-product-subtitle">
                    <div class="menu-product-text">Профессиональная <br>селфи-палка</div>
                    <div class="menu-product-price">1 500 ₽</div>
                </div>
            </div>
            <div class="menu-product-wrapper">
                <img class="menu-product-img" src="@/assets/product-3.jpg">
                <div class="menu-product-subtitle">
                    <div class="menu-product-text">Непотопляемая селфи-палка</div>
                    <div class="menu-product-price">2 500 ₽</div>
                </div>
            </div>
            <div class="menu-product-wrapper">
                <img class="menu-product-img" src="@/assets/product-4.jpg">
                <div class="menu-product-subtitle">
                    <div class="menu-product-text">Селфи-палка «Следуй за мной»</div>
                    <div class="menu-product-price">1 500 ₽</div>
                </div>
            </div>
        </div>
        <div class="menu-loader">
            <a class="menu-loader-nav">Загрузить еще</a>
        </div>
        <div class="menu-scroll">
            <div class="menu-scroll-buttom">
                <a class="menu-scroll-backward">назад</a>
            </div>
            <div class="menu-scroll-pages">
                <a class="menu-scroll-number">1 2 3 ... 15</a>
            </div>
            <div class="menu-scroll-buttom">
                <router-link to="/123" class="menu-scroll-forward">вперёд</router-link>
            </div>
        </div>
    </div>
</template>

<script>

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

    &-title {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
    }

    &-inset {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-main;
    }

    &-arrows {
        display: flex;
        align-items: center;
        gap: 20px;
    }
}

.menu-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 40px;
    padding-top: 30px;
    gap: 44px 40px;

    &-wrapper {
        width: 360px;
        height: 452px;
    }

    &-img {
        width: 360px;
        height: 380px;
        margin-bottom: 32px;
    }

    &-subtitle {
        display: flex;
        justify-content: space-between;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: $color-text-main;
    }

    &-price {
        width: 180px;
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: right;
        color: $color-text-desc;
    }
}

.menu-loader {
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

    &-nav {
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

.menu-scroll {
    width: 760px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 145.5px;
    margin: 0 auto;
    background: #EBEBEB;

    &-buttom {
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

    &-pages {
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