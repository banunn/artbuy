<template>
    <div class="subscription-modal">
        <transition name="fade">
            <div v-if="open" class="overlay"></div>
        </transition>
        <transition name="scale" mode="out-in">

            <div  v-if="open" class="sub-modal-body">
                <div class="list">
                    <div v-for="(t, index) in types" :key="index" class="type">
                        <header>{{t.name}}</header>
                        <div class="type-wrap">
                            <section class="type-body">
                                <ul>
                                    <li v-for="(b, index) in t.benefits" :key="index">{{b}}</li>
                                </ul>
                            </section>
                            <footer>
                                <div class="price">
                                    <h1>{{'$' + t.price}}</h1>
                                    <div class="freq">
                                        <span>per</span><span>{{t.frequency}}</span>
                                    </div>
                                </div>
                                <div v-if="selectedType && t.id === selectedType.id" class="is-selected">
                                    <i class="material-icons">
                                    check_circle_outline
                                    </i>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
                <footer class="foot">
                    <button @click="close" class="btn btn-light">Cancel</button>
                    <button @click="close" class="btn btn-dark">Update Plan</button>
                </footer>
            </div>

        </transition>
    </div>
</template>

<script>
export default {
    name: 'subscription-modal',
    computed: {
        type() {
            return this.$store.getters.userAuth.type;
        },
        types() {
            return this.$store.state.subscription.subscriptions;
        },
        open() {
            return this.$store.getters.subscriptionModal.open;
        },
        selectedType() {
            return this.$store.getters.selectedSubscription;
        },
    },
    methods: {
        close() {
            return this.$store.dispatch('closeSubscriptionModal');
        }
    },
    created() {
        const vm = this;
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27 && vm.open) {
                vm.close();
            }
        };
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    background: rgba(#000, .5);
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.sub-modal-body{
    background: #fff;
    position: absolute;
    z-index: 800;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    height: 481px;	
    width: 904px;	
    border: 1px solid rgba(17,18,21,0.1);	
    border-radius: 2px;

    .list {
        display: flex;
        padding: 65px 72px;
        header {
                color: #FFFFFF;	
                font-size: 16px;	
                font-weight: 600;	
                letter-spacing: 2.67px;
                line-height: 22px;	
                text-align: center;
                padding: 20px 0;
                background: #000;
                text-transform: uppercase;
        }
        .type {
            width: 248px;
            margin-right: 8px;
            border-radius: 4px;	
            background-color: #FFFFFF;	
            overflow: hidden;
            cursor: pointer;
            &:last-child {
                margin-right:0;
            }
            .type-wrap {
                border: 1px solid rgba(17,18,21,0.2);
                border-top: none;
            }
            .type-body {
                ul {
                    margin:0;
                    padding: 18px 0;
                    margin: 0 18px;
                    li {
                        margin-left: 18px;
                            font-size: 12px;	
                            font-weight: bold;	
                            letter-spacing: 0.5px;
                                line-height: 16px;
                                margin-bottom: 8px;
                    }
                }
            }

            footer {
                display: flex;
                justify-content: space-between;
                padding: 18px;
                .price {
                    display: flex;
                    align-items: center;
                    h1 {
                        margin:0;
                        font-size: 24px;	
                        font-weight: bold;	
                        letter-spacing: 0.17px;	
                        line-height: 28px;
                    }
                    .freq {
                        margin-left: 8px;
                        padding-left: 8px;
                        border-left: 1px solid rgba(17,18,21,0.2);
                        display: flex;
                        flex-direction: column;
                        opacity: 0.4;	
                        color: #111215;	
                        font-size: 9px;	
                        font-weight: 600;	
                        letter-spacing: 0.5px;	
                        line-height: 9px;
                    }
                }
            }
        }
    }
}

.foot {
    display: flex;
    justify-content: flex-end;
    padding: 24px 72px;
    border-top: 1px solid #E8EAEB;
    button {
        height: 48px;	
        width: 144px;	
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;	
        font-size: 12px;	
        font-weight: 600;	
        letter-spacing: 1.2px;	
        line-height: 16px;
        &.btn-light {
            border-color: #111215;
            background: #fff;
        }
        &.btn-dark {
            background-color: #111215;
            border-color: #111215;
            color: #fff;
            margin-left: 8px;
        }
    }
}
</style>
