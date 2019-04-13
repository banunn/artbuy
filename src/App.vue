<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <product-modal />
    <auth-modal />
    <subscription-modal />
    <onboarding-modal />
    <onboarding-story-modal></onboarding-story-modal>
    <user-cart />
    <art-buy-footer></art-buy-footer>
  </div>
</template>

<script>
import topNav from "@/components/navigation/top-nav";
import productModal from "@/components/product/modal/modal";
import authModal from '@/components/auth/auth-modal'
import subscriptionModal from '@/components/subscription/modal'
import onboardingModal from '@/components/onboarding/modal'
import onboardingStoryModal from '@/components/onboarding/story/storyModal'
import userCart from '@/components/cart/cart'
import artBuyFooter from '@/components/footer'
export default {
  name: "main-app",
  components: {
    topNav,
    productModal,
    authModal,
    subscriptionModal,
    onboardingModal,
    userCart,
    artBuyFooter,
    onboardingStoryModal
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

#app {
  padding-bottom: 32px;
}
</style>
