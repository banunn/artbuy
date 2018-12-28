<template>
    <transition name="fade"> 
        <div  v-if="modal.open" class="overlay">
            <div class="onboarding-modal">
                <half-circle-spinner
                :animation-duration="1000"
                :size="44"
                color="#1686EA"
                />
                <h4 class="sub">{{modal.subTitle}}</h4>
                <h1 class="head">{{modal.heading}}</h1>
            </div>
        </div>
    </transition>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
    name: 'onboarding_modal',
    computed: {
        modal() {
            return this.$store.getters.onboardingModal;
        }
    },
    components: {
        HalfCircleSpinner
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background: rgba(#111215, .5);
    z-index: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.onboarding-modal {
        height: 552px;	
        width: 904px;	
        border: 1px solid rgba(17,18,21,0.1);	
        border-radius: 2px;	
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
            margin:0;
            font-size: 34px;	
            font-weight: bold;	
            letter-spacing: -0.5px;	
            line-height: 38px;
        }
        h4 {
            padding-top: 34px;
            text-transform: uppercase;
            margin:0;
            font-size: 18px;	
            font-weight: 600;	
            letter-spacing: 3px;	
            line-height: 25px;
        }
}
</style>
