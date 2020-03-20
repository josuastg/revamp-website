<template>
  <div>
    <section class="section">
      <div :style="item" class="bg-home-second">
        <app-title></app-title>
        <app-shipping-card></app-shipping-card>
      </div>
    </section>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column">
            <app-mobile-logo></app-mobile-logo>
          </div>
          <div class="column">
            <app-text-download></app-text-download>
          </div>
          <div class="column">
            <app-track-card></app-track-card>
          </div>
        </div>
      </section>
      <section class="section">
        <app-cloud-logo></app-cloud-logo>
      </section>
      <section class="section">
        <div class="track-section">
          <app-reason-card></app-reason-card>
        </div>
      </section>
      <section class="section">
        <div>
          <app-footer></app-footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import MobileLogo from "./MobileLogo";
import ShippingCard from "./ShippingCard";
import TextDownload from "./TextDownload";
import TrackCard from "./TrackCard";
import ReasonCard from "./ReasonCard";
import CloudLogo from "./CloudLogo";
import Footer from "./Footer";
export default {
  name: "home-page",
  components: {
    "app-title": Title,
    "app-shipping-card": ShippingCard,
    "app-mobile-logo": MobileLogo,
    "app-text-download": TextDownload,
    "app-track-card": TrackCard,
    "app-cloud-logo": CloudLogo,
    "app-reason-card": ReasonCard,
    "app-footer": Footer
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

.track-section {
  margin-top: 80px;
}
</style>