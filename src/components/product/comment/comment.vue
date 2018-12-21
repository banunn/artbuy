<template>
    <div v-if="comment" class="product-comment">
        <div class="author-meta">
            <figure class="user-img">
               <img v-if="comment.author.photoUrl" :src="comment.author.photoUrl" alt="">
            </figure>
        </div>
        <div class="comment">
            <header class="head">
                <h4>{{comment.author.firstName + ' ' + comment.author.lastName}}</h4>
                <span>{{comment.meta.date | moment('llll')}}</span>
            </header>
            <div class="comment-body">
                {{comment.comment}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-comment',
    props: {
        comment: Object
    }
}
</script>

<style lang="scss">

.product-comment {
    display: flex;
    margin-bottom: 40px;
    .author-meta {
        margin-right: 8px;
    }
    .comment {
        .head {
            display: flex;
            margin-bottom: 4px;
            margin-top: 4px;
            h4 {
                margin:0;
                margin-right: 6px;
            }
            span {
                margin-top: 4px;
                color: rgba(#111215, .4);
                font-size: 12px;
                letter-spacing: 0.5px;
                line-height: 12px;
            }
        }
        .comment-body {
            opacity: 0.9;	
            color: #000000;		
            font-size: 14px;	
            font-weight: 500;	
            line-height: 24px;
        }
    }
}

</style>
