<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <product-modal />
    <auth-modal />
    <subscription-modal />
    <onboarding-modal />
    <user-cart />
  </div>
</template>

<script>
import topNav from "@/components/navigation/top-nav";
import productModal from "@/components/product/modal/modal";
import authModal from '@/components/auth/auth-modal'
import subscriptionModal from '@/components/subscription/modal'
import onboardingModal from '@/components/onboarding/modal'
import userCart from '@/components/cart/cart'
export default {
  name: "main-app",
  components: {
    topNav,
    productModal,
    authModal,
    subscriptionModal,
    onboardingModal,
    userCart
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
