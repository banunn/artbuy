<template>
    <div class="welcome-page">
        <div class="wrap">
            <header class="head">
                <h1>Welcome to ArtBuy</h1>
                <p>Tell us a little about yourself</p>
            </header>
            <div class="form-row">
                <header class="label">
                    I am here to
                </header>
                <div class="form-row flex">
                    <button 
                        @click="selectIntention(i)"  
                        class="select-btn btn"
                        :class="{'selected': selectedIntention.id == i.id}"
                        v-for="i in intention" 
                        :key="i.id">{{i.name}}</button>
                </div>
            </div>
            <div class="form-row">
                <header class="label">
                    I Am
                </header>
                <div class="form-row flex">
                    <button
                         @click="selectRole(r)"
                         :class="{'selected': selectedRole.id == r.id}"
                         class="select-btn btn" v-for="r in role" 
                         :key="r.id">{{r.name}}</button>
                </div>
            </div>
            <footer class="form-foot">
                <button @click="next" class="btn-primary">next</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'welcome',
    data() {
        return {
            selectedIntention: '',
            selectedRole: '',
            intention: [
                {
                    name: 'Buy Art',
                    id: 1,
                    selected: false
                },
                {
                    name: 'Sell Art',
                    id: 2,
                    selected: false
                },
                {
                    name: 'Both',
                    id: 3,
                    selected: false
                }
            ],
            role: [
                {
                    name: 'An Artist',
                    id: 1,
                    selected: false
                },
                {
                    name: 'A Collector',
                    id: 2,
                    selected: false
                },
                {
                    name: 'A Gallery',
                    id: 3,
                    selected: false
                }
            ]
        }
    },
    methods: {
        selectIntention(i) {
            console.log(i);
            this.selectedIntention = i;
        },
        selectRole(r) {
            this.selectedRole = r;
        },
        next() {
            if(this.selectedIntention.id == 2 || this.selectedIntention.id == 3) {
                this.$router.push({name: 'onboarding plan'});
            } else {
                this.$store.dispatch('confirmAccountModal');
            }
        }
    }
}
</script>

<style scoped lang="scss">

.welcome-page {
    min-height: calc(100vh - 64px);
    background-color: #F5F7F7;
    padding-top: 72px;
}
    .wrap {
        height: 552px;	
        width: 904px;	
        border: 1px solid rgba(17,18,21,0.1);	
        border-radius: 2px;	
        background-color: #FFFFFF;
        margin: 0 auto;
        text-align: center;
        padding: 50px 72px;
        @media(max-width: 1000px) {
            max-width: 100%;
            height: inherit;
            padding: 12px 24px;
        }
        .head {
            margin-bottom: 80px;
            h1 {
                font-size: 34px;	
                font-weight: bold;	
                letter-spacing: -0.5px;	
                line-height: 38px;
                margin:0;
            }
            p {	
                font-size: 20px;	
                font-weight: 500;	
                line-height: 27px;
                margin:0;
            }
        }

        .form-row {
            text-align: left;
            .label {
                margin-bottom: 10px;
            }
        }

        .form-row {
            @media(max-width: 1000px) {
                flex-direction: column;
                align-items: center;
                button {
                    width: 100%;
                    min-height: 48px;
                    margin-right: 0 !important;
                    margin-bottom: 12px;
                }
            }
            button {
                display: inline-flex;
                justify-content: center;
                flex:1;
                margin-right: 8px;
                height: 48px;	
                border: 1px solid rgba(17,18,21,0.2);	
                background-color: #FFFFFF;	
                font-size: 14px;	
                font-weight: 600;	
                letter-spacing: 1px;	
                line-height: 20px;
                text-transform: uppercase;
                &:last-child {
                    margin-right: 0;
                }
                &.selected {
                    background-color: #111215;
                    border: 2px solid #111215;
                    color: #fff;
                }
            }
        }

        .form-foot {
            display: flex;
            justify-content: flex-end;
            margin-top: 64px;
            padding-top: 24px;
            border-top: 1px solid #E8EAEB;
            button {
                width: 144px;
                display: inline-flex;
                justify-content: center;
                margin-right: 8px;
                height: 48px;	
                border: 1px solid rgba(17,18,21,0.3);	
                background-color: #111215;	
                font-size: 14px;	
                font-weight: 600;	
                letter-spacing: 1px;	
                line-height: 20px;
                text-transform: uppercase;
                color: #fff;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
