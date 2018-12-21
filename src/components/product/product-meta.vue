<template>
    <div class="product-meta">
        <header class="head">
            <div class="artist-meta lg">
                <aside class="user-icon"><img :src="product.author.photoUrl" alt=""></aside>
                <div class="meta-detail">
                    <h3>{{product.author.name}}</h3>
                    <span><i class="material-icons">location_on</i> {{product.author.location.city + ', ' + product.author.location.state}}</span>
                </div>
            </div>
            <button class="btn-txt">
                <span>View Full Collection</span>
                <i class="material-icons">chevron_right</i>
            </button>
        </header>
        <product-list></product-list>
    </div>
</template>

<script>
import productList from './product-list/list'
export default {
    name: 'product-meta',
    props: {
        product: Object
    },
    components: {
        productList
    }
}
</script>

<style lang="scss">
.product-meta {
    background: #fff;
    padding: 48px 0 48px 48px;
    border-top: 1px solid #E8ECED;
    border-bottom: 1px solid #E8ECED;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 48px;
        margin-bottom: 48px;
        .btn-txt {
            display: inline-flex;
            align-items: center;
            -webkit-appearance: none;
            border: none;
            background: none;
            padding-right: 0;
            font-size: 12px;	
            font-weight: 600;
            letter-spacing: 1.2px;	
            line-height: 16px;
        }
    }
}
.artist-meta.lg {
  display: flex;
  align-items: center;
  .user-icon {
    height: 50px;
    width: 50px;
    img {
      border-radius: 50%;
      object-fit: cover;
      height: 50px;
      width: 50px;
    }
  }
  .meta-detail {
    margin-left: 8px;
    h3 {
	    color: #111215;	
        font-size: 24px;
        font-weight: bold;	
        letter-spacing: 0.5px;	
        line-height: 18px;
        margin: 0 0 4px 0;
    }
    span {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.5px;
      line-height: 12px;
      text-shadow: 0 1px 4px 0 #111215;
      display: flex;
      align-items: center;
      i {
        font-size: 14px;
        margin-right: 4px;
      }
    }
  }
}
</style>
