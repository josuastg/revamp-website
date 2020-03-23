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
        <div class="level">
          <div class="level-left">
            <app-mobile-logo></app-mobile-logo>
            <app-text-download></app-text-download>
          </div>
          <div class="level-right">
            <app-track-card></app-track-card>
          </div>
        </div>
      </section>
      <section class="section">
        <app-cloud-logo></app-cloud-logo>
      </section>
      <section class="section">
        <div class="level">
          <div class="level-left">
            <p class="help-title">Program</p>
          </div>
          <!-- <div class="level-right"> -->
          <p class="sub">See All Promo</p>
          <!-- </div> -->
        </div>

        <carousel
          :perPageCustom="[[360, 1], [1024, 3]]"
          :autoplay="true"
          :scrollPerPage="true"
          paginationActiveColor="#d11f40"
        >
          <slide>
            <app-carousel></app-carousel>
          </slide>
          <slide>
            <app-carousel></app-carousel>
          </slide>
          <slide>
            <app-carousel></app-carousel>
          </slide>
          <slide>
            <app-carousel></app-carousel>
          </slide>
        </carousel>
      </section>
      <section class="section">
        <p class="help-title">Why Us ?</p>
        <app-reason-card></app-reason-card>
      </section>
      <section class="section">
        <app-border></app-border>
      </section>
      <section class="section">
        <app-footer></app-footer>
      </section>
      <app-bottom></app-bottom>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
import MobileLogo from "./MobileLogo";
import { Carousel, Slide } from "vue-carousel";
import PromoCarousel from "./PromoCarousel";
import ShippingCard from "./ShippingCard";
import Bottom from "./Bottom";
import Border from "./Border";
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
    "app-footer": Footer,
    "app-carousel": PromoCarousel,
    "app-border": Border,
    "app-bottom": Bottom,
    carousel: Carousel,
    slide: Slide
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

.help-title {
  object-fit: contain;
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.sub {
  object-fit: contain;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  margin-left: 20px;
  margin-right: 20px;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d11f40;
}
</style>