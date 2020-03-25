<template>
  <div>
    <section class="section">
      <div :style="item" class="bg-home-second"></div>
    </section>
    <app-title>
      <div class="button-group">
        <div class="columns">
          <div class="column">
            <app-check-price-button title="Cek Tarif" href="#shipping-card"></app-check-price-button>
          </div>
          <div class="column">
            <app-track-button title="Lacak" href="#track-card"></app-track-button>
          </div>
        </div>
      </div>
    </app-title>
    <div class="second-content">
      <div class="container">
        <section class="section" id="shipping-card">
          <app-shipping-card></app-shipping-card>
        </section>
        <section class="section" id="track-card">
          <div class="level">
            <div class="level-left">
              <app-mobile-logo v-if="isDesktop()"></app-mobile-logo>
              <app-text-download v-if="isDesktop()"></app-text-download>
            </div>
            <div class="level-right">
              <app-track-card>
                <app-mobile-logo v-if="isMobile()"></app-mobile-logo>
                <app-text-download v-if="isMobile()"></app-text-download>
              </app-track-card>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="level">
            <app-cloud-logo></app-cloud-logo>
            <app-airplane-logo></app-airplane-logo>
          </div>
        </section>
        <section class="section">
          <div class="level">
            <div class="level-left">
              <p id="help-title" v-if="isDesktop()">Promo</p>
              <div class="promo-title-mobile" v-if="isMobile()">
                <p id="help-title">Promo</p>
                <p class="sub">Lihat Semua</p>
              </div>
            </div>
            <div class="level-right">
              <p class="sub" v-if="isDesktop()">Lihat Semua</p>
            </div>
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
          <p id="help-title">Mengapa Kami ?</p>
          <app-reason-card></app-reason-card>
        </section>
      </div>
      <app-border></app-border>
      <section class="section">
        <section class="section">
          <app-footer></app-footer>
        </section>
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
import AirplaneLogo from "./AirplaneLogo";
import CloudLogo from "./CloudLogo";
import Footer from "./Footer";
import RedButton from "../../components/RedButton";
import WhiteButton from "../../components/WhiteButton";
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
    "app-check-price-button": WhiteButton,
    "app-footer": Footer,
    "app-carousel": PromoCarousel,
    "app-border": Border,
    "app-bottom": Bottom,
    "app-track-button": RedButton,
    "app-airplane-logo": AirplaneLogo,
    carousel: Carousel,
    slide: Slide
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../assets/bg_crop_second.png")})`
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
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@media (min-width: 360px) {
  .bg-home-second {
    background-size: cover;
    object-fit: contain;
    display: flex;
    height: 200px;
    background-position: center;
    margin-top: 20px;
    width: 100%;
    background-repeat: no-repeat;
    position: relative;
  }
}

.airplane {
  width: 300px;
  height: 300px;
}

.promo-title-mobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (min-width: 600px) {
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
    position: absolute;
    height: 800px;
  }
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

#help-title {
  object-fit: contain;
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans-serif;

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
  font-family: "Poppins", sans-serif;
  font-stretch: normal;
  margin-left: 20px;
  margin-right: 20px;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d11f40;
}

.button-group {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
@media (min-width: 600px) {
  .second-content {
    margin-top: 340px;
  }
}
</style>