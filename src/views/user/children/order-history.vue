<template>
        <div class="listing-wrap">
            <div class="main">
                <!-- ORDER HISTORY GRID -->
                Order History
            </div>
        </div>
</template>

<script>

export default {
    name: 'Order_History',
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
