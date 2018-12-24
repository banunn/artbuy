<template>
    <art-widget :title="'Change Password'">
        <template slot="body">
            <input type="password" placeholder="Current password" class="input">
            <input type="password" placeholder="New password" class="input">
            <input type="password" placeholder="Confirm new password" class="input">
        </template>
        <template slot="footer">
            <button class="btn-block-primary">
                Update Password
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
    }
}
</script>

<style lang="scss" scoped>
    
</style>
