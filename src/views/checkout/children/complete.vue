<template>
<div class="purchase-complete">
    <p>Thanks for placing an order with ArtBuy. We’re excited to deliver these amazing works of art straight to your front door!</p>
    <p>We’ll be sending you an email with tracking information for your order soon. You can also visit the order history section of your account anytime to check the status and view tracking information.</p>
    <button @click="$router.push('/')" class="btn-block-primary">Done</button>
</div>
</template>

<script>
export default {
    name: 'complete_purchase',
    beforeRouteLeave (to, from, next) {
        this.$store.dispatch('clearCart').then(function() {
            next();
        });
    }
}
</script>

<style lang="scss" scoped>
    p {
        font-size: 20px;	
        font-weight: 500;	
        line-height: 28px;
    }
    button {
        max-width: 164px;
        margin-top: 40px;
    }
</style>
