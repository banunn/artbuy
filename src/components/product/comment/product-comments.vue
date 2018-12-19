<template>
    <div class="product-comments">
        product-comments
        <product-comment></product-comment>
        <comment-form></comment-form>
    </div>
</template>

<script>
import productComment from './comment'
import commentForm from './comment-form'

export default {
    name: 'product-comments',
    components: {
        productComment,
        commentForm
    }
}
</script>

<style lang="scss">

</style>
