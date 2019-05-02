<template>
    <div class="event-page">
        <event-sidebar></event-sidebar>
        <div class="event-page-content">
            <event-navbar></event-navbar>
            <div class="event-wrap page-content">
                <div class="main">
                    <transition name="fade" mode="out-in" appear>
                        <router-view></router-view>
                    </transition>
                </div>
                <div class="sidebar">
                    <e-details></e-details>
                    <e-location></e-location>
                    <e-contact></e-contact>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import eventSidebar from '@/components/event/event-sidebar'
import eventNavbar from '@/components/event/nav-bar'
import eDetails from '@/components/event/widgets/event-details'
import eLocation from '@/components/event/widgets/event-location'
import eContact from '@/components/event/widgets/event-contact'
export default {
    name: 'user-page',
    components: {
        eventSidebar,
        eventNavbar,
        eDetails,
        eLocation,
        eContact
    }
}
</script>

<style lang="scss" scoped>
.event-page {
    background: #F5F7F7;
    display: flex;
    
    .event-page-content {
        background: #F5F7F7;
        flex:1;
        max-height: calc(100vh - 95px);
        overflow-y:auto;
    }

    .page-content {
        padding: 40px 72px;
    }
}

    .event-wrap {
        display: flex;
        max-width: 965px;
        .main {
            flex:600px 0 0;
        }
        .sidebar {
            flex: 332px 0 0;
            margin-left: 32px;
        }
    }
@media(max-width: 1000px) {
.event-page {
    flex-direction: column;
}
.event-wrap {
    flex-direction: column;
    padding: 40px 24px !important;
}
.event-page-content {
    flex-direction: column;
    overflow-y: hidden;
    max-height: inherit !important;
}
aside.event-sidebar {
    max-height: inherit;
    overflow: inherit;
    width: 100%;
    flex: inherit;
    order: 1;
}
.sidebar {
    margin-left: 0 !important;
}    
}
</style>
