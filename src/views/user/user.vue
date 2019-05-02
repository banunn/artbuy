<template>
    <div class="user-page">
        <user-sidebar></user-sidebar>
        <div class="user-page-content">
            <user-navbar></user-navbar>
            <div class="page-content">
             <transition name="fade" mode="out-in" appear>
                <router-view></router-view>
             </transition>
            </div>
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
    display: flex;
    
    .user-page-content {
        background: #F5F7F7;
        flex:1;
        max-height: calc(100vh - 95px);
        overflow-y:auto;
    }

    .page-content {
        padding: 40px 72px;
    }
}

@media(max-width: 1000px) {
 .user-page {
    flex-direction: column
}

aside.user-sidebar {
    width: 100% !important;
    justify-content: center;
    max-height: inherit;
    overflow-y: hidden;
    flex: 1;
    order: 3;
}   
.dashboard-wrap {
    flex-direction: column;
}
.page-content {
    padding: 42px 10px !important;
}
aside.sidebar {
    margin-left: 0px !important;
    
}
.user-page-content {
    overflow-y: inherit;
    max-height: inherit !important;
    
}
}
</style>
