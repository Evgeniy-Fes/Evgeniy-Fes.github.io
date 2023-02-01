<template>
  <div>
    <div class="container">
      <div class="title">
        <h1 class="title-text">Моноподы для селфи</h1>
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
    </div>
    <div class="catalog-bg">
      <div class="container">
        <div class="catalog-page">
          <VForm />
          <VProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VForm from '@/components/VForm.vue'
import VProduct from '@/components/VProduct.vue'
export default {

  components: {
    VForm,
    VProduct
  }
}
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

.catalog-bg {
  background: #F0F0F0;
}

.catalog-page {
  display: flex;
}
</style>