<template>
    <div class="user-page">
        <user-sidebar></user-sidebar>
    </div>
</template>

<script>
import userSidebar from '@/components/user/user-sidebar'
export default {
    name: 'user-page',
    components: {
        userSidebar
    }
}
</script>

<style>
.user-page {
    background: #F5F7F7;
}
</style>
