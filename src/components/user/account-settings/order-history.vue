<template>
    <art-widget :title="'Order History'">
        <ul slot="body" class="order-list">
            <li v-for="(o, index) in orders" :key="index">
                <div class="detail">
                    <figure class="img">
                        <img :src="o.photoUrl" alt="">
                    </figure>
                    <div class="meta">
                        <header>{{o.name}}</header>
                        <footer>{{'by ' + o.artistName}}</footer>
                    </div>
                </div>
                <div class="price"><span>{{o.price | currency}}</span></div>
            </li>
        </ul>
    </art-widget>
</template>

<script>
import artWidget from '@/components/general/widget'
export default {
    name: 'order-history-widget',
    components: {
        artWidget
    },
    data() {
        return {
            orders: [
                {
                    name: 'Look Up In The Sky',
                    artistName: 'West Street Studios',
                    price: 3800,
                    photoUrl: 'https://images.unsplash.com/photo-1529157366686-70612f8b5fc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80'
                },
                                {
                    name: 'Telescopes 101',
                    artistName: 'West Street Studios',
                    price: 1250,
                    photoUrl: 'https://images.unsplash.com/photo-1533653118617-72f0b4cc9933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80'
                },
                                {
                    name: 'The Universe Through…',
                    artistName: 'West Street Studios',
                    price: 1800,
                    photoUrl: 'https://images.unsplash.com/photo-1518715058720-e56f02e77fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80'
                },
                                {
                    name: 'Space The Final Frontier',
                    artistName: 'West Street Studios',
                    price: 6620,
                    photoUrl: 'https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80'
                },
                                {
                    name: 'Astronomy Or Astrology',
                    artistName: 'West Street Studios',
                    price: 3217,
                    photoUrl: 'https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.order-list {
    display: flex;
    justify-content: space-between;
    margin:0;
    padding:0;
    list-style: none;
    flex-direction: column;
    li {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #E8EAEB;
        &:last-child {
            border-bottom:none;
        }
        .detail {
            display: flex;
        }
        .meta {
            header {
                font-size: 14px;	
                font-weight: 600;	
                letter-spacing: 0.1px;	
                line-height: 18px;
                font-weight: 600;
            }
            footer {
                font-size: 12px;
                letter-spacing: 0.5px;
                line-height: 12px;
                opacity: .8;
                margin-top: 3px;
            }
        }
        .price {
            font-size: 14px;	
            font-weight: 600;
            letter-spacing: 0.1px;
            line-height: 18px;
            display: flex;
            align-items: center;
        }
    }
}
.img {
    background: #eaeaea;
    height: 40px;
    width: 40px;	
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;
    img {
        position: relative;
        max-width: 100%;
        height: 100%;
        width: 100%;
        object-fit: cover;

    }
}
</style>
