<template>
    <div class="product-comments">
        <div class="comment-header">
            <h3>Comments <span>(54)</span></h3>
        </div>
        <div class="comments">
            <comment-form></comment-form>
            <product-comment-list :comments="productComments" />
        </div>
    </div>
</template>

<script>
import productCommentList from './product-comments-list'
import commentForm from './comment-form'

export default {
    name: 'product-comments',
    components: {
        productCommentList,
        commentForm
    },
    computed: {
        productComments() {
            return this.$store.getters.productComments;
        }
    }
}
</script>

<style lang="scss">
    .product-comments {
        background: #F5F7F7;
        padding: 0px 48px 48px 48px;

        .comment-header {
            padding: 38px 0;
            h3 {
                margin:0;
                color: #111215;
                font-size: 24px;	
                font-weight: bold;	
                letter-spacing: 0.5px;	
                line-height: 18px;
                font-weight: 600;
                span {
                    font-weight: normal;
                }
            }
        }
        .comments {
            background: #fff;
            border: 1px solid #E8ECED;
            padding: 48px;
        }
    }
</style>
