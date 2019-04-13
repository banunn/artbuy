<template>
        <div class="favorites-wrap">
            <div class="main">
                Favorites
            </div>
        </div>
</template>

<script>
export default {
    name: 'View_Favorites',
    components: {
    }
}
</script>

<style lang="scss" scoped>
    .listing-wrap {
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