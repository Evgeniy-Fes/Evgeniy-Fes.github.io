<template>
    <div>
        <ul>
            <li v-for="data in slotsData" v-bind:key="data">
                <slot :item="data"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slotsData: ["a", "b", "c", "d"]
            // products: [
            //     {
            //         imgSrc: "product-1.jpg",
            //         name: "Любительская селфи-палка",
            //         price: "500 ₽",
            //         id: "card1"
            //     },
            //     {
            //         imgSrc: "product-2.jpg",
            //         name: "Профессиональная селфи-палка",
            //         price: "1500 ₽",
            //         id: "card2"
            //     },
            //     {
            //         imgSrc: "product-3.jpg",
            //         name: "Непотопляемая селфи-палка",
            //         price: "2500 ₽",
            //         id: "card3"
            //     },
            //     {
            //         imgSrc: "product-4.jpg",
            //         name: "Селфи-палка «Следуй за мной»",
            //         price: "1500 ₽",
            //         id: "card4"
            //     }
            // ]
        }
    }
}

</script>

<style scoped lang="scss"></style>