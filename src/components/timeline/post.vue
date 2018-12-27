<template>
    <div class="post">
        <post-header :meta="post.meta" :type="post.type"></post-header>
        <event-post v-if="post.type == 'event'" :post="post"></event-post>
        <work-post v-if="post.type == 'work'" :post="post"></work-post>
    </div>
</template>

<script>
import postHeader from './post-header'
import eventPost from './templates/event'
import workPost from './templates/work'
export default {
    name: 'timeline-post',
    components: {
        postHeader,
        eventPost,
        workPost
    },
    props: {
        post: Object
    }
}
</script>

<style lang="scss" scoped>
    .post {
        border: 1px solid rgba(17,18,21,0.1);	
        border-radius: 2px;	
        background-color: #FFFFFF;
        padding: 24px 16px;
        margin-bottom: 16px;
    }
</style>
