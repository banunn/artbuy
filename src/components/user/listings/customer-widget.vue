<template>
  <art-widget :title="'Customer'">
    <template slot="body">
      <div class="c-head section">
        <figure class="user-img">
          <img src alt>
        </figure>
        <div class="detail">
          <h3>Adelaide Carroll</h3>
          <a href="mailto:adelaide.carroll@gmail.com" class="email">adelaide.carroll@gmail.com</a>
        </div>
      </div>
      <div class="address section">
        <header>Billing Address</header>
        <address>
          <span>Adelaide Carroll</span>
          <span>82920 E. Sunset Drive</span>
          <span>Los Angeles, CA 90017</span>
          <span>United States</span>
        </address>
      </div>
      <div class="address section">
        <header>Shipping Address</header>
        <!-- billing address here or same -->
        <span class="em">Same as shipping address</span>
      </div>
      <div class="phone section">
        <header>Phone Number</header>
        <span>+1 (714) 314-6945</span>
      </div>
            <div class="total section">
        <header>Total Charges</header>
        <div class="total-grid">
            <div><span>Subtotal</span><span>$3,800.00</span></div>
            <div><span>Shipping</span><span>$102.49</span></div>
            <div><span>Taxes</span><span>$379.53</span></div>
            <div class="bold"><span>TOTAL</span><span>$4,282.02</span></div>
        </div>
      </div>
    </template>
  </art-widget>
</template>

<script>
import artWidget from "@/components/general/widget";
export default {
  name: "customer-widget",
  components: {
    artWidget
  }
};
</script>

<style lang="scss" scoped>

.c-head {
    display: flex;
    margin-top: 6px;
    align-items: center;
    .detail {
        margin-top: 3px;
        margin-left: 10px;
        h3 {
            margin:0;
            color: #111215;	font-size: 13px;	font-weight: bold;	line-height: 16px;
        }
        .email {
                color: #111215;font-size: 12px;	letter-spacing: 0.5px;	line-height: 12px;
                text-decoration: underline;
        }
    }
}
.section {
  padding-bottom: 17px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(#000, 0.1);
    color: #111215;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 20px;
    &:last-child {
        border: none;
        margin-bottom:0;
        padding-bottom:0;
    }
  header {
    opacity: 0.6;
    color: #111215;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.42px;
    line-height: 12px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  address {
    display: flex;
    flex-direction: column;
    font-style: normal;
  }
  .em {
      font-style: italic;
  }

  .total-grid {
      > div {
                display: flex;
      justify-content: space-between;
      padding-bottom: 4px;
      margin-bottom: 4px;
      }
  }
}
</style>
