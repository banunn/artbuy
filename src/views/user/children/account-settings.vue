<template>
    <div class="account-settings">
        <main class="main">
            <user-detail></user-detail>
            <subscription></subscription>
            <payment-methods-preview></payment-methods-preview>
        </main>
        <aside class="sidebar">
            <custom-url />
            <manage-password></manage-password>
            <order-history></order-history>
        </aside>
    </div>
</template>

<script>
import customUrl from '@/components/user/account-settings/custom-url'
import managePassword from '@/components/user/account-settings/manage-password'
import orderHistory from '@/components/user/account-settings/order-history'
import paymentMethodsPreview from '@/components/user/account-settings/payment-methods-preview'
import subscription from '@/components/user/account-settings/subscription'
import userDetail from '@/components/user/account-settings/user-detail'
export default {
    name: 'account-settings',
    components: {
        customUrl,
        managePassword,
        orderHistory,
        paymentMethodsPreview,
        subscription,
        userDetail
    }
}
</script>

<style lang="scss" scoped>
    .account-settings {
        max-width: 965px;
        display: flex;
        .main {
            flex:1;
        }
        .sidebar {
            flex: 332px 0 0;
            margin-left: 32px;
        }
    }
</style>
