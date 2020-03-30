<template>
  <div class="content-carousel">
    <div class="promo-card" :style="item">
      <div class="subtract-card" :style="secondItem">
        <div class="inside-content">
          <div class="left-content">
            <p class="promo-title">PROMO SHOK</p>
            <p class="discount">50%</p>
          </div>
          <div class="right-content">
            <p class="promo-title">
              <b>Ongkir</b>
              <br />minimal
              <br />50kg
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/card.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../assets/subtract.png")})`
      }
    };
  }
};
</script>
<style scoped>
@import "./promocarousel.css";
</style>