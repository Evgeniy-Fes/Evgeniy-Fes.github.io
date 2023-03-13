<template>
    <div class="catalog-scroll">
        <button class="catalog-scroll__buttom" 
        type="buttom" 
        @click="currentPage--">
        назад
        </button>
        <div class="catalog-scroll__pages">
        <button 
        type="button"
        v-for = "page in pages"
        :key="page"
        @click="currentPage = page"
        >
        {{ page }}
        </button>
            <!-- <a class="catalog-scroll__number">1 2 3 ... 15</a> -->
        </div>
        <button class="catalog-scroll__buttom" 
        type="buttom" 
        @click="currentPage++">
        вперед
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: 15,
            currentPage: 1
        }
    }
}
</script>

<style scoped lang="scss">
.catalog-scroll {
    width: 760px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 145.5px;
    margin: 0 auto;
    background: #EBEBEB;

    &__buttom {
        padding: 25px;
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: $color-text-main;
        cursor: pointer;
    }

    &__pages {
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: $color-text-desc;
        opacity: 0.3;
    }
}
</style>