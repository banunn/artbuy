<template>
    <div class="wrap gallery-grid">
        <masonry :cols="{default: 3, 700: 2, 400: 1}" :gutter="{default: '30px'}">
          <gallery-art :item="item"  v-for="(item, index) in productsList" :key="index"></gallery-art>
        </masonry>
      </div>
</template>

<script>
import galleryArt from "@/components/gallery/gallery-art";
import products from "@/assets/data/products"
export default {
    name:"artist-gallery",
    components: {
        galleryArt
    },
    computed: {
        productsList() {
            return products;
        }
    }
}
</script>

<style>

</style>
