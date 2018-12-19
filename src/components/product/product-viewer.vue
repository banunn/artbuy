<template>
    <main v-if="product" class="content" :class="{'page-content': isProductPage}">
        <header class="ctrl">
            <!-- <div class="btn-group">
                <button class="icon-btn"><i class="material-icons">arrow_back</i></button>
                <button class="icon-btn"><i class="material-icons">arrow_forward</i></button>
            </div> -->
        </header>
        <figure class="image">
            <img :src="product.art.photoUrl" alt="">
        </figure>
        <div v-if="isProductPage" class="product-page-content">
            <product-meta></product-meta>
            <product-comments></product-comments>
        </div>
    </main>
</template>

<script>
import productComments from './comment/product-comments'
import productMeta from './product-meta'
export default {
    name: 'modal-product-viewer',
    components: {
        productComments,
        productMeta
    },
    props: {
        product: Object
    },
    computed: {
        isProductPage() {
         var route = this.$store.state.route.name;
            return route === 'product' ? true : false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .content {
        padding: 0 48px 48px 48px;
        max-height: 100vh;
        overflow-y: auto;
        flex:1;
        &.page-content {
            max-height: calc(100vh - 64px);
        }
    }

    .ctrl {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .icon-btn {
            color: rgba(#000, .3);
            &:first-child {
                padding-right: 14px;
            }
            &:last-child {
                padding-left: 14px;
            }
        }
    }

    figure {
        margin:0;
        box-shadow: 0px 21px 14px -12px rgba(0, 0, 0, 0.14), 0px 0px 10px rgba(0, 0, 0, 0.14);
        margin:0;
        padding:0;
        img {
            width: 100%;
            margin:0;
            padding:0;
            display: block;
        }
    }
</style>
