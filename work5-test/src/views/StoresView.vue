<template>
  <div class="store-page col">
    <div class="top-bar container-fluid">
      <div class="row">
        <VBreadcrumbs class="col-6" />
        <div class="top-bar__right col-6">
          <div class="top-bar__messages has-notification">
            <span class="top-bar__messages-icon icon-letter" />
          </div>
          <div class="top-bar__user">
            <div class="top-bar__user-img">
              <img src="@/assets/avatar.png" alt="avatar">
            </div>
            <div class="top-bar__user-name">
              Максим Добжанский
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog store">
        <div class="modal-content store-wrapper">
          <div class="modal-body">
            <div class="store-header">
              <h1 class="modal-title fs-5 store-title" id="exampleModalLabel">Создать магазин</h1>
              <button type="button" class="btn-close store__icons" data-bs-dismiss="modal"></button>
            </div>
            <div class="store-main">
              <div class="store-select__left">
                <div class="store-text">Шаблон</div>
                <select class="form-select store-select store-select__text" aria-label="Пример выбора по умолчанию">
                  <option selected>Стандартный</option>
                  <option value="1">Один</option>
                  <option value="2">Два</option>
                  <option value="3">Три</option>
                </select>
              </div>
              <div class="store-select__right">
                <div class="store-text">Цветовая схема</div>
                <select class="form-select store-select store-select__text" aria-label="Пример выбора по умолчанию">
                  <option selected>Классическая</option>
                  <option value="1">Один</option>
                  <option value="2">Два</option>
                  <option value="3">Три</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <VButton class="button-store" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <template #icon>
        <span class="button-store-icon">+</span>
      </template>
      Создать свой магазин
    </VButton>

    <VStoreTable title="Управление магазинами" />
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

    }
  }
}
</script>

<style lang="scss">
.store-page {
  padding: 22px 16px 22px 59px;
  min-width: 0;

  @media all and (max-width: 575px) {
    padding: 22px 16px 22px 16px;
  }
}

.top-bar {
  margin-bottom: 10px;
  padding: 0;

  &__messages {
    min-width: 65px;
    height: 65px;
    background: rgba(0, 0, 0, 0.0001);
    border-radius: 4px;
    border: 1px solid $color-border;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media all and (max-width: 800px) {
      min-width: 40px;
      height: 40px;
    }

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

  &__user {
    background-color: $color-text-light;
    box-shadow: 0px 0px 16px rgba(136, 167, 245, 0.18);
    border-radius: 4px;
    padding: 10px 7px 10px 17px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    min-width: 256px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: $color-text-menu;

    &-img {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      border: 2px solid $color-avatar-border;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media all and (max-width: 800px) {
      min-width: 40px;
      height: 40px;
      padding: 5px;

      &-img {
        width: 30px;
        height: 30px;
      }

      &-name {
        display: none;
      }
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
  margin-bottom: 36px;
  display: flex;
  align-items: center;
}


//modal
.store {
  &-header {
    display: flex;
    justify-content: space-between;
  }

  &__icons {
    // width: 15px;
    // height: 15px;
    font-size: 8px;
    border: 1px solid $color-close;
    padding: 14px 6px 0 0;
    border-radius: 50%;
  }

  &-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    color: $color-text-secondary;
    padding: 14px 0 0 14px;
    margin-bottom: 12px;
  }

  &-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: $color-text-secondary;
    padding: 0 0 5px 1px;
  }

  &-wrapper {
    width: 617px;
    height: 444px;
    background: $color-text-light;
    box-shadow: 0px 30px 38px rgba(37, 37, 37, 0.1);
  }

  &-main {
    display: flex;

  }

  &-select {
    width: 240px;
    height: 36px;

    &__text {
      font-weight: 400;
      font-size: 12px;
      line-height: 21px;
      color: $color-text-select;
    }

    &__left {
      padding-left: 14px;
      padding-right: 86px;
    }

    &__right {
      padding-right: 14px;
    }

  }
}
</style>
