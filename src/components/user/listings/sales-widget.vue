<template>
    <art-widget :title="'Sales Overview'">
        <template slot="body">
            <div class="sales-list">
                <div class="sale" v-for="(s, index) in sales" :key="index">
                    <div class="details">
                        {{s.name}}
                    </div>
                    <div class="price">
                        {{s.price}}
                    </div>
                </div>
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
export default {
    name: 'sales_widget',
    components: {
        artWidget
    },
    data() {
        return {
            totalPrice: 7600,
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
