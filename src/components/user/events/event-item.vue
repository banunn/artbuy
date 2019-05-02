<template>
    <div class="event">
        <span class="detail title">{{event.name}}</span>
        <span class="detail">{{event.date}}</span>
        <span class="detail">{{event.time}}</span>
        <span class="detail">{{event.location}}</span>
        <span class="detail">{{event.createDate}}</span>
        <span class="detail">{{event.status}}</span>
        <button @click="remove" title="remove event" class="icon-btn delete-btn"><i class="material-icons">delete</i></button>
    </div>
</template>

<script>
export default {
    name: 'event-item',
    props: {
        event: Object
    },
    methods: {
        remove() {
            let e = this.event;
            return this.$emit('remove', e);
        }
    }
}
</script>

<style lang="scss" scoped>
    .event {
        display: flex;
        padding: 0 18px 0 0;
        margin-left: 18px;
        height: 60px;
        border-bottom: 1px solid #E8EAEB;
        position: relative;
        @media(max-width: 1000px) {
            height: inherit;
            padding: 6px 0;
            flex-direction: column;
            > .detail {
                margin-bottom: 6px;
            }
        }
        &:hover {
            background-color: #FAFCFC;
        }
        .detail {
            flex:1 0 0;
            display: flex;
            align-items: center;
            padding-right: 20px;

            opacity: 0.8;
            color: #111215;	
            font-size: 12px;	
            font-weight: 500;	
            letter-spacing: 0.5px;	
            line-height: 18px;

            &.title {
                opacity: 1;
                font-weight: bold;
                flex: 1.5;
            }
        }
        .delete-btn {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            i {
                color: rgba(#000, .25);
            }
        }
        &:hover {
            .delete-btn {
                opacity: 1;
                &:hover {
                    i {
                        color: #111215;
                    }
                }
            }
        }
    }
</style>
