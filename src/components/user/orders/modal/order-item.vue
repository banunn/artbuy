<template>
  <div class="order">
    <div class="detail">
      <figure class="img">
        <img :src="order.photoUrl" :alt="order.title">
      </figure>
      <div class="meta">
        <header class="title">{{order.title}}</header>
        <span class="artist">{{'by ' + order.artist}}</span>
        <span class="price">{{order.price | currency}}</span>
      </div>
    </div>
    <div class="ctrl">
      <button class="return btn-secondary">Return</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "order_item",
  props: {
    order: Object
  }
};
</script>

<style lang="scss" scoped>
.order {
  padding: 24px 0 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(#000, 0.1);
  &:first-child {
    padding-top: 8px;
  }
  &:last-child {
      border-bottom: none;
  }
  .detail {
    display: flex;
    align-items: flex-end;
    .img {
      height: 144px;
      width: 144px;
      margin-right: 16px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .meta {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.1px;
      line-height: 18px;
      margin-bottom: 4px;
    }
    .artist {
      font-size: 12px;
      letter-spacing: 0.5px;
      line-height: 12px;
      opacity: 0.8;
      margin-bottom: 10px;
    }
    .price {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.1px;
      line-height: 18px;
    }
  }
  .ctrl {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    .return {
      all: unset;
      height: 24px;
      width: 74px;
      border: 1px solid rgba(17, 18, 21, 0.5);
      border-radius: 2px;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 12px;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      &:active {
          transform: translateY(1px);
      }
    }
  }
}
</style>
