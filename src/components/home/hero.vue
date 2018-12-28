<template>
    <div class="hero">
        <div class="content">
            <h1 class="title" v-if="head">{{head}}</h1>
            <h4 class="sub" v-if="sub">{{sub}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home-hero',
    props: {
        head: String, 
        sub: String,
        bg: String
    },
    data() {
        return {
            baseUrl: process.env.BASE_URL
        }
    },
}
</script>

<style lang="scss" scoped>
    .hero {
        height: 208px;
        width: 100%;
        padding: 22px;
        background: #000;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('../../assets/hero.jpg');
        &:after {
            content: '';
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            background: rgba(#000, .35);
        }
    }

    .content {
        position: relative;
        z-index: 20;
        .title {
            color: #FFFFFF;
            font-size: 48px;
            font-weight: bold;
            letter-spacing: 1px;
            line-height: 66px;
            text-align: center;
            text-shadow: 0 1px 4px 0 #111215;
            margin:0;
        }
        .sub {
            color: #FFFFFF;
            font-size: 28px;
            line-height: 32px;
            text-align: center;
            text-shadow: 0 1px 4px 0 #111215;
            margin:0;
            font-weight: 400;
        }
    }
</style>
