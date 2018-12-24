<template>
    <art-widget :title="'Status'" :help="help">
        <template slot="body">
            <header>
                 <i class="icon-warning"></i>
                 <p><span class="status bold">Draft</span> created on December 18, 2019</p>
            </header>
        </template>
        <template slot="footer">
            <button class="btn-block-primary">
                Save &amp; Publish
            </button>
            <button class="btn-block-secondary">
                Save As Draft
            </button>
        </template>
    </art-widget>
</template>
<script>
import artWidget from '@/components/general/widget'
export default {
    name: 'event_status_widget',
    components: {
        artWidget
    },
    data() {
        return {
            help: {
                title: 'This event has not been published yet.',
                text: 'To make this event public, choose “Save & Publish.” If you’re not quite ready to make this event public choose “Save as Draft.” '
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
