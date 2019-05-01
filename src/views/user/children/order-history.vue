<template>
        <div class="listing-wrap">
            <div class="main">
                <!-- ORDER HISTORY GRID -->
                <order-grid></order-grid>
                <order-history-modal></order-history-modal>
            </div>
        </div>
</template>

<script>
import orderGrid from '@/components/user/orders/history-grid'
import orderHistoryModal from '@/components/user/orders/modal/modal'
export default {
    name: 'Order_History',
    components: {
        orderGrid,
        orderHistoryModal
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
