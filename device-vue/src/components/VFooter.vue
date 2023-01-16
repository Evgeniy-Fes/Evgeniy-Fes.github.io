<template>
  <footer class="footer">
    <div class="container">
        <a href="/" class="footer-logo">
            <img class="footer-img" src="@/assets/logo-footer.svg" alt="logo">
        </a>
        <div class="footer-up">
            <div class="footer-up-text">Санкт-Петербург, набережная<br>реки Карповки, 5, литера П.</div>
            <div class="footer-up-list">
                <div class="footer-up-item">
                    <a class="footer-up-nav" href="#">Доставка</a>
                </div>
                <div class="footer-up-item">
                    <a class="footer-up-nav" href="#">Гарантия</a>
                </div>
                <div class="footer-up-item">
                    <a class="footer-up-nav" href="#">Контакты</a>
                </div>
            </div>
            <div class="footer-up-text">
                <a class="footer-up-text-nav" href="tel:+78128121212">Тел.: +7 (812) 812-12-12</a>
            </div>
        </div>
        <div class="footer-down">
            <div class="footer-down-line"></div>
            <div class="footer-down-list">
                <div class="footer-nav-item">
                    <a href="#" class="footer-img">
                        <img src="@/assets/facebook.svg" alt="facebook">
                    </a>
                </div>
                <div class="footer-nav-item">
                    <a href="#" class="footer-img">
                        <img src="@/assets/instagram.svg" alt="instagram">
                    </a>
                </div>
                <div class="footer-nav-item">
                    <a href="#" class="footer-img">
                        <img src="@/assets/twitter.svg" alt="twitter">
                    </a>
                </div>
            </div>
            <div class="footer-down-line"></div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    background-color: #444444;
    margin: 0 auto;

    &-img {
        padding-top: 62px;
        padding-bottom: 35px;
    }
}

.footer-up {
    padding-bottom: 62px;
    display: flex;
    justify-content: space-between;

    &-text {
        padding-top: 10px;
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

    &-list {
        display: flex;
        gap: 35px;
        align-items: center;
    }

    &-nav {
        font-family: $font-raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    &-text-nav {
        padding-top: 10px;
        font-family: $font-rubic;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        text-decoration-line: underline;
    }
}

.footer-down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 61px;

    &-list {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    &-line {
        width: 80px;
        height: 7px;
        background: #FFC700;
    }
}
</style>
