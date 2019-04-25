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
    <donation-modal></donation-modal>
    <artist-donation-modal></artist-donation-modal>
    <payment-method-modal></payment-method-modal>
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
import paymentMethodModal from '@/components/user/payment/method-modal'
import donationModal from '@/components/user/donations/donation-modal'
import artistDonationModal from '@/components/artist/donations/donation-modal'
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
    onboardingStoryModal,
    paymentMethodModal,
    donationModal,
    artistDonationModal
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
