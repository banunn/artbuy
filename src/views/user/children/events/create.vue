<template>
    <div class="create">
        <header class="event-create-head">
            <div class="detail">
                <nav>
                    <a @click="$router.go(-1)">
                        <i class="material-icons">keyboard_arrow_left</i>All Events
                    </a>
                </nav>
                <h1>Winter Wonderland Show</h1>
            </div>
            <div class="ctrl">
                <button class="icon-btn">
                    <i class="material-icons">remove_red_eye</i>
                    <span>View Public Listing</span>
                </button>
                <button class="icon-btn">
                    <i class="material-icons">delete</i>
                    <span>Delete</span>
                </button>
            </div>
        </header>
        <div class="event-wrap">
            <div class="main">
                <event-details></event-details>
                <event-location></event-location>
            </div>
            <aside class="sidebar">
                <event-status></event-status>
            </aside>
        </div>
    </div>
</template>

<script>
import eventStatus from '@/components/user/events/event-status'
import eventDetails from '@/components/user/events/event-details'
import eventLocation from '@/components/user/events/event-location'
export default {
    name: 'create_event',
    components: {
        eventStatus,
        eventDetails,
        eventLocation
    }

}
</script>

<style lang="scss" scoped>
    .event-wrap {
        max-width: 965px;
        display: flex;
        .main {
            flex:1;
        }
        .sidebar {
            flex: 332px 0 0;
            margin-left: 32px;
        }
    }

    .event-create-head  {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        max-width: 965px;
        margin-bottom: 26px;
        .detail {
            nav {
                i {
                    font-size: 16px;
                }
                a {
                    opacity: 0.6;
                    color: #111215;	
                    font-size: 10px;	
                    font-weight: bold;	
                    letter-spacing: 1px;	
                    line-height: 12px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    cursor: pointer;                   
                }
            }
            h1 {
                margin:0;
                font-size: 24px;
                font-weight: bold;	
                letter-spacing: 0.17px;
                line-height: 28px;
                margin-top: 8px;
            }
        }

        .icon-btn {
                opacity: 0.6;
                font-size: 10px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 12px;
                text-transform: uppercase;
                margin-left: 28px;
                i {
                    font-size: 18px;
                    margin-right: 6px;
                }
                &:hover {
                    opacity: 1;
                }
        }
    }
</style>
