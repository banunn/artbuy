<template>
    <div class="follower-item">
        <figure class="user-img">
            <img :src="follower.photoUrl" alt="">
        </figure>
        <div class="detail">
            <header><span class="name">{{follower.name}}</span> started following you</header>
            <span>{{follower.date}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'follower',
    props: {
        follower: Object
    }
}
</script>

<style lang="scss" scoped>
    .follower-item {
        display: flex;
        margin-bottom: 16px;
        .img {
            margin-right: 8px;
            overflow: hidden;
            border-radius: 50%;
        }
        .user-img {
            margin-right: 10px;
        }
    }

    .name {
        font-weight: bold;   
    }

    .detail {
        header {
             font-size: 13px;	
             font-weight: 500;	
             line-height: 16px;       
        }
        span {
            opacity: 0.8;	
            color: #111215;
            font-size: 12px;	
            letter-spacing: 0.5px;	
            line-height: 12px;
        }
    }
</style>
