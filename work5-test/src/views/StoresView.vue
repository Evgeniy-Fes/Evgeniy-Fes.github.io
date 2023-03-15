<template>
  <div class="home-page col">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <VBreadcrumbs class="col-sm-6" />
          <div class="top-bar__right col-sm-6">
            <div class="top-bar__messages has-notification">
              <span class="top-bar__messages-icon icon-letter" />
            </div>
            <div class="top-bar__user">
              <img src="@/assets/avatar.png" alt="avatar">
              Максим Добжанский
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="button-store">
      <button type="button" class="btn btn-success">Создать свой магазин</button>
    </div> -->
    <VButton class="button-store" :color="buttonColor">
      <span class="button-store-icon">+</span>
      Создать свой магазин
    </VButton>

    <h4 class="title-store">Управление магазинами</h4>

    <VStoreTable />
  </div>
</template>

<script>
import VBreadcrumbs from '@/components/VBreadcrumbs.vue';
import VButton from '@/components/VButton.vue';
import VStoreTable from '@/components/VStoreTable.vue';

export default {
  name: 'StoresView',
  components: {
    VBreadcrumbs,
    VButton,
    VStoreTable
  },
  data() {
    return {
      buttonColor: '$color-success'
    }
  },
}
</script>

<style lang="scss">
.home-page {
  padding: 22px 16px 22px 59px !important;
}

.top-bar {
  margin-bottom: 10px;

  &__messages {
    width: 65px;
    height: 65px;
    background: rgba(0, 0, 0, 0.0001);
    border-radius: 4px;
    border: 1px solid $color-border;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.has-notification {
      .top-bar__messages-icon {
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: -7px;
          right: -5px;
          width: 13px;
          height: 13px;
          background-color: $color-error;
          border: 3px solid $color-text-light;
          border-radius: 100%;
        }
      }
    }

    &-icon {
      font-size: 22px;
      color: $color-dark;
      position: relative;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
}

.button-store {
  padding-bottom: 35.5px;
  display: flex;
  align-items: center;

  &-icon {
    font-size: 20px;
    padding-right: 10px;
  }

}

.title-store {
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: $color-text-secondary;
  padding-bottom: 25.5px;
}
</style>
