<template>
    <aside class="user-sidebar">
        <figure class="profile-img">
            <img v-if="user.photoUrl" :src="user.photoUrl" alt="">
            <span class="user-type">
                {{user.userType}}
            </span>
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
        <div class="social">
            <div class="social-item">
                <div class="desc">
                    <i class="material-icons">group</i>
                    <span>Followers</span>
                </div>
                <div class="data">
                    <span>{{user.social.followers}}</span>
                </div>
            </div>
            <div class="social-item">
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
                    <i class="material-icons">thumb_up</i>
                    <span>Appreciations</span>
                </div>
                <div class="data">
                    <span>{{user.social.appreciations}}</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'user-sidebar',
    computed: {
        user() {
            return this.$store.getters.userInfo;
        }
    }
}
</script>

<style lang="scss">
    .user-sidebar {
        padding: 48px 24px;
        width: 332px;
        flex: 332 0 0;
        box-shadow: inset -1px 0 0 0 #E8ECED;
        background: #fff;
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
</style>
