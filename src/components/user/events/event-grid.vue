<template>
    <div class="event-grid">
        <header class="super-head">
            <div class="nav">
                <button :class="{'selected' : v.selected}" class="nav-item" v-for="(v, index) in views" :key="index">
                    <span>{{v.name}}</span>
                </button>
            </div>
            <div class="ctrl">
                <button class="btn btn-dark">New Event</button>
            </div>
        </header>
        <div class="table-head">
            <div v-for="(h, index) in headers" class="heading" :key="index">
                <span>{{h}}</span>
                <i v-if="h === 'event date'" class="material-icons">arrow_drop_down</i></div>
        </div>
        <div class="table-body">
            <event v-for="(e, index) in events" :key="index" :event="e"></event>
        </div>
    </div>
</template>

<script>
import event from './event-item'
export default {
    name: 'event-grid',
    components: {
        event
    },
    data() {
        return {
            views: [
                {
                    name: 'all',
                    selected: true
                },
                {
                    name: 'upcoming',
                    selected: false
                },
                {
                    name: 'past',
                    selected: false
                }
            ],
            sortBy: '',
            headers: [
                'title',
                'event date',
                'start time',
                'location',
                'create date',
                'status'
            ],
            events: [
                {
                    name: 'Winter Wonderland Show',
                    date: '01/28/2018',
                    time: '7:00 PM – 10:00 PM',
                    location: '0294 Witting Extensions Suite 967',
                    createDate: '01/28/2018',
                    status: 'Past'
                },
                                {
                    name: 'Annual Artist Awards',
                    date: '01/28/2018',
                    time: '7:00 PM – 10:00 PM',
                    location: '23 Kuphal Burg',
                    createDate: '01/28/2018',
                    status: 'present'
                },
                                {
                    name: 'LOVE 4 ART Showcase',
                    date: '01/28/2018',
                    time: '7:00 PM – 10:00 PM',
                    location: '26 Zieme Gateway Apt. 540',
                    createDate: '01/28/2018',
                    status: 'upcoming'
                },
                                {
                    name: 'Winter Wonderland Show',
                    date: '01/28/2018',
                    time: '7:00 PM – 10:00 PM',
                    location: '0294 Witting Extensions Suite 967',
                    createDate: '01/28/2018',
                    status: 'Past'
                },
                                {
                    name: 'Annual Artist Awards',
                    date: '01/28/2018',
                    time: '7:00 PM – 10:00 PM',
                    location: '23 Kuphal Burg',
                    createDate: '01/28/2018',
                    status: 'present'
                },
                                {
                    name: 'LOVE 4 ART Showcase',
                    date: '01/28/2018',
                    time: '7:00 PM – 10:00 PM',
                    location: '26 Zieme Gateway Apt. 540',
                    createDate: '01/28/2018',
                    status: 'upcoming'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.event-grid {
    background-color: #FFFFFF;
    border-radius: 2px;
    border: 1px solid rgba(17,18,21,0.1);
    .super-head {
        height: 55px;
        display: flex;
        justify-content: space-between;
        .nav {
            display: flex;
            padding-left: 18px;
            button {
                -webkit-appearance: none;
                background: none;
                border: none;
                opacity: 0.6;	
                color: #111215;	
                font-size: 12px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 18px;   
                text-transform: uppercase;
                &.selected {
                    border-bottom: 2px solid #111215;	
                    opacity: 1;
                }
            }
        }
        .ctrl {
            display: flex;
            align-items: center;
            padding-right: 24px;
            button {
                height: 24px;	
                width: 105px;	
                border-radius: 2px;	
                background-color: #111215;
                border: none;
                color: #fff;
                font-size: 9px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 12px;	
                text-align: center;
                text-transform: uppercase;
            }
        }
    }
    .table-head {
        display: flex;
        padding: 0 18px;
        height: 40px;
        border-top: 1px solid #E8EAEB;
        border-bottom: 1px solid #E8EAEB;
        margin-top: -1px;
        .heading {
            flex:1 0 0;
            opacity: 0.6;
            font-size: 10px;	
            font-weight: bold;	
            letter-spacing: 0.42px;	
            line-height: 12px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            padding-right: 20px;

            &:first-child {
                flex: 1.5;
            }
        }
    }
}
</style>
