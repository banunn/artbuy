<template>
    <div v-show="open" class="product-modal">
                <transition name="fade">  
        <div v-if="open"  @click="close" class="modal-overlay">
            <header class="ctrl"><button @click="close" class="icon-btn"><i class="material-icons">clear</i></button></header>
        </div>
                </transition>
    <transition name="slide">  
        <section v-if="open" class="product-content">
            <modal-product-viewer :product="product"></modal-product-viewer>
            <modal-product-sidebar :product="product"></modal-product-sidebar>  
        </section>
    </transition>
    </div>
</template>

<script>
import modalProductViewer from '../product-viewer';
import modalProductSidebar from '../product-sidebar';
export default {
    name: 'product-modal',
    components: {
        modalProductViewer,
        modalProductSidebar
    },
    computed: {
        product() {
            return this.$store.getters.selectedProduct;
        },
        open() {
            return this.$store.getters.productModalState;
        }
    },
    methods: {
        close() {
            return this.$store.dispatch('closeProductPreview');
        },
        toggleBodyClass(addRemoveClass, className) {
            const el = document.body;
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
                } else {
                el.classList.remove(className);
            }
        },
    },
    watch: {
        open(newVal, oldVal) {
            if(newVal === false) {
                this.toggleBodyClass('removeClass', 'no-scroll');
            } else if(newVal === true) {
                this.toggleBodyClass('addClass', 'no-scroll');
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .modal-overlay {
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background: rgba(#000, .6);
        z-index: 700;

        .ctrl {
            .icon-btn {
                width: 74px;
                padding: 12px 0;
                i {
                    color: rgba(#fff, .6);
                }
            }
        }
    }

    .product-content {
        background-color: #F5F7F7;
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        width: calc(100vw - 74px);
        z-index: 800;
        display: flex;
        @media(max-width: 1000px) {
            flex-direction: column;
            width: calc(100vw - 24px);
        }
    }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.slide-enter-active,
.slide-leave-active {
  transition: transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translate3d(0, 0%, 0);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(100%, 0, 0);
}

</style>
