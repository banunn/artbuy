<template>
    <art-widget :title="'Status'">
        <template slot="body">
            <header>
                 <i class="icon-error"></i>
                 <p><span class="status bold">Sold</span> on December 18, 2019</p>
            </header>
        </template>
        <template slot="footer">
            <button class="btn-block-primary">
                <i class="material-icons">receipt</i> Download Shipping Label
            </button>
        </template>
    </art-widget>
</template>
<script>
import artWidget from '@/components/general/widget'
export default {
    name: 'listing_status_widget_ship',
    components: {
        artWidget
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
    header {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        p {
            display :inline-block;
            margin: 0;
        }
    }
    button {
        margin-bottom: 8px;
        i {
            margin-right: 10px;
            font-size: 20px;
        }
        &:last-child {
            margin-bottom:0;
        }
    }
</style>
