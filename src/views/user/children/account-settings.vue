<template>
    <div class="account-settings">
        <main class="main">
            <user-detail></user-detail>
            <subscription-non-member></subscription-non-member>
            <subscription></subscription>
            <payment-methods></payment-methods>
        </main>
        <aside class="sidebar">
            <manage-password></manage-password>
            <order-history></order-history>
            <video-link></video-link>
            <artist-donate></artist-donate>
        </aside>
    </div>
</template>

<script>
import customUrl from '@/components/user/account-settings/custom-url'
import managePassword from '@/components/user/account-settings/manage-password'
import orderHistory from '@/components/user/account-settings/order-history'
import paymentMethods from '@/components/user/payment/w-payment-methods/payment-widget'
import subscription from '@/components/user/account-settings/subscription'
import subscriptionNonMember from '@/components/user/account-settings/subscription-non-member'
import userDetail from '@/components/user/account-settings/user-detail'
import artistDonate from '@/components/user/account-settings/donate-widget'
import videoLink from '@/components/user/account-settings/video-link-widget'
export default {
    name: 'account-settings',
    components: {
        customUrl,
        managePassword,
        orderHistory,
        paymentMethods,
        subscription,
        userDetail,
        subscriptionNonMember,
        artistDonate,
        videoLink
    }
}
</script>

<style lang="scss" scoped>
    .account-settings {
        max-width: 965px;
        display: flex;
        @media(max-width: 1000px) {
            flex-direction: column;
        }
        .main {
            flex:1;
        }
        .sidebar {
            flex: 332px 0 0;
            margin-left: 32px;
            @media(max-width: 1000px) {
                margin-left: 0;
            }
        }
    }
</style>
