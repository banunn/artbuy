<template>
  <div class="nav-tools">
    <aside v-if="!userLoggedIn" class="nav-tools">

      <div class="action">
              <button @click="openCart" class="icon-btn cart cart-btn">
          <i class="material-icons">shopping_cart</i>
      </button>
        <button @click="login" class="btn-outline">Login</button>
        <button @click="signUp" class="sign-up">Sign Up</button>
      </div>
    </aside>
    <aside v-if="userLoggedIn" class="nav-tools logged">
      <button @click="openCart" class="icon-btn cart-btn">
        <i v-if="cartItems.length" class="badge">{{cartItems.length}}</i>
        <i class="material-icons">shopping_cart</i>
      </button>
      <figure @click="toggleSubMenu" class="user-img">
        <img v-if="user.photoUrl" :src="user.photoUrl" alt>
      </figure>
      <aside v-on-clickaway="subMenuAway" v-if="subMenuOpen" class="user-menu">
          <div class="menu-item">
            <router-link @click.native="toggleSubMenu(false)" :to="{name: 'user dashboard', params: {id: user.uid}}">View My Profile</router-link>
          </div>
          <div class="menu-item">
            <a @click="logout">Log Out</a>
          </div>
      </aside>
    </aside>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: "nav-tools",
  mixins: [ clickaway ],
  data() {
    return {
      subMenuOpen: false,
    }
  },
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
    },
    logout() {
      return this.$store.dispatch('authUserLogOut'),
             this.toggleSubMenu(false);
    },
    openCart() {
      return this.$store.dispatch('showCart');
    },
    toggleSubMenu(arg) {
      if(arg) {
        this.subMenuOpen = arg;
      } else {
        this.subMenuOpen = !this.subMenuOpen;
      }
    },
    subMenuAway() {
      if(!this.subMenuOpen) {
        return;
      } else {
        this.subMenuOpen = false;
      }
    }
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters.userAuth.loggedIn;
    },
    user() {
      return this.$store.getters.userInfo;
    },
    cartItems() {
        return this.$store.getters.userCart.items;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-tools {
  display: flex;
  align-items: center;
  position: relative;
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
    @media(max-width: 1000px) {
      width: 75px;
    }
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

.action {
  display: flex;
  align-items: center;
}

.cart {
  padding:0;
  margin-right: 12px;
  margin-top: -2px;
}
.user-img {
    margin-left: 28px;
    cursor: pointer;
}

.user-menu {
    position: absolute;
    top: 50px;
    right: -24px;
    background: black;
    z-index: 40;
    box-shadow: 0px 10px 10px rgba(#000, .13);

    .menu-item {
      padding: 12px 24px;
      a {
        color:rgba(#fff, .65);
        font-size: 12px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: rgba(#fff,1);
        }
      }
    }
}

.cart-btn {
  position: relative;
  .badge {
    position: absolute;
    top:-3px;
    right:-3px;
    height: 14px;
    width: 14px;
    background: #fff;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #000 !important;
    display: inline-flex;
    box-shadow: 0px 1px 1px rgba(#000,.24);
  }
}
</style>
