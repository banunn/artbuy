<template>
<div>
    <div class="event">
        <div class="cal">
            <div class="cal-head">
                {{cal.month}}
            </div>
            <div class="cal-body">
                {{cal.day}}
            </div>
        </div>
        <div class="detail">
            <h2>{{post.content.eventTitle}}</h2>
            <span>{{dateString}}</span>
            <div class="time">
                <span>{{startTime + ' - ' + endTime}}</span>
            </div>
        </div>
    </div>
    <social-foot border-top pad-top margin-top></social-foot>
</div>
</template>

<script>
import socialFoot from '@/components/user/dashboard/social-foot';
export default {
    name: 'event-post',
    props: {
        post: Object
    },
    components: {
        socialFoot
    },
    computed: {
        date() {
            return this.post.content.date ? this.post.content.date : null;
        },
        startTime() {
            var start = this.post.content.startTime;
            return this.$moment(start).format('hh:mm A');
        },
        endTime() {
            var end = this.post.content.endTime;
            return this.$moment(end).format('hh:mm A');
        },
        cal() {
            var date = this.date;
            var month =  this.$moment(date).format('MMM');
            var day = this.$moment(date).format('D');
            return {
                month: month,
                day: day
            }
        },
        dateString() {
            const vm = this;
            return this.$moment(vm.date).format("dddd, MMMM Do, YYYY");
        }
    }
}
</script>

<style scoped lang="scss">
    .event {
        background-color: #F5F7F7;
        border: 1px solid #E8EAEB;
        border-radius: 2px;
        display: flex;
        padding: 16px;
        .cal {  
            height: 64px;
            width: 64px;
            border-radius: 4px;
            border: 1px solid #111215;
            display: flex;
            flex-direction: column;
            margin-right: 24px;
            .cal-head {
                display: flex;
                justify-content: center;
                align-items: center;
                text-transform: uppercase;
                height: 24px;
                    background-color: #111215;
                    color: #fff;
                        font-size: 9px;	font-weight: bold;	letter-spacing: 1.5px;
                        text-align: center;
            }
            .cal-body {
                display: flex;
                flex:1;
                justify-content: center;
                align-items: center;
                font-size: 24px;	
                font-weight: 500;	
                letter-spacing: 2px;	
                line-height: 33px;
            }
        }
        .detail {
            h2 {
                margin:0;
                font-size: 24px;	
                font-weight: bold;	
                letter-spacing: 0.17px;	
                line-height: 28px;
            }
            span {
                    opacity: 0.8;	
                    color: #111215;
                    font-size: 12px;	
                    letter-spacing: 0.5px;	
                    line-height: 20px;
            }
            .time {
                    opacity: 0.8;	
                    color: #111215;
                    font-size: 12px;	
                    letter-spacing: 0.5px;	
                    line-height: 20px;   
            }
        }
    }
</style>
