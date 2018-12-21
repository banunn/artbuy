<template>
    <div v-if="comments" class="product-comment-list">
        <comment-item v-for="(c, index) in comments" :key="index" :comment="c"></comment-item>
    </div>
</template>

<script>
import commentItem from './comment';
export default {
    name: 'product-comments-list',
    props: {
        comments: Array
    },
    components: {
        commentItem
    }
}
</script>

<style lang="scss">
    .product-comment-list {
        margin-top: 48px;
    }
</style>
