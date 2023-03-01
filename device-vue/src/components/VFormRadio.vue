<template>
    <div class="radio-wrapper">
        <VRadio v-for="item in radio" :key="item.id" :label="item.label" :value="item.id" v-model="item.checked" />
    </div>
</template>

<script>
import VRadio from './VRadio.vue';

export default {
    data() {
        return {
            radio: [
                {
                    label: 'Есть',
                    id: 1,
                    checked: false,
                },
                {
                    label: 'Нет',
                    id: 2,
                    checked: true,
                },
            ],
        }
    },
    methods: {
        updateInput(e) {
            this.inputText = e.target.value
        }
    },
    components: {
        VRadio,
    }
}
</script>

<style scoped lang="scss">
.radio-wrapper{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column;
}
</style>