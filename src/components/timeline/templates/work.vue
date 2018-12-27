<template>
    <div class="post-body">
        <figure class="post-img">
            <img :src="post.content.photoUrl" alt="">
            <footer class="work-meta">
                <div class="cta">
                    <button class="btn-primary"><i class="material-icons">thumb_up</i><span>Appreciate</span></button>
                </div>
                <div class="social">
                    <button class="social-action"><i class="material-icons">thumb_up</i><span>{{post.social.likes}}</span></button>
                    <button class="social-action"><i class="material-icons">mode_comment</i><span>{{post.social.comments}}</span></button>
                </div>
            </footer>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'work-post',
    props: {
        post: Object
    }
}
</script>

<style scoped lang="scss">
    .post-img {
       img {
            max-width: 100%;
       }
    }

        .work-meta {
        padding: 12px 0 0;
        display: flex;
        justify-content: space-between;
        background-color: #F5F7F7;
        button {
            display: inline-flex;
            align-items: center;
	        font-size: 12px;	
            font-weight: 600;	
            letter-spacing: 0.5px;	
            line-height: 12px;
            margin-right: 24px;
            &:last-child {
                margin-right: 0;
            }
            i {
                font-size: 18px;
            }
            img {
                max-height: 22px;
                height: auto;
            }
            &.btn-primary {
                background-color: transparent;
                color: #111215;
                border: none;
                border-radius: 2px;
                padding: 8px 16px;
                i {
                    margin-right: 4px;
                }
            }
            &.btn-social {
                text-transform: uppercase;
                -webkit-appearance: none;
                background: none;
                border: none;
                span {
                    margin-left: 4px;
                    display: inline-block;
                }
            }
            &.social-action {
                text-transform: uppercase;
                -webkit-appearance: none;
                background: none;
                border: none;
                margin-right: 12px;
                i {
                    color: #B1B2B3;
                    margin-right: 4px;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
