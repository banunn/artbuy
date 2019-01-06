<template>
      <div class="wrap gallery-grid">
        <masonry :cols="{default: 2, 700: 2, 400: 1}" :gutter="{default: '30px'}">
          <gallery-art :item="item"  v-for="(item, index) in items" :key="index"></gallery-art>
        </masonry>
      </div>
</template>

<script>
import galleryArt from "@/components/gallery/gallery-art";
import products from "@/assets/data/products"
export default {
    name: 'virtual-collection',
    components: {
        galleryArt
    },
    data() {
        return {
            items: products
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-grid {
  margin-top: 30px;
}
</style>
