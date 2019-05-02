<template>
    <div class="create">
        <header class="listing-create-head">
            <div class="detail">
                <nav>
                    <a @click="$router.go(-1)">
                        <i class="material-icons">keyboard_arrow_left</i>All Listings
                    </a>
                </nav>
                <h1>New Listing</h1>
            </div>
            <div class="ctrl">
                <button class="icon-btn">
                    <i class="material-icons">remove_red_eye</i>
                    <span>View Public Artwork Page</span>
                </button>
                <button class="icon-btn">
                    <i class="material-icons">cancel</i>
                    <span>Hide From Public Search</span>
                </button>
                <button class="icon-btn low-op">
                    <i class="material-icons">delete</i>
                    <span>Delete</span>
                </button>
            </div>
        </header>
        <div class="listing-wrap">
            <div class="main">
                <art-uploader></art-uploader>
                <listing-form></listing-form>
            </div>
            <aside class="sidebar">
                <listing-ship></listing-ship>
                <customer-widget></customer-widget>
            </aside>
        </div>
    </div>
</template>

<script>
import listingShip from '@/components/user/listings/listing-ship'
import listingStatus from '@/components/user/listings/listing-status'
import listingForm from '@/components/user/listings/listing-details'
import artUploader from '@/components/user/listings/artwork';
import customerWidget from '@/components/user/listings/customer-widget';
export default {
    name: 'create_listing',
    components: {
        listingStatus,
        listingForm,
        artUploader,
        listingShip,
        customerWidget
    }

}
</script>

<style lang="scss" scoped>
    .listing-wrap {
        max-width: 965px;
        display: flex;
        @media(max-width: 1000px) {
            flex-direction: column;
        }
        .main {
            flex:1;
        }
        .sidebar {
            flex: 332px 0 0;
            margin-left: 32px;
            @media(max-width: 1000px) {
                margin-left: 0;
            }
        }
    }

    .listing-create-head  {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        max-width: 965px;
        margin-bottom: 26px;
        @media(max-width: 1000px) {
            flex-direction: column;
            max-width: 100%;
            align-items: flex-start;
        }
        .detail {
            @media(max-width: 1000px ){
                flex:1;
                margin-bottom: 12px;
            }
            nav {
                i {
                    font-size: 16px;
                }
                a {
                    opacity: 0.6;
                    color: #111215;	
                    font-size: 10px;	
                    font-weight: bold;	
                    letter-spacing: 1px;	
                    line-height: 12px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    cursor: pointer;                   
                }
            }
            h1 {
                margin:0;
                font-size: 24px;
                font-weight: bold;	
                letter-spacing: 0.17px;
                line-height: 28px;
                margin-top: 8px;
            }
        }

        .icon-btn {
                opacity: 0.6;
                font-size: 10px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 12px;
                text-transform: uppercase;
                margin-left: 28px;
                i {
                    font-size: 18px;
                    margin-right: 6px;
                }
                &:hover {
                    opacity: 1;
                }
                &.low-op {
                    opacity: .3;
                    &:hover {
                        opacity: 1;
                    }
                }
        }
    }

    .ctrl {
        @media(max-width: 1000px) {
            .icon-btn {
                margin-left:0px;
                padding: 6px 12px;
            }
        }
    }

</style>


