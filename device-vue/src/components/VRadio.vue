<template>
    <div>
        <div class="filter-radio-wrapper">
            <input type="radio" id="Choice1" name="choice" value="yes" v-model="pick">
            <label for="Choice1">Есть</label>
        </div>
        <div class="filter-radio-wrapper">
            <input type="radio" id="Choice2" name="choice" value="no" v-model="pick">
            <label for="Choice2">Нет</label>
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