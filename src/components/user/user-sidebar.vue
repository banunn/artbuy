<template>
    <aside class="user-sidebar">
        <figure class="profile-img">
            <croppa v-model="editImg"
                :height="288"
                :width="284"
                :disabled="editImgState.disabled"
                :show-remove-button="!editImgState.disabled">
                 <img :src="user.photoUrl" slot="initial">
            </croppa>
            <div v-if="editImgState.disabled" @click="editUserImg" class="edit btn">
                <i class="material-icons">camera_alt</i><span>Edit</span>
            </div>
            <div v-else @click="saveUserImg" class="edit btn">
                <i class="material-icons">camera_alt</i><span>Save</span>
            </div>
        </figure>
        <div class="user-meta">
            <h1>{{user.firstName + ' ' + user.lastName}}</h1>
            <div class="location">
                <i class="material-icons">location_on</i>
                <span>{{user.location.city + ', ' + user.location.state}}</span>
            </div>
            <div class="bio">
                <header>
                    <h4>About Me</h4>
                    <p>{{user.bio}}</p>
                </header>
            </div>
        </div>
        <div class="video">
            <h4>Video</h4>
            <video width="282" height="167" :poster="video.thumb" controls>
                <source :src="video.sources[0]" type="video/mp4">
                <!-- include fallback sources as needed <source src="movie.ogg" type="video/ogg"> -->
                Your browser does not support the video tag.
            </video>
            <div class="video-detail">
                <h4>{{video.title}}</h4>
                <span>{{video.subtitle}}</span>
            </div>
        </div>
        <div class="social">
            <div @click="$router.push({name: 'userSocial'});" class="social-item">
                <div class="desc">
                    <i class="material-icons">person</i>
                    <span>Following</span>
                </div>
                <div class="data">
                    <span>{{user.social.following}}</span>
                </div>
            </div>
            <div class="social-item">
                <div class="desc">
                    <i class="material-icons">group</i>
                    <span>Followers</span>
                </div>
                <div class="data">
                    <span>{{user.social.followers}}</span>
                </div>
            </div>
            <!-- <div class="social-item">
                <div class="desc">
                    <i class="material-icons">thumb_up</i>
                    <span>Appreciations</span>
                </div>
                <div class="data">
                    <span>{{user.social.appreciations}}</span>
                </div>
            </div> -->
        </div>
    </aside>
</template>

<script>

export default {
    name: 'user-sidebar',
    data() {
        return {
            editImg: {},
            editImgState: {
                disabled: true
            },
            isMyProfile: true,
            video: { 
                "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
                "subtitle" : "Uploaded on February 1, 2019",
                "thumb" : "https://images.unsplash.com/photo-1551076192-487813ceb8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80",
                "title" : "Ellie Figueroa 2019 Art Reel"
            }
        }
    },
    computed: {
        user() {
            return this.$store.getters.userInfo;
        }
    },
    methods: {
        editUserImg() {
            return this.editImgState.disabled = false;
        },
        saveUserImg() {
            // execute saving call here. 
            return this.editImgState.disabled = true;
        },
        exampleImgSaveCall() {
            // More documentation available at: https://zhanziyang.github.io/vue-croppa/#/
            this.myCroppa.generateBlob((blob) => {
                // write code to upload the cropped image file (a file is a blob)
            }, 'image/jpeg', 0.8) // 80% compressed jpeg file
        }
    }
}
</script>

<style lang="scss">
    .user-sidebar {
        padding: 48px 24px;
        width: 332px;
        flex: 332px 0 0;
        box-shadow: inset -1px 0 0 0 #E8ECED;
        background: #fff;
        max-height: calc(100vh - 97px);
        overflow-y: auto;
        .profile-img {
            background: #eaeaea;
            position: relative;
            margin-top: 24px;
            border-top: 1px solid #E8EAEB;
            height: 288px;
             width: 284px;
            img {
                max-width: 100%;
                display: block;
                height: 288px;
                width: 284px;
                object-fit: cover;
            }
            .user-type {
                position: absolute;
                top: 0;
                right:0;
                background: #000;
                padding: 6px 12px;
                color: #fff;
                font-size: 9px;	
                font-weight: bold;	
                letter-spacing: 1.5px;	
                line-height: 12px;
                text-transform: uppercase;
            }
            .edit {
                position: absolute;
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                bottom: 6px;
                right: 6px;
                background: rgba(#fff, .6);
                padding: 3px 8px;
                border-radius: 14px;
                box-shadow: 0px 2px 3px rgba(#000, .2);
                font-size: 9px;	
                font-weight: bold;	
                letter-spacing: 0.9px;	
                line-height: 12px;
                i {
                    font-size: 16px;
                    margin-right: 4px;
                }
                &:active {
                    transform: translateY(1px);
                }
            }
        }
        .user-meta {
            h1 {
                font-size: 24px;	
                font-weight: bold;
                letter-spacing: 0.17px;	
                line-height: 28px;
                margin-bottom:0;
            }
            .location {
                margin-top: 4px;
                  font-size: 12px;	
                  letter-spacing: 0.5px;	
                  line-height: 12px;
                  opacity: .8; 
                  display: flex;
                  align-items: center;
                  i {
                      opacity: .3;
                      font-size: 16px;
                      margin-right: 2px;
                  }          
            }
            .bio {
                margin-top: 24px;
                padding-top: 24px;
                border-top: 1px solid #E8EAEB;
                header {
                    > h4 {
                        margin:0;
                        font-size: 12px;	
                        font-weight: bold;	
                        letter-spacing: 1.8px;	
                        line-height: 18px;
                        text-transform: uppercase;
                    }
                }
                p {
                    font-size: 14px;	
                    font-weight: 500;	
                    line-height: 24px;
                    opacity: .9;
                }
            }
        }
        .social {
            border-top: 1px solid #E8EAEB;
            .social-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 18px 0;
                border-bottom: 1px solid #E8EAEB;
                > div {
                    display: flex;
                    align-items: center;
                }
                .desc {
                    font-size: 13px;	
                    font-weight: 500;	
                    letter-spacing: 1.08px;	
                    line-height: 18px;
                    i {
                        margin-right: 14px;
                    }
                }
                .data {
                    span {
                        font-size: 12px;	
                        font-weight: bold;	
                        letter-spacing: 1.2px;	
                        line-height: 18px;
                    }
                }
            }
        }
    }

.video {
    overflow: hidden;
}
    video {
        object-fit: cover;
        max-width: 282px;
    }

    .video-detail {
        padding: 8px 12px;
        background-color: #fafafa;
        border-right: 1px solid rgba(#000, .1);
        border-bottom: 1px solid rgba(#000, .1);
        border-left: 1px solid rgba(#000, .1);
        margin-bottom: 48px;
        h4 {
            margin:0;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
        }
        span {
            font-size: 12px;
            color: rgba(#000, .4);
            font-weight: 600;
        }
    }
</style>
