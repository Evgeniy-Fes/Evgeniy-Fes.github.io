<template>
    <div class="checkbox-wrapper">
        <VCheckbox 
            v-for="item in checkboxes" 
            :key="item.id" 
            :label="item.label" 
            :value="item.id"
            v-model="item.checked"
        />

        <input v-model="firstName" />
        <input v-model="lastName" />
        <input v-model="middleName" />
        <input :value="inputText" @input="updateInput" />
        {{ fio }}
        {{ inputText }}
    </div>
</template>

<script>
import VCheckbox from './VCheckbox.vue';

let a = '123';

export default {
    data() {
        return {
            aVar: a,
            inputText: 'saldknlakhsd',
            checkboxes: [
                {
                    label: 'Белый',
                    id: 1,
                    checked: false,
                },
                {
                    label: 'Черный',
                    id: 2,
                    checked: true,
                },
                {
                    label: 'Синий',
                    id: 3,
                    checked: false,
                },
                {
                    label: 'Красный',
                    id: 4,
                    checked: true,
                },
                {
                    label: 'Розовый',
                    id: 5,
                    checked: false,
                },
            ],
            firstName: 'Женя',
            lastName: 'Фесюк',
            middleName: 'Владимирович',
        }
    },
    computed: {
        fio() {
            return `${this.lastName} ${this.firstName} ${this.middleName}`
            // return this.lastName + ' ' + this.firstName + ' ' + this.middleName
        }
    },
    methods: {
        updateInput(e) {
            this.inputText = e.target.value
        }
    },
    components: {
        VCheckbox,
    }
}
</script>

<style scoped lang="scss">
.checkbox-wrapper{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
}
</style>