<template>
    <div class="product-list">
        <list-product v-for="(p, index) in itemCount" :key="index"></list-product>
    </div>
</template>

<script>
import listProduct from './product'
export default {
    name: 'product-list',
    components: {
        listProduct
    },
    data() {
        return {
            itemCount: 7
        }
    }
}
</script>

<style lang="scss" scoped>

    .product-list {
        display: flex;
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
        padding-bottom: 24px;
    }

</style>
