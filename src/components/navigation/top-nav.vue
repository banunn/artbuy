<template>
    <div class="top-nav">
        <img class="logo" src="../../assets/logo.png" alt="">
        <nav-tools></nav-tools>
    </div>
</template>

<script>
import navTools from './nav-tools'
export default {
    name: 'top_navigation',
    components: {
        navTools
    }
}
</script>

<style lang="scss" scoped>
    .top-nav {
        height: 64px;
        background-color: #000; 
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 22px;
    }
    .logo {
        max-width: 100px;
    }
</style>
