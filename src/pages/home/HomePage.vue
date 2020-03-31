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
          <app-check-price-card></app-check-price-card>
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
import Title from "./title/Title";
import MobileLogo from "./mobile/MobileLogo";
import { Carousel, Slide } from "vue-carousel";
import PromoCarousel from "./promo-carousel/PromoCarousel";
import CheckPriceCard from "./check-price-card/CheckPriceCard";
import Bottom from "../../components/bottom/Bottom";
import Border from "../../components/border/Border";
import TextDownload from "./text-download/TextDownload";
import TrackCard from "./track-claim-card/TrackClaimCard";
import ReasonCard from "./reason-card/ReasonCard";
import Airplane from "./airplane/Airplane";
import Cloud from "./cloud/Cloud";
import Footer from "../../components/footer/Footer";
import RedButton from "../../components/button/RedButton";
import WhiteButton from "../../components/button/WhiteButton";
export default {
  name: "home-page",
  components: {
    "app-title": Title,
    "app-check-price-card": CheckPriceCard,
    "app-mobile-logo": MobileLogo,
    "app-text-download": TextDownload,
    "app-track-card": TrackCard,
    "app-cloud-logo": Cloud,
    "app-reason-card": ReasonCard,
    "app-check-price-button": WhiteButton,
    "app-footer": Footer,
    "app-carousel": PromoCarousel,
    "app-border": Border,
    "app-bottom": Bottom,
    "app-track-button": RedButton,
    "app-airplane-logo": Airplane,
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
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
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
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
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
@import "./homepage.css";
</style>