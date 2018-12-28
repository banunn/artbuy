<template>
    <div class="top-nav">
        <router-link to="/">
            <img class="logo" src="../../assets/artbuy_logo_white.svg" alt="">
            <span>Find Art, Buy Art, Sell Art</span>
        </router-link>
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
        span {
            text-decoration: none;
            color: #fff;
            font-size: 12px;	
            font-weight: 600;	
            letter-spacing: 0.5px;	
            line-height: 24px;
            margin-left: 12px;
            position: relative;
            top: -1px;
        }
    }
    .logo {
        max-width: 100px;
    }
</style>
