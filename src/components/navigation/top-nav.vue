<template>
    <div class="top-nav">
        <router-link to="/">
            <img class="logo" src="../../assets/artbuy_logo_white.svg" alt="">
        </router-link>
        <div class="btns">
            <button @click="onboarding(1)" class="nav-btn">Find Art</button>
            <button @click="onboarding(2)" class="nav-btn">Buy Art</button>
            <button @click="onboarding(3)" class="nav-btn">Sell Art</button>
        </div>
        <nav-tools></nav-tools>
    </div>
</template>

<script>
import navTools from './nav-tools'
export default {
    name: 'top_navigation',
    components: {
        navTools
    },
    methods: {
        onboarding(page) {
            this.$store.commit('openStoryOnboarding', page);
        }
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

    .btns {
        display: flex;
        flex:1;
        justify-content: center;
        padding-left: 0px;
        @media(max-width: 800px) {
            display: none; 
        }
        .nav-btn {
            border: 2px solid #fff;
            background: transparent;
            border-radius: 2px;
            text-transform: uppercase;
            font-size: 9px;
            font-weight: 400;
            color: #fff;
            margin-right: 12px;
            width: 100px;
            height: 24px;
            justify-content: center;
            align-items: center;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
