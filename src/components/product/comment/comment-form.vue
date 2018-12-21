<template>
    <div class="product-comment-form">
        <div class="author-meta">
            <figure class="user-img">
                <img :src="user.photoUrl" :alt="'Photo of ' + user.firstName + ' ' + user.lastName">
            </figure>
        </div>
        <div class="form">
            <textarea v-on:keyup.enter="addComment" v-model="commentText" placeholder="Share your thoughts on this..."></textarea>
            <div class="form-foot">
                <button @click="addComment" class="btn-outline">
                    <span>Post Comment</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-comment-form',
    data() {
        return {
            commentText: ''
        }
    },
    computed: {
        user() {
            return this.$store.getters.userInfo;
        }
    },
    methods: {
        addComment() {
            const vm = this;
            // comment addition logic here. This can also be placed onto the text area using an :keyup.enter="addComment"
            return console.log(vm.commentText);
        }
    }
}
</script>

<style lang="scss">
    .product-comment-form {
        display: flex;
        .author-meta {
            margin-right: 4px;
        }
        .form {
            width: 100%;
            textarea {
                border: none;
                padding: 8px 8px 8px 4px;
                width: 100%;
                display: block;
                min-height: 85px;
                font-size: 14px;	
                color: #000000;	
                font-size: 14px;	
                font-weight: 500;	
                line-height: 24px;
                margin-bottom: 25px;
                border-bottom: 1px solid #E8EAEB;
                &::placeholder {
                    opacity: 0.4;
                }
            }
            .btn-outline {
                height: 32px;
                width: 120px;
                border: 1px solid rgba(17,18,21,0.3);
                border-radius: 2px;
                background: #fff;
                color: rgba(#111215, .4);
                font-size: 12px;
                transition: all .25s ease;
                &:hover {
                    border-color: rgba(17,18,21,0.7);
                    color: #111215;
                }
            }
        }
    }
</style>
