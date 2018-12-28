<template>
  <div class="home">
      <home-hero
        head="Love Art?"
        sub="Find it. Buy it. Sell it.">
      </home-hero>
      <home-search></home-search>

      <div class="wrap gallery-grid">
        <masonry :cols="{default: 3, 700: 2, 400: 1}" :gutter="{default: '30px'}">
          <gallery-art :item="item"  v-for="(item, index) in productsList" :key="index"></gallery-art>
        </masonry>
      </div>

  </div>
</template>
<script>
import homeHero from "@/components/home/hero";
import homeSearch from "@/components/home/search";
import galleryArt from "@/components/gallery/gallery-art";
import products from "@/assets/data/products"
export default {
  name: "home",
  components: {
    homeHero,
    homeSearch,
    galleryArt
  },
  data() {
    return {
      heroBg: "https://images.unsplash.com/photo-1520652089412-37d308180157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    };
  },
  computed: {
    productsList() {
      return products;
    }
  }
};
</script>
<style lang="scss" scoped>
.gallery-grid {
  margin-top: 30px;
}
</style>

