<template>
    <div class="product-list">
        <swiper :options="options" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(p, index) in itemCount" :key="index">
                <list-product 
                    :key="index"
                ></list-product>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    
</template>

<script>
import listProduct from './product'
export default {
    name: 'product-list',
    components: {
        listProduct
    },
    data() {
        return {
            itemCount: 7,
            options: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style lang="scss" scoped>

    .product-list {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
        padding-bottom: 24px;
    }

</style>
