<template>
  <table class="table table-sm table-hover table-borderless bg-white">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Название</th>
        <th scope="col">Адрес</th>
        <th scope="col">Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr class="align-middle border-bottom">
        <td scope="row">12345</td>
        <td>Дипломная работа</td>
        <td>http://www.work5.ru/services</td>
        <td class="table-button">
          <VButton>Редактировать</VButton>
          <VButton>Редактировать</VButton>
        </td>
      </tr>
      <tr class="align-middle ">
        <td scope="row">12345</td>
        <td>Дипломная работа</td>
        <td>http://www.work5.ru/services</td>
        <td class="table-button">
          <VButton>Редактировать</VButton>
          <VButton>Редактировать</VButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'VStoreTable',
  components: {
    VButton
  }
}

</script>

<style lang="scss">
.table-button {
  display: flex;
}
</style>