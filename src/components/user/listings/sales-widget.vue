<template>
    <art-widget :title="'Sales Overview'">
        <template slot="body">
            <div class="sales-list">
                <art-sale :sale="s" v-for="(s, index) in sales" :key="index"></art-sale>
            </div>
        </template>
        <template slot="footer">
            <footer class="foot">
                <div class="label">
                    Total Sales
                </div>
                <div class="total-price">
                    {{totalPrice | currency}}
                </div>
            </footer>
        </template>
    </art-widget>
</template>

<script>
import artWidget from '@/components/general/widget'
import artSale from './sale'
export default {
    name: 'sales_widget',
    components: {
        artWidget,
        artSale
    },
    data() {
        return {
            sales: [
                {
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    name: 'Moon Fever',
                    artist: 'West Street Studios',
                    price: 3800
                },
                {
                    photoUrl: 'https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    name: 'The Amazing Hubble',
                    artist: 'West Street Studios',
                    price: 1200
                },
                {
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    name: 'Asteroids',
                    artist: 'West Street Studios',
                    price: 2600
                }
            ]
        }
    },
    computed: {
        totalPrice() {
            const vm = this;
            var total = 0;
            vm.sales.forEach(function(i) {
                total += i.price;
            });
            return total;
        }
    }
}
</script>

<style scoped lang="scss">
.foot {
    margin-top: 8px;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
}
    .label {
        text-transform: capitalize;
        font-size: 14px;	
        font-weight: bold;	
        letter-spacing: 0.1px;
        line-height: 18px;
    }
    .total-price {
        font-size: 14px;	
        font-weight: bold;	
        letter-spacing: 0.1px;	
        line-height: 18px;
    }
</style>
