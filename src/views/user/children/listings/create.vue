<template>
    <div class="create">
        <div class="main">
            create listing
        </div>
        <aside class="sidebar">
            sidebar
        </aside>
    </div>
</template>

<script>
export default {
    name: 'create_listing'

}
</script>

<style lang="scss" scoped>
    .create {
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
