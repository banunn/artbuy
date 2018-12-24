<template>
  <div class="nav-tools">
    <aside v-if="!userLoggedIn" class="nav-tools">
      <nav>
        <a href="#" class="link">Find</a>
        <a href="#" class="link">Buy</a>
        <a href class="link">Sell</a>
      </nav>
      <div class="action">
        <button @click="login" class="btn-outline">Login</button>
        <button @click="signUp" class="sign-up">Sign Up</button>
      </div>
    </aside>
    <aside v-if="userLoggedIn" class="nav-tools logged">
      <button class="icon-btn">
        <i class="material-icons">shopping_cart</i>
      </button>
      <button class="icon-btn">
        <i class="material-icons">notifications</i>
      </button>
      <figure @click="goToUserProfile" class="user-img">
        <img v-if="user.photoUrl" :src="user.photoUrl" alt>
      </figure>
    </aside>
  </div>
</template>

<script>
export default {
  name: "nav-tools",
  methods: {
    login() {
      this.$store.dispatch("authSignIn");
    },
    signUp() {
      this.$store.dispatch("authSignUp");
    },
    goToUserProfile() {
      var uid = this.user.uid;
      this.$router.push({name: 'user dashboard', params: {id: uid}});
    }
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters.userAuth.loggedIn;
    },
    user() {
      return this.$store.getters.userInfo;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-tools {
  display: flex;
  align-items: center;
  nav {
    margin-right: 20px;
    .link {
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 2px;
      text-align: center;
      text-shadow: 0 1px 1px 0 rgba(17, 18, 21, 0.5);
      text-transform: uppercase;
      text-decoration: none;
      padding: 6px 20px;
    }
  }
  button {
    height: 24px;
    width: 100px;
    border-width: 2px;
    border-style: solid;
    border-color: inherit;
    background: inherit;
    color: inherit;
    border-radius: 2px;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 0.9px;
    line-height: 12px;
    text-align: center;
    &.btn-outline {
      border-color: #fff;
      color: #fff;
    }
    &.sign-up {
      margin-left: 8px;
      color: #000;
      background: #fff;
      border-color: #fff;
    }
    &.icon-btn {
      padding: 0;
      width: inherit;
      margin-left: 28px;
      i {
        color: #fff;
      }
    }
  }
}
.user-img {
    margin-left: 28px;
    cursor: pointer;
}
</style>
