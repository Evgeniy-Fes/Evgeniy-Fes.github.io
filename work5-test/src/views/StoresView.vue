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

    <VButton class="button-store" data-bs-toggle="modal" :data-bs-target="`#${modalId}`" ref="modalButton" @click.native="getButtonModalPosition">
      <template #icon>
        <span class="button-store-icon">+</span>
      </template>
      Создать свой магазин
    </VButton>

    <VStoreTable title="Управление магазинами" />

    <VModal :id="modalId" :use-pos="true" :pos-top="modalPos.top" :pos-left="modalPos.left" />
  </div>
</template>

<script>
import VBreadcrumbs from '@/components/VBreadcrumbs.vue';
import VButton from '@/components/VButton.vue';
import VStoreTable from '@/components/VStoreTable.vue';
import VModal from '@/components/VModal.vue';

export default {
  name: 'StoresView',
  data() {
    return {
      modalId: 'storeModal',
      modalPos: {
        top: null,
        left: null,
      }
    }
  },
  methods: {
    getButtonModalPosition() {
      const modalButton = this.$refs.modalButton.$el

      console.log('modalButton', modalButton.getBoundingClientRect())
      const rect = modalButton.getBoundingClientRect()

      this.modalPos.left = rect.left
      this.modalPos.top = rect.bottom
    },
  },
  components: {
    VBreadcrumbs,
    VButton,
    VStoreTable,
    VModal,
  },
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
</style>
