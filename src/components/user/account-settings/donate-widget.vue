<template>
    <div class="donate-widget">
        <header class="head">
            <i class="icon"><img src="@/assets/icon-heart.svg" alt=""></i>
            <span>Donate to ARTBUY Artist Fund</span>
        </header>
        <div class="w-content">
            <p v-text="summary"></p>
            <a href="#" class="link">Learn More</a>
        </div>
        <footer class="w-foot">
            <button @click="$store.dispatch('openDonationModal')" class="hero-btn">
                Donate Now
            </button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'donate-widget',
    data() {
        return {
            summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quidem a fugiat quis aliquid odit qui culpa sed non, temporibus obcaecati saepe perspiciatis earum numquam.'
        }
    }
}
</script>

<style lang="scss" scoped>

.donate-widget {
    padding: 16px 16px 24px 16px;
    border: 1px solid rgba(17,18,21,0.1);	
    border-radius: 2px;	
    background-color: #FFFFFF;

    .head {
        display: flex;
        align-items: center;
        color: #FF006B;
        font-size: 12px;	
        font-weight: bold;	
        letter-spacing: 0.5px;	
        line-height: 18px;
        .icon {
            max-width: 20px;
            margin-right: 10px;
        }
    }

    .w-content {
        font-size: 14px;	
        font-weight: 500;	
        letter-spacing: 0.1px;	
        line-height: 20px;
        color: rgba( #111215, .6);
            p {
                margin: 16px 0;
            }
        .link {
            color: #111215;
            text-decoration: underline;
        }
    }

    .w-foot {
        margin-top: 16px;
    }

    .hero-btn {
        border: none;
        border-radius: 2px;	
        background: linear-gradient(135.2deg, #FF0089 0%, #FF0232 100%);
        height: 40px;
        width: 100%;
        color: #fff;
        font-size: 12px;	
        font-weight: bold;	
        letter-spacing: 1.2px;	
        line-height: 16px;
    }
}

</style>
