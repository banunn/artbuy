<template>
    <art-widget :title="'Custom URL'" :help="help">
        <template slot="body">
            <header class="url">
                <i class="icon-success"></i>
                <div class="input-group">
                    <input type="text" class="input sm" :placeholder="user.firstName + '-' + user.lastName">
                    <aside class="context">.artbuy.com</aside>
                </div>
            </header>
        </template>
        <template slot="footer">
            <button class="btn-block-primary">
                URL Saved
            </button>
        </template>
    </art-widget>
</template>

<script>
import artWidget from '@/components/general/widget'
export default {
    name: 'manage-password-widget',
    components: {
        artWidget
    },
    data() {
        return {
            help: {
                title: 'Give people a direct link to your profile',
                text: 'Custom URL’s allow you to create a unique link that takes users directly to your ArtBuy profile. Set up your custom URL and share it across your social media accounts to promote your work!'
            }
        }
    },
    computed: {
        user() {
            return this.$store.getters.userInfo;
        }
    }
}
</script>

<style lang="scss" scoped>

    .input-group {
        display: flex;
        margin-bottom: 8px;
        .context {
            background: #FAFAFA;
            height: 40px;
            border: 1px solid rgba(17,18,21,0.2);
            border-left: none;
            position: relative;
            left: -1px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;	
            font-weight: 500;	
            letter-spacing: 0.1px;	
            line-height: 20px;
            color: rgba(#111215, .4);
            padding: 0 12px;
        }
    }

</style>
