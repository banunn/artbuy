<template>
        <div class="dashboard-wrap">
            <div class="main">
                <art-post v-for="(p, index) in posts" :key="index" :post="p"></art-post>
            </div>
            <aside class="sidebar">
                <recent-followers></recent-followers>
               <art-sales></art-sales>
            </aside>
        </div>
</template>

<script>
import artSales from '@/components/user/listings/sales-widget'
import recentFollowers from '@/components/user/dashboard/followers-widget/widget'
import artPost from '@/components/timeline/post'
import postsData from '@/assets/data/posts'
export default {
    name: 'User_Dashboard',
    data() {
        return {
            posts: postsData
        }
    },
    components: {
        artSales,
        recentFollowers,
        artPost
    }
}
</script>

<style lang="scss" scoped>
    .dashboard-wrap {
        max-width: 965px;
        display: flex;
        .main {
            flex:1;
        }
        .sidebar {
            flex: 332px 0 0;
            margin-left: 32px;
        }
    }
</style>
