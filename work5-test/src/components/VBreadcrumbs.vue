<template>
  <div class="breadcrumbs">
    <router-link to="/" class="breadcrumbs__link">Главная</router-link>
    <span class="breadcrumbs__arrow icon-arrow-right"></span>
    <router-link to="/stores" class="breadcrumbs__link">Мои магазины</router-link>
  </div>
</template>

<style lang="scss">
.breadcrumbs{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  &__link{
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    color: $color-text-main;
    text-decoration: none;
    white-space: nowrap;
  }

  &__arrow{
    font-size: 10px;
    color: $color-text-main;

    &:hover{
      color: $color-active; 
    }
  }
}
</style>