<template>
    <div class="listing-grid">
        <header class="super-head">
            <div class="nav">
                <button :class="{'selected' : v.selected}" class="nav-item" v-for="(v, index) in views" :key="index">
                    <span>{{v.name}}</span>
                </button>
            </div>
            <div class="ctrl">
                <button @click="$router.push({name: 'create listing'})" class="btn btn-dark">New Listing</button>
            </div>
        </header>
        <div class="table-head">
            <div class="heading"></div>
            <div v-for="(h, index) in headers" class="heading" :key="index">
                <span>{{h}}</span>
                <i v-if="h === 'status'" class="material-icons">arrow_drop_down</i></div>
        </div>
        <div class="table-body">
            <listing v-for="(l, index) in listings" :key="index" :listing="l"></listing>
        </div>
    </div>
</template>

<script>
import listing from './listing-item'
export default {
    name: 'listing-grid',
    components: { 
        listing
    },
    data() {
        return {
            views: [
                {
                    name: 'all',
                    selected: true
                },
                {
                    name: 'active',
                    selected: false
                },
                {
                    name: 'sold',
                    selected: false
                }
            ],
            sortBy: '',
            headers: [
                'title',
                'date added',
                'price',
                'status'
            ],
            listings: [
                {
                    name: 'Pictures In The Sky',
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    date: '01/28/2018',
                    price: '$3,800',
                    status: 'Sold'
                },
                {
                    name: 'Pictures In The Sky',
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    date: '01/28/2018',
                    price: '$3,800',
                    status: 'Sold'
                },
                {
                    name: 'Pictures In The Sky',
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    date: '01/28/2018',
                    price: '$3,800',
                    status: 'Sold'
                },
                {
                    name: 'Pictures In The Sky',
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80',
                    date: '01/28/2018',
                    price: '$3,800',
                    status: 'Sold'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.listing-grid {
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
                border-radius: 2px;	
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
                flex: .5;
            }
            &:nth-child(2) {
flex: 1.5;
            }
        }
    }
}
</style>
