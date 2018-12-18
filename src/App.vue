<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <product-modal />
  </div>
</template>

<script>
import topNav from "@/components/navigation/top-nav";
import productModal from "@/components/product/modal/modal";
export default {
  name: "main-app",
  components: {
    topNav,
    productModal
  },
  computed: {
    flyoutOpen() {
      return this.$store.getters.productModalState;
    }
  }
};
</script>

<style lang="scss">
// Importing global styles to use application wide. Other components have scoped styles.
@import "./styles/main";
</style>
