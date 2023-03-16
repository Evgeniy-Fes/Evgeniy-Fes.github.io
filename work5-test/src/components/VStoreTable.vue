<template>
  <div class="table-wrapper">
    <h2 class="table-title">{{ title }}</h2>
    <div class="table-inner table-responsive">
      <table class="table table-borderless">
        <thead>
          <tr class="table-head">
            <th class="table-head-col" scope="col">№</th>
            <th class="table-head-col" scope="col">Название</th>
            <th class="table-head-col" scope="col">Адрес</th>
            <th class="table-head-col table-head-col--last" scope="col">Действие</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr class="table-body-row">
            <td class="table-body-col" scope="row">12345</td>
            <td class="table-body-col">Дипломная работа</td>
            <td class="table-body-col">http://www.work5.ru/services</td>
            <td class="table-body-col table-body-col--last">
              <div class="table-buttons">
                <VButton width="149px" class="table-button">
                  <template #icon>
                    <span class="icon-edit" />
                  </template>
                  Редактировать
                </VButton>
                <VButton width="149px" type="cancel" class="table-button">
                  <template #icon>
                    <span class="icon-cross" />
                  </template>
                  Редактировать
                </VButton>
              </div>
            </td>
          </tr>
          <tr class="table-body-row">
            <td class="table-body-col" scope="row">12345</td>
            <td class="table-body-col">Дипломная работа</td>
            <td class="table-body-col">http://www.work5.ru/services</td>
            <td class="table-body-col table-body-col--last">
              <div class="table-buttons">
                <VButton width="149px" class="table-button">
                  <template #icon>
                    <span class="icon-edit" />
                  </template>
                  Редактировать
                </VButton>
                <VButton width="149px" type="cancel" class="table-button">
                  <template #icon>
                    <span class="icon-cross" />
                  </template>
                  Редактировать
                </VButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'VStoreTable',
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  components: {
    VButton
  }
}

</script>

<style lang="scss">
.table-inner{
  background-color: $color-text-light;
  padding: 27px 23px 15px 21px;
  border-radius: 6px;
  box-shadow: 0px 11px 21px rgba(40, 40, 40, 0.07);
  max-width: 1000px;
}
.table{
  margin-bottom: 0;
}
.table-title{
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: $color-text-secondary;
  margin-bottom: 26px;
}
.table-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}


.table-body-row{

  &:not(:last-child) {
    border-bottom: 1px solid rgba($color-gray, 0.35);
  }
}

.table-head-col{
  padding: 0 10px 8px !important;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: $color-text-secondary;

  &--last{
    width: 328px;
  }
}
.table-body-col{
  padding: 19px 10px !important;
  line-height: 36px;
  // width: 50%;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: $color-text-main;
  vertical-align: middle;

  &--last{
    width: 328px;
  }
}
.icon-cross{
  font-size: 12px;
}
</style>