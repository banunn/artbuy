<template>
  <div class="social-foot">
    <div class="local-social">
      <button @click="favorite" class="icon-btn">
        <i class="material-icons">{{fav.selected ? "favorite" : "favorite_border"}}</i>
        <span>{{fav.count}}</span>
      </button>
      <button class="icon-btn">
        <i class="material-icons">mode_comment</i>
        <span>{{comment.count}}</span>
      </button>
    </div>
    <div class="social">
      <button class="icon-btn">
        <img src="@/assets/insta-logo.svg" alt>
      </button>
      <button class="icon-btn">
        <img src="@/assets/fb-logo.svg" alt>
      </button>
      <button class="icon-btn">
        <img src="@/assets/tw-logo.svg" alt>
      </button>
      <button class="icon-btn">
        <img src="@/assets/share.svg" alt>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fav: {
        selected: false,
        count: 236
      },
      comment: {
        count: 54
      } 
    };
  },
  methods: {
    favorite() {
      if (this.fav.selected == false) {
        this.fav.count += 1;
      } else {
        this.fav.count -= 1;
      }
      this.fav.selected = !this.fav.selected;
    }
  }
};
</script>

<style lang="scss" scoped>
.social-foot {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  &[border-top] {
      border-top: 1px solid rgba(#000, .1);
  }
  &[border-bottom] {
      border-top: 1px solid rgba(#000, .1);
  }
  &[margin-top] {
      margin-top: 14px;
  }
  &[margin-bottom] {
     margin-bottom: 14px;
  }
  &[pad-top] {
      padding-top: 14px;
  }
  &[pad-bottom] {
      padding-bottom: 14px;
  }
  .local-social {
    display: flex;
    align-items: center;
    button {
      margin-right: 24px;
      color: #111215;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      line-height: 12px;
      span {
          margin-left: 4px;
      }
    }
  }
  .social {
          display: flex;
    align-items: center;
      button {
          width: 20px;
          height: auto;
          margin-right: 24px;
          &:last-child {
              margin-right:0;
          }
          img {
              max-width: 100%;
          }
      }
  }
}
</style>
