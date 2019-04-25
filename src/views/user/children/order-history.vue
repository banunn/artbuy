<template>
        <div class="listing-wrap">
            <div class="main">
                <!-- ORDER HISTORY GRID -->
                <order-grid></order-grid>
            </div>
        </div>
</template>

<script>
import orderGrid from '@/components/user/orders/history-grid'
export default {
    name: 'Order_History',
    components: {
        orderGrid
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
