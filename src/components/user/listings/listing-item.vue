<template>
    <div class="listing">
        <figure class="detail photo">
            <img :src="listing.photoUrl" alt="">
        </figure>
        <span class="detail title">{{listing.name}}</span>
        <span class="detail">{{listing.date}}</span>
        <span class="detail">{{listing.price}}</span>
        <span class="detail">{{listing.status}}</span>
        <button @click="remove" title="remove event" class="icon-btn delete-btn"><i class="material-icons">delete</i></button>

    </div>
</template>

<script>
export default {
    name: 'listing-item',
    props: {
        listing: Object
    },
    methods: {
        remove() {
            let l = this.event;
            return this.$emit('remove', l);
        }
    }
}
</script>

<style lang="scss" scoped>
    .listing {
        display: flex;
        padding: 0 18px 0 0;
        margin-left: 18px;
        height: 60px;
        border-bottom: 1px solid #E8EAEB;
        position: relative;
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
            &.photo {
                height: 48px;	width: 48px;
                flex:.5;
                flex: 68px .5 68px;
                min-width: 68px;
                padding-right: 20px;
                display: flex;
                align-items: center;
                margin-top: 4px;
                border-radius: 4px;
                img { 
                    position: relative;
                    height: 100%;
                    width: 100%;
                    object-fit:  cover;
                    display: inline-flex;
                    max-width: 48px;
                    background-color: rgba(0,0,0,0.4);
                    border-radius: 2px;
                    min-width: 48px;
                }
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
