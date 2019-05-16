<template>
  <div class="onboarding-plans">
    <div class="plan-head">
      <h1>We’ve got just the plan for you</h1>
      <p>Choose a subsciption and you’ll be up and selling in no time. You can upgrade, downgrade, or cancel anytime – no strings attached.</p>
    </div>
    <div class="list">
      <div @click="selectPlan(t)" v-for="(t, index) in types" :key="index" class="type">
        <header>{{t.name}}</header>
        <div class="type-wrap">
          <section class="type-body">
            <ul>
              <li v-for="(b, index) in t.benefits" :key="index">{{b}}</li>
            </ul>
          </section>
          <footer>
            <div class="price">
              <h1>{{'$' + t.price}}</h1>
              <div class="freq">
                <span>per</span>
                <span>{{t.frequency}}</span>
              </div>
            </div>
            <div v-if="selectedPlan && t.id === selectedPlan.id" class="is-selected">
              <i class="material-icons">check_circle_outline</i>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <div class="plan-foot">
      <div class="left">
        <button @click="back" class="btn text-btn">
          <i class="material-icons">chevron_left</i>Back
        </button>
      </div>
      <div class="right">
        <button @click="skip" class="btn btn-secondary">Skip for Now</button>
        <button @click="next" class="btn btn-primary">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "onboarding-plans",
  data() {
    return {
      selectedPlan: null
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
    skip() {
      this.selectedPlan = null;
      this.$router.push("/");
    },
    back() {
      this.selectedPlan = null;
      this.$router.go(-1);
    },
    next() {
      this.$router.push({ name: "onboarding payment" });
    }
  },
  computed: {
    types() {
      return this.$store.state.subscription.subscriptions;
    }
  }
};
</script>

<style lang="scss" scoped>
.onboarding-plans {
  border: 1px solid rgba(17, 18, 21, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
  max-width: 905px;
  margin: 72px auto;
}

.plan-head {
  padding: 50px 88px 0 88px;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 38px;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
}

.plan-foot {
  display: flex;
  justify-content: space-between;
  padding: 24px 72px 24px 72px;
  margin-top: 64px;
  border-top: 1px solid #e8eaeb;
  @media(max-width: 1000px) {
    padding: 12px 36px 12px 0px !important;
  }
  > div {
    display: flex;
    align-items: center;
  }

  button {
    height: 48px;
    border-width: 1px;
    border-style: solid;
    border-color: #111215;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.btn-primary {
      width: 144px;
      background: #111215;
      color: #fff;
    }
    &.btn-secondary {
      width: 144px;
      background: none;
      margin-right: 8px;
    }
    &.text-btn {
      background: none;
      border: none;
      text-transform: uppercase;
    }
  }
}
.list {
  display: flex;
  padding: 64px 72px 0;
  @media(max-width: 1000px) {
    flex-direction: column;
    padding: 24px 36px 0;
  }
  header {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2.67px;
    line-height: 22px;
    text-align: center;
    padding: 20px 0;
    background: #000;
    text-transform: uppercase;
  }
  .type {
    width: 248px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: #ffffff;
    overflow: hidden;
    cursor: pointer;
    @media(max-width: 1000px) {
      margin-right: 0;
      margin-bottom: 16px;
      width: 100%;
    }
    &:last-child {
      margin-right: 0;
    }
    .type-wrap {
      border: 1px solid rgba(17, 18, 21, 0.2);
      border-top: none;
    }
    .type-body {
      ul {
        margin: 0;
        padding: 18px 0;
        margin: 0 18px;
        li {
          margin-left: 18px;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 0.5px;
          line-height: 16px;
          margin-bottom: 8px;
        }
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      padding: 18px;
      .price {
        display: flex;
        align-items: center;
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 0.17px;
          line-height: 28px;
        }
        .freq {
          margin-left: 8px;
          padding-left: 8px;
          border-left: 1px solid rgba(17, 18, 21, 0.2);
          display: flex;
          flex-direction: column;
          opacity: 0.4;
          color: #111215;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.5px;
          line-height: 9px;
        }
      }
    }
  }
}

.plan-foot {
  display: flex;
  justify-content: space-between;
  padding: 24px 72px 24px 72px;
  margin-top: 64px;
  border-top: 1px solid #e8eaeb;
  > div {
    display: flex;
    align-items: center;
  }

  button {
    height: 48px;
    border-width: 1px;
    border-style: solid;
    border-color: #111215;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.btn-primary {
      width: 144px;
      background: #111215;
      color: #fff;
    }
    &.btn-secondary {
      width: 144px;
      background: none;
      margin-right: 8px;
    }
    &.text-btn {
      background: none;
      border: none;
      text-transform: uppercase;
    }
  }
}
</style>
