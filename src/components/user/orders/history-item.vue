<template>
    <div @click="openOrder" class="item">
        <span class="detail title">{{item.order_number}}</span>
        <span class="detail">{{item.date}}</span>
        <span class="detail">{{item.items}}</span>
        <span class="detail">{{item.amount}}</span>
    </div>
</template>

<script>
export default {
    name: 'history-item',
    props: {
        item: Object
    },
    methods: {
        openOrder() {
            return this.$store.dispatch('openOrderHistoryModal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        padding: 0 18px 0 0;
        margin-left: 18px;
        height: 60px;
        border-bottom: 1px solid #E8EAEB;
        position: relative;
        &:hover {
            background-color: #FAFCFC;
        }
        .detail {
            flex:1 0 0;
            display: flex;
            align-items: center;
            padding-right: 20px;

            opacity: 0.8;
            color: #111215;	
            font-size: 12px;	
            font-weight: 500;	
            letter-spacing: 0.5px;	
            line-height: 18px;
            &.title {
                opacity: 1;
                font-weight: bold;
                flex: 1.5;
            }
            &:nth-child(2) { flex: 1 0 0;}
            &:nth-child(3) { flex: 1 0 0; padding-left: 12px;}
            &:nth-child(4) { flex: 4 0 0; justify-content: flex-end;}
        }
        &:hover {
            .delete-btn {
                opacity: 1;
                &:hover {
                    i {
                        color: #111215;
                    }
                }
            }
        }
    }
</style>
