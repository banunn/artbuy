<template>
    <header class="post-header">
        <figure class="user-img">
            <img :src="meta.author.photoUrl" alt="">
        </figure>

        <div v-if="type == 'work'" class="detail">
            <header>
            <span class="bold">{{meta.author.name}}</span> commented on <span class="bold"> {{meta.targetUser.name + "'s'"}}</span> work
            </header>
            <span class="time">{{meta.date}}</span>
        </div>

        <div v-if="type == 'event'" class="detail">
            <header>
            <span class="bold">{{meta.author.name}}</span> created an event
            </header>
            <span class="time">{{meta.date}}</span>
        </div>

    </header>
</template>

<script>
export default {
    name: 'post_header',
    props: {
        meta: Object,
        type: String
    }
}
</script>

<style lang="scss" scoped>
    .post-header {
        display: flex;
        margin-bottom: 24px;
        header {
                    font-size: 14px;	
        font-weight: 500;	
        line-height: 24px;
        opacity: .9;
        }
        .time {
            font-size: 12px;	
            letter-spacing: 0.5px;	
            line-height: 12px;
            opacity: .8;
            position: relative;
            top: -5px;
        }
        .user-img {
            margin-right: 8px;
        }
    }
</style>
