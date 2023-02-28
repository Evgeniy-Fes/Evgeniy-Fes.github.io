<template>
    <div>
        <div>
            <label>
                <input checked type="checkbox" name="black" value="black" class="real-checkbox" v-model="color">
                <span class="custom-checkbox"></span>
                Чёрный
            </label>
        </div>
        <div>
            <label>
                <input checked type="checkbox" name="white" value="white" class="real-checkbox" v-model="color">
                <span class="custom-checkbox"></span>
                Белый
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="blue" value="blue" class="real-checkbox" v-model="color">
                <span class="custom-checkbox"></span>
                Синий
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="red" value="red" class="real-checkbox" v-model="color">
                <span class="custom-checkbox"></span>
                Красный
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="pink" value="pink" class="real-checkbox" v-model="color">
                <span class="custom-checkbox"></span>
                Розовый
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: []
        }
    }
}
</script>

<style scoped lang="scss">
.real-checkbox {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
}

.real-checkbox:focus + .custom-checkbox {
    box-shadow: 0px 0px 0px 1px #000000, 0px 0px 10px #000000;
}

.custom-checkbox {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 2px solid #302d2d;
    border-radius: 4px;
    vertical-align: sub;
    margin-right: 5px;
}

.custom-checkbox::before {
    content: '';

    display: inline-block;
    width: 10px;
    height: 10px;

    background-image: url(@/assets/VectorCheckbox.svg);
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    margin-top: 1px;
    transition: 0.2s ease-in;
}

.real-checkbox:checked + .custom-checkbox::before {
    transform: translate(-50%, -50%) scale(1);
}
</style>