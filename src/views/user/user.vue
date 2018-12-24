<template>
    <div class="user-page">
        <user-sidebar></user-sidebar>
        <div class="user-page-content">
            <user-navbar></user-navbar>
             <transition name="fade" mode="out-in" appear>
                <router-view></router-view>
             </transition>
        </div>
    </div>
</template>

<script>
import userSidebar from '@/components/user/user-sidebar'
import userNavbar from '@/components/user/nav-bar'
export default {
    name: 'user-page',
    components: {
        userSidebar, 
        userNavbar
    }
}
</script>

<style lang="scss" scoped>
.user-page {
    background: #F5F7F7;
    min-height: calc(100vh - 64px);
    display: flex;
    
    .user-page-content {
        background: #F5F7F7;
        flex:1;
        padding: 48px 72px;
        max-height: calc(100vh - 64px);
        overflow-y:auto;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
