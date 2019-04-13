<template>
    <div class="page-wrap">
        <follow-grid></follow-grid>
    </div>
</template>

<script>
import followGrid from '@/components/user/social/follow-grid';
export default {
    name: 'social',
    components: {
        followGrid
    }
}
</script>

<style scoped lang="scss">
    .page-wrap {
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
