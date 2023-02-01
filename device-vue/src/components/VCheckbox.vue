<template>
    <div>
        <div>
            <input type="checkbox" id="black" name="interest" value="black" v-model="color" />
            <label for="black">Черный</label>
        </div>
        <div>
            <input type="checkbox" id="white" name="interest" value="white" v-model="color" />
            <label for="white">Белый</label>
        </div>
        <div>
            <input type="checkbox" id="blue" name="interest" value="blue" v-model="color" />
            <label for="blue">Синий</label>
        </div>
        <div>
            <input type="checkbox" id="red" name="interest" value="red" v-model="color" />
            <label for="red">Красный</label>
        </div>
        <div>
            <input type="checkbox" id="pink" name="interest" value="pink" v-model="color" />
            <label for="pink">Розовый</label>
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