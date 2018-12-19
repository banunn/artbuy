<template>
    <div class="product-page">
        <product-viewer :product="product"></product-viewer>
        <product-sidebar :product="product"></product-sidebar>
    </div>
</template>

<script>
import productViewer from '@/components/product/product-viewer'
import productSidebar from '@/components/product/product-sidebar'
export default {
    name: 'product-page',
    components: {
        productViewer,
        productSidebar
    },
    computed: {
        product() {
            return this.$store.getters.productPageProduct;
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-page {
        display: flex;
    }
</style>
