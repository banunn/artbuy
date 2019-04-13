<template>
  <div class="feed-input">
    <div class="icon">
      <figure class="user-img">
        <img :src="user.photoUrl" alt>
      </figure>
    </div>
    <div class="fi-content">
      <textarea v-on:keyup.enter="post" v-model="text" name placeholder="Share your thoughts on this…"></textarea>
      <div class="tools">
        <div class="ctrl">
          <button class="btn-text">
            <i class="material-icons">add_photo_alternate</i> Add Image
          </button>
          <button class="btn-text">
            <i class="material-icons">link</i> Add Link
          </button>
        </div>
        <button @click="post" :class="{'disabled': !text.length}" class="btn-secondary">Post Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "feed-input",
  data() {
      return {
          text: ''
      }
  },
  computed: {
    user() {
      return this.$store.getters.userInfo;
    }
  },
  methods: {
      post() {
          alert('Posted! ' + this.text);
          this.text = new String();
      }
  }
};
</script>

<style lang="scss" scoped>
.feed-input {
  padding: 24px 16px 16px 24px;
  background: #fff;
  margin-bottom: 16px;
  border: 1px solid rgba(17, 18, 21, 0.1);
  border-radius: 2px;
  display: flex;
  .icon {
    margin-right: 6px;
  }
  .fi-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    textarea {
      -webkit-appearance: none;
      width: 100%;
      display: block;
      background: #fff;
      border: none;
      min-height: 68px;

      color: #000000;	font-size: 14px;	font-weight: 500;	line-height: 24px;
      &::placeholder {
          opacity: 0.4;	
      }
    }
    .tools {
      border-top: 1px solid rgba(#000, 0.1);
      padding-top: 16px;
      display: flex;
      > div {
        display: flex;
        flex: 1;
        &:first-child {
          justify-content: flex-start;
        }
        &:last-child {
          justify-content: flex-end;
        }
      }
    }
  }
}

.btn-text {
  background: none;
  border: none;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  color: #111215;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.4px;
  line-height: 16px;
  i {
    margin-right: 4px;
  }
}

.btn-secondary {
  height: 32px;
  width: 120px;
  border: 1px solid rgba(17, 18, 21, 0.3);
  border-radius: 2px;
  background: #fff;
  color: #111215;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.4px;
  line-height: 16px;
  transition: opacity .3s ease;
  &.disabled {
      opacity: .3;
      pointer-events: none;
      user-select: none;
  }
}
</style>
