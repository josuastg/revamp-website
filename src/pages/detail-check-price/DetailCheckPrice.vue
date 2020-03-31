<template>
  <div>
    <section class="section">
      <div class="bg-detail-check-price" :style="item" v-if="isDesktop()"></div>
      <div class="bg-detail-check-price-mobile" :style="secondItem" v-if="isMobile()"></div>
    </section>
    <app-check-price-card></app-check-price-card>
  </div>
</template>

<script>
import CheckPriceCard from "../home/check-price-card/CheckPriceCard";
export default {
  name: "detail-shipment-page",
  components: {
    "app-check-price-card": CheckPriceCard
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/bg_detail_check_price.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../assets/bg_detail_check_price_mobile.png")})`
      }
    };
  },
  created() {
    window.addEventListener("resize", this.isMobile);
    this.isMobile();
    this.isDesktop();
  },
  destroyed() {
    window.addEventListener("resize", this.isMobile);
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    isDesktop() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
@import "./detailcheckprice.css";
</style>