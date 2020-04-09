<template>
  <div>
    <section class="section-content">
      <div class="bg-detail-check-price" :style="item" v-if="isDesktop()">
        <div class="content-breadcrumb">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">
                  <img src="../../../assets/home.png" class="icon-home" />
                </a>
              </li>
              <li class="is-active">
                <a href="/tariff" aria-current="page" class="route-breadcrumb">Tarif</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="bg-detail-check-price-mobile" :style="secondItem" v-if="isMobile()"></div>
    </section>
    <app-check-price-card></app-check-price-card>
    <section class="section-content">
      <div class="content-pack-card">
        <div class="columns">
          <div class="column">
            <div class="pack-card" :style="regpack">
              <div class="bubble-content">
                <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                <span class="tooltiptext">Pengiriman reguler</span>
              </div>
              <img src="../../../assets/icon_regpack.png" class="icon-pack" />
              <p class="title-pack">Rp. 11.000</p>
              <p class="subtitle-pack">3 - 4 hari kerja</p>
            </div>
          </div>
          <div class="column">
            <div class="pack-card" :style="onepack">
              <div class="bubble-content">
                <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                <span class="tooltiptext">Pengiriman 1 x 24 jam</span>
              </div>
              <img src="../../../assets/icon_onepack.png" class="icon-pack" />
              <p class="title-pack">Rp. 20.000</p>
              <p class="subtitle-pack">1 hari sampai</p>
            </div>
          </div>
          <div class="column">
            <div class="pack-card" :style="landpack">
              <div class="bubble-content">
                <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                <span class="tooltiptext">Pengiriman pake kereta</span>
              </div>
              <img src="../../../assets/icon_landpack.png" class="icon-pack" />
              <p class="title-pack">Rp. 10.000</p>
              <p class="subtitle-pack">3 - 4 hari kerja</p>
            </div>
          </div>
          <div class="column">
            <div class="pack-card" :style="interpack">
              <div class="bubble-content">
                <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                <span class="tooltiptext">Pengiriman luar negeri</span>
              </div>
              <img src="../../../assets/icon_interpack.png" class="icon-pack" />
              <p class="title-pack">Rp. 84.000</p>
              <p class="subtitle-pack">1 Minggu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-border></app-border>

    <section class="section">
      <app-footer></app-footer>
    </section>
    <app-bottom></app-bottom>
  </div>
</template>

<script>
import CheckPriceCard from "./check-price-card/CheckPriceCard";
import Border from "../../../components/border/Border";
import Footer from "../../../components/footer/Footer";
import Bottom from "../../../components/bottom/Bottom";
export default {
  name: "detail-shipment-page",
  components: {
    "app-check-price-card": CheckPriceCard,
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom
  },
  data() {
    return {
      item: {
        backgroundImage: `url(${require("../../../assets/bg_detail_check_price.png")})`
      },
      secondItem: {
        backgroundImage: `url(${require("../../../assets/bg_detail_check_price_mobile.png")})`
      },
      regpack: {
        backgroundImage: `url(${require("../../../assets/regpack.png")})`
      },
      onepack: {
        backgroundImage: `url(${require("../../../assets/onepack.png")})`
      },
      landpack: {
        backgroundImage: `url(${require("../../../assets/landpack.png")})`
      },
      interpack: {
        backgroundImage: `url(${require("../../../assets/interpack.png")})`
      }
    };
  },
  beforeMount() {
    console.log("mounted");
    this.focusElement();
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
    focusElement() {
      const container = document.getElementById("content-pack-card");
      if (container) {
        container.scrollTo(0, container.scrollHeight);
      }
    },
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