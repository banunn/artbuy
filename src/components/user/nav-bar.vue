<template>
    <nav class="user-nav">
        <router-link 
            v-if="!r.meta.hideLink == true"
            class="nav-link"
            v-for="(r, index) in navRoutes.children" 
            :key="index" 
            :to="{name: r.name, params: {id: viewedUser}}">
                {{r.meta.displayName}}
        </router-link>
    </nav>
</template>

<script>
import routes from '@/router/routes'
export default {
    name: 'user-navbar',
    data() {
        return {
            routes: routes
        } 
    },
    computed: {
        navRoutes() {
            const vm = this;
            var userRoutes = _.find(vm.routes, function(i) {
                return i.name == 'user'
            });
            return userRoutes ? userRoutes : [];
        },
        viewedUser() {
            return this.$store.state.route.params.id;
        }
    },
    methods: {
        log(id) {
            console.log(id);
        }
    }
}
</script>

<style lang="scss" scoped>
.user-nav {
    margin-bottom: 00px;
    background: #fff;
    height: 72px;
    display: flex;
    align-items: flex-end;
    padding: 0 72px;
    box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.09);
    @media(max-width: 1000px) {
        padding: 0 16px;
        max-width: 100%;
        overflow-x: auto;
        padding-right: 56px;
    }
}
    .nav-link {
        color: rgba(#111215, .6);
        font-size: 12px;	
        font-weight: bold;	
        letter-spacing: 1px;	
        line-height: 16px;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-flex;
        margin-right: 40px;
        padding-bottom: 12px;
        @media(max-width: 1000px) { 
            white-space: nowrap;
        }
        &:last-child {
            margin-right: 0;
            @media(max-width: 1000px) { 
                padding-right: 16px;
            }
        }
        &.router-link-active {
            color: rgba(#111215, 1);
            border-bottom: 2px solid #111215;
        }
    }
</style>
