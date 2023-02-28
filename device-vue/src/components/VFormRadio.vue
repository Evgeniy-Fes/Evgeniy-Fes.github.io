<template>
    <div>
        <div class="form-group">
            <label>
                <input type="radio" name="choice" value="yes" class="real-radio" v-model="pick">
                <span class="custom-radio"></span>
                Есть
            </label>
        </div>
        <div class="form-group">
            <label>
                <input type="radio" name="choice" value="no" class="real-radio" v-model="pick">
                <span class="custom-radio"></span>
                Нет
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pick: null
        }
    }
}
</script>

<style scoped lang="scss">
.custom-radio {
    display: inline-block;
width: 16px;
height: 16px;
background: #ffffff;
border: 2px solid black;
border-radius: 50%;
vertical-align: text-top;
margin-right: 5px;
}
</style>