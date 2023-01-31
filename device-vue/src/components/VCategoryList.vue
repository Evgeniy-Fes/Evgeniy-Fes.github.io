<template>
    <div class="category container">
        <ul class="category-list">
            <li class="category-list-item">
                <div class="category-list-wrapper">
                    <img class="category-list-img" src="@/assets/vert.svg" alt=" Виртуальная реальность">
                </div>
                <p class="category-list-text">Виртуальная реальность</p>
            </li>
            <li class="category-list-item">
                <div class="category-list-wrapper">
                    <img class="category-list-img category-list-mono" src="@/assets/mono.svg" alt=" Моноподы для селфи">
                </div>
                <p class="category-list-text">Моноподы для селфи</p>
            </li>
            <li class="category-list-item">
                <div class="category-list-wrapper">
                    <img class="category-list-img" src="@/assets/photo.svg" alt=" Экшн-камеры">
                </div>
                <p class="category-list-text">Экшн-камеры</p>
            </li>
            <li class="category-list-item">
                <div class="category-list-wrapper">
                    <img class="category-list-img" src="@/assets/watch.svg" alt=" Фитнес-браслеты">
                </div>
                <p class="category-list-text">Фитнес-браслеты</p>
            </li>
            <li class="category-list-item">
                <div class="category-list-wrapper">
                    <img class="category-list-img" src="@/assets/smart.svg" alt=" Умные часы">
                </div>
                <p class="category-list-text">Умные часы</p>
            </li>
            <li class="category-list-item">
                <div class="category-list-wrapper">
                    <img class="category-list-img" src="@/assets/dron.svg" alt=" Квадрокоптеры">
                </div>
                <p class="category-list-text">Квадрокоптеры</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.category {
    width: 100%;
    padding: 70px 0 70px 0;
}

.category-list {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-bottom: 70px;

    &-wrapper {
        position: relative;
        width: 160px;
        height: 160px;
        background-color: $color-bg;
    }

    &-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &-mono {
        top: 63%;
    }

    &-text {
        width: 160px;
        padding-top: 33px;
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 17px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: $color-text-main;
    }
}
</style>