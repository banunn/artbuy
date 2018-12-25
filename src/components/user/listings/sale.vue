<template>
    <div class="sale">
        <div class="detail">
            <figure class="img">
                <img :src="sale.photoUrl" alt="">
            </figure>
            <div class="meta">
                <header class="title">{{sale.name}}</header>
                <span>{{'by ' + sale.artist}}</span>
            </div>
        </div>
        <div class="price">
            <span>{{sale.price | currency}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sales_widget_sale',
    props: {
        sale: Object
    }
}
</script>

<style sceoped lang="scss">
.sale {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #E8EAEB;
    .detail {
        display: flex;

        .meta {
            .title {
                	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
            }
            span {
                	opacity: 0.8;	color: #111215; font-size: 12px;	letter-spacing: 0.5px;	line-height: 12px;
            }
        }
    }
}
    .img {
        height: 40px;
        width: 40px;
        border-radius: 2px;
        overflow: hidden;
        margin-right: 8px;
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .price {
        span {
            	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
        }
    }
</style>
