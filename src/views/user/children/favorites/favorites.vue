<template>
        <div class="favorites-wrap">
            <div class="main">
                <header class="fav-head">
                    <h3 class="title">Favorites</h3>
                    <button @click="openModal" class="btn-primary">New Group</button>
                </header>
                <favorites-grid></favorites-grid>
                <favorites-modal></favorites-modal>
            </div>
        </div>
</template>

<script>
import favoritesGrid from '@/components/user/favorites/list'
import favoritesModal from '@/components/user/favorites/modal/modal'
export default {
    name: 'View_Favorites',
    components: {
        favoritesGrid,
        favoritesModal
    },
    methods: {
        openModal() {
            return this.$store.dispatch('openFavoritesModal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .favorites-wrap {
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
    .fav-head {
            color: #111215;	
            font-size: 24px;	
            font-weight: bold;	
            letter-spacing: 0.17px;	
            line-height: 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
    }

    .btn-primary {
        height: 24px;	
        width: 105px;	
        border-radius: 2px;
        background-color: #111215;
        color: #fff;
        text-transform: uppercase;
        font-size: 9px;	
        font-weight: bold;	
        letter-spacing: 1px;	
        line-height: 12px;	
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    }
</style>