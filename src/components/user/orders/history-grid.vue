<template>
    <div class="history-grid">
        <header class="super-head">
            <div class="nav">
                <button :class="{'selected' : v.selected}" class="nav-item" v-for="(v, index) in views" :key="index">
                    <span>{{v.name}}</span>
                </button>
            </div>
        </header>
        <div class="table-head">
            <div v-for="(h, index) in headers" class="heading" :key="index">
                <span>{{h}}</span>
                <i v-if="h === 'Date'" class="material-icons">arrow_drop_down</i></div>
        </div>
        <div class="table-body">
            <history-item v-for="(i, index) in items" :key="index" :item="i"></history-item>
        </div>
    </div>
</template>

<script>
import historyItem from './history-item'
import historyItems from '@/assets/data/orders'
export default {
    name: 'event-grid',
    components: {
        historyItem
    },
    methods: {

    },
    data() {
        return {
            views: [
                {
                    name: 'all',
                    selected: true
                },
                {
                    name: 'upcoming',
                    selected: false
                },
                {
                    name: 'past',
                    selected: false
                }
            ],
            sortBy: '',
            headers: [
                'Order Number',
                'Date',
                'Items',
                'Amount',
            ],
            items: historyItems
        }
    }
}
</script>

<style lang="scss" scoped>
.history-grid {
    background-color: #FFFFFF;
    border-radius: 2px;
    border: 1px solid rgba(17,18,21,0.1);
    .super-head {
        height: 55px;
        display: flex;
        justify-content: space-between;
        .nav {
            display: flex;
            padding-left: 18px;
            button {
                -webkit-appearance: none;
                background: none;
                border: none;
                opacity: 0.6;	
                color: #111215;	
                font-size: 12px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 18px;   
                text-transform: uppercase;
                &.selected {
                    border-bottom: 2px solid #111215;	
                    opacity: 1;
                }
            }
        }
        .ctrl {
            display: flex;
            align-items: center;
            padding-right: 24px;
            button {
                height: 24px;	
                width: 105px;	
                border-radius: 0px;	
                background-color: #111215;
                border: none;
                color: #fff;
                font-size: 9px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 12px;	
                text-align: center;
                text-transform: uppercase;
            }
        }
    }
    .table-head {
        display: flex;
        padding: 0 18px;
        height: 40px;
        border-top: 1px solid #E8EAEB;
        border-bottom: 1px solid #E8EAEB;
        margin-top: -1px;
        .heading {
            flex:1 0 0;
            opacity: 0.6;
            font-size: 10px;	
            font-weight: bold;	
            letter-spacing: 0.42px;	
            line-height: 12px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            padding-right: 20px;

            &:first-child {
                flex: 1.5;
            }
            &:nth-child(2) { flex: 1 0 0;}
            &:nth-child(3) { flex: 1 0 0;}
            &:nth-child(4) { flex: 4 0 0; justify-content: flex-end;}
        }
    }
}
</style>
