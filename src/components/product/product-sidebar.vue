<template>
    <aside v-if="product" class="sidebar">
        <header class="head">
            <div class="meta">
                <aside @click="goToUserProfile" class="user-icon"><img :src="product.author.photoUrl" alt=""></aside>
                <div class="meta-detail">
                    <h3>{{product.author.name}}</h3>
                    <span><i class="material-icons">location_on</i> {{product.author.location.city + ', ' + product.author.location.state}}</span>
                </div>
            </div>
            <div class="action"><button title="Follow This Artist" class="btn">Follow</button></div>
        </header>
        <section class="content">
            <h5 class="tag genre">Contemporary</h5>
            <h2 class="title">{{product.art.name}}</h2>
            <!-- <p>Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone who is just fooling around with astronomy to a serious student of science. But you and I both know that there is still another big step after buying a telescope before you really know how to use it.</p> -->
        </section>
        <footer class="foot">
            <span>{{product.art.dimensions}}</span>
            <h3>{{product.art.price | currency}}</h3>
        </footer>
        <footer class="action-foot">
            <button @click="addToCart" class="purchase btn-primary">Purchase</button>
            <button class="btn-secondary">Add To Collection</button>
            <button v-if="!isProductPage" @click="viewProduct" class="btn-secondary">View More</button>
        </footer>
    </aside>  
</template>

<script>
export default {
  name: "modal-product-sidebar",
  props: {
    product: Object
  },
  methods: {
      viewProduct() {
          const vm = this;
          const p = vm.product;
          return vm.$store.dispatch('closeProductPreview').then(function() {
             vm.$router.push({name: 'product', params: {id: p.id}});
          })
      },
      addToCart() {
          var item = this.product;
          this.$store.dispatch('addItemToCart', item);
      },
      goToUserProfile() {
          const vm = this;
        var uid = this.product.author.id;
        vm.$store.dispatch('closeProductPreview').then(function() {
             vm.$router.push({name: 'user dashboard', params: {id: uid}});
        })
      },
    },
    computed: {
        isProductPage() {
            var route = this.$store.state.route.name;
            return route === 'product' ? true : false;
        }
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 336px;
  background: #fff;
  flex: 336px 1 0;
  box-shadow: inset 1px 0 0 0 #e8eced;
  padding: 50px 24px 24px 25px;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 21.5px;
    margin-bottom: 21.5px;
    border-bottom: 1px solid #E8EAEB;
    .btn {
        -webkit-appearance: none;
        height: 24px;
        width: 71px;	
        border: 1px solid rgba(17,18,21,0.5);	
        border-radius: 12px;
        background: none;
        color: #111215;	
        font-size: 9px;	
        font-weight: 600;	
        letter-spacing: 0.9px;	
        line-height: 12px;	
        text-align: center;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}
.meta {
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
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0.1px;
      line-height: 18px;
      text-shadow: 0 1px 4px 0 #111215;
      margin: 0;
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

.content {
    .genre {
        border-radius: 2px;	
        background-color: #EDF0F0;
        display: inline-flex;
        margin:0;
        color: rgba(#111215, .8);
        font-size: 9px;	
        font-weight: 600;	
        letter-spacing: 1.5px;	
        line-height: 12px;
        text-transform: uppercase;
        padding: 6px 10px;
    }

    .title {
	height: 56px;
	width: 240px;
	color: #111215;
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0.17px;
    line-height: 28px;
    font-weight: 600;
    }

    p {
        opacity: 0.9;
        color: #111215;
        font-size: 14px;
        font-weight: 500;	
        line-height: 24px;
        margin-top:0;
        margin-bottom: 20px;
    }
}

.foot {
    padding-top: 20px;
    padding-bottom: 14px;
    margin-bottom: 24px;
    border-bottom: 1px solid #E8EAEB;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    span {
        color: #111215;	
        font-size: 14px;
        letter-spacing: 0.5px;
    }
    h3 {
        margin:0;
        color: #111215;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 24px;
    }
}

.action-foot {
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-appearance: none;
        border-width: 1px;
        border-radius: 2px;
        border-color: #111215;
        background: inherit;
        width: 100%;
        height: 48px;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1.2px;	
        line-height: 16px;
        &.btn-primary {
            background: #111215;
            color: #fff;
        }
    }
}

</style>
