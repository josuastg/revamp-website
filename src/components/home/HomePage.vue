<template>
  <div>
    <section class="section">
      <div :style="item" class="bg-home-second">
        <app-title></app-title>
        <app-shipping-card></app-shipping-card>
      </div>
    </section>
    <app-mobile-logo></app-mobile-logo>
  </div>
</template>

<script>
import Title from "./Title";
import MobileLogo from "./MobileLogo";
import ShippingCard from "./ShippingCard";
export default {
  name: "home-page",
  components: {
    "app-title": Title,
    "app-shipping-card": ShippingCard,
    "app-mobile-logo": MobileLogo
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/bg_crop_second.png")})`
      }
    };
  }
};
</script>

<style>
.bg-home-second {
  background-size: cover;
  background-position: center;
  object-fit: contain;
  justify-content: auto;
  display: flex;
  flex-direction: column;
  height: 714.5px;
  width: 100%;
  background-repeat: no-repeat;
  position: relative;
  height: 800px;
}
.bg-home-second:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom, rgb(255, 0, 0, 0), #ffffff);
}
</style>