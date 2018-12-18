<template>
    <figure class="art" @click="previewProduct">
        <img class="bg" :src="item.art.photoUrl" alt="">
        <div class="detail">
            <header>
                <div class="meta">
                    <aside class="user-icon"><img :src="item.author.photoUrl" alt=""></aside>
                    <div class="meta-detail">
                        <h3>{{item.author.name}}</h3>
                        <span><i class="material-icons">location_on</i> {{item.author.location.city + ', ' + item.author.location.state}}</span>
                    </div>
                </div>
                <div class="social">
                    <aside><i class="material-icons">thumb_up</i><span>{{item.meta.likes}}</span></aside>
                    <aside><i class="material-icons">mode_comment</i><span>{{item.meta.comments}}</span></aside>
                </div>
            </header>
            <div class="content">
                <header>
                    <span>{{item.art.dimensions}}</span>
                </header>
                <div class="content-detail">
                    <h1>{{item.art.name}}</h1>
                    <span class="price">{{item.art.price | currency}}</span>
                </div>
            </div>
        </div>
    </figure>
</template>

<script>
export default {
    name: 'gallery-art-item',
    props: {
        item: Object
    },
    methods: {
        previewProduct() {
            const product = this.item;
            return this.$store.dispatch('viewProductPreview', product);
        }
    }
}
</script>

<style lang="scss" scoped>
figure {
    margin:0;
}
    .detail {
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        display: flex;
        flex-direction: column;
        color: #fff;
        background-color: rgba(17,18,21,0.5);
        padding: 16px;
        justify-content: space-between;
        opacity: 0;
        transition: opacity .35s ease;
        > header {
            display: flex;
            justify-content: space-between;
            .meta {
                display: flex;
                align-items: center;
                .user-icon {
                    height: 50px;
                    width: 50px;
                    img {
                        border-radius: 50%;
                        object-fit: cover;
                        height: 50px;
                        width: 50px;
                    }
                }
                .meta-detail {
                    margin-left:8px;
                    h3 {
                        font-size: 14px;
                        font-weight: bold;
                        letter-spacing: 0.1px;
                        line-height: 18px;
                        text-shadow: 0 1px 4px 0 #111215;
                        margin:0;
                    }
                    span {
                        font-size: 12px;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        line-height: 12px;
                        text-shadow: 0 1px 4px 0 #111215;
                        display: flex;
                        align-items: center;
                        i {
                            font-size: 14px;
                            margin-right: 4px;
                        }
                    }
                }
            }
            .social {
                display: flex;
                align-items: center;
                aside {
                    margin-left: 8px;
                    display: flex;
                    align-items: center;
                }
                i {
                    font-size: 20px;
                    margin-right: 8px;
                }
            }
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        .content-detail {
            display: flex;
            align-items: flex-end;
            h1 {
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 0.17px;	
                line-height: 28px;
                margin:0;
                padding-right: 56px;
            }
            .price {
                font-size: 24px;
                font-weight: 500;
                letter-spacing: -0.3px;
                line-height: 24px;
                text-shadow: 0 1px 4px 0 #111215;
            }
        }
        header {
            span {
                font-size: 14px;	
                font-weight: 500;	
                letter-spacing: 0.5px;	
                line-height: 24px;
                text-shadow: 0 1px 4px 0 #111215;
            }
        }
    }
        .art {
        width: 100%;
        margin-bottom: 30px;
        overflow: hidden;
        position: relative;
        box-shadow: 0px 21px 14px -12px rgba(0, 0, 0, 0.14), 0px 0px 10px rgba(0,0,0,.14);
        cursor: pointer;
        > .bg {
            object-fit: cover;
            max-width: 100%;
            margin:0;
            padding:0;
            display: block;
        }
        &:hover {
            .detail {
                opacity: 1;
            }
        }
    }
</style>
