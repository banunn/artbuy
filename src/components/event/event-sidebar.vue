<template>
  <aside class="event-sidebar">
    <figure class="event-img">
      <img
        src="https://images.unsplash.com/photo-1547296017-978c31e1c124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80"
        alt
      >
    </figure>
    <div class="event-meta">
      <h1>{{event.title}}</h1>
      <h4 class="host">
        Hosted By
        <span class="bold">{{event.host}}</span>
      </h4>
    </div>
    <div class="social">
      <button class="icon-btn">
        <i class="material-icons">today</i>
        <span>add to calendar</span>
      </button>
      <div class="network-icons">
        <button class="icon-btn network">
          <img src="@/assets/insta-logo.svg" alt>
        </button>
        <button class="icon-btn network">
          <img src="@/assets/fb-logo.svg" alt>
        </button>
        <button class="icon-btn network">
          <img src="@/assets/tw-logo.svg" alt>
        </button>
        <button class="icon-btn network">
          <img src="@/assets/share.svg" alt>
        </button>
      </div>
    </div>
    <div class="event-desc">
      <h4>About the event</h4>
      <p>{{event.desc}}</p>
    </div>
  </aside>
</template>

<script>
export default {
  name: "user-sidebar",
  data() {
    return {
      event: {
        title: "Winter Wonderland Show",
        host: "West Side Studios",
        desc:
          "Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone who is just fooling around with astronomy to a serious student of science. But you and I both know that there is still another big step after buying a telescope before you really know how to use it."
      }
    };
  },
  computed: {
    user() {
      return this.$store.getters.userInfo;
    }
  },
  methods: {
    editUserImg() {
      return (this.editImgState.disabled = false);
    },
    saveUserImg() {
      // execute saving call here.
      return (this.editImgState.disabled = true);
    },
    exampleImgSaveCall() {
      // More documentation available at: https://zhanziyang.github.io/vue-croppa/#/
      this.myCroppa.generateBlob(
        blob => {
          // write code to upload the cropped image file (a file is a blob)
        },
        "image/jpeg",
        0.8
      ); // 80% compressed jpeg file
    }
  }
};
</script>

<style lang="scss">
.event-sidebar {
  padding: 48px 24px;
  width: 332px;
  flex: 332px 0 0;
  box-shadow: inset -1px 0 0 0 #e8eced;
  background: #fff;
  max-height: calc(100vh - 97px);
  overflow-y: auto;
  .event-img {
    background: #eaeaea;
    position: relative;
    margin-top: 24px;
    border-top: 1px solid #e8eaeb;
    height: 288px;
    width: 284px;
    margin-bottom:20px;
    img {
      max-width: 100%;
      display: block;
      height: 288px;
      width: 284px;
      object-fit: cover;
    }
  }
  .event-meta {
    h1 {
      color: #111215;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0.23px;
      line-height: 28px;
      margin:0;
    }
    .host {
            color: #111215;	font-size: 12px;	font-weight: 900;	line-height: 24px;
            margin:0;
    }
    .location {
      margin-top: 4px;
      font-size: 12px;
      letter-spacing: 0.5px;
      line-height: 12px;
      opacity: 0.8;
      display: flex;
      align-items: center;
      i {
        opacity: 0.3;
        font-size: 16px;
        margin-right: 2px;
      }
    }
    .desc {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #e8eaeb;
      header {
        > h4 {
          margin: 0;
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
        opacity: 0.9;
      }
    }
  }
}

.event-desc {
    color: #111215;		font-size: 14px;	font-weight: 500;	line-height: 24px;
    h4 {
        text-transform: uppercase;
    }
    p {
        opacity: .85;
    }
}

.social {
    margin-top: 50px;
  display: flex;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(#000, .1);
  > .icon-btn {
    margin-right: 20px;
    i {
      margin-right: 4px;
    }
  }
  .icon-btn {
    color: #111215;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.5px;
    line-height: 14px;
    text-align: center;
    display: inline-flex;
    img {
      max-width: 20px;
    }
  }
  .network-icons {
    display: inline-flex;
    justify-content: space-around;
    flex: 1;
  }
}
</style>
