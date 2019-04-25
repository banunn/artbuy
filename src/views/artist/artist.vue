<template>
    <div class="artist-page">
        <artist-sidebar></artist-sidebar>
        <div class="artist-page-content">
            <div class="artist-content">
             <transition name="fade" mode="out-in" appear>
                <router-view></router-view>
             </transition>
            </div>
        </div>
    </div>
</template>

<script>
import artistSidebar from '@/components/artist/artist-sidebar'
export default {
    name: 'artist-page',
    components: {
        artistSidebar, 
    } 
}
</script>

<style lang="scss" scoped>
.artist-page {
    background: #F5F7F7;
    display: flex;
    
    .artist-page-content {
        background: #F5F7F7;
        flex:1;
        max-height: calc(100vh - 95px);
        overflow-y:auto;
    }

    .artist-content {
        padding: 40px 72px;
    }
}
</style>
