<template>
  <div>
    <section class="section-content">
      <div class="bg-detail-check-price" :style="item" v-if="isDesktop()">
        <div class="content-breadcrumb-detail-check">
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
    <div class="shipping-content-detail-price">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <p class="check-tarif">Cek Tarif</p>
            <div class="columns">
              <div class="column">
                <p class="ship-title-detail">Kota Asal</p>
                <input
                  class="input"
                  type="text"
                  placeholder="Masukan alamat kota asal"
                  v-model="checkPrice.check_price.origin"
                />
              </div>
              <div class="column">
                <p class="ship-title-detail">Kota Tujuan</p>
                <input
                  class="input"
                  type="text"
                  placeholder="Masukan alamat kota tujuan"
                  v-model="checkPrice.check_price.destination"
                />
              </div>
              <div class="column">
                <p class="ship-title">Berat Paket</p>
                <input
                  class="input"
                  type="number"
                  placeholder="Masukan berat paket (max.100kg)"
                  min="1"
                  max="100"
                  v-model="checkPrice.check_price.weight"
                />
              </div>
              <div class="level">
                <div class="btn" @click="validatePrice()">
                  <app-red-button title="Cek Tarif"></app-red-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-content">
      <div id="content-pack-card">
        <div
          class="columns"
          v-for="(price , index) in checkPrice.check_price.result"
          v-bind:key="index"
        >
          <div v-if="price.service_type === 'PACKAGE'">
            <div class="column" v-if="price.product ===  'REGPACK' ">
              <div class="pack-card" :style="regpack">
                <div class="bubble-content">
                  <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                  <span class="tooltiptext">Pengiriman reguler</span>
                </div>
                <img src="../../../assets/icon_regpack.png" class="icon-pack" />
                <p
                  class="title-pack"
                  v-if="price.total_normal_tariff < price.total_basic_tariff"
                >Rp. {{price.total_basic_tariff}}</p>
                <p
                  class="title-pack"
                  v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                >Rp. {{price.total_normal_tariff}}</p>
                <p class="subtitle-pack">{{price.ETD}} hari kerja</p>
              </div>
            </div>
            <div class="column" v-if="price.product === 'ONEPACK'">
              <div class="pack-card" :style="onepack">
                <div class="bubble-content">
                  <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                  <span class="tooltiptext">Pengiriman 1 x 24 jam</span>
                </div>
                <img src="../../../assets/icon_onepack.png" class="icon-pack" />
                <p
                  class="title-pack"
                  v-if="price.total_normal_tariff < price.total_basic_tariff"
                >Rp. {{price.total_basic_tariff}}</p>
                <p
                  class="title-pack"
                  v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                >Rp. {{price.total_normal_tariff}}</p>
                <p class="subtitle-pack">{{price.ETD}} hari sampai</p>
              </div>
            </div>
            <div class="column" v-if="price.product === 'LANDPACK'">
              <div class="pack-card" :style="landpack">
                <div class="bubble-content">
                  <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                  <span class="tooltiptext">Pengiriman pake kereta</span>
                </div>
                <img src="../../../assets/icon_landpack.png" class="icon-pack" />
                <p
                  class="title-pack"
                  v-if="price.total_normal_tariff < price.total_basic_tariff"
                >Rp. {{price.total_basic_tariff}}</p>
                <p
                  class="title-pack"
                  v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                >Rp. {{price.total_normal_tariff}}</p>
                <p class="subtitle-pack">{{price.ETD}} hari kerja</p>
              </div>
            </div>
            <div class="column" v-if="price.product === 'INTERPACK'">
              <div class="pack-card" :style="interpack">
                <div class="bubble-content">
                  <img src="../../../assets/bubble_question.png" class="bubble-icon" />
                  <span class="tooltiptext">Pengiriman luar negeri</span>
                </div>
                <img src="../../../assets/icon_interpack.png" class="icon-pack" />
                <p
                  class="title-pack"
                  v-if="price.total_normal_tariff < price.total_basic_tariff"
                >Rp. {{price.total_basic_tariff}}</p>
                <p
                  class="title-pack"
                  v-else-if="price.total_normal_tariff > price.total_basic_tariff"
                >Rp. {{price.total_normal_tariff}}</p>
                <p class="subtitle-pack">{{price.ETD}} Minggu</p>
              </div>
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
import { mapActions } from "vuex";
import Border from "../../../components/border/Border";
import Footer from "../../../components/footer/Footer";
import Bottom from "../../../components/bottom/Bottom";
import RedButton from "../../../components/button/RedButton";
export default {
  name: "detail-shipment-page",
  components: {
    "app-border": Border,
    "app-footer": Footer,
    "app-bottom": Bottom,
    "app-red-button": RedButton
  },
  props: ["checkPrice"],
  data() {
    return {
      showRegpack: false,
      showOnepack: false,
      showLandpack: false,
      showInterpack: false,
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
      },
      detailOrigin: "",
      detailDestination: "",
      detailWeight: null
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
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    validateProduct() {
      this.$store.getters.check_price.result.map(key => {
        if (key.service_type === "PACKAGE") {
          if (key.product === "LANDPACK") {
            return (this.showLandpack = true);
          } else if (key.product === "REGPACK") {
            return (this.showRegpack = true);
          } else if (key.product === "ONEPACK") {
            return (this.showOnepack = true);
          } else if (key.product === "INTERPACK") {
            return (this.interpack = true);
          } else {
            return;
          }
        }
      });
    },
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
    },
    getTariff() {
      const payload = {
        origin: this.detailOrigin,
        destination: this.detailDestination,
        weight: Number(this.detailWeight)
      };
      this.detailCheckPrice(payload);
    },
    ...mapActions(["detailCheckPrice"])
  }
};
</script>

<style scoped>
@import "./detailcheckprice.css";
</style>