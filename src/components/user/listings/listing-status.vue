<template>
    <art-widget :title="'Status'" :help="help">
        <template slot="body">
            <header>
                 <i class="icon-warning"></i>
                 <p><span class="status bold">Published</span> December 18, 2019</p>
            </header>
        </template>
        <template slot="footer">
            <button class="btn-block-primary">
                Save
            </button>
        </template>
    </art-widget>
</template>
<script>
import artWidget from '@/components/general/widget'
export default {
    name: 'listing_status_widget',
    components: {
        artWidget
    },
    data() {
        return {
            help: {
                title: 'This is conditional helptext.',
                text: 'To make this listing public, choose “Save” '
            }
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
        &:last-child {
            margin-bottom:0;
        }
    }
</style>
