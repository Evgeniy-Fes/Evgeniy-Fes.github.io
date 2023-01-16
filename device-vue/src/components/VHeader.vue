<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <img src="@/assets/logo.svg" alt="logo">
    </router-link>
    <div class="header-top">
      <div class="header-form">
        <div class="header-form__input-wrapper">
          <input type="text" class="header-form__input" placeholder="Текст поиска">
          <span class="header-form__input-icon icon-search"></span>
        </div>
        <button type="submit" class="header-form__submit">Найти</button>
      </div>
      <div class="header-top-list header-top__list">
        <a href="#" class="header-top-list__link login">
          <span class="header-top-list__icon icon-login"></span>
          Войти
        </a>
        <a href="#" class="header-top-list__link">
          <span class="header-top-list__icon icon-compare"></span>
          Сравнить
        </a>
        <a href="#" class="header-top-list__link">
          <span class="header-top-list__icon icon-cart"></span>
          Корзина
        </a>
      </div>
    </div>
    <div class="header-bottom">
      <router-link to="/catalog" class="header-bottom-catalog header-bottom-button">
        Каталог товаров
        <span class="header-bottom-catalog__icon">
          <span class="icon-plus"></span>
        </span>
      </router-link>
      <div class="header-bottom-list">
        <a href="#" class="header-bottom-button header-bottom-list__link">Доставка</a>
        <a href="#" class="header-bottom-button header-bottom-list__link">Гарантия</a>
        <a href="#" class="header-bottom-button header-bottom-list__link">Контакты</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 186px;
  margin: 0 auto;
  background-color: $color-bg;
  padding: 43px 60px 22px 60px;
  position: relative;
  margin-top: 40px;

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    margin-bottom: 30px;

    &__list {
      width: 100%;
    }
  }
}

.header-logo {
  position: absolute;
  top: -22px;
  left: 60px;
}

.header-form {
  width: 517px;
  min-width: 517px;
  height: 40px;
  border: 2px solid $color-text-main;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__input {
    @include clear-input;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 0 20px 0 48px;

    &-wrapper {
      width: 100%;
      position: relative;
    }

    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
      font-size: 16px;
      color: $color-text-main;
    }
  }

  &__submit {
    @include clear-button;

    width: 160px;
    height: 100%;
    border-left: 2px solid $color-text-main;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
}

.header-top-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  &__link {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &.login {
      margin-right: auto;
    }
  }

  &__icon {
    font-size: 12px;
    color: $color-text-main;

    &.icon-cart {
      font-size: 14px;
    }
  }
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-button {
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-family: $font-raleway;
    cursor: pointer;
    padding: 15px 0;
  }

  &-catalog {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    &__icon {
      border-radius: 100%;
      border: 2px solid $color-text-main;
      opacity: .3;
      font-size: 16px;
      width: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 50px;
      min-height: 50px;
      text-align: center;

      & .icon-plus {
        width: 16px;
      }
    }
  }

  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 47px;
  }
}
</style>
