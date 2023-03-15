<template>
    <div class="sidebar col-auto bg-white">
        <div class="sidebar-row d-flex flex-column align-items-start min-vh-100">
            <router-link to="/" class="sidebar-logo">
                <img class="sidebar-logo__img" src="@/assets/logo.svg" alt="log">
            </router-link>
            <ul class="sidebar-list flex-column mb-sm-auto align-items-center align-items-sm-start" id="menu">
                <li class="sidebar-list__item" v-for="(item, idx) of menu" :key="idx">
                    <router-link :to="item.to" class="sidebar-list__link d-flex align-items-center">
                        <span :class="[`icon-${item.icon}` , 'sidebar-list__link-icon']"></span>
                        <span class="sidebar-list__link-text d-none d-sm-inline">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VSidebar',
    data() {
        return {
            menu: [
                {
                    icon: 'home',
                    name: 'Главная',
                    to: '/',
                },
                {
                    icon: 'cart',
                    name: 'Мои магазины',
                    to: '/stores',
                },
                {
                    icon: 'megaphone',
                    name: 'Промоматериалы',
                    to: '/promo',
                },
                {
                    icon: 'diagramma',
                    name: 'Статистика',
                    to: '/stats',
                },
                {
                    icon: 'wallet',
                    name: 'Баланс',
                    to: '/wallet',
                },
                {
                    icon: 'person',
                    name: 'Персональные данные',
                    to: '/personal',
                },
                {
                    icon: 'question',
                    name: 'FAQ',
                    to: '/faq',
                },
                {
                    icon: 'headphones',
                    name: 'Техподдержка',
                    to: '/support',
                },
                {
                    icon: 'exit',
                    name: 'Выход',
                    to: '/logout',
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.sidebar{
    padding: 25px 0 25px 0 !important;

    @media all and (min-width: 576px) {
        width: 256px;
    }
}
.sidebar-list{
    padding: 0;

    &__link{
        height: 49px;
        display: block;
        text-decoration: none;
        padding: 0 25px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: $color-text-menu;

        &:hover,
        &.router-link-exact-active{
            position: relative;

            .sidebar-list__link-icon{
                color: $color-active;
            }
            .sidebar-list__link-text{
                color: $color-text-secondary;
            }

            &:before{
                content: '';
                display: block;
                height: 100%;
                width: 4px;
                background-color: $color-active;
                box-shadow: 0px 2px 10px rgba(102, 102, 204, 0.67);
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
            }
        }
    }

    &__link-icon {
        font-size: 21px;
    }

    &__link-text{
        margin-left: 20px;
    }
}
.sidebar-logo{
    margin: 0 auto 15px auto;
    display: block;
    width: 50px;

    &__img{
        width: 100%;
    }

    @media all and (min-width: 576px) {
        margin: 0 0 30px 25px;
        width: 82px;
    }
}
</style>
