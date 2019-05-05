<template>
    <div class="location">
        <header class="nav-button" @click="filterOpen = true">
            <i class="material-icons">location_on</i>
            <span>LOCATION</span>
            <i class="material-icons">arrow_drop_down</i>
        </header>
        <filter-shell v-on-clickaway="closeFilter" v-if="filterOpen" class="filter" :title="'Filter By Location'">
            <template slot="head">
                <button class="btn-text">Clear</button>
            </template>

            <template slot="body">
                <div class="search">
                    <div class="search-input-wrap">
                        <input type="search" placeholder="Search From A Location..." class="search-input" v-model="location">
                        <i class="material-icons">search</i>
                    </div>
                    <div class="custom-select">
                        <header @click="distance.open = !distance.open" class="select-head">
                            <template v-if="distance.selected == 'Any'">
                                <span>Distance From Locaiton</span><i class="material-icons">arrow_drop_down</i>
                            </template>
                            
                            <template v-else>
                                <span>Within <span class="bold">{{distance.selected + ' ' + distance.type}}</span></span><i class="material-icons">arrow_drop_down</i>
                            </template>
                        </header>
                        <div v-if="distance.open" v-on-clickaway="closeDistance" class="select-body">
                            <div class="options">
                                <div class="option" @click="selectDistance(o)" :class="{'bold' : distance.selected == o}" v-for="(o, index) in distance.options" :key="index">
                                    <div class="detail">
                                        <span v-text="o"></span><span v-text="o == 'Any' ? '' : dType"></span></div>
                                        <i v-if="distance.selected == o" class="material-icons check">check</i>
                                    </div>
                            </div>
                            <footer class="type-foot">
                                <span class="type" @click="setDistanceType('miles')"><i class="material-icons">{{distance.type == 'miles' ? 'radio_button_checked' : 'radio_button_unchecked'}}</i> Miles</span>
                                <span class="type" @click="setDistanceType('kilos')"><i class="material-icons">{{distance.type == 'kilos' ? 'radio_button_checked' : 'radio_button_unchecked'}}</i> Kilometers</span>
                            </footer>
                        </div>
                    </div>
                </div>
            </template>
        </filter-shell>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
    name: 'location_filter',
    mixins: [ clickaway ],
    data() {
        return {
            filterOpen: false,
            location: 'Current Location',
            distance: {
                options: ['Any',10,25,50,75,100,200],
                type: 'miles',
                selected: 'Any',
                open: false
            }
        }
    },
    computed: {
        dType() {
            return this.distance.type == 'miles' ? 'Miles' : 'Kilometers';
        }
    },
    methods: {
        setDistanceType(type) {
            this.distance.type = type;
        },
        selectDistance(dist) {
            this.distance.selected = dist;
        },
        closeDistance() {
            if(this.distance.open) {
                this.distance.open = false;
            } else {
                return;
            }
        },
        closeFilter() {
            if(this.filterOpen) {
                this.filterOpen = false;
            } else {
                return;
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
    .location {
        position: relative;
        .nav-button {
            display: flex;
            align-items: center;
            color: #111215;
            font-size: 12px;	
            font-weight: bold;	
            letter-spacing: 2px;	
            line-height: 16px;
            i {
                font-size: 18px;
                &:first-child {
                    margin-right: 4px;
                }
                &:last-child {
                    margin-left: 4px;
                }
            }
        }
    }

    .filter {
        @media(min-width: 1000px) {
        left: inherit;
        }
        right:0;
        max-width: 425px !important;
        min-width: 25vw;
    }

    .custom-select {
        position: relative;
        .select-body {
            position: absolute;
            background: #fff;
            left:0px;
            right:0px;
            padding: 12px;
            z-index: 10;
            box-shadow: inset -1px 1px 0 0 rgba(17,18,21,0), 0 1px 6px 0 rgba(17,18,21,0.2);
            top: 40px;
            border-color: rgba(17,18,21,0.2);
            border-style: solid;
            border-left-width: 1px;
            border-right-width: 1px;
            border-bottom-width: 1px;
            border-top: none;
        }
    }

    .type-foot {
        display: flex;
        justify-content: flex-end;
        padding: 24px 0px 0;
        .type {
            display: inline-flex;
            align-items: center;
            font-size: 12px;	
            font-weight: 600;	
            letter-spacing: 1px;	
            line-height: 16px;
            cursor: pointer;
            i {
                margin-right: 4px;
            }
            &:first-child {
                margin-right: 24px;
            }
        }
    }

    .search-input-wrap {
        position: relative;
        i {
            position: absolute;
            right:8px;
            z-index: 30;
            top: 8px;
            opacity: .6;
        }
    }

    .select-head {
        padding: 12px;
        display:flex;
        justify-content: space-between;
        border: 1px solid rgba(17,18,21,0.2);
        position: relative;
        z-index: 20;
        background: #fff;
        font-size: 14px;	
        font-weight: 500;	
        letter-spacing: 0.1px;	
        line-height: 20px;
        i {
            position: absolute;
            right:8px;
            top:18%;
            opacity: .6;
        }
    }

    .select-body {
        .options {
            .option {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                position: relative;
                transition: padding .15s ease;
                cursor: pointer;
                span {
                    &:first-child {
                        margin-right: 4px;
                    }
                }
                .check {
                    position: absolute;
                    right:0;
                }
            }
        }
    }

    .search-input {
        height: 40px;
        border: 1px solid rgba(17,18,21,0.2);	
        border-radius: 2px;
        display: block;
        width: 100%;
        margin-bottom: 8px;
        padding: 0 12px;
        font-size: 14px;	
        font-weight: bold;	
        letter-spacing: 0.1px;	
        line-height: 20px;
    }

    .nav-button {
        @media(max-width: 1000px) {
            span {
                display: none;
            }
            i {
                transform: translateY(-10px);
                &:last-child {
                    display: none;
                }
            }
        }
    }
</style>
