<template>
    <main class="content">
        <header class="ctrl">
            <div class="btn-group">
                <button class="icon-btn"><i class="material-icons">arrow_back</i></button>
                <button class="icon-btn"><i class="material-icons">arrow_forward</i></button>
            </div>
        </header>
        <figure class="image">
            <img :src="product.art.photoUrl" alt="">
        </figure>
    </main>
</template>

<script>
export default {
    name: 'modal-product-viewer',
    props: {
        product: Object
    }
}
</script>

<style lang="scss" scoped>
    .content {
        padding: 0 48px 48px 48px;
        max-height: 100vh;
        overflow-y: auto;
        flex:1;
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
