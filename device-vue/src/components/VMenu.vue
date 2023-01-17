<template>
    <div>
        <div class="title">
            <h3 class="title-text">Моноподы для селфи</h3>
        </div>
        <div class="title-menu">
            <ul class="title-menu-list">
                <li class="title-menu-item">
                    <a class="title-menu-nav" href="#">Главная</a>
                </li>
                <li class="title-menu-img">
                    <img class="title-menu-arrows" src="@/assets/ArrowMenu.svg">
                </li>
                <li class="title-menu-item">
                    <a class="title-menu-nav" href="#">Каталог товаров</a>
                </li>
                <li class="title-menu-img">
                    <img class="title-menu-arrows" src="@/assets/ArrowMenu.svg">
                </li>
                <li class="title-menu-item">
                    <a class="title-menu-nav" href="#">Моноподы для селфи</a>
                </li>
            </ul>
        </div>
        <div class="catalog">
            <div class="filter filter-wrapper">
                <div class="filter-title">Фильтр:</div>
                <div class="filter-text">Стоимость</div>
                <div class="filter-form">
                    <input type="range" min="0" max="10000" step="any">
                </div>
                <div class="filter-line"></div>
                <div class="filter-text">Цвет</div>
                <div>
                    <input type="checkbox" id="black" name="interest" value="black" />
                    <label for="black">Черный</label>
                </div>
                <div>
                    <input type="checkbox" id="white" name="interest" value="white" />
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
                <div class="filter-line"></div>
                <div class="filter-text">Bluetooth</div>
                <div class="filter-radio">
                    <div class="filter-radio-wrapper">
                        <input type="radio" id="Choice1" name="choice" value="yes">
                        <label for="Choice1">Есть</label>
                    </div>
                    <div class="filter-radio-wrapper">
                        <input type="radio" id="Choice2" name="choice" value="no">
                        <label for="Choice2">Нет</label>
                    </div>
                </div>
                <div class="filter-line"></div>
                <div class="filter-nav">
                    <a class="filter_button" href="#">Показать</a>
                </div>

            </div>
            <div class="catalog-wrapper">
                <div class="menu">
                    <div class="menu-title">Сортировка:</div>
                    <div class="menu-inset">
                        <div class="menu-text">Популярные</div>
                        <img class="menu-arrows" src="@/assets/CatalogMenuArrovs.svg">
                    </div>
                    <div class="menu-arrows">
                        <img class="menu-up" src="@/assets/UpArrow.svg">
                        <img class="menu-down" src="@/assets/DownArrow.svg">
                    </div>
                </div>
                <div class="menu-product">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.title {
    padding-top: 35px;
    padding-left: 60px;
    padding-bottom: 16px;

    &-text {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 50px;
        color: $color-text-main;
    }
}

.title-menu {
    padding-bottom: 35px;
    padding-left: 60px;

    &-list {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    &-nav {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: $color-text-main;
    }
}

.catalog {
    display: flex;
    background: #F0F0F0;
}

.filter {
    padding-top: 20px;
    padding-left: 60px;
    width: 320px;
    background: #687767;

    &-title {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
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

    }

    &-line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        border: 1px solid #000000;
    }

    &-radio {
        display: flex;
        flex-direction: column;
    }

    &-nav {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__button {
        @include button-main(210px);
    }
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 200px;

    &-title {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
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
</style>