<template>
    <div>
        <div class="container">
            <div class="about-contacts">
                <div class="about">
                    <h2 class="about-main">О нас</h2>
                    <div class="contacts-block">
                        <div class="contacts-row">
                            <p class="about-text">Огромный выбор гаджетов не оставит равнодушным<br>гика, который есть в
                                каждом из
                                нас.
                            </p>
                        </div>

                        <div class="contacts-row">
                            <p class="about-text">Мы можем доставить ваш товар в самые отдалённые<br>уголки России
                                транспортными
                                компаниями:</p>
                        </div>

                        <div class="contacts-row">
                            <ul class="about-list">
                                <li class="about-item">
                                    <img class="dots-img" src="@/assets/dots.svg">
                                    <a class="about-item-nav">Меловые линии</a>
                                </li>
                                <li class="about-item">
                                    <img class="dots-img" src="@/assets/dots.svg">
                                    <a class="about-item-nav">СДИК</a>
                                </li>
                                <li class="about-item">
                                    <img class="dots-img" src="@/assets/dots.svg">
                                    <a class="about-item-nav">ТоксБерри</a>
                                </li>
                            </ul>
                        </div>

                        <div class="contacts-row">
                            <a class="about-nav" href="">Подробнее о нас</a>
                        </div>
                    </div>
                </div>
                <div class="contacts">
                    <h2 class="contacts-main">Контакты</h2>
                    <div class="contacts-block">
                        <div class="contacts-row">
                            <p class="contacts-text">Вы можете забрать товар сами, заехав в наш офис.<br>Заодно сможете
                                проверить
                                работоспособность
                                покупки.</p>
                        </div>

                        <div class="contacts-row">
                            <h4 class="contacts-title">Интернет-магазин "Девайс"</h4>
                            <p class="contacts-text">Санкт-Петербург, набережная реки Карповки, 5, литера П.</p>
                            <a class="contacts-tel-nav" href="tel:+78128121212">+7 (812) 812-12-12</a>
                        </div>

                        <div class="contacts-row">
                            <h4 class="contacts-title">Время работы</h4>
                            <p class="contacts-text">пн—пт: с 10:00 до 22:00 <br> сб—вс: с 10:00 до 19:00</p>
                        </div>

                        <div class="contacts-row">
                            <a class="contacts-nav" href="">Напишите нам</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="subscription">
            <div class="container">
                <div class="subscription-up">
                    <h3 class="subscription-up-main">Подпишитесь<br>на рассылку</h3>
                    <p class="subscription-up-text">Еженедельный дайджест с обзорами новинок,<br>длительными
                        тест-драйвами,
                        распаковками, а также
                        акции,
                        <br>спецпредложения и вот это вот всё.
                    </p>
                </div>
                <div class="subscription-down">
                    <div class="subscription-down-form">
                        <div class="subscription-down-form__input-wrapper">
                            <input type="text" class="subscription-down-form__input" placeholder="Ваш e-mail"
                                name="mail" required>
                        </div>
                        <button type="submit" class="subscription-down-form__submit">Подписаться</button>
                    </div>

                    <div class="subscription-down-okey">
                        <img class="subscription-down-okey-img" src="@/assets/okey.svg">
                        <p class="subscription-down-okey-text">Это бесплатно</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.about-contacts {
    display: flex;
}

.about {
    width: 50%;

    &-main {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 50px;
        color: #000000;
        padding-bottom: 48px;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-desc;
    }

    &-list {
        padding-bottom: 21px;
    }

    &-item {
        display: flex;
        align-items: center;
        gap: 26px;

        &:not(:last-child) {
            padding-bottom: 19px;
        }
    }

    &-item-nav {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: $color-text-main;
    }


    &-nav {
        @include button-main(270px);
    }
}

.contacts {
    width: 50%;

    &-block {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &-main {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 50px;
        color: #000000;
        padding-bottom: 48px;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-desc;
    }

    &-tel-nav {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        text-decoration-line: underline;
        color: $color-text-desc;
    }

    &-title {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: $color-text-desc;
        margin-bottom: 15px;
    }

    &-nav {
        @include button-main(259px);
    }
}

.subscription {
    margin-top: 80px;
    width: 100%;
    background: #F0F0F0;
    padding-bottom: 56px;
}

.subscription-up {
    display: flex;


    &-main {
        width: 50%;
        padding-top: 64px;
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 50px;
        color: $color-text-main;
    }

    &-text {
        width: 50%;
        padding-top: 74px;
        padding-right: 133px;
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-desc;
    }
}

.subscription-down {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 190px;
    padding-top: 144px;
}

.subscription-down-form {
    width: 810px;
    height: 57px;
    display: flex;

    &__input {
        @include clear-input;

        width: 557px;
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-desc;
        border-bottom: 3px solid #CECECE;
        height: 100%;
        padding: 0 16px;

        &-wrapper {
            width: 100%;
            position: relative;
        }

        &::placeholder {
            opacity: 0.5;
            color: $color-text-desc;
        }
    }

    &__submit {
        @include clear-button;

        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
        border: 3px solid #CECECE;
        height: 100%;
    }

}

.subscription-down-okey {
    display: flex;
    width: 100%;
    padding-bottom: 15px;

    &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 16.5px;
    }

    &-text {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: $color-text-desc;
    }
}
</style>