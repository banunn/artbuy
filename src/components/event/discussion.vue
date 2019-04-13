<template>
    <div>
        <post-input></post-input>
        <art-post v-for="(p, index) in comments" :key="index" :post="p"></art-post>
    </div>
</template>

<script>
import artPost from '@/components/timeline/post';
import postsData from '@/assets/data/posts';
import postInput from '@/components/user/dashboard/feed-input';
export default {
    name: 'event_discussion',
    components: {
        artPost,
        postInput
    },
    data() {
        return {
            comments: postsData
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
