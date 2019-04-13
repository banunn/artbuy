<template>
  <transition name="fade">
    <div v-if="modal.open" class="overlay">
      <div class="onboarding-modal">
        <div class="super">
          <img class="logo" src="@/assets/logo-stamp.png" alt>
        </div>
        <header class="pagination">
          <span class="em">{{modal.page}}</span>
          <span>/3</span>
        </header>
        <div class="ob-content">
          <find-content v-if="modal.page === 1"></find-content>
          <buy-content v-if="modal.page === 2"></buy-content>
          <sell-content v-if="modal.page === 3"></sell-content>
        </div>
        <footer class="onboarding-foot">
          <div>
            <button v-show="modal.page != 1" @click="back" class="ob-btn-back"><i class="material-icons">keyboard_arrow_left</i> Back</button>
          </div>
          <div>
            <button @click="forward" class="ob-btn">{{modal.page == 3 ? "Done" : "Next"}}</button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import findContent from "./pages/find";
import buyContent from "./pages/buy";
import sellContent from "./pages/sell";
export default {
  name: "onboarding_modal",
  components: {
    findContent,
    buyContent,
    sellContent
  },
  computed: {
    modal() {
      return this.$store.getters.onboardingStoryModal;
    }
  },
  methods: {
    forward() {
      let page = this.modal.page;
      if (page === 3) {
        this.$store.commit("closeStoryOnboardingModal");
      } else {
        this.$store.commit("openStoryOnboarding", page + 1);
      }
    },
    back() {
      let page = this.modal.page;
      this.$store.commit("openStoryOnboarding", page - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(#111215, 0.5);
  z-index: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.onboarding-modal {
  min-height: 752px;
  width: 904px;
  max-height: calc(100vh - 50px);
  @media(max-width: 1024px) {
  max-width: calc(100vw - 50px);
  }
  border: 1px solid rgba(17, 18, 21, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .super {
    padding: 56px 0 24px 0;
    text-align: center;
    img {
      max-width: 72px;
    }
  }
  .pagination {
    color: rgba(17, 18, 21, 0.3);
    font-size: 15px;
    font-weight: 900;
    line-height: 20px;
    letter-spacing: 4px;
    padding: 22px 70px 5px 70px;
    .em {
      color: #000;
    }
  }
  .ob-content {
    flex: 1;
    padding: 0px 70px 46px 70px;
    overflow-y: auto;
  }
}

.onboarding-foot {
  width: 100%;
  padding: 24px 72px;
  border-top: 1px solid rgba(#000, 0.1);
  display: flex;
  > div {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    &:last-child {
      justify-content: flex-end;
    }
  }
}

.ob-btn-back {
  height: 48px;
  width: 144px;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  color: #000;
font-size: 12px;
  font-weight: 900;
  letter-spacing: 1.2px;
  line-height: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.ob-btn {
  height: 48px;
  width: 144px;
  border: 1px solid rgba(17, 18, 21, 0.3);
  border-radius: 2px;
  background-color: #111215;
  color: #fff;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1.2px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
