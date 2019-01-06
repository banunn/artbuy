<template>
        <div class="listing-wrap">
            <div class="main">
                <listings-grid></listings-grid>
            </div>
 <!--            <aside class="sidebar">
                <sales-widget></sales-widget>
            </aside> -->
        </div>
</template>

<script>
import listingsGrid from '@/components/user/listings/listings-grid'
import salesWidget from '@/components/user/listings/sales-widget'
export default {
    name: 'View_Listings',
    components: {
        listingsGrid,
        salesWidget
    }
}
</script>

<style lang="scss" scoped>
    .listing-wrap {
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
