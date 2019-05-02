<template>
    <footer class="site-foot">
        <div @click="$router.push('/')" class="copy">
            <span>&copy; {{year}} </span>
            <span class="name">ARTBUY</span>
        </div>
        <nav class="nav">
            <router-link class="link" v-for="(r, index) in routes" :key="index" :to="{name: r.route}">{{r.name}}</router-link>
        </nav>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                {
                    name: 'TERMS & CONDITIONS',
                    route: 'terms'
                },
                                {
                    name: 'PRIVACY',
                    route: 'privacy'
                },
                                {
                    name: 'FAQs',
                    route: 'faq'
                },
                                {
                    name: 'CONTACT',
                    route: 'contact'
                }
            ]
        }
    },
    computed: {
        year() {
            return this.$moment().format('YYYY');
        }
    }
}
</script>

<style lang="scss" scoped>
    .site-foot {
        position: fixed;
        bottom:0;
        right: 0;
        left:0;
        background: #111215;
        padding: 0 24px;
        display: flex;
        align-items: center;
        color: #fff;
        height: 32px;
        font-size: 10px;
        @media(max-width: 1000px) {
            position: relative;
            height: inherit;
        }
        .copy {
            opacity: .8;
            font-size: 10px;	font-weight: 500;	letter-spacing: 0.83px;	line-height: 24px;
            margin-right: 24px;
            cursor: pointer;
        }

        .link {
                font-size: 10px;	font-weight: bold;	letter-spacing: 0.83px;	line-height: 24px;
                margin-right: 24px;
                color: #fff;
                text-decoration: none;
        }
    }
</style>
