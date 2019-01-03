<template>
    <main v-if="product" class="content" :class="{'page-content': isProductPage}">
        <header class="ctrl">
            <!-- <div class="btn-group">
                <button class="icon-btn"><i class="material-icons">arrow_back</i></button>
                <button class="icon-btn"><i class="material-icons">arrow_forward</i></button>
            </div> -->
        </header>
        <figure class="image" v-viewer>
            <img :src="product.art.photoUrl" alt="">
        </figure>
        <footer :class="{'pad-top': !isProductPage}" class="image-meta">
            <div class="cta">
                <button class="btn-primary"><i class="material-icons">thumb_up</i><span>Appreciate</span></button>
                <button class="btn-social"><img src="@/assets/icon-fb.svg" class="social-icon" alt="like on facebook"><span>Share</span></button>
                <button class="btn-social"><img src="@/assets/icon-tw.svg" class="social-icon" alt="share on twitter"><span>Share</span></button>
            </div>
            <div class="social">
                <button class="social-action"><i class="material-icons">thumb_up</i><span>236</span></button>
                <button class="social-action"><i class="material-icons">mode_comment</i><span>54</span></button>
            </div>
        </footer>
        <div v-if="isProductPage" class="product-page-content">
            <product-meta v-if="product" :product="product"></product-meta>
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
            padding: 0;
            .image {
                padding: 0 48px 24px;
            }
        }
    }

    .ctrl {
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #F5F7F7;
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
        padding:0;
        background-color: #F5F7F7;
        img {
            width: 100%;
            margin:0;
            padding:0;
            display: block;
            box-shadow: 0px 21px 14px -12px rgba(0, 0, 0, 0.14), 0px 0px 10px rgba(0, 0, 0, 0.14);
        }
    }

    .image-meta {
        padding: 0 48px 24px 48px;
        display: flex;
        justify-content: space-between;
        background-color: #F5F7F7;
        &.pad-top {
            padding-top: 24px;
        }
        button {
            display: inline-flex;
            align-items: center;
	        font-size: 12px;	
            font-weight: 600;	
            letter-spacing: 0.5px;	
            line-height: 12px;
            margin-right: 24px;
            &:last-child {
                margin-right: 0;
            }
            i {
                font-size: 18px;
            }
            img {
                max-height: 22px;
                height: auto;
            }
            &.btn-primary {
                background-color: #111215;
                border: none;
                border-radius: 2px;
                color: #fff;
                padding: 8px 16px;
                i {
                    margin-right: 4px;
                }
            }
            &.btn-social {
                text-transform: uppercase;
                -webkit-appearance: none;
                background: none;
                border: none;
                span {
                    margin-left: 4px;
                    display: inline-block;
                }
            }
            &.social-action {
                text-transform: uppercase;
                -webkit-appearance: none;
                background: none;
                border: none;
                margin-right: 12px;
                i {
                    color: #B1B2B3;
                    margin-right: 4px;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
